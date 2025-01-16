"use client";
import { useState } from "react";
import styles from "../styles/Calculator.module.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Replace symbols for proper calculation
        const expression = input
        .replace(/×/g, "*") 
        .replace(/÷/g, "/")
        .replace(/sin(\d+(\.\d+)?)/g, (_, num) => `Math.sin(${num})`)
        .replace(/cos(\d+(\.\d+)?)/g, (_, num) => `Math.cos(${num})`)
        .replace(/tan(\d+(\.\d+)?)/g, (_, num) => `Math.tan(${num})`)
        .replace(/log(\d+(\.\d+)?)/g, (_, num) => `Math.log10(${num})`);
        const evaluatedResult = Function(`return ${expression}`)();

        setResult(parseFloat(evaluatedResult).toFixed(3));
      } catch {
        setResult("Error");
      }
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    }
      else if (value === "AC") {
        setInput("")
        setResult("0")
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "sin","7", "8", "9", "÷",
    "cos","4", "5", "6", "×",
    "tan","1", "2", "3", "-",
    "log","0", ".", "DEL", "+",
    "AC","=",

  ];

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.input}>{input || "0"}</div>
        <div className={styles.result}>{result}</div>
      </div>
      <div className={styles.buttons}>
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`${styles.button} ${btn === "=" ? styles.equals : ""} ${btn === "AC" ? styles.ac : ""}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
