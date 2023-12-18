import logo from './logo.svg';
import './App.css';
import React,{Suspense} from 'react';
// import Home from './componnent/Home';
// import ColorTabs from './componnent/style';
import ColorTabs from './componnent/NewHome';
import StandardImageList from './componnent/img';
import { Route, Routes,  Link} from 'react-router-dom';
// const Home = React.lazy(() => import("./componnent/Home"))
const NewHome = React.lazy(() => import("./componnent/NewHome"))

const ToDo = React.lazy(() => import("./componnent/ToDo"))
const Photo = React.lazy(() => import("./componnent/Photo"))
const User = React.lazy(() => import("./componnent/User"))
const Post = React.lazy(() => import("./componnent/Posts"))

function App() {

  return (
    <>
    
    {/* <ColorTabs/> */}
    {/* <StandardImageList/> */}
    {/* <StandardImageList/> */}
      <div className="App">
        <h1 style={{color:"orange"}}>project client server </h1>
        <Routes>
          {/* <Route path='/' element={<Suspense fallback={<h1>loading..</h1>}><Home /></Suspense>} >  */}
          <Route path='/' element={<Suspense fallback={<h1>loading..</h1>}><NewHome /></Suspense>} > 

          <Route path='/ToDo' element={<Suspense fallback={<h1>loading..</h1>}><ToDo /></Suspense>} /> 
          <Route path='/Photo' element={<Suspense fallback={<h1>loading..</h1>}><Photo /></Suspense>} />
          <Route path='/User' element={<Suspense fallback={<h1>loading..</h1>}><User /></Suspense>} /> 
          <Route path='/Posts' element={<Suspense fallback={<h1>loading..</h1>}><Post /></Suspense>} />
        </Route> 
        </Routes>
      </div>
    </>
  );
}

export default App;
