"use client";

import React, { useContext } from 'react';
import { CounterContext } from './counterContext';

export default function Footer() {
    // read session var from context
    const { sessionCounter } = useContext(CounterContext);

    return (
        <section className="bg-light text-center fixed-bottom p-3">
            <div className="container">
                COMP2112 | &copy; 2024 | Total Session Clicks: <span id="sessionCounter">{sessionCounter}</span>
            </div>
        </section>
    )
}