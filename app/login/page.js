"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { router, useRouter } from "next/navigation";

export default function Login() {
    useEffect(() => {
        document.title = 'Login';
    });

    const router = useRouter();

    const login = async(formData) => {
        try {
            const response = await fetch('https://vercel-blog-api-eta.vercel.app/api/v1/users/login', {
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
                router.push("/blog");
            }
            else {
                console.log(`Login Error: ${response.msg}`);
            }
        }
        catch (Error) {
            console.log(`Login Error: ${Error}`);
        }
    }

    return (
        <main>
            <h1>Login</h1>
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