import css from './profile.module.css';
import PropTypes from 'prop-types';

export const DataCounter = ({ infoType, value }) => {
  return (
    <li className={css.counter}>
      <span className={css.label}>{infoType}</span>
      <span className={css.quantity}>{value}</span>
    </li>
  );
};

DataCounter.propTypes = {
  infoType: PropTypes.string,
  value: PropTypes.number,
};
