"use client";
import Calculator from "./components/Calculator";


export default function Home() {
  return (
    <div>
      <title>Dark Mode Calculator</title>  
      <header style={{
           fontFamily: "Poppins, sans-serif",
           fontSize: '40px',
           fontWeight: '700',
           color: '#333',
           textAlign: 'center',
           marginTop: '0px',
           marginBottom: '-90px',
           letterSpacing: '2px',
           textTransform: 'uppercase',
           textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
      }}>Minimalist Calculator</header>
    <Calculator />
  </div>
  );
}
