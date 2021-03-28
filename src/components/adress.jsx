import React from 'react'


function Adress({icon, text1, text2}) {
    return (
    <div className='main-adres'>    
      <div className='contact-items'>
          <img src={icon} alt="icon"/>
        <div className="items">
          <h6>{text1}</h6>
          <p>{text2}</p>
        </div>
      </div>
    </div>
    )
}

export default Adress
