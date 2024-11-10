// Imports necessary modules and components, including Supabase for database operations.
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import "./page-styles.css"; // CSS for styling the page.
import Table from "../components/Table"; // Reusable Table component.

function AllTables() {
  // State variables for storing data for each table from the database.
  const [movieData, setMovieData] = useState([]);
  const [theaterData, setTheaterData] = useState([]);
  const [showtimeData, setShowtimeData] = useState([]);
  const [showingsData, setShowingsData] = useState([]);
  const [seatData, setSeatData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [mealData, setMealData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);

  useEffect(() => {
    // Function to fetch data from Supabase for each table and set it in the corresponding state variable.
    const fetchData = async () => {
      const fetchTableData = async (table, setData) => {
        const { data, error } = await supabase.from(table).select("*");
        if (error) console.error(`Error Fetching ${table}: `, error);
        else setData(data);
      };

      // Fetch data for each table
      fetchTableData("movie", setMovieData);
      fetchTableData("theater", setTheaterData);
      fetchTableData("showtime", setShowtimeData);
      fetchTableData("showings", setShowingsData);
      fetchTableData("seat", setSeatData);
      fetchTableData("ticket", setTicketData);
      fetchTableData("order", setOrderData);
      fetchTableData("meal", setMealData);
      fetchTableData("drink", setDrinkData);
    };

    // Calls fetchData when the component mounts
    fetchData();
  }, []);

  // Column definitions for each table, specifying the keys to display.
  const movieColumns = [
    { key: "movieid", label: "Movie ID" },
    { key: "title", label: "Title" },
    { key: "runtime", label: "Runtime" },
    { key: "mparating", label: "MPA Rating" },
    { key: "year", label: "Year" },
  ];

  const theaterColumns = [
    { key: "theaterno", label: "Theater No" },
    { key: "theatername", label: "Theater Name" },
    { key: "city", label: "City" },
    { key: "totalseats", label: "Total Seats" },
  ];

  const showtimeColumns = [
    { key: "showtimeid", label: "Showtime ID" },
    { key: "starttime", label: "Start Time" },
    { key: "movieid", label: "Movie ID" },
  ];

  const showingsColumns = [
    { key: "showtimeid", label: "Showtime ID" },
    { key: "theaterno", label: "Theater No" },
  ];

  const seatColumns = [
    { key: "seatid", label: "Seat ID" },
    { key: "theaterno", label: "Theater No" },
    { key: "seatrow", label: "Seat Row" },
    { key: "seatcolumn", label: "Seat Column" },
  ];

  const ticketColumns = [
    { key: "ticketid", label: "Ticket ID" },
    { key: "price", label: "Price" },
    { key: "seatid", label: "Seat ID" },
    { key: "showtimeid", label: "Showtime ID" },
    { key: "available", label: "Available:" },
  ];

  const orderColumns = [
    { key: "orderid", label: "Order ID" },
    { key: "seatid", label: "Seat ID" },
    { key: "mealid", label: "Meal ID" },
    { key: "drinkid", label: "Drink ID" },
    { key: "specialinstructions", label: "Special Instructions" },
  ];

  const mealColumns = [
    { key: "mealid", label: "Meal ID" },
    { key: "mealname", label: "Meal Name" },
    { key: "price", label: "Price" },
  ];

  const drinkColumns = [
    { key: "drinkid", label: "Drink ID" },
    { key: "drinkname", label: "Drink Name" },
    { key: "price", label: "Price" },
  ];

  return (
    <>
      <div className="all-tables-master-container">
        {/* Displays left-side tables */}
        <div className="left-tables">
          <h2>Movies:</h2>
          <Table columns={movieColumns} data={movieData} />
          <h2>Theaters:</h2>
          <Table columns={theaterColumns} data={theaterData} />
          <h2>Showtime:</h2>
          <Table columns={showtimeColumns} data={showtimeData} />
          <h2>Showings:</h2>
          <Table columns={showingsColumns} data={showingsData} />
          <h2>Seats:</h2>
          <Table columns={seatColumns} data={seatData} />
        </div>
        {/* Displays right-side tables */}
        <div className="right-tables">
          <h2>Tickets:</h2>
          <Table columns={ticketColumns} data={ticketData} />
          <h2>Orders:</h2>
          <Table columns={orderColumns} data={orderData} />
          <h2>Meals:</h2>
          <Table columns={mealColumns} data={mealData} />
          <h2>Drinks:</h2>
          <Table columns={drinkColumns} data={drinkData} />
        </div>
      </div>
    </>
  );
}

export default AllTables;
