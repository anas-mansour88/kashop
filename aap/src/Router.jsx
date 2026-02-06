import { createBrowserRouter } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Mainlayout from "./layout/Mainlayout";
import User from "./page/User"; 
import Login from "./page/Login"; 



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> },
     
      { path: "/about", element: <About /> }, 
      {path :'/User' , element :<User/>},
      {path :'/Login' , element :<Login/>}
    ],
  },
]);

export default router;
