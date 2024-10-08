"use client";

import { useState } from "react";

export default function Home() {
  // use the State hook to keep track of the current value of our counter var
  // our counter var has a default value of 0
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  }

  return (
      <main>
        <p>
          We&apos;re building this site in COMP2112 to learn React and Next.js.
        </p>
        <section>
          <p>Count: {counter}</p>
          <button className="btn btn-primary" onClick={updateCounter}>Click Me</button>
        </section>
      </main>
  );
}
