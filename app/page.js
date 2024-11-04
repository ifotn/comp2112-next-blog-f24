"use client";

import React, { useState, useEffect, useContext } from "react";
// context for global counter var
import { CounterContext } from "./components/counterContext";

export default function Home() {
  // use the Effect hook to set the page title
  useEffect(() => {
    document.title = 'Home';
    console.log('Home loaded');
  })

  // use the State hook to keep track of the current value of our counter var
  // our counter var has a default value of 0
  const [counter, setCounter] = useState(0);

  // session counter state var
  const { sessionCounter, setSessionCounter } = useContext(CounterContext);

  const updateCounter = () => {
    setCounter(counter + 1);
    setSessionCounter(sessionCounter + 1);
  }

  const resetCounter = () => {
    setCounter(0);
    setSessionCounter(0);
  }

  return (
      <main>
        <p>
          We&apos;re building this site in COMP2112 to learn React and Next.js.
        </p>
        <section>
          <p>Count: {counter}</p>
          <button className="btn btn-primary" onClick={updateCounter}>Click Me</button>
          <button className="btn btn-primary" onClick={resetCounter}>Reset</button>
        </section>
      </main>
  );
}
