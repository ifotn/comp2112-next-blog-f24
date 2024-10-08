export default async function Blog() {
    // make API call to the vercel blog to retrieve its contents
    let data = await fetch('https://api.vercel.app/blog');
    let posts = await data.json();
    //console.log(posts);

    return (
        <main>
            <h1>Blog</h1>
            <p>This is a demo blog using the Fetch API and data from https://api.vercel.app/blog</p>
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        <h4>{post.title}</h4>
                        {post.author} - {post.date}
                    </li>
                ))}
            </ul>
        </main>
    )
}