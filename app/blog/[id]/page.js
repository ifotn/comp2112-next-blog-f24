import Link from "next/link";

export default async function Post({ params }) {
    // fetch selected blog post from vercel api
    let data = await fetch(`https://api.vercel.app/blog/${params.id}`);
    let post = await data.json();

    return (
        <main>
            <h1>{post.title}</h1>
            <h3>{post.author} - {post.date}</h3>
            <div>
                {post.content}
            </div>
            <Link href="/blog" className="btn btn-primary">Back to Blog</Link>
        </main>
    )
}