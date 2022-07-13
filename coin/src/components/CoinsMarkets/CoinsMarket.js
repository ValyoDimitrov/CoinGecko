import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CoinMarketDetails from "./CoinMarketDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import "./CoinsMarket.css";
import Pagination from 'react-bootstrap/Pagination';

const CoinsMarket = (props) => {
  const [coinsMarketInfo, setCoinsMarketInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&market_cap_desc&per_page=10")
      .then((res) => res.json())
      .then((data) => setCoinsMarketInfo(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Spinner className="spinner" animation="border" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return (
      <h4>
        <i>An error has occured: </i>
        {error}
      </h4>
    );
  }

  const transformedCoinsInfo =
    coinsMarketInfo &&
    coinsMarketInfo.map((details, i) => {
      return <CoinMarketDetails key={details.id} coin={details} index={i} />;
    });

  return (
    <>
      <Table striped bordered hover variant="dark" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>High 24 hour Price</th>
            <th>Low 24 hour Price</th>
          </tr>
        </thead>
        <tbody>{transformedCoinsInfo}</tbody>
      </Table>
    </>
  );
};

export default CoinsMarket;
