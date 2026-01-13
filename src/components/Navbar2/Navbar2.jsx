import React, { useEffect, useState } from 'react'
import Container from '../utilities/Container'
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { MdOutlineHeadphones } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import axios from 'axios';
import { Link, useParams } from 'react-router';

const Navbar2 = () => {

    const [product,setProduct] = useState ([])

    useEffect (() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(res => setProduct(res.data));
    },[])
    

  return (
    <>
        <div className='py-2 bg-[#2E2E2E]'>
            <Container>
                <div className="flex catagory justify-between">
                    {
                        product.slice(0,6).map((pro,index) =>(
                        <Link to={`products/category/${pro.slug}`} key={index} className='flex items-center gap-2'>
                        <CiMobile4 className='text-[24px]' /> <span>{pro.name}</span>
                        </Link>
                        ))
                    }
                </div>
            </Container>
        </div>
    </>
  )
}

export default Navbar2
