"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CounterContext } from "../components/counterContext";

export default function Logout() {
    const router = useRouter();
    const { username, setUsername } = useContext(CounterContext);
    // read domain var from .env 
    const serverApiDomain = process.env.NEXT_PUBLIC_SERVER_API_DOMAIN;

    const logout = async() => {
        try {
            const response = await fetch(`${serverApiDomain}/users/logout`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            await response.json()
            if (response.ok) {
                console.log(response);
                setUsername(null);
                router.push('/');
            }
            else {
                console.log(response);
            }
        }
        catch (Error) {
            console.log(`Error ${Error}`);
        }
    }

    logout();
    return (<></>);
}
