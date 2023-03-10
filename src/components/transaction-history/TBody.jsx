import css from './transaction-history.module.css';

export const TBody = ({ transactions }) => {
  console.log(transactions);
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
