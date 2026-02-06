import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Home from "./page/Home";
import About from "./page/About";
import Users from "./page/Users";
import Creat from "./page/user/Creat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      {path:'/user/creat' ,element: <Creat />},
      { path: "/user", element: <Users /> }
    ]
  }
]);

export default router;
