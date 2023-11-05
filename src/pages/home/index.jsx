import React from "react";
import Body from './body';
import Header from "../../styles/global/header/header";
// import Footer from "../../styles/global/footer/footer";
import Wrapper from "../../styles/global/wrapper";



function Home() {
    return(
        <Wrapper>
            <Header></Header>
            <Body></Body>
        </Wrapper>
    )
}

export default Home;