import React from 'react'
import web from '../src/images/img2.jpg';
import Common from './Common';

const  About= () => {
    return (
        <>
            <Common 
            name="Welcome to About page" 
            imgsrc={web}
             visit="/Contact"
              btname="Contact Now"
            />
        </>
    )
}

export default About
