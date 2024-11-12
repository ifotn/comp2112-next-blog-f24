"use client";

export default function Login() {
    return (
        <main>
            <h1>Login</h1>
            <form>
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