// Member has 2 required props: name & title
export default function Member({ name, title }) {
    return (
        <article className="card">
            <h4 className="card-title p-3">
                {name}
            </h4>
            <p className="card-body">
                {title}
            </p>
        </article>
    )
}