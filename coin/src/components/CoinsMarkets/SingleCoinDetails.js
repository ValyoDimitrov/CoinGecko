import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleCoinsDetails = ({ coinInfo }) => {
  return (
    <>
      <Card border="dark" style={{ width: "25rem", margin: "auto" }}>
        {coinInfo.image && (
          <Card.Img sizes="sx" src={`${coinInfo.image.small}`} />
        )}
        <Card.Body>
          <Card.Title>
            {coinInfo.name} ({coinInfo.symbol})
          </Card.Title>
          {coinInfo.description ? (
            <Card.Text>{coinInfo.description.en}</Card.Text>
          ) : (
            ""
          )}
          {coinInfo.hashing_algorithm && (
            <Card.Text>
              Hashing algorithm: {coinInfo.hashing_algorithm}
            </Card.Text>
          )}
          {coinInfo.genesis_date && (
            <Card.Text>Genesis Date: {coinInfo.genesis_date}</Card.Text>
          )}
          {coinInfo.market_data && (
            <Card.Text>
              Market cap: {coinInfo.market_data.market_cap.eur}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleCoinsDetails;
