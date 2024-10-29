"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BlogClient({ posts }) {
    useEffect(() => {
        document.title = 'Blog';
    });

    return (
        <main>
            <h1>Blog</h1>
            <p>This is a demo blog using the Fetch API and data from https://api.vercel.app/blog</p>
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        <h4>
                            <Link href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>                                
                        </h4>
                        {post.author} - {post.date}
                    </li>
                ))}
            </ul>
        </main>
    );
}