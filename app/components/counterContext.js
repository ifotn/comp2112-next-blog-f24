'use client';

import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [sessionCounter, setSessionCounter] = useState(0);
    const [username, setUsername] = useState(null);

    return (
        <CounterContext.Provider value={{ sessionCounter, setSessionCounter, username, setUsername }}>
            {children}
        </CounterContext.Provider>
    );
}