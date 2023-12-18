import React from "react";
import { useSelector, useDispatch } from 'react-redux'
// import { Reducer } from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit'
const Todo = () => {
   const arr = useSelector(x => x.ToDoSlice)
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
                            <h1>Todo</h1>
                           <span>name= {item.id}</span>
                           <br />
                           <span>date= {item.date}</span>
                           <br />
                           <span>isComplete ?</span><input type="checkbox" />
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
export default Todo
