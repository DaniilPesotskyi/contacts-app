import css from './ContactsForm.module.css';
import { useState } from 'react';

const ContactsForm = ({close}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [type, setType] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const types = ['Personal', 'Work', 'Medicine', 'Gov'];

  const onInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
  };
  
  const handleOptionClick = e => {
    setIsDropdownOpen(false)
    setType(e.currentTarget.textContent)
  }

  return (
    <div className={css.backdrop}>
      <div className={css.modalWindow}>
        <button className={css.closeBtn} type="button" onClick={close}></button>
        <p className={css.formTitle}>New Contact</p>
        <form className={css.form} onSubmit={onFormSubmit} autoComplete="off">
          <div className={css.inputField}>
            <input
              className={css.input}
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onInputChange}
              placeholder="."
              required
            />
            <label className={css.label} htmlFor="name">
              Name
            </label>
          </div>
          <div className={css.inputField}>
            <input
              className={css.input}
              type="tel"
              name="number"
              id="number"
              value={number}
              onChange={onInputChange}
              placeholder="."
              required
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
          </div>
          <div className={css.typeInputField}>
            <p className={css.typeLabel}>Type</p>
            <div className={css.typeInput} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <p className={css.typeValue}>{type}</p>
              {isDropdownOpen && (
                <ul className={css.dropdownMenu}>
                  {types.map(i => (
                    <li className={css.dropdownMenuItem} onClick={handleOptionClick}>{i}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button className={css.submitButton} type="submit">
            ADD CONTACT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactsForm;
