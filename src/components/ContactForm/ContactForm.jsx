import { Component } from 'react'; // імпорт базового класу React Component
import css from './ContactForm.module.css'; // стилізація
import PropTypes from 'prop-types'; // типізація

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // очищення вмісту форми
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  // оновлення стану компонента
  onChangeInput = evt => {
    const { name, value } = evt.currentTarget; // розпаковка значення name та value з об'єкту події
    this.setState({ [name]: value }); // оновлення значення властивості з назвою, яка зберігається в змінній name
  };

  render() {
    return (
      <>
        <form
          className={css.formstyle}
          onSubmit={evt => {
            evt.preventDefault(); // уникнення перезавантаження сторінки

            // Передача стану компонента до методу addContact,
            // що передається як пропс (props) з батьківського компоненту.
            this.props.addContact(this.state);
            this.resetForm(); // очищення вмісту форми
          }}
        >
          <label className={css.label}>
            Name
            <br />
            <input
              className={css.input}
              onChange={this.onChangeInput} // обробник події, який буде викликаний при зміні значення поля введення
              value={this.state.name} // встановлення поточного значення поля введення, яке зберігається в стані компоненту
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label htmlFor="">
            Number
            <br />
            <input
              className={css.input}
              onChange={this.onChangeInput} // обробник події, який буде викликаний при зміні значення поля введення
              value={this.state.number} // встановлення поточного значення поля введення, яке зберігається в стані компоненту
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

// типізація
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired, // функція
}

// Діма Берестень

