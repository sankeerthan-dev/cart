import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'


export default function ProductDetailedView() {
  const {id}=useParams()
  const [product, setProduct]=useState([])
  const [isError, setisError]=useState()
    useEffect(()=>{
        axios
            .get('https://fakestoreapi.com/products/'+id)
            .then((e)=>setProduct(e.data))
            .catch((err) => setisError(true));
        console.log(product)
    },[])
  return (
    <div>
        {isError ? (
        <h1>Product Not Found</h1>
      ) : (
        <div className='detailedDisplay'>
          <img src={product.image} alt=""></img>
          <div>
            <button><AiOutlineShoppingCart/> Add to cart</button>
            <h1>{product.title}</h1>
            <h3>$ {product.price}</h3>
            <h2>Description:</h2>
            <h5>{product.description}</h5>
          </div>
        </div>
      )}
    </div>
  )
}
