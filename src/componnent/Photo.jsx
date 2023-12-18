import React from "react";
import { useSelector, useDispatch } from 'react-redux'
// import { Reducer } from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit'
const Photo = () => {
   const arr = useSelector(x => x.PhotoSlice)
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
                        <>
                       
                        
                        <img 
                         srcSet={`${item.url}`}
                         src={`${item.url}`}
                         alt={item.title}
                         loading="lazy"
                        />
                        {
                            //  console.log(img)
                             console.log(item.url)
                        }
                        <div>
                            {/* <Link to={`/books/${item.id}`}>book {item.id}</Link> */}
                            <h1>Photo</h1>
                           
                         <br/>
                         
            {/* <img src="E:/פרויקט ריאקט כללי/ריאקט פרויקט  חדש/src/photos-example/18999_en_1.jpg" alt="no photo" />     */}
            <img src="./D:/פרויקט ריאקט כללי/ריאקט פרויקט  חדש/src\photos-example/(Reka.us)51.jpg" alt="no photo" />  
                    
            <br />
                           <br />
                            <button onClick={()=>{

                            }}>edit</button> 
                            
                             <button onClick={()=>{
                                
                             }}>מחיקה</button>
                            <button>שמור</button>
                        </div>
                        </>
                    )
                })
            }

            {/* <Outlet/> */}
        </>
    )

}
export default Photo
