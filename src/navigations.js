import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Registeration from "./pages/Registration";
export const nav = [
  {
    path: "/",
    name: "home",
    element: <Home />,
    isMenu: true,
    isPrivate: true,
  },
//   {
//     path: "/category",
//     name: "category",
//     element: <Categories />,
//     isMenu: true,
//     isPrivate: true,
//   },
  {
    path: "/login",
    name: "login",
    element: <Login />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/register",
    name: "register",
    element: <Registeration />,
    isMenu: true,
    isPrivate: false,
  },
//   {
//     path: "/products",
//     name: "product",
//     element: <Products />,
//     isMenu: true,
//     isPrivate: true,
//   },
];
