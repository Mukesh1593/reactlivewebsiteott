import React from 'react';
import web from "../src/images/home.png";
import Common from './Common';

const Home = () => {

    return(
        <>
        <Common name="Watching Experience only on" imgsrc={web} visit="/services" btname="Get Started" />
        </>

    )
}

export default Home;