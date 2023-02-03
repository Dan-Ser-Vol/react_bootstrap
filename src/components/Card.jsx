import React from 'react';
import {Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Card = ({icon, title}) => {
  return (
      <Col>
        <div className="itd_circle"><FontAwesomeIcon icon={icon} color={'#4C3E9D'} size={"2x"}/></div>
        <h5 className="text-center">{title}</h5>
        <div className="line"></div>
      </Col>
  );
};

export default Card;