import React from 'react';
import {Col, Container, NavLink, Row} from "react-bootstrap";
import {faListOl} from '@fortawesome/free-solid-svg-icons'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {faQuestion} from '@fortawesome/free-solid-svg-icons'
import {faDollar} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faShield} from '@fortawesome/free-solid-svg-icons'
import {faMobilePhone} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import Card from "./Card";

const Main = () => {
  return (
      <div className={'about'}>
        <Container>
          <Row>
            <Col md={'12'}>
              <h2 className={'text-center text-uppercase color1 my-5'}>про проект</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={'4'} md={'6'} sm={'12'}>
              <Card icon={faListOl} title={'Наш Матеріал'}/>
              <Card icon={faCode} title={'Вправи та Завдання'}/>
              <Card icon={faQuestion} title={'Додаткові Матеріали'}/>
            </Col>
            <Col xl={'4'} md={'6'} sm={'12'}>
              <Card icon={faDollar} title={'Ціна'}/>
              <Card icon={faClipboard} title={'Списки відтворення'}/>
              <Card icon={faThumbsUp} title={'Без Реклами'}/>
            </Col>
            <Col xl={'4'} md={'6'} sm={'12'}>
              <Card icon={faShield} title={'Пожиттевий Доступ'}/>
              <Card icon={faMobilePhone} title={'Перегляд через смартфон'}/>
              <Card icon={faUsers} title={'Соц Мережа'}/>
            </Col>
            <div className="forwhom">
              <Container>
                <Row>
                  <Col md={'12'}>
                    <h2 className={'text-center text-uppercase color2 my-5'}>для тих хто...</h2>
                  </Col>
                </Row>
                <Row className={'mb-5'}>
                  <Col md={'6'} sm={'12'}>
                    <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
                  </Col>
                  <Col md={'6'} sm={'12'}>
                    <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
                  </Col>
                  <Col md={'6'} sm={'12'}>
                    <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
                  </Col>
                  <Col md={'6'} sm={'12'}>
                    <h5 className="text-center">Lorem ipsum dolor sit amet, consectetur.</h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={'12'}>
                    <div className={" btn-itd  mb-5 "}>
                      <NavLink href="#footer" className={'text-uppercase '}>замовити</NavLink>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </div>
  );
};

export default Main;