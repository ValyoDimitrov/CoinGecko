import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCoinDetails from './SingleCoinDetails'

const SingleCoin = () => {
  const params = useParams();
  const [coinInfo, setCoinInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCoinInfo(data))
      .catch((err) => console.log(err));
  }, [params.id]);
  console.log(coinInfo);

  return (
    <>
     <SingleCoinDetails coinInfo={coinInfo}/>
    </>
  );
};

export default SingleCoin;
