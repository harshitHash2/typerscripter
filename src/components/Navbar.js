import React from 'react';



export const Navbar = (props) => {
  return (
    <>
    <nav className="navbar" style={{backgroundColor: props.mode=== 'light'? '#CC9933' : 'grey'}} data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand"> <sub>Ghost of </sub>Uchiha</a>
   
     
        {/* <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">Features</a>
        <a className="nav-link" href="/">Pricing</a> */}
        
  
     
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.ch_mode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>
    </>
  )
}
