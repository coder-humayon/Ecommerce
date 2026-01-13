import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import discountone from '../../assets/images/product3.png'
import discounttwo from '../../assets/images/product4.png'
import Container from '../utilities/Container';
import { useParams } from 'react-router';
import axios from 'axios';

const ProductsCategory = () => {

    const [product,setProduct] = useState ([])
    const [visiblecount,setvisibleCount] =useState (4)
    const {slug}= useParams()

    useEffect(() =>{
        axios.get(`https://dummyjson.com/products/category/${slug}`)
        .then (res => setProduct(res.data.products))
    })

  return (
    <section className='pb-16'>
        <Container>
            <div className='pb-8 pt-10'>
                <h3 className='text-[24px] text-[#000000] font-poppins font-medium leading-8'>{slug}</h3>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    product.slice(0,visiblecount).map((dis,index) =>(
                        <div key={index} className='py-6 px-4 bg-[#F6F6F6] rounded-[9px]'>
                            <div className='pb-4'>
                                <CiHeart className='text-[32px] text-[rgba(144,144,144,0.77)] ms-auto'/>
                            </div>
                            <div className='pb-4'>
                                <img className='mx-auto' src={dis.thumbnail} alt="" />
                            </div>
                            <div className='pb-4 text-center'>
                                <h4 className='text-[16px] text-[#000000] leading-6 font-poppins font-medium '>{dis.title}</h4>
                                <h3 className='text-[24px] text-[#000000] leading-6 font-semibold font-poppins pt-4 pb-6'>${dis.price}</h3>
                                <a href="" className='text-[14px] text-white leading-6 font-poppins font-medium py-3 px-16 bg-[#000000] rounded-lg '>Buy Now</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                visiblecount < product.length &&
                <div className='text-center pt-10'>
                    <button onClick={()=> setvisibleCount(visiblecount+4)} className='text-[14px] text-white leading-6 font-poppins font-medium py-3 px-16 bg-[#000000] rounded-lg cursor-pointer '>View More Product</button>
                </div>
            }
        </Container>
    </section>
  )
}

export default ProductsCategory
