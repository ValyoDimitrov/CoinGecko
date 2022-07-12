import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCoinDetails from "./SingleCoinDetails";
import Spinner from "react-bootstrap/Spinner";
import "./CoinsMarket.css";

const SingleCoin = () => {
  const params = useParams();
  const [coinInfo, setCoinInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCoinInfo(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [params.id]);

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

  return (
    <>
      <SingleCoinDetails coinInfo={coinInfo} />
    </>
  );
};

export default SingleCoin;
