
var noOfTickets=0
function uniqueID(){
    let id=0;
    return function generate(){
        id++;
        return id
    }
}
 let Snumber =uniqueID()

let tickets=[]
for(let i=1;i<=50;i++){
   
    tickets.push({
        id :Snumber(),
        seatNumber : "A"+i,
        price : 1200,
        status : "Available"
})}


function listAvailableTickets(){

    let list = tickets.filter(ticket => ticket.status === "Available");
   
    noOfTickets = list.length;
    console.log(`Tickets Available :${noOfTickets}`);
}



async function bookTicket(sno,name){
    try{
let res=tickets.find(ticket=>ticket.seatNumber===sno)
if(res===undefined){
    throw new Error("Invalid Seat Number "+sno)
}
else if(res.status==="Booked"){
   throw new Error("Seat "+sno+ " Already Booked") 
}
res.status="Booked"
res.pname=name
noOfTickets--

console.log(`Tickets Booked : ${sno} for ${name}`)
await delay(2000)
console.log("saved to database !")
}
catch(err){
    console.log(err.message)
}

}


function cancelTicket(sno){
    try{
let res1=tickets.find(ticket=>ticket.seatNumber===sno)
if(res1===undefined){
    throw new Error("Tickets Cancelled :Seat "+ sno+" Invalid Seat Number")
}
else if(res1.status==="Available"){
   throw new Error("Tickets Cancelled :Seat "+ sno+" is Not Booked") 
}
res1.pname = null;

res1.status="Available"
noOfTickets++
console.log(`Tickets Cancelled :${sno}`)
}
catch(err){
    console.log(err.message)
}

}
function searchTickets(name){

    let res = tickets.find(ticket => ticket.pname === name );
    if(res){
        console.log(`Ticket Searched : ${res.seatNumber}`);
    } else {
        console.log("Ticket Searched :No booking found for " + name);
    }
}


function getBookingSummary(){
    console.log("Booking Summary ")
    console.log(`Total booked : ${50 - noOfTickets}`);
    console.log(`Total Available: ${noOfTickets}`);
    let bookedTickets = tickets.filter(ticket => ticket.status === "Booked");
    let sum = bookedTickets.reduce((acc, curr) => acc + curr.price, 0);

    console.log(`Total Revenue : ${sum}`);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
listAvailableTickets()

   bookTicket("A1", "Ritesh");
   bookTicket("A2", "John");

cancelTicket("A3")
listAvailableTickets()
searchTickets("Ritesh")
getBookingSummary()