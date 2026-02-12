import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, signOut} from "firebase/auth";
import { logout } from '../redux/AuthSlice';
import { useNavigate } from 'react-router';

const Profile = () => {
  const auth = getAuth();
  const loggedUser = useSelector((state)=> state.auth.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  useEffect(()=>{
    if(loggedUser){
      setName(loggedUser.displayName)
      setEmail(loggedUser.email)
    }
  },[loggedUser]);
  const Logout = async()=>{
    try {
      await signOut(auth)
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      
    }
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-black"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm text-gray-500">
            {email}
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Profile Info */}
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Role</span>
            <span>User</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Joined</span>
            <span>Jan 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="w-1/2 border border-black text-black py-2 rounded-md hover:bg-black hover:text-white transition">
            Edit Profile
          </button>

          <button
            onClick={Logout}
            className="w-1/2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Log Out
          </button>
        </div>

      </div>
    </section>
  )
}

export default Profile
