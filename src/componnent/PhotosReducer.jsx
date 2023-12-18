import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
const initValPhoto=[{
        
    id:0,
    url:"E:\פרויקט ריאקט כללי\ריאקט פרויקט  חדש\src\photos-example\(Reka.us)51.jpg",
    title: 'Breakfast',

},
{
    id:1,
     url:"E:\פרויקט ריאקט כללי\ריאקט פרויקט  חדש\src\photos-example\(Reka.us)Aitutaki,_Cook_Islands.jpg",
     title: 'Breakfast',
}
// ,{
//     id:2,
//     name:"Yaakov",
//     email:"Yaakov@example.com",
//     phone:"054-45646464",
//     address:"serwrwqe street"
   
// }
// ,{
//     id:3,
//     name:"Moshe",
//     email:"Moshe@example.com",
//     phone:"054-65656545",
//     address:"werw3re3w4 street"
   
// }
// ,{
//     id:4,
//     name:"Yitzchak",
//     email:"Yitzchak@example.com",
//     phone:"054-46546644",
//     address:"ertrtrtr street"
   
// }
// ,{
//     id:5,
//     name:"Yitzchak",
//     email:"Yitzchak@example.com",
//     phone:"054-46546644",
//     address:"ertrtrtr street"
   
// },{
//     id:6,
//     name:"Yitzchak",
//     email:"Yitzchak@example.com",
//     phone:"054-46546644",
//     address:"ertrtrtr street"
   
// },{
//     id:7,
//     name:"Yitzchak",
//     email:"Yitzchak@example.com",
//     phone:"054-46546644",
//     address:"ertrtrtr street"
   
// }
]
const PhotoSlice = createSlice({
name: "managerPhoto",
initialState:initValPhoto,
reducers:{
    update:(state,actions)=>{
     console.log("update");
    },
    delete:(state,actions)=>{
        console.log("delete");
    }
    
}
})
export const {update} = PhotoSlice.actions
export default PhotoSlice.reducer