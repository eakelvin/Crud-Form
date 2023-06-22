import { createSlice } from "@reduxjs/toolkit"

const defaultForms = [
  {
    id:1,
    name: "David",
    email:"dave@gmail.com",
    gen:24
  },
  {
    id:2,
    name: "Jeff",
    email:"jeff@gmail.com",
    gen:24
  },
  {
    id:3,
    name: "Manuel",
    email:"man@gmail.com",
    gen:23
  }
]

const userSlice = createSlice({
  name: "users",
  initialState: defaultForms,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const {id, updatedUser} = action.payload
      const userIndex = state.findIndex(user => user.id === id)
      state[userIndex] = {...state[userIndex], ...updatedUser}
    },
    deleteUser: (state, action) => {
      const {id} = action.payload
      const updatedUser = state.find(user => user.id == id)
      if (updatedUser) {
        return state.filter(f=> f.id !== id)
      }
    }

  }

}) 
   

export const {addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer
