import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/about"; 
import Contact from "./Components/contact";
import RestaurantMenu from "./Components/RestrauntMenu";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import UserContext from "./utilis/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";

const Grocery = lazy(() => import("./Components/Grocery")) ;

const AppLayout = () => { 
  const [userName , setUserName] = useState("Shresth") ;

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/RestrauntMenu/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/Grocery",
        element: <Suspense fallback = {<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/Cart",
        element: <Cart />,
      }
    ],
  },

]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
