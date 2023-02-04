import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {
  faClipboard,
  faCode,
  faDollar,
  faListOl,
  faMobilePhone,
  faQuestion,
  faShield,
  faThumbsUp,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import Card from "./Card";
import About from "./About";
import MyAccordion from "./MyAccordion/MyAccordion";

const Main = () => {
  return (
      <div className={'about'}>
        <Container>
          <Row>
            <Col md={'12'}>
              <h2 className={'text-center text-uppercase color2 my-5'}>про проект</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={4} md={6} sm={12}>
              <Card icon={faListOl} title={'Наш Матеріал'}/>
              <Card icon={faCode} title={'Вправи та Завдання'}/>
              <Card icon={faQuestion} title={'Додаткові Матеріали'}/>
            </Col>
            <Col xl={4} md={6} sm={12}>
              <Card icon={faDollar} title={'Ціна'}/>
              <Card icon={faClipboard} title={'Списки відтворення'}/>
              <Card icon={faThumbsUp} title={'Без Реклами'}/>
            </Col>
            <Col xl={4} md={6} sm={12}>
              <Card icon={faShield} title={'Пожиттевий Доступ'}/>
              <Card icon={faMobilePhone} title={'Перегляд через смартфон'}/>
              <Card icon={faUsers} title={'Соц Мережа'}/>
            </Col>
            <section className="forwhom">
              <About/>
            </section>
            <section className="schedule">
              <Row>
                <Col md={'12'}>
                  <h2 className={'text-center text-uppercase color1 my-5'}>програма</h2>
                </Col>
              </Row>
              <Row>
                <Col md={4} sm={12}>
                  <h4 className={'text-center fw-bold mb-3'}>Module One (HTML)</h4>
                  <MyAccordion/>
                </Col>
                <Col md={4} sm={12}>
                  <h4 className={'text-center fw-bold mb-3'}>Module Two (CSS)</h4>
                  <MyAccordion/>
                </Col>
                <Col md={4} sm={12}>
                  <h4 className={'text-center fw-bold mb-3'}>Module Three (JS)</h4>
                  <MyAccordion/>
                </Col>
              </Row>
            </section>
          </Row>
        </Container>
      </div>
  );
};

export default Main;