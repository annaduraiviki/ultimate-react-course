import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
       

function App(){
    return <div className="container">
        <Header/>
        <h2>HelloReact</h2>
        <Menu/>
        <Footer/>
        </div>
}

function Menu(){
    return <main className="menu">
        <h2>Our menu</h2>
        <Pizza name="Pizza Spinici"
                ingredients="Tomato, potato"
                photoName="pizzas/spinaci.jpg"/>
        <Pizza name="Pizza Funghi"
                ingredients="Tomato, Chilli"
                photoName="pizzas/funghi.jpg"/>
        
    </main>
}

function Pizza(props){
    return <div>
            <img src={props.photoName} alt="props.name"/>
            <h3>{props.name}</h3>
            <span>{props.ingredients}</span>
        </div>
}
function Footer(){
    const hour = new Date().getHours();
    console.log(hour)
    const openHours = 12;
    const closeHour = 24;
    const isOpen = hour >= openHours && hour <= closeHour;
    console.log(isOpen)
    // if (hour <= openHours && hour > closeHour)
    //     alert("Closed");
    // else
    //     alert("OPen")
    return <footer className="footer">{new Date().toLocaleString()}  locale time</footer>
}



function Header(){
    // const style = {color:"red", fontSize: "32px"}
    const style = {}
    return <header className="header"><h1 style={style} >test</h1></header>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode>
    
    <App/>
</React.StrictMode>
)