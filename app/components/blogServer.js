import BlogClient from "./blogClient";

// we can use async to call the api as there's no use client here.
// this is a next server component instead 
export default async function BlogServer() {
    // make API call to the vercel blog to retrieve its contents
    //let data = await fetch('https://api.vercel.app/blog');
    // read domain var from .env 
    const serverApiDomain = process.env.NEXT_PUBLIC_SERVER_API_DOMAIN;

    let data = await fetch(`${serverApiDomain}/posts`, {
        next: {
            revalidate: 0
        }
    });
    let posts = await data.json();

    // render blog client and pass all blog json as a prop
    return (
        <BlogClient posts={posts} />
    );
}