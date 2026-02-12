import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    Authinfo: (state,action) => {
      state.value = action.payload
    },
    logout:(state) =>{
      state.value = null
    }
  },
})

export const { Authinfo,logout } = AuthSlice.actions

export default AuthSlice.reducer