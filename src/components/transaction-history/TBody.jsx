import css from './transaction-history.module.css';
import PropTypes from 'prop-types';

export const TBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(transaction => {
        return (
          <tr key={transaction.id} className={css.row}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

TBody.propTypes = {
  transaction: PropTypes.array,
};
