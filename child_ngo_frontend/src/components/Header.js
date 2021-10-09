import { Navbar, NavbarBrand } from 'reactstrap';
import RenderLogo from './RenderLogo';
import {NavLink} from 'react-router-dom';

function Header(){
    var curr_tab;
    curr_tab = window.location.pathname;
    return(
        <nav className="navbar navbar-expand-sm shadow p-3 mb-5 bg-white rounded sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <NavLink to="/home" className="nav-link link-list">Home </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/state" className="nav-link link-list">State </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/district" className="nav-link link-list">District </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/child" className="nav-link link-list">Child </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/logout" className="nav-link link-list">Logout </NavLink>
                </li>
                
            </ul>
            </div>
      </nav>
);
}
export default Header;