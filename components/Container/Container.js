import Link from "next/link";

export default function Container({children}) {
  return (
    <>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid justify-content-center">
                <Link href="/" className="navbar-brand mx-6">
                    Accueil
                </Link>
                <Link href="/blog" className="navbar-brand mx-6">
                    Blog
                </Link>
                <Link href="/utilisateurs" className="navbar-brand mx-6">
                    Liste
                </Link>
            </div>
        </nav>
        {children}
    </>
  )
}
