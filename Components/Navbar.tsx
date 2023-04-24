export default function Navbar(){
    return (
        

        <header className="site-header">
            <nav className="navbar navbar-expand-lg site-nav">
                <div className="container">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ol className="navbar-nav ms-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Experince</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Work</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ol>
                <form className="form-inline">
                    <button className="buttonTheme resume-btn" type="button">Resume</button>
                </form>
                
                </div>
                </div>
            </nav>
        </header>
        
      
    );
}