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
            <p>This is a demo blog using the Fetch API and data from https://vercel-blog-api-eta.vercel.app/api/v1/posts</p>
            <Link href="/blog/create-post" className="btn btn-primary mb-3">
                <i className="bi bi-plus-circle"></i> Create New Post
            </Link>
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post._id} className="list-group-item">
                        <h4>
                            <Link href={`/blog/${post._id}`}>
                                {post.title}
                            </Link>                                
                        </h4>
                        {post.author} - {new Date(post.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </main>
    );
}