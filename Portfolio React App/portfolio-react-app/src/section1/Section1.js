import BioInfo from "./BioInfo";
import Navigator from "./Navigator";
import { Col, Row, Container } from "reactstrap";

const Section1 = () => {
  return (
    <>
      <section className="section-1">
        <Container>
          <Row>
            <Col>
              <BioInfo />
            </Col>
            <Col>
              <Navigator />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section1;
