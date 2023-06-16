import { useState } from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsItem from '../ContactsItem/ContactsItem';

const ContactsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalToggle = () => {
        setIsModalOpen(!isModalOpen)
    }

  const testContact = {
    id: 1,
    name: 'Daniil Pesotskyi',
    number: '+380968936851',
    type: 'stared',
  }

  return (
    <>
      <button type="button" onClick={onModalToggle}>OPEN MODAL WITH FORM</button>
      {isModalOpen && <ContactsForm close={onModalToggle}/>}
      <ContactsItem contact={testContact}/>
    </>
  );
};

export default ContactsList;
