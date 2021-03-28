import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { BiMap } from 'react-icons/bi'
import { FaUserGraduate } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'

function InfoDetails() {
    return (
        <div>
          <div className="detils-info">
            <div>
              <h1><span><FaUserAlt /></span> Full Name :  Makhmudjon Musabaev</h1>
            </div>
            <div>
              <h1><span><MdDateRange /></span> Date Of Birth :  28.03.1993</h1>
            </div>
            <div>
              <h1><span><BiMap /></span> Country :  Uzbekistan</h1>
            </div>
            <div>
              <h1><span><FaUserGraduate /></span> Education :  College Dagree</h1>
              </div>
            <div>
              <h1><span><MdFavorite /></span> Maritial status :  Bachelor</h1>
            </div>
            <div>
              <h1><span><IoIosPeople /></span> Languages :  Uzbek,Russian,English</h1>
            </div>
          </div>
        </div>
    )
}

export default InfoDetails
