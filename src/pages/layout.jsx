import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import {Container} from "react-bootstrap";


const Layout = ({children}) => {
    return (
        <Container fluid={"lg"} style={{height: '100vh'}}>
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </Container>
    )
}

export default Layout;