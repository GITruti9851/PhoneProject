import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
const Todo = () => {
   const arr = useSelector(x => x.ToDoSlice)

    return (
        <>
        <br />
        <button>הוספה</button>
            {
                arr.map((item) => {
                    return (
                        <div>
                            {/* <Link to={`/books/${item.id}`}>book {item.id}</Link> */}
                            <h1>Todo</h1>
                           <span>name={item.id}</span>
                           <br />
                           <span>name={item.name}</span>
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
