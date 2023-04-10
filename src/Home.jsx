// rac
import React from 'react'
import web from '../src/images/img2.jpg';
import Common from './Common';
// import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Common
            name="Grow your Bussiness with" 
            imgsrc={web}
            visit="/Service"
            btname="Get Started"
            />
        </>
    )
}

export default Home
