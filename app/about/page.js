"use client";

import Member from "../components/member"
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = 'About';
    });

    return (
        <main>
            <h1>About this Site</h1>
            <p>We built this as our 1st React page component.</p>
            <h2>Team Members</h2>
            <Member name="Mary Berry" title="President" />
            <Member name="Harry Parrahands" title="VP" />
            <Member name="Ben Deeguy" title="Treasurer" />
        </main>
    )
}