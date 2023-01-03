import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const banner=require('../Assets/offer.jpg')
export default function Home() {
    const [productList, setProductList]=useState([])
    useEffect(()=>{
        axios
            .get('https://fakestoreapi.com/products/')
            .then((e)=>setProductList(e.data))
    },[])
  return (
    <>
        <div>
            <img className="bannerImage" src={banner} alt=""></img>
        </div>
        <div className='cardWrapper'>
         {
         productList.map((item)=>(
           <div className='cardBox'>
                <img src={item.image} alt=""></img><br/>
                <h1>$ {item.price}</h1>
                <Link to={"/product/" +item.id}>{item.title}</Link>
           </div> 
        ))
        }
         </div>
    </>
  )
}
