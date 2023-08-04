import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const onClickHandler=()=>{
        props.toggle();
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode==="black"?"black":"light"} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-dark" to="/"><strong className={`text-${props.mode==="black"?"white":"black"}`}>TextUtil</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className={`navbar-nav text-${props.mode==="black"?"white":"black"}`}>
                            <Link className="nav-link active " aria-current="page" to="/"><strong className={`text-${props.mode==="black"?"white":"black"}`}>Home</strong></Link>
                            <Link className="nav-link " to="/about"><strong className={`text-${props.mode==="black"?"white":"black"}`}>About</strong></Link>
                            <Link className="nav-link " to="/contact"><strong className={`text-${props.mode==="black"?"white":"black"}`}>Contact</strong></Link>
                        </div>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" onClick={onClickHandler} />
                        <label className={`form-check-label text-${props.mode==="black"?"white":"black"}`} for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}
