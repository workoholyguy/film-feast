// Imports necessary hooks from React and routing components from react-router-dom.
import { useState, useEffect } from "react";
import "./App.css"; // Imports the main CSS file for this component's styling.
import { useRoutes } from "react-router-dom"; // Hook to define our application's routes.
import { Link } from "react-router-dom"; // Link component for navigation.

// Imports the pages that will be displayed for each route.
import Home from "./pages/Home";
import AllTables from "./pages/AllTables";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";

function App() {
  // Defines the routes for the application. Each route path corresponds to a specific component.
  let element = useRoutes([
    {
      path: "/",
      element: <Home />, // Home component will display at the root path "/".
    },
    {
      path: "/tables",
      element: <AllTables />, // AllTables component will display at "/tables".
    },
    {
      path: "/reserve",
      element: <Reservation />, // Reservation component will display at "/reserve".
    },
    {
      path: "/order",
      element: <Order />, // Order component will display at "/order".
    },
  ]);

  return (
    <>
      <div className="app-master-container">
        {/* Sidebar containing navigation links for each page */}
        <div className="side-nav">
          <Link to="/">Home</Link>
          <Link to="/tables">View All Current Tables!</Link>
          <Link to="/reserve">Buy A Ticket!</Link>
          <Link to="/order">Order Some Food!</Link>
        </div>
        {/* Renders the component associated with the current route */}
        <div className="main">{element}</div>
      </div>
    </>
  );
}

export default App;
