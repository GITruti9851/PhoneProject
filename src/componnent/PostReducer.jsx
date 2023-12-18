import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
const initValPost=[{
        
    id:0,
    tochen:"aaaaaa",
    isLike:false,

},
{
    id:1,
    tochen:"bbbbbbbb",
    isLike:false,
}
,{
    id:2,
    tochen:"ccccccccc",
    isLike:false,
   
}
]
const PostSlice = createSlice({
name: "managerPost",
initialState:initValPost,
reducers:{
    update:(state,actions)=>{
     console.log("update");
    },
    delete:(state,actions)=>{
        console.log("state",state);
        console.log("actions",actions);
        state.map((item)=>{
            if(item.id==actions.payload.id)
            {alert(item)
        state.slice(item)}
            // [...state]=i
        })
    }
    
}
})
export const {update} = PostSlice.actions
export default PostSlice.reducer