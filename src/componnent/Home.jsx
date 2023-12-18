import React from "react";
import {Outlet,Link} from 'react-router-dom'
const Home = () => {
    return (<>
    
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ToDo">ToDo</Link>
            <Link to="/Photo">Photos</Link>
            <Link to="/User">User</Link>
            <Link to="/Posts">Posts</Link>
        </nav>
        {/* <h1>Home</h1> */}
        <Outlet/>
    </>)
}
export default Home