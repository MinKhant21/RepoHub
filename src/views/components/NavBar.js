const NavBar = () => {
    return (
        <div style={{padding:"10px",backgroundColor:"whitesmoke"}}>
            <nav className="navbar bg-body-tertiary container">
                <div className="container-fluid">
                    <h3 style={{marginLeft:"10px"}} className="navbar-brand">RepoHub</h3>
                    {/*<form className="d-flex" role="search">*/}
                    {/*    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">*/}
                    {/*</form>*/}
                    <button className="btn btn-outline-success" type="submit">Search</button>

                </div>
            </nav>
        </div>
    )
}

export  default  NavBar;