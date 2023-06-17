import css from './TypesFilterItem.module.css';

const TypesFilterItem = ({ type }) => {
  const { name } = type;
  return <button type='button' className={css.filterButton}>{name}</button>;
};

export default TypesFilterItem;
