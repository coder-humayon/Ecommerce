import React, { useState } from 'react'
import Container from '../utilities/Container'
import { Link, useNavigate, } from 'react-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    const [formData,setFormData] = useState ({
        email:'',
        password:'',
    })
    const [errors,setErrors] = useState ({})
    const Validate = ()=> {
        const Newerrors = {}

        if(!formData.email){
            Newerrors.email='please Enter Your Email'
        }
        if(!formData.password){
            Newerrors.password='please Enter Your Password'
        }
        setErrors(Newerrors)
        return Object.keys(Newerrors).length === 0
    }
    const [errorMessage,setErrorMessage] = useState()
    const HandleSubmit = (e) =>{
        e.preventDefault()

        if(Validate()){
            signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;  
                navigate('/')
            })
              .catch((error) => {
                setErrorMessage(error.message);
            })
            setFormData({
                email:'',
                password:'',
            });
        }  
    }
    setTimeout (() =>{
        setErrorMessage ("");
    },3000)

  return (
    <section className='py-15'>
            <Container>
                <div className='mx-auto w-1/2'>
                    <div className=" py-14 px-16 border border-[#EBEBEB] rounded-[10px] bg-[#1ed2b11d]">
                    <h2 className='text-[20px] text-[#111111] font-poppins font-bold leading-4 pb-10'>Login Form</h2>
                    {
                        errorMessage && 
                        <div className='text-white py-2 px-3 w-full rounded-sm bg-red-400 mb-3'>Invalid Crederntials</div>
                    }
                    <form onSubmit={HandleSubmit}  className='relative'>
                        <div className='flex flex-col gap-2 pb-6'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Email Address </label>
                            <input  value={formData.email} onChange={(e) => setFormData (prev =>({...prev,email:e.target.value}))}
                            className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="Email" placeholder='Enter Your Email' />
                             {
                                errors.email && <strong className='text-red-500'>{errors.email}</strong>
                            }
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Pasoword</label>
                            <input value={formData.password} onChange={(e) => setFormData (prev =>({...prev,password:e.target.value}))}
                             className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="password" placeholder='Enter Your Pasoword' />
                              {
                                errors.password && <strong className='text-red-500'>{errors.password}</strong>
                            }
                        </div>
                        <div className='pt-12 '>
                            <button type='submit' className='w-full text-center py-4 text-white rounded-md bg-black text-[16px] font-medium font-poppins cursor-pointer'>Login</button>
                        </div>
                    </form>
                    
                    <div className='flex justify-between items-center pt-4'>
                        <p className='text-red-400 font-poppins font-normal'>Not Register yet?</p>
                        <Link to='/register' className='text-[16px] text-white py-2 px-4 bg-black font-medium font-poppins rounded-md' href="">Sign Up Here</Link>
                    </div>
                </div>
                </div>
            </Container>
        </section>
  )
}

export default Login
