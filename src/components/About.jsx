import React from 'react';
import {Col, Container, NavLink, Row} from "react-bootstrap";

const About = () => {
  return (
      <Container>
        <Row>
          <Col md={'12'}>
            <h2 className={'text-center text-uppercase color2 my-5'}>для тих хто...</h2>
          </Col>
        </Row>
        <Row className={'mb-5'}>
          <Col md={6} sm={12}>
            <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
          </Col>
          <Col md={6} sm={12}>
            <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
          </Col>
          <Col md={6} sm={12}>
            <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
          </Col>
          <Col md={6} sm={12}>
            <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={" btn-itd  mb-5 "}>
              <NavLink href="#footer" className={'text-uppercase '}>замовити</NavLink>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default About;