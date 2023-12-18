import React from "react";
import { useSelector, useDispatch } from 'react-redux'
// import { Reducer } from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit'
const Post = () => {
   const arr = useSelector(a => a.PostSlice)
//    const [count,dispatch] = useReducer(funcCounter,0)
const dispatch=useDispatch();
const HandleDelete=(id)=>{
    dispatch({type:"delete",payload:id})
}
    return (
        <>
        {/* <h1>/ToDo</h1> */}
        <br />
        <button>הוספה</button>
            {
                arr.map((item) => {
                    return (
                        <div>
                            {/* <Link to={`/books/${item.id}`}>book {item.id}</Link> */}
                            <h1>Post</h1>
                          
                           <br />
                           <span>תוכן הפוסט= {item.tochen}</span>
                           <br />
                           <span>isLike ?</span><input type="checkbox" />
                           <br />
                     
                         
                            <button onClick={()=>{

                            }}>edit</button> 
                            
                             <button onClick={()=>{
                                HandleDelete(item.id)
                             }}>מחיקה</button>
                            <button>שמור</button>
                        </div>
                    )
                })
            }

            {/* <Outlet/> */}
        </>
    )

}
export default Post
