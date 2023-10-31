import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: true,
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
        <ul className="pizzas">
        {/* {pizzaData.map(pizza => <Pizza name={pizza.name} 
                                      ingredients={pizza.ingredients}
                                      photoName={pizza.photoName}
                                      price={pizza.price}
                                      soldOut={pizza.soldOut}
                                      />
                          )} */}
                          {/* Below foreach not worked */}
          {/* {pizzaData.forEach(function(value,key){<Pizza pizzaObj={value} key={value.name}/>})}
          The forEach() method does not returns a new array based on the given array.
          */}
         {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/> )
                          )}


        </ul >
        {/* <Pizza name="Pizza Spinici"
                ingredients="Tomato, potato"
                photoName="pizzas/spinaci.jpg"
                price={10}/>
        <Pizza name="Pizza Funghi"
                ingredients="Tomato, Chilli"
                photoName="pizzas/funghi.jpg"
                price={11}/> */}
        
    </main>
}

function Pizza(props){
    return <li>
            {/* <img src={props.photoName} alt="props.name"/>
            <h3>{props.name}</h3>
            <span>{props.ingredients}</span>
            <div>
            <span>$ {props.price + 8}</span>
            </div>
            <div>
            <span> {props.soldOut}</span>
            </div> */}
            <img src={props.pizzaObj.photoName} alt="props.name"/>
            <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            
            <span>$ {props.pizzaObj.price + 8}</span>
            
            <span> {props.pizzaObj.soldOut}</span>
            </div>
        </li>
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
    return <header className="header"><h1 style={style} >Moraccan Pizza</h1></header>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode>    
    <App/>
</React.StrictMode>
)
