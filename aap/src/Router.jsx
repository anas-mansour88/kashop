import { createBrowserRouter } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Mainlayout from "./layout/Mainlayout";
import Register from "./page/Register"; 
import Login from "./page/Login"; 



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> },
     
      { path: "/about", element: <About /> }, 
      {path :'/Register' , element :<Register/>},
      {path :'/Login' , element :<Login/>}
    ],
  },
]);

export default router;
