import { TBody } from './TBody';
import { THead } from './Thead';
import css from './transaction-history.module.css';

export const TransactionHistory = ({ transactions }) => {
  console.log(css);
  return (
    <table className={css['transaction-history']}>
      <THead />
      <TBody transactions={transactions} />
    </table>
  );
};
