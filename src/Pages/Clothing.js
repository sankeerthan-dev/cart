import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Clothing() {
    const [initVal, setInitval]=useState([])
    useEffect(()=>{
        axios
            .get('https://fakestoreapi.com/products/')
            .then((e)=>setInitval(e.data))

    },[])
    const arr=initVal.filter(item=>item.category==="men's clothing")
  return (
    <div className='cardWrapper'>
        {
            arr.map((item)=>
                <div className='cardBox'>
                    <img src={item.image} alt=""></img>
                    <h2>$ {item.price}</h2>
                    <Link to={`/products/${item.id}`}>{item.title}</Link>
                </div>
            )
        }
    </div>
  )
}
