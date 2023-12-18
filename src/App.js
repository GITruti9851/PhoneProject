import logo from './logo.svg';
import './App.css';
import React,{Suspense} from 'react';
// import Home from './componnent/Home';
import { Route, Routes,  Link} from 'react-router-dom';
const Home = React.lazy(() => import("./componnent/Home"))
const ToDo = React.lazy(() => import("./componnent/ToDo"))
const Photo = React.lazy(() => import("./componnent/Photo"))
const User = React.lazy(() => import("./componnent/User"))
const Post = React.lazy(() => import("./componnent/Posts"))
import ColorTabs from './componnent/style';
function App() {

  return (
    <>
    <ColorTabs/>
      <div className="App">
        <h1>project client server</h1>
        <Routes>
          <Route path='/' element={<Suspense fallback={<h1>loading..</h1>}><Home /></Suspense>} > 
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
