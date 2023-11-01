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
    // return <main className="menu">
    //     <h2>Our menu</h2>
    //     <ul className="pizzas">
    //     {/* {pizzaData.map(pizza => <Pizza name={pizza.name} 
    //                                   ingredients={pizza.ingredients}
    //                                   photoName={pizza.photoName}
    //                                   price={pizza.price}
    //                                   soldOut={pizza.soldOut}
    //                                   />
    //                       )} */}
    //                       {/* Below foreach not worked */}
    //       {/* {pizzaData.forEach(function(value,key){<Pizza pizzaObj={value} key={value.name}/>})}
    //       The forEach() method does not returns a new array based on the given array.
    //       */}
    //      {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/> )
    //                       )}


    //     </ul >
        {/* <Pizza name="Pizza Spinici"
                ingredients="Tomato, potato"
                photoName="pizzas/spinaci.jpg"
                price={10}/>
        <Pizza name="Pizza Funghi"
                ingredients="Tomato, Chilli"
                photoName="pizzas/funghi.jpg"
                price={11}/> */}
        // const pizzas = [];
        const pizzas = pizzaData;
        const numPizzas = pizzas.length;
        return (
          <main className="menu">
            <h2> Menu</h2>
            {/* {numPizzas >0 && ( <ul className="pizzas">
              {pizzas.map((pizza)=>(<Pizza pizzaObj={pizza} key={pizza.name}/>
              ))
              }
               </ul> )} */}

               {numPizzas >0 ? ( 
               <>
               {/* <React.Fragment></React.Fragment> */}
               <p> This is test pizza para</p>
               <ul className="pizzas">
              {pizzas.map((pizza)=>(<Pizza pizzaObj={pizza} key={pizza.name}/>
              ))
              }
               </ul> 
               </>) : <p>We are still working on a menu</p>
               }               
          </main>
        )       
}

// {Destructure the props with{}}
function Pizza({pizzaObj}){
  // if (pizzaObj.soldOut) return null;

  return <li className={`pizza ${pizzaObj.soldOut? "sold-out":""}`}>
            {/* <img src={props.photoName} alt="props.name"/>
            <h3>{props.name}</h3>
            <span>{props.ingredients}</span>
            <div>
            <span>$ {props.price + 8}</span>
            </div>
            <div>
            <span> {props.soldOut}</span>
            </div> */}
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            
            <span>{pizzaObj.soldOut ? "Sold Out": pizzaObj.price}</span>
            
            <span> {pizzaObj.soldOut}</span>
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
    // return <footer className="footer">{new Date().toLocaleString()}  locale time</footer>
    return (<footer className="footer">
      {isOpen ? <Order closeHour={closeHour} openHours = {openHours}/> : <p>Happy to Welcome</p>}
      </footer>      
      );
      }

function Order({closeHour, openHours}){
  return <div className="order"> <p>Currently open from {openHours}:00 until {closeHour}:00 </p>      
      <button className="btn">Order</button>
       </div>
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
