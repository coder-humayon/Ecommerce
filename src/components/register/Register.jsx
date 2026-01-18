import React, { useState } from 'react'
import Container from '../utilities/Container'
import { Link } from 'react-router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'

const Register = () => {

const auth = getAuth();

const [formData,setFormData] = useState ([
    {
        name:'',
        email:'',
        password:'',
    }
])

const [errors,setErrors] = useState ({})
const Validate = () => {
    const newErrors ={}
     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.name) {
        newErrors.name ='Place Enter Your Name'
    }
    if (!formData.email) {
        newErrors.email ='Place Enter Your email'
    }
    else if (!pattern.test(formData.email)) {
        newErrors.email ='Place Enter Validate email'
    }
    if (!formData.password) {
        newErrors.password ='Place Enter Your password'
    }
    else if (!regex.test(formData.password)) {
        newErrors.password ='Password Must Have Uppercase, Lowercase, Number, Symbols And Min 8 Charecters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
     
}


const HandlSsubmit =(e) => {
    e.preventDefault()
    if (Validate()) {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
        updateProfile(auth.currentUser, {
        displayName: formData.name
        })   
      })
       Swal.fire({
        title: "Congratulations!",
        text: "Registration Success!",
        icon: "success"
        });
    } 
}


  return (
    <>
        <section className='py-15'>
            <Container>
                <div className='mx-auto w-1/2'>
                    <div className=" py-14 px-16 border border-[#EBEBEB] rounded-[10px] bg-[#dddddd73] backdrop-blur-lg">
                    <h2 className='text-[20px] text-[#111111] font-poppins font-bold leading-4 pb-10'>Sign Up Form</h2>
                    <form onSubmit={HandlSsubmit}  className='relative'>
                        <div className='flex flex-col gap-2 pb-6'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Full Name </label>
                            <input onChange={(e) => setFormData(prev => ({...prev, name:e.target.value}))} className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="text" placeholder='Enter Your Name' />
                            {
                                errors.name && <strong className='text-red-500'>{errors.name}</strong>
                            }
                        </div>
                        <div className='flex flex-col gap-2 pb-6'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Email Address </label>
                            <input onChange={(e) => setFormData(prev => ({...prev, email:e.target.value}))}
                            className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="email" placeholder='Enter Your Email'/>
                            {
                                errors.email && <strong className='text-red-500'>{errors.email}</strong>
                            }
                            
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Pasoword</label>
                            <input onChange={(e) => setFormData(prev => ({...prev, password:e.target.value}))} className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="password" placeholder='Enter Your Pasoword' />
                            {
                                errors.password && <strong className='text-red-500'>{errors.password}</strong>
                            }
                        </div>
                        <div className='pt-12 '>
                            <button type='submit' className='w-full text-center py-4 text-white rounded-md bg-black text-[16px] font-medium font-poppins cursor-pointer'>Register</button>
                        </div>
                        <div className='flex justify-between items-center pt-4'>
                            <p className='text-red-400 font-poppins font-normal'>Allready Register?</p>
                            <Link to="/login" className='text-[16px] text-white py-2 px-4 bg-black font-medium font-poppins rounded-md'>Login Here</Link>
                        </div>
                    </form>
                </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Register
