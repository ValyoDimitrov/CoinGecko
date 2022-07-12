import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CoinMarketDetails from "./CoinMarketDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from 'react-bootstrap/Pagination';

const CoinsMarket = (props) => {
  const [coinsMarketInfo, setCoinsMarketInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage, setCoinsPerPage] = useState(10)

  const indexOfLastPost = currentPage*coinsPerPage;
  const indexOfFirstPost = indexOfLastPost - coinsPerPage;


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
      return <CoinMarketDetails key={details.id} coin={details} index={i} />;
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

export default CoinsMarket;
