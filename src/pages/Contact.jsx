import React from 'react'
import Title from '../components/Title'
import Adress from '../components/adress'
import Location from '../img/Icon_Location.svg'
import Email from '../img/Icon_email.svg'
import Phone from '../img/Icon_Phone.svg'



function Contact() {
    return (
      <div>
        <Title title={'Contact Me'} span={'Contact me'} />
        <div className="contact">
      <div className='map'>
        <iframe title="Find Me" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.2189535936823!2d14.497146314753138!3d35.91714032460608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e453e3a194e2b%3A0xf4bfe79c0e68609!2sPlatinum%20Elite%20Studios!5e0!3m2!1sen!2smt!4v1616676299707!5m2!1sen!2smt" width="400" height="400" allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className='adress'>
          <Adress icon={Phone} text1={'Phone : '} text2={'+356 794 635 24'} />
          <Adress icon={Email} text1={'Email : '} text2={'maxmud.musabaev@mail.ru'} />
          <Adress icon={Location} text1={'Address : '} text2={'Sir George Borg 57/4 Sliema'} />
      </div>
      </div>
      </div>
    )
}

export default Contact
