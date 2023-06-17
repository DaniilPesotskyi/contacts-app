import { useSelector } from 'react-redux';
import css from './TypesFilter.module.css';
import { getContactTypes } from '../../redux/selectors';
import TypesFilterItem from './TypesFilterItem/TypesFilterItem';

const TypesFilter = () => {
  const { contactTypes } = useSelector(getContactTypes);
  return (
    <div className={css.typesFilterWrap}>
      <p className={css.wrapLabel}>Show only:</p>
      <ul className={css.typesList}>
        <button className={css.allBtn}>ALL</button>
        {contactTypes &&
          contactTypes.map(type => <TypesFilterItem type={type} />)}
      </ul>
      <button className={css.addBtn} type="button">Add</button>
    </div>
  );
};

export default TypesFilter;
