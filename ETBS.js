// closure used to create Uniqye tickets
function ticketId() {
  let id = 1;
  return function () {
    return id++;
  };
}
let getId = ticketId();
let tickets = Array.from({ length: 50 }, (_, i) => {
  return {
    id: getId(),
    seatNumber: `A${i + 1}`,
    price: 500,
    status: "available",
    customerName: null,
  };
});
function listAvailabletickets() {
  const available = tickets.filter((ticket) => ticket.status == "available");
  available.forEach(({ seatNumber, price, status }) => {
    console.log(
      `SeatNumber: ${seatNumber}, Price: ${price}, Status: ${status}`
    );
  });
}
//listAvailabletickets()
function saveTodatabase(ticket) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Ticket for ${ticket.seatNumber} saved to database`);
    }, 2000);
  });
}
async function bookTicket(seatNumber, customerName) {
  const ticket = tickets.find((t) => t.seatNumber == seatNumber);
  if (!ticket) {
    throw new Error("Invalid seat number");
  }
  if (ticket.status == "booked") {
    throw new Error("Seat already booked");
  }
  const updatedTicket = { ...ticket, status: "booked", customerName };
  tickets = tickets.map((t) =>
    t.seatNumber == seatNumber ? updatedTicket : t
  );
  console.log(`Booking seat ${seatNumber} for ${customerName}...`);
  const result = await saveTodatabase(updatedTicket);
  console.log(result);
  return updatedTicket;
}

//bookTicket("A5", "Kalai");
async function cancelTicket(seatNumber) {
  const ticket = tickets.find((t) => t.seatNumber == seatNumber);
  if (!ticket) {
    throw new Error("Invalid seat Number");
  }
  if (ticket.status == "available") {
    throw new Error("Seat is not booked");
  }
  const updatedTicket = { ...ticket, status: "available", customerName: null };
  tickets = tickets.map((t) =>
    t.seatNumber == seatNumber ? updatedTicket : t
  );
  console.log(`Canceling seat ${seatNumber}...`);
  const result = await saveTodatabase(updatedTicket);
  console.log(result);
  return updatedTicket;
}
//cancelTicket("A5");

function searchTickets(customerName) {
  const ticket = tickets.find((t) => t.customerName == customerName);
  if (!ticket) console.log(`No tickets found for ${customerName}`);
  else console.log(`${ticket.seatNumber} booked by ${ticket.customerName}`);
  return ticket;
}
searchTickets("Kalai");

function getBookingSummary() {
  const totalBooked = tickets.filter(t => t.status == "booked").length;
  let totalRevenue = tickets.filter(t => t.status == "booked")
                            .reduce((sum, t) => sum + t.price, 0);
  const totalAvailableTickets = tickets.length - totalBooked;

  console.log("Booking Summary: ");
  console.log(`Total Booked: ${totalBooked}`);
  console.log(`Total Available: ${totalAvailableTickets}`);
  console.log(`Total Revenue: ${totalRevenue}`);
}
//getBookingSummary();

//Example Usage

(async () => {
    listAvailabletickets();
    await bookTicket("A1" , "Kalai");
    await bookTicket("A2" , "Keerthana");
    searchTickets("Kalai");
    searchTickets("Keerthana");
    await cancelTicket("A2");
    getBookingSummary();

})();