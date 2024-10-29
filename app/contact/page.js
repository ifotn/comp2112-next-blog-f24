"use client";

import { useState, useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';
    })

    // create var using state hook to keep track of current contents of input box
    const [text, setText] = useState('');

    // create an error message state var we can show if needed
    const [errMessage, setErrMessage] = useState('');

    const updateText = (event) => {
        setText(event.target.value);
        // if (text === '') {
        //     setErrMessage('Please enter some text');
        // }
        // else {
        //     setErrMessage('');
        // }
    }

    const submitForm = () => {
        if (text === '') {
            setErrMessage('Please enter some text');
        }
        else {
            alert(`You submitted this text: ${text}`);
            setErrMessage(null);
        }
    }

    return (
        <main>
            <h1>Contact Us</h1>
            <input placeholder="Type something..." value={text} onChange={updateText}  />
            <span className="text-danger">{errMessage}</span>
            <p>You typed: {text}</p>
            <button onClick={submitForm}>Submit</button>
        </main>

    )
}