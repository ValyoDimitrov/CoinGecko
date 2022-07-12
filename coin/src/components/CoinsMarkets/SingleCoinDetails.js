import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SingleCoinsDetails = ({ coinInfo }) => {

  return (
    <>
     <Row>
     <Col md={{ span: 6, offset: 3 }}>
        <Card border='dark'>
        {coinInfo.image &&
          <Card.Img variant="top" src={`${coinInfo.image.thumb}`} />
        }
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
        </Col>
        </Row>
    </>
  );
};

export default SingleCoinsDetails;