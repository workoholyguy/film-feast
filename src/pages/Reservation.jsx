import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import "./page-styles.css";
import "./reservation.css";
import Table from "../components/Table";

function Reservation() {
  const [ticketData, setTicketData] = useState([]); // Stores ticket data fetched from the database.
  const [selectedTickets, setSelectedTickets] = useState({}); // Tracks tickets selected by the user for reservation.

  // Fetches ticket data from the Supabase database when the component mounts.
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("ticket").select("*");
      if (error) console.error("Error fetching tickets:", error);
      else setTicketData(data);
    };
    fetchData();
  }, []);

  // Toggles the selection of a ticket when the user clicks the checkbox.
  const toggleTicketSelection = (ticketid, available, price) => {
    if (!available) return; // Do nothing if the ticket is not available.
    setSelectedTickets((prev) => {
      const updatedSelections = { ...prev };
      if (updatedSelections[ticketid]) delete updatedSelections[ticketid];
      else updatedSelections[ticketid] = price;
      return updatedSelections;
    });
  };

  // Calculates the total price of the selected tickets.
  const totalPrice = Object.values(selectedTickets).reduce(
    (sum, price) => sum + price,
    0
  );

  // Handles the reservation process by updating the availability of selected tickets in the database.
  const handleSubmit = async () => {
    const selectedIds = Object.keys(selectedTickets); // Collects the IDs of selected tickets.
    if (selectedIds.length === 0) {
      alert("Please select at least one ticket to reserve");
      return;
    }
    const { error } = await supabase
      .from("ticket")
      .update({ available: false }) // Marks the selected tickets as unavailable.
      .in("ticketid", selectedIds);
    if (error) console.error("Error updating ticket status:", error);
    else {
      alert("Tickets reserved successfully!");
      setSelectedTickets({}); // Clears selected tickets after successful reservation.
      const { data, error } = await supabase.from("ticket").select("*"); // Refreshes ticket data.
      if (error) console.error("Error refetching tickets:", error);
      else setTicketData(data);
    }
  };

  // Resets all tickets to available in the database.

  const handleReset = async () => {
    // Update all rows by using a `not` condition that doesn't restrict the update to any specific rows

    const { error } = await supabase
      .from("ticket")
      .update({ available: true })
      .neq("ticketid", 0); // Adds a WHERE clause that includes all rows (as all IDs are presumably > 0)

    if (error) {
      console.error("Error resetting ticket status:", error);
    } else {
      alert("All the tickets have been reset to available");
      setSelectedTickets({}); // Clears any selected tickets in the UI.
      const { data, error } = await supabase.from("ticket").select("*"); // Refreshes ticket data.
      if (error) {
        console.error("Error Fetching Tickets: ", error);
      } else {
        setTicketData(data);
      }
    }
  };

  // Defines the columns to be displayed in the tickets table.
  const ticketColumns = [
    { key: "ticketid", label: "Ticket ID" },
    { key: "price", label: "Price" },
    { key: "seatid", label: "Seat ID" },
    { key: "showtimeid", label: "Showtime ID" },
    { key: "available", label: "Available" },
  ];

  return (
    <div className="reservation-master-container">
      <h1>This a Page to Reserve Tickets:</h1>
      <Table
        columns={ticketColumns}
        data={ticketData}
        renderCustomCell={(row) =>
          row.available ? (
            <input
              type="checkbox"
              checked={!!selectedTickets[row.ticketid]}
              onChange={() =>
                toggleTicketSelection(row.ticketid, row.available, row.price)
              }
            />
          ) : (
            <span>Not available</span>
          )
        }
      />
      <div className="reservation-summary">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button
          onClick={handleSubmit}
          disabled={Object.keys(selectedTickets).length === 0}
        >
          Reserve Selected Tickets
        </button>
        <button onClick={handleReset}>Reset Tickets</button>
      </div>
    </div>
  );
}

export default Reservation;
