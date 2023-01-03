import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Nav() {
  return (
    <div className='navBar'>
        <Link to="/home">Home</Link>
        <Link to="/clothing">Clothings</Link>
        <Link to="/accessories">Accessories</Link>
        <button><AiOutlineShoppingCart/></button>
    </div>
  )
}
