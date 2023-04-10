import css from './Filter.module.css'; // стилізація
import PropTypes from 'prop-types'; // типізація

// Компонент фільтру для пошуку контактів за ім'ям.
// filter - містить введений текст фільтру.
// onChangeInput - функція, яка викликається при зміні значення фільтру.
export const Filter = ({ filter, onChangeInput }) => {
  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={onChangeInput} // при зміні значення поля - виклик функції onChangeInput
          value={filter} // початкове значення, яке зберігається в filter
          type="text"
          name="filter"
        />
      </label>
    </>
  );
}

// типізація
Filter.propTypes = {
  filter: PropTypes.string.isRequired, // рядок
  onChangeInput: PropTypes.func.isRequired // функція
};

// Діма Берестень
