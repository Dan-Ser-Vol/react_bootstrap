import React, {useState} from 'react';
import {Col, Container, NavLink, Row} from "react-bootstrap";
import MyModal from "./Modal/MyModal";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <Container fluid={'12'}>
                <Row className={'header'}>
                    <Col md={'12'}>
                        <h1 className="text-center text-white">Danservoll Bootstrap React Project</h1>
                        <div className="int_play" onClick={() => setShow(!show)}>
                            <div className="itd_triangle">< MyModal show={show}
                                                                    handleClose={handleClose}/>
                            </div>
                        </div>
                        <div className={" btn-itd  "}>
                            <NavLink href="#footer" className={'text-uppercase '}>замовити</NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Header;