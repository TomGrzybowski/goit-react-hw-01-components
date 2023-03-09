export const DataCounter = ({ infoType, value }) => {
  return (
    <li className="counter">
      <span className="label">{infoType}</span>
      <span className="quantity">{value}</span>
    </li>
  );
};
