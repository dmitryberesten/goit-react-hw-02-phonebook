import { Component } from 'react';
import { nanoid } from 'nanoid'; // пакет для генерації ідентифікаторів
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'; // стилізація

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // обробка події зміни введення в поле вводу (input)
  onChangeInput = evt => {
    // при зміні вмісту поля вводу, метод отримує name та value
    const { name, value } = evt.currentTarget;

    // встановлюємо новий стан компонента
    this.setState({ [name]: value });
  };

  // додавання нового контакту у список контактів
  addContact = ({ name, number }) => {
    // перевірка, чи існує вже контакт з таким іменем
    if (
      this.state.contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      // якщо контакт існує, то показувати повідомлення
      alert(`${name} is already in contacts`);
    } else {
      // додавання нового контакту до списку контактів
      this.setState(oldState => {
        const list = [...oldState.contacts]; // копія всіх елементів списку контактів зі старого стану

        // додавання нового об'єкту контакту до масиву list
        list.push({
          id: nanoid(), //генерація id
          name: name,
          number: number,
        });

        return { contacts: list };
      });
    }
  };

  // фільтрація списку контактів за введеним користувачем рядком пошуку
  filter = () => {
    const { contacts, filter } = this.state;

    // новий масив, який містить всі контакти, що містять рядок пошуку
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    // повернення нового масиву, який містить тільки ті контакти, які відповідають рядку пошуку
    return filteredContacts;
  };

  // отримання параметру id, який потрібно видалити зі списку контактів
  delContact = id => {

    // отримання поточного списку контактів зі стану компонента
    const { contacts } = this.state;

    // Новий масив, який містить всі контакти, окрім того, що має ідентифікатор
    const filtred = contacts.filter(item => item.id !== id);

    // оновлення властивості contacts
    this.setState({ contacts: filtred });
  }

  render() {
    return (
      <div className={css.conteiner}>
        <h1>Phonebook</h1>

        {/* форма для додавання нового контакту */}
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>

        {/* фільтр, який зберігається в стані + функція, яка оновлює значення фільтра */}
        <Filter filter={this.state.filter} onChangeInput={this.onChangeInput} />

        {/* функція для видалення контакту + масив контактів, який фільтрується залежно від значення фільтра */}
        <ContactList delContact={this.delContact} contacts={this.filter()} />
      </div>
    );
  }
}

// Діма Берестень
