import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
const initValToDo=[{
        
    id:0,
    name:"wash",
    date:"17/04/2020",
    isComplete:false,

},
{
    id:1,
    name:"tidy",
    date:"12/02/2023",
    isComplete:false,
}
,{
    id:2,
    name:"bake",
    date:"12/02/2023",
    isComplete:false,
   
}
]
const ToDoSlice = createSlice({
name: "managerToDo",
initialState:initValToDo,
reducers:{
    update:(state,actions)=>{
     console.log("update");
    },
    
}
})
export const {update} = ToDoSlice.actions
export default ToDoSlice.reducer