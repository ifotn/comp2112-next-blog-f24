"use client";

import Link from "next/link"
import { CounterContext } from "./counterContext"
import { useContext } from "react"

export default function Header() {
    const { username } = useContext(CounterContext);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
            <Link className="navbar-brand" href="/" id="home">COMP2112 Next.js Blog</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" href="/about" id="about"><i className="bi bi-info-square"></i> About</Link>
                    <Link className="nav-link" href="/services" id="services"><i className="bi bi-list-check"></i> Services</Link>
                    <Link className="nav-link" href="/contact" id="contact"><i className="bi bi-envelope"></i> Contact</Link>
                    <Link className="nav-link" href="/blog" id="blog"><i className="bi bi-substack"></i> Blog</Link>
                </div>
                {username &&
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" href="/#"><i className="bi bi-person"></i> {username}</Link>
                        <Link className="nav-link" href="/logout" id="logout"><i className="bi bi-box-arrow-right"></i> Logout</Link>
                    </div>
                }
                {!username &&
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" href="/register" id="register"><i className="bi bi-person-add"></i> Register</Link>
                        <Link className="nav-link" href="/login" id="login"><i className="bi bi-check2-circle"></i> Login</Link>
                    </div>
                }           
            </div>
            </div>
        </nav>
    )
}