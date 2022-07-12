import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
      {coinInfo && (
        <Card>
          <Card.Img variant="top" src={`${coinInfo.image}`} />
          <Card.Body>
            <Card.Title>{coinInfo.name}</Card.Title>
            <Card.Title>{coinInfo.symbol}</Card.Title>
            {/* {coinInfo.description && (
              <Card.Text>{coinInfo.description}</Card.Text>
            )} */}
            <Card.Text>
              Hashing algorithm: {coinInfo.hashing_algorithm}
            </Card.Text>
            <Card.Text>Genesis Date: {coinInfo.genesis_date}</Card.Text>
            {coinInfo.market_data && (
              <Card.Text>
                Market cap {coinInfo.market_data.market_cap.eur}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default SingleCoin;
