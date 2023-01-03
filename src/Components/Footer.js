import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import '../App.css'


export default function Footer() {
  return (
    <div className='footerWrapper'>
        <div>
            <h3>Follow us on</h3>
            <AiFillInstagram/> Instagram
            <AiFillFacebook/> Facebook
        </div>
        <div>
            <Link>FAQ</Link>
            <Link>Careers</Link>
            <Link>About us</Link>
            <Link>Contact US</Link>
        </div>
    </div>
  )
}
