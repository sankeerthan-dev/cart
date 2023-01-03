import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Accessories() {
    const [initVal, setInitval]=useState([])
    useEffect(()=>{
        axios
            .get('https://fakestoreapi.com/products/')
            .then((e)=>setInitval(e.data))

    },[])
    const arr=initVal.filter(item=>item.category==="jewelery")
  return (
    <div className='cardWrapper'>
        {
            arr.map((item)=>
                <div className='cardBox'>
                    <img src={item.image} alt=""></img>
                    <h2>$ {item.price}</h2>
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                </div>
            )
        }
    </div>
  )
}
