 
import {useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 

export default function App(){
  const [step, setStep] = useState(1)
  const [objname, setName] = useState({name:'Anna'})
  const [isOpen, setIsOpen] = useState(true)
  function handlePrevious(){
    if(step > 1)
    setStep(step-1)
    setName({name:'Axsu'})
      }

  function handleNext(){
    if(step < messages.length)
    {
      setStep(step+1)
    }
    setName({name:'Advi'})
  }
  return (
    <div>
      <button  className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>

    {isOpen &&
      <div className="steps">
      <div className="numbers">
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">Step {step}:{messages[step -1]} {objname.name}</p>
      <div className="buttons">
      <button style={{backgroundColor: 'purple', color: "#fff"}} onClick={handlePrevious}>previous</button>
      <button style={{backgroundColor: 'purple', color: "#fff"}} onClick={handleNext}>next</button>
      </div>
      </div>
    }
    </div>
      )
}

 