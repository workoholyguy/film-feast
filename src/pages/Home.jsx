import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./page-styles.css";
import "./home.css";

// import { supabase } from "../client";

function Home() {
  return (
    <>
      <div className="home-master-container">
        {/* <p>main</p> */}
        <div className="main">
          <div className="home-content-container">
            <h1>Welcome to Film Feast!</h1>
            <p>
              Film Feast is a next-generation movie theater management system
              designed to enhance the movie-watching experience by integrating
              ticket reservations, seat selection, and in-seat food and beverage
              orders. This innovative system allows customers to reserve
              tickets, order meals and drinks, and have their orders delivered
              directly to their seats—all from the comfort of their homes or
              mobile devices.
            </p>

            <h2>About Film Feast</h2>
            <p>
              In a world where convenience is key, Film Feast aims to simplify
              the cinema experience by offering a single platform that manages
              both ticketing and dining services. This system is especially
              useful for movie theaters looking to streamline operations, reduce
              wait times at counters, and provide a seamless service that keeps
              customers engaged and satisfied.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Integrated Ticketing and Seating:</strong> Customers can
                view movie schedules, select showtimes, reserve seats, and
                purchase tickets in a few clicks.
              </li>
              <li>
                <strong>In-Seat Food and Beverage Ordering:</strong> Allows
                patrons to browse a menu of snacks and drinks, place orders, and
                have them delivered directly to their seats without interrupting
                their movie experience.
              </li>
              <li>
                <strong>Real-Time Availability:</strong> View available seats
                and order items in real-time, ensuring customers have up-to-date
                options.
              </li>
              <li>
                <strong>Streamlined Theater Operations:</strong> With combined
                ticketing and kitchen management, staff can efficiently handle
                both movie scheduling and food service, all from one platform.
              </li>
            </ul>

            <h2>How It Works</h2>
            <ol>
              <li>
                <strong>Reserve Your Seat:&nbsp;</strong>
                Visit the&nbsp;&nbsp;<a href="/reserve">Buy a Ticket </a>{" "}
                &nbsp;&nbsp;page to browse showtimes and select your preferred
                seat.
              </li>
              <li>
                <span>
                  <strong>Place Your Order:</strong> On the{" "}
                  <a href="/order">Order Food</a> page, browse our selection of
                  snacks and beverages to enhance your viewing experience.
                </span>{" "}
              </li>
              <li>
                <strong>Enjoy the Show:</strong> Sit back, relax, and enjoy your
                movie while your food and drinks are brought directly to your
                seat.
              </li>
            </ol>

            <h2>Project Overview</h2>
            <p>
              Film Feast is the result of a comprehensive project that combines
              database management with a user-friendly web interface. Built with
              React and Supabase, this application leverages the power of modern
              web technologies to bring a unique and efficient service to
              moviegoers. Through a single cohesive platform, Film Feast offers
              a streamlined experience that balances convenience and quality,
              setting a new standard in cinema hospitality.
            </p>

            <p>
              Explore the system by navigating through the menu options. View
              current movies, theaters, and seat availability, or dive into the{" "}
              <a href="/tables">View All Current Tables</a> section to get a
              behind-the-scenes look at the database structure that powers Film
              Feast.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
