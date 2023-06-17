import css from './ContactsList.module.css';

import { useState } from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsItem from '../ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items } = useSelector(getContacts);
  // const activeTypes = useSelector(getActiveTypes);
  const { filter } = useSelector(getFilter);

  const onModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const filteredContacts = items.filter(c => activeTypes.includes(c.type.name));
  return (
    <ul className={css.contactsList}>
      <button className={css.addBtn} type="button" onClick={onModalToggle}>
        ADD
      </button>
      {isModalOpen && <ContactsForm close={onModalToggle} />}
      {items &&
        items
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => <ContactsItem key={contact.id} contact={contact} />)}
    </ul>
  );
};

export default ContactsList;
