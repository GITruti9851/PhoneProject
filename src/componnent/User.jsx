import React from "react";
import { useSelector, useDispatch } from 'react-redux'
// import { Reducer } from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit'
const User = () => {
   const arr = useSelector(x => x.UserSlice)
//    const [count,dispatch] = useReducer(funcCounter,0)
const dispatch=useDispatch();
const HandleDelete=()=>{
    dispatch()
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
                            <h1>User</h1>
                           <span>name= {item.name}</span>
                           <br />
                           <span>phone= {item.phone}</span>
                           <br />
                           <span>address= {item.address}</span>
                           <br />
                             <span>email= {item.email}</span>
                           <br />
                     
                         <br />
                            <button onClick={()=>{

                            }}>edit</button> 
                            
                             <button onClick={()=>{
                                
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
export default User
