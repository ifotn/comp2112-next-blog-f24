'use client';

import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [sessionCounter, setSessionCounter] = useState(0);

    return (
        <CounterContext.Provider value={{ sessionCounter, setSessionCounter }}>
            {children}
        </CounterContext.Provider>
    );
}