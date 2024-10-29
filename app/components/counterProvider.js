'use client';

import { CounterProvider } from "./counterContext";

const Provider = ({ children }) => {
    return <CounterProvider>{children}</CounterProvider>
}

export default Provider;