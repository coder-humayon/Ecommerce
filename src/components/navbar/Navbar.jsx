import React, { useEffect, useState } from 'react'
import Container from '../utilities/Container'
import logo from '../../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, Links, } from 'react-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import Authinfo from '../redux/AuthSlice.jsx';




const Navbar = () => {
    const dispatch = useDispatch()
    const auth = getAuth();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(Authinfo ({
                 uid: user.uid,
                 email: user.email,
                 dispalayName: user.displayName,
            }))
        } 
        });
        return () => unsub()
    })
  return (
    <nav className=' items-center '>
        <Container>
            <div className="flex gap-8 items-center justify-between">
                <div className="">
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                <div className='w-[30%] relative'>
                    <input type="text" className=' w-full text-[14px] leading-[18px] text-[#656565] p-4 ps-12 bg-[#F5F5F5] rounded-lg outline-0' placeholder='Search' />
                    <CiSearch className=' absolute top-[50%] -translate-y-[50%] left-4 text-[24px] text-[#989898]'/>
                </div>
                <div className='menu'>
                    <ul className='flex gap-13 '>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="">About</a></li>
                        <li><Link to="shop">Shop</Link></li>
                        <li><a href="">Contact</a></li>
                        <li><Link to="register">Sign Up</Link></li>
                    </ul>
                </div>
                <div className='[&>dev]: text-[24px] [&>dev]:text-black'>
                    <div className='flex gap-6'>
                        <IoIosHeartEmpty />
                        <Link to='/card'><IoCartOutline /></Link>
                        <Link to="/profile">
                            <LuUser />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar
