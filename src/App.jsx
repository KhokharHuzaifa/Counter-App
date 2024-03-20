import './App.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import OutletRoute from './Pages/OutletRoute';
import About from './Pages/About';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<OutletRoute/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
