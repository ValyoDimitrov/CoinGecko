import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CoinDetails from "./CoinDetails";

const AllCoinsMarkets = (props) => {
  const [coinsMarketInfo, setCoinsMarketInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur")
      .then((res) => res.json())
      .then((data) => setCoinsMarketInfo(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(coinsMarketInfo, "coinsMarketInfo");

  const mapCoinsInfo =
    coinsMarketInfo &&
    coinsMarketInfo.map((details, i) => {
      return <CoinDetails key={details.id} coin={details} index={i} />;
    });

  return (
    <Table striped bordered hover variant="dark" style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>High</th>
          <th>Low</th>
        </tr>
      </thead>
      <tbody>{mapCoinsInfo}</tbody>
    </Table>
  );
};

export default AllCoinsMarkets;
