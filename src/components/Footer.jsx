import React from 'react';
import {Col, Container, NavLink, Row} from "react-bootstrap";
import {faTwitter, faFacebook, faYoutube, faTelegram, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
      <Container fluid id={'footer'} className={"footer"}>
        <Row>
          <Col md={12} className={'d-flex justify-content-evenly text-center'}>
            <div className={'btn-link'}>
              <NavLink ><FontAwesomeIcon icon={faFacebook} color={'silver'}  size={"2x"}/></NavLink>
            </div>
            <div className={'btn-link'}>
              <NavLink > <FontAwesomeIcon icon={faYoutube} color={'silver'}  size={"2x"}/></NavLink>
            </div>
            <div className={'btn-link'}>
              <NavLink ><FontAwesomeIcon icon={faTelegram} color={'silver'}  size={"2x"}/></NavLink>
            </div>
            <div className={'btn-link'}>
              <NavLink ><FontAwesomeIcon icon={faTwitter} color={'silver'}  size={"2x"}/></NavLink>
            </div>
            <div className={'btn-link'}>
              <NavLink ><FontAwesomeIcon icon={faInstagram} color={'silver'} size={"2x"}/></NavLink>
            </div>
          </Col>
        </Row>

      </Container>
  );
};

export default Footer;