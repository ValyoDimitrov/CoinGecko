import { useNavigate } from "react-router-dom";

const CoinMarketDetails = ({ coin, index }) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => {
        navigate(`/coins/${coin.id}`);
      }}
    >
      <td>{index + 1}</td>
      <td>
        <img alt="coin" width={50} height={50} src={`${coin.image}`} />
      </td>
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price} €</td>
      <td>{coin.high_24h} €</td>
      <td>{coin.low_24h} €</td>
    </tr>
  );
};

export default CoinMarketDetails;
