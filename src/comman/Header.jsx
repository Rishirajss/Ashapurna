import { Link } from "react-router-dom";
import logo from '../img/logo.webp';
import '../css/Style.css'

export function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white fixed-top py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                         <img className="img-fluid position-absolute top-0" src={logo} width="174px" height="130px" style={{zIndex: "99999"}} alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-5 mt-lg-0 mb-2 mb-lg-0">
                            <li className="nav-item ms-4">
                                <Link className="nav-link fs-16 fw-400" aria-current="page" to="/">Home</Link>
                            </li>
                           
                            <li className="nav-item dropdown ms-4" cssClass='e-caret-hide'>
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/About-us">About Us</Link></li>
                                    <li><Link className="dropdown-item" to="/Our-Journey">Our Journey</Link></li>
                                    <li><Link className="dropdown-item" to="/Our-Management">Management Speaks</Link></li>
                                    <li><Link className="dropdown-item" to="/Our-Team">Our Team</Link></li>
                                    <li><Link className="dropdown-item" to="/CSR">CSR Social Responsibility</Link></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item dropdown ms-4">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Residence">Residential</Link></li>
                                    <li><Link className="dropdown-item" to="#">Commercial</Link></li>
                                    <li><Link className="dropdown-item" to="#">Rental & </Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item ms-4">
                                <Link className="nav-link" to="/Media and Event">Media and Events</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link" to="/Contact-Us">Contact Us</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <button className=" enubtn btn">ENQUIRE</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}