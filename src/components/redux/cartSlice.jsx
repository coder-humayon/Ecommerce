import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state, action) =>{
            const item = action.payload
            const existing = state.items.find(i => i.id === item.id)
            if(existing){
                existing.quntity += item.quntity
            }
            else{
                state.items.push(item)
            }
            localStorage.setItem('cart',JSON.stringify(state.items))
        }
    }
})
export const { addtocart } = cartSlice.actions

export default cartSlice.reducer