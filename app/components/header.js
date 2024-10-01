import Link from "next/link"

export default function Header() {
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
                <a className="nav-link" href="#" id="lab2"><i className="bi bi-list-task"></i> Lab 2</a>
                </div>
            </div>
            </div>
        </nav>
    )
}