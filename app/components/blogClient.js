"use client";

import { useEffect, useContext } from "react";
import Link from "next/link";
import { CounterContext } from "./counterContext";

export default function BlogClient({ posts }) {
    // check context for global username var
    const { username } = useContext(CounterContext);
    const serverApiDomain = process.env.NEXT_PUBLIC_SERVER_API_DOMAIN;

    useEffect(() => {
        document.title = 'Blog';
    });

    const confirmDelete = (id) => {
        if (confirm('OK to delete?')) {
            deletePost(id);
            return true;
        }
        else { 
            return false;
        }
    };

    const deletePost = async(id) => {
        const response = await fetch(`${serverApiDomain}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' // include jwt for auth in fetch request
        }).then((apiResponse) => {
            console.log(apiResponse.json());
        })
    }

    return (
        <main>
            <h1>Blog</h1>
            <p>This is a demo blog using the Fetch API and data from https://vercel-blog-api-eta.vercel.app/api/v1/posts</p>
            {username && 
                <Link href="/blog/create-post" className="btn btn-primary mb-3">
                    <i className="bi bi-plus-circle"></i> Create New Post
                </Link>
            }               
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post._id} className="list-group-item">
                        <h4>
                            <Link href={`/blog/${post._id}`}>
                                {post.title}
                            </Link>                                
                        </h4>
                        {post.author} - {new Date(post.date).toLocaleDateString()}
                        {username == post.author &&
                            <a className="btn btn-danger offset-1" onClick={() => confirmDelete(post._id)}>Delete</a>
                        }
                    </li>
                ))}
            </ul>
        </main>
    );
}