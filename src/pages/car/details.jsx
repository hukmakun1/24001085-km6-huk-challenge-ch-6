import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../redux/actions/car";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { car } = useSelector((state) => state.car);

  useEffect(() => {
    // get car details by params id
    dispatch(getCar(navigate, id));
  }, [dispatch, id, navigate]);

  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>{car?.type}</Card.Header>
          <Card.Body>
            <Form>
              {!car ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {car?.image && (
                    <Image src={car?.image} className="img-fluid" rounded />
                  )}

                  <div className={car?.image && "mt-4"}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={car?.manufacture + " " + car?.model}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Keterangan</Form.Label>
                      <Form.Control
                        type="text"
                        value={car?.capacity + " orang"}
                        disabled
                      />
                      <Form.Control
                        type="text"
                        value={car?.transmission}
                        disabled
                      />
                      <Form.Control
                        type="text"
                        value={`Rp.${car?.rentPerDay}/hari`}
                        disabled
                      />
                    </Form.Group>
                  </div>
                </>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
