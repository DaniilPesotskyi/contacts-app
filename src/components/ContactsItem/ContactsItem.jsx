import css from './ContactsItem.module.css';

const ContactsItem = ({ contact }) => {
  const { id, name, number, type } = contact;

  return (
    <div className={css.contactItem}>
      <div className={css.contactContentWrap}>
        <div className={css.contactInfoWrap}>
          <p className={css.contactName}>{name}</p>
          <p className={css.contactPhone}>{number}</p>
        </div>
        <div className={css.contactActionsWrap}>
          <button className={css.contactDeleteBtn}>Del</button>
          <button className={css.contactCallBtn}>Call</button>
        </div>
      </div>
      <div className={css.contactType}></div>
    </div>
  );
};

export default ContactsItem;
