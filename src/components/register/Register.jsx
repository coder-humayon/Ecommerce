import React from 'react'
import Container from '../utilities/Container'
import { Link } from 'react-router'

const Register = () => {
  return (
    <>
        <section className='py-15'>
            <Container>
                <div className='mx-auto w-1/2'>
                    <div className=" py-14 px-16 border border-[#EBEBEB] rounded-[10px] bg-[#dddddd73] backdrop-blur-lg">
                    <h2 className='text-[20px] text-[#111111] font-poppins font-bold leading-4 pb-10'>Sign Up Form</h2>
                    <form  className='relative'>
                        <div className='flex flex-col gap-2 pb-6'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Full Name </label>
                            <input className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="text" placeholder='Enter Your Name' />
                        </div>
                        <div className='flex flex-col gap-2 pb-6'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Email Address </label>
                            <input className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="Email" placeholder='Enter Your Email' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Pasoword</label>
                            <input className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="text" placeholder='Enter Your Pasoword' />
                        </div>
                    </form>
                    <div className='pt-12 '>
                        <button className='w-full text-center py-4 text-white rounded-md bg-black text-[16px] font-medium font-poppins cursor-pointer'>Register</button>
                    </div>
                    <div className='flex justify-between items-center pt-4'>
                        <p className='text-red-400 font-poppins font-normal'>Allready Register?</p>
                        <Link to="/login" className='text-[16px] text-white py-2 px-4 bg-black font-medium font-poppins rounded-md'>Login Here</Link>
                    </div>
                </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Register
