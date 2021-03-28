import React from 'react'
import Image from '../img/MainPageIMG.jpg'
import Typical from 'react-typical'
import { scroller } from 'react-scroll'

function MainContent() {
    const scrollNext = () => {
        scroller.scrollTo('about', {smooth: true})
    }
    return (
        <div className="container">
            <div className="row">
                <div className="main-text">
                <p>Hello</p>
                <h1>I'm a {' '}
                <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                    'Designer',
                    1000,
                    'Freelancer',
                    1000,
                    'Developer',
                    1000,
                    'Photographer',
                    1000,
                ]} />
                </h1>
            <button className='btn' onClick={scrollNext}>
                More About Me
            </button>
            </div>
            <div className="mainImage">
                <img src={Image} alt="mainImage"/>
            </div>
        </div>
    </div>
    )
}

export default MainContent
