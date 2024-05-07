import { Col, Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <Col md={4} as={Link} to={`/cars/${car?.id}`}>
      <Card>
        <Card.Header>{car?.type}</Card.Header>
        <Card.Body>
          {car?.image && (
            <Image src={car?.image} className="img-fluid" rounded />
          )}

          <div className={car?.image && "mt-4"}>
            <h5>{car?.manufacture + " " + car?.model}</h5>
            <h6>{car?.capacity + " orang"}</h6>
            <h6>{car?.transmission}</h6>
            <h6>{`Rp.${car?.rentPerDay}/hari`}</h6>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

CarCard.propTypes = {
  car: PropTypes.object,
};

export default CarCard;
