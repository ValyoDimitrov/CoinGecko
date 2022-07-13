import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SingleCoinsDetails = ({ coinInfo }) => {
  const regex = (/<[^>]*>?/gm)
  const transformedText = coinInfo.description ? coinInfo.description.en.replace(regex, '') : '';

  return (
    <Card
      className="m-5 border-0 shadow"
      style={{ backgroundColor: "#373b3e" }}
      text="light"
    >
      <Row>
        <Col>
          {coinInfo.image && (
            <Card.Img className="image" src={`${coinInfo.image.large}`} />
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
              Market cap: {coinInfo.market_data.market_cap.eur} €
            </Card.Text>
          )}
          {coinInfo.links && (
            <Card.Text>
              Homepage: {coinInfo.links.homepage[0]}
            </Card.Text>
          )}
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>
              {coinInfo.name} ({coinInfo.symbol})
            </Card.Title>
            {coinInfo.description && (
              <Card.Text>{transformedText}</Card.Text>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SingleCoinsDetails;
