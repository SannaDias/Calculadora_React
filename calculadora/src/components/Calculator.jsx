import { useState } from "react"; 
import "./Calculator.css"

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState("0");
    const [pendingOperation, setPendingOperation] = useState(null)
    const [pedingValue, setPedingValue] = useState(null);
    const [completeOperation, setCompleteOperation] = useState("");

    const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7',  '8', '9'];
    const operations = ["+", "-", "*", "/"];

    const handleClick =(val) => {
        setCurrentValue(prevValue =>{
            if(prevValue == '0'){
                return val;
            } else {
                return prevValue + val;
            }
        });
        setCompleteOperation((prevOperation) => prevOperation + val); 
    }

    const handleClear = () => {
      setCurrentValue("0");
      setPedingValue(null);
      setCompleteOperation(null);
      setCompleteOperation("");
    }

  return (
    <div className="calculator">
    <div className="complete-operation">{completeOperation}</div>
    <div className="display">{currentValue}</div>
    <div className="buttons">
    <button onClick={handleClear}>AC</button>
    {keypadNumbers.map((num) => (
          // Exibindo o número dentro do botão
          <button key={num} onClick={() => handleClick(num)}>
            {num}
            </button> 
        ))}

        {operations.map((operation) => (
          // Exibindo a operação dentro do botão
          <button key={operation}>{operation}</button> 
        ))}  
    </div>
    <button>=</button>
  </div>
  ) 
}

export default Calculator
