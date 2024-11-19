"use client";

export default function CreatePost() {
    const submitForm = async (formData) => {
        // get current timestamp using js
        let postDate = new Date();
        console.log(`postDate: ${postDate}`);
    
        // read domain var from .env 
        const serverApiDomain = process.env.NEXT_PUBLIC_SERVER_API_DOMAIN;

        try {
            let response = await fetch(`${serverApiDomain}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.get('title'),
                    content: formData.get('content'),
                    author: formData.get('author'),
                    date: postDate
                })
            });
            // wait for response & redirect
            let apiResponse = await response.json();
            window.location.href = '/blog';
        }
        catch (error) {
            console.log(error);
        }   
    }

    return (
        <main>
            <h1>New Blog Post</h1>
            <form action={submitForm}>
                <fieldset>
                    <label htmlFor="title">Title: *</label>
                    <input name="title" required className="inputWide" />
                </fieldset>
                <fieldset>
                    <label htmlFor="body">Body: *</label>
                    <textarea name="body" required></textarea>
                </fieldset>
                <fieldset>
                    <label htmlFor="author">Author: *</label>
                    <input name="author" required className="inputWide" />
                </fieldset>
                <button className="btn btn-primary offset-4">
                    <i className="bi bi-floppy"></i> Save
                </button>
            </form>
        </main>
    );
}