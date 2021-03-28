import React from 'react'
import AboutImage from '../img/AboutImage.jpg';
import InfoDetails from './Info-details';
function Info() {
    return (
      <main className='main-info'>
        <div className='img-info'>
          <div className='img'>
            <img src={AboutImage} alt="info"/>
          </div>
          <div className="my-info">
          <div className="about-info">
            <h4><span>Info</span></h4>
            <p>
            Hi I'am Max junior software developer.In this<br/>project I will 
            show my skills and services.
            </p>
          </div>
          <InfoDetails />
          </div>
        </div>
      </main>  
    )
}

export default Info
