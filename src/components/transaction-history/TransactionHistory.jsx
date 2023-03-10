import { TBody } from './TBody';
import { THead } from './Thead';
import css from './transaction-history.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <THead />
      <TBody transactions={transactions} />
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
