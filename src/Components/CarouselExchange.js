import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselExhange() {
  var settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <Container>
        <Row className="exchange-card-styles">
          <Slider {...settings}>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>USD / TRY</CardTitle>
                  <CardText>18,64</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>EUR / TRY</CardTitle>
                  <CardText>19,63</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>GBP / TRY</CardTitle>
                  <CardText>22,91</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>AUD / TRY</CardTitle>
                  <CardText>12,66</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>CHF / TRY</CardTitle>
                  <CardText>19,88</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>NOK / TRY</CardTitle>
                  <CardText>1,92</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>GOLD gr. / TRY</CardTitle>
                  <CardText>1075,45</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                <CardBody>
                  <CardTitle>SILVER gr. / TRY</CardTitle>
                  <CardText>17,81</CardText>
                </CardBody>
              </Card>
            </Col>
          </Slider>
        </Row>
      </Container>
    </div>
  );
}

export default CarouselExhange;
