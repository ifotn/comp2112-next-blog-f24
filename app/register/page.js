"use client"

import { useEffect, useState } from "react"

export default function Register() {
    useEffect(() => {
        document.title = 'Register';
    });

    const [message, setMessage] = useState('Password must be 8 characters with 1 upper, 1 lower, 1 digit');
    const [messageClass, setMessageClass] = useState('alert alert-primary');
    const [loginButtonClass, setLoginButtonClass] = useState('.d-none');

    const onSubmit = async(formData) => {
        // validate passwords
        if (formData.get('password') != formData.get('confirm')) {
            setMessage('Passwords do not match');
            setMessageClass('alert alert-danger');
            return; 
        }

        // passwords match, send new user to api
        try {
            let reponse = await fetch('https://vercel-blog-api-eta.vercel.app/api/v1/users/register', {
            //let reponse = await fetch('http://localhost:4000/api/v1/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.get('username'),
                    password: formData.get('password')
                })
            });

            let apiResponse = await reponse.json();
            console.log(apiResponse);
            if (apiResponse.success == true) {
                setMessage('Registration Successful. Click the Login button below.');
                setMessageClass('alert alert-success');
                setLoginButtonClass('btn btn-primary');
            }
            else {
                setMessage(`Registration Unuccessful. ${apiResponse.msg}`);
                setMessageClass('alert alert-danger');
            }
        }
        catch (error) {
            setMessage(`Registration Unuccessful. ${error}`);
            setMessageClass('alert alert-danger');
        }
    };

    return (
        <main>
          <h1>Register</h1>
          <h3 className={messageClass}>{message}</h3>
          <form action={onSubmit} method="post">
            <fieldset className="pb-3">
              <label htmlFor="username">Username:</label>
              <input name="username" placeholder="Username" required />
            </fieldset>
            <fieldset className="pb-3">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
            </fieldset> 
            <fieldset className="pb-3">
              <label htmlFor="confirm">Confirm Password:</label>
              <input type="password" name="confirm" placeholder="Confirm Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
            </fieldset>   
            <button className="btn btn-primary me-1 offset-1">
              <i className="bi bi-person-add"></i> Register
            </button>
            <button className={loginButtonClass}>
                <i className="bi bi-circle2-check"></i> Login
            </button>
          </form>
        </main>
      )
}