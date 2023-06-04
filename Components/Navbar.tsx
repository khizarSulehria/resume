import Link from "next/link"
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export default function Navbar(){
    return (
        
        <>
        <header className="site-header">
            <nav className="navbar navbar-expand-lg site-nav">
                <div className="container">
                <Link className="navbar-brand" href="/">Khizar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ol className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/experience">Experience</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact</Link>
                    </li>
                </ol>
                <form className="form-inline">
                    <button className="buttonTheme resume-btn" type="button">Resume</button>
                </form>
                
                </div>
                </div>
            </nav>
        </header>

        <LeftNav />
        <RightNav />
        </>
        
      
    );
}