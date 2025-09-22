const tickets = [];
for(let i=1;i<=50;i++){
    tickets.push({
        id:i,
        seatNumber:`A${i}`,
        price:250,
        status:"available",
        customerName:null
    });
}

function saveBooking(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Saving to database...Data saved successfully!")
        },2000);
    });
}
function listAvailableTickets(){
    const availableTickets= tickets.filter(ticket=> ticket.status === "available");
    console.log(`Available Tickets:${availableTickets.length}`);
}

async function bookTicket(seatNumber,customerName){
    const ticket = tickets.find(t=>t.seatNumber === seatNumber)
    if(!ticket){
        throw new Error(`Invalid SeatNumber`)
    }
    else if(ticket.status === "booked"){
        throw new Error(`SeatNo:${seatNumber} is already booked`)
    }
    else{
     ticket.status="booked";
     ticket.customerName = customerName
     console.log(`Ticket Booked: ${seatNumber} for ${customerName}`)
     const result = await saveBooking()
     console.log(result)
    }
}
function cancelTicket(seatNumber){
    const ticket = tickets.find(t => t.seatNumber === seatNumber);
    if(!ticket){
        throw new Error(`Invalid SeatNumber`) 
    }
    else if(ticket.status === "available"){
        throw new Error(`SeatNumber : ${seatNumber} does not booked yet`)
    }
    else{
        ticket.status="available"
        ticket.customerName=null
        console.log(`Ticket cancelled: ${seatNumber} has been cancelled....`)
    }
}

function searchTicket(seatNumber){
    const searchTicket = tickets.find(t => t.seatNumber === seatNumber)
    if(!searchTicket){
        throw new Error(`Invalid SeatNumber`)
    }
    else{
        console.log(`Search Result: ${searchTicket.seatNumber} booked by ${searchTicket.customerName}`)
    }
}

function getBookingSummary(){
    const bookedTickets = tickets.filter(t=>t.status === "booked");
    const availableTickets = tickets.filter(t=>t.status === "available")
    const totalRevenue = bookedTickets.reduce((sum,{price})=> sum+price,0)
    console.log("BookingSummary:")
    console.log(`Total Booked: ${bookedTickets.length}`)
    console.log(`Total Available: ${availableTickets.length}`)
    console.log(`Total Revenue :$${totalRevenue}`)
}

(
async function runDemo() {
bookTicket("A11","Gokila")
bookTicket("A10","Kavin")
listAvailableTickets()
cancelTicket("A11")
listAvailableTickets()
searchTicket("A10")
getBookingSummary();
})();