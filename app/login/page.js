"use client";

import { useEffect, useState, useContext } from "react";
import { CounterContext } from "../components/counterContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
    useEffect(() => {
        document.title = 'Login';
    });

    const [message, setMessage] = useState('Please enter your credentials');
    const [messageClass, setMessageClass] = useState('alert alert-primary');
    const { username, setUsername } = useContext(CounterContext);
    // read domain var from .env 
    const serverApiDomain = process.env.NEXT_PUBLIC_SERVER_API_DOMAIN;

    const router = useRouter();

    const login = async(formData) => {
        try {
            const response = await fetch(`${serverApiDomain}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.get('username'),
                    password: formData.get('password')
                }),
                credentials: 'include'  // Include credentials for CORS with cookies
            });            
            
            if (response.ok) {
                console.log(response.json)
                setUsername(formData.get('username'));
                //router.push('/blog');
            }
            else {
                console.log(`Login Error: ${response.msg}`);
                setMessage(`Invalid Login`);
                setMessageClass('alert alert-danger');
            }
           
        }
        catch (Error) {
            console.log(`Login Error: ${Error}`);
            setMessage(`Login Error ${Error}`);
            setMessageClass('alert alert-danger');
        }
    }

    return (
        <main>
            <h1>Login</h1>
            <h3 className={messageClass}>{message}</h3>
            <form action={login}>
                <fieldset className="pb-3">
                    <label htmlFor="username">Username: *</label>
                    <input name="username" id="username" required />
                </fieldset>
                <fieldset className="pb-3">
                    <label htmlFor="password">Password: *</label>
                    <input name="password" id="password" required type="password" />
                </fieldset> 
                <button className="btn btn-primary offset-1">
                    <i className="bi bi-check2-circle"></i> Login
                </button>
            </form>
        </main>
    )
}