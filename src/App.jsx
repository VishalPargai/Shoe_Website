import { ToastContainer } from 'react-toastify';
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Nav from './components/Mainpage/Nav'
import Hero from './components/Mainpage/Hero'
import Loginpage from './components/login/Loginpage'
import Signup from './components/login/Signup';
import Cart from "./Cart/Cart";
import Store from "./Store";


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Nav/>
        <Hero/>
      </div>

    },
    {path: "/login",
      element:
        <Loginpage/>
    },
    
    {path: "/signup",
      element:<Signup/>
    },
    
    {
      path:"/store",
      element:<Store/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
  ]
);



function App() {
  return (
    <>
      
      <RouterProvider router={router}/>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;