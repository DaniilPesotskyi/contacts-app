import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsItem from '../ContactsItem/ContactsItem';

const testContact = {
  id: 1,
  name: 'Daniil Pesotskyi',
  number: '+380968936851',
  type: 'stared',
}

function App() {
  return (
    <>
      <ContactsItem contact={testContact}/>
      <ContactsForm />
    </>
  );
}

export default App;
