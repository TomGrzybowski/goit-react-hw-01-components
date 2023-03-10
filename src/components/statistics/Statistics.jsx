import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css['stat-list']}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentages}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
