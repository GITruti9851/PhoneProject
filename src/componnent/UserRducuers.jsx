import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
const initValUser=[{
        
    id:0,
    name:"Avrahm",
    email:"Avrahm@example.com",
    phone:"054-9797080",
    address:"sreeeee street"

},
{
    id:1,
    name:"Shalom",
    email:"Shalom@example.com",
    phone:"054-54454665",
    address:"sdfeweweqe street"
}
,{
    id:2,
    name:"Yaakov",
    email:"Yaakov@example.com",
    phone:"054-45646464",
    address:"serwrwqe street"
   
}
,{
    id:3,
    name:"Moshe",
    email:"Moshe@example.com",
    phone:"054-65656545",
    address:"werw3re3w4 street"
   
}
,{
    id:4,
    name:"Yitzchak",
    email:"Yitzchak@example.com",
    phone:"054-46546644",
    address:"ertrtrtr street"
   
}
]
const UserSlice = createSlice({
name: "managerUser",
initialState:initValUser,
reducers:{
    update:(state,actions)=>{
     console.log("update");
    },
    delete:(state,actions)=>{
        console.log("delete");
    }
    
}
})
export const {update} = UserSlice.actions
export default UserSlice.reducer