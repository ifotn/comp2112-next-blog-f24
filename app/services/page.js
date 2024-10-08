"use client";

import { useEffect } from "react";

export default function Services() {
    useEffect(() => {
        document.title = 'Services';
    });
    
    return (
        <main>
            <h1>Services</h1>
            <p>We do some stuff...</p>
        </main>
    )
}