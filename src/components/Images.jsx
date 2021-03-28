import React from 'react'
import CBlue from '../img/Code_Blue.svg'
import RBlue from '../img/Responsive_Blue.svg'
import TBlue from '../img/Team_Blue.svg'


function Images() {

    return (
      <div>
        <div className="img-container">
         <div className='img-box'>
          <img src={CBlue} alt="CleanCode"/>
            <p>
            Writing clean code and orginized functions by focusing on each aspects of project
            </p>
         </div>
         <div className='img-boxx'>
            <p>
            Building responsible, modern and well designed applications for the user 
            </p>
          <img src={RBlue} alt="Responsive"></img>
         </div>
         <div className='img-box'>
          <img src={TBlue} alt="TeamPlayer"/>
            <p>
            By improving myself I will contribute to the team with my dedication 
            </p>
         </div>
          </div>
        </div>
    )
}

export default Images
