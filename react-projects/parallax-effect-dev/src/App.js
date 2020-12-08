import * as React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="App">
      <main className="wrapper">
        <section className="parallax bg-img-1">
          <h1>First Section</h1>
        </section>
        <section className="stationary">Second section</section>
        <section className="parallax bg-img-2"></section>
        <section className="stationary">Third Section</section>
        <section className="parallax bg-img-3"></section>
      </main>
    </div>
  );
}