import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
     <main> 
      <div className='fot-cont'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        aperiam atque fugiat voluptas <br/> reiciendis tempora inventore,
        perspiciatis explicabo natus! Mollitia?
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100009170553552">
            <ImFacebook className='face' />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/i_am_maxmud/">
            <FaInstagram className='insta' />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
            <AiOutlineTwitter className='twit' />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
            <FaYoutube className='you' />
            </a>
          </li>
        </ul>
        <p>Copytight &copy; 2021 Malta. designed by Max</p>
      </div>
     </main> 
    )
}

export default Footer
