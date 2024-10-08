"use client";

import { useState, useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';
    })

    // create var using state hook to keep track of current contents of input box
    const [text, setText] = useState('');

    const updateText = (event) => {
        setText(event.target.value);
    }

    return (
        <main>
            <h1>Contact Us</h1>
            <input placeholder="Type something..." value={text} onChange={updateText}  />
            <p>You typed: {text}</p>
        </main>

    )
}