var React = require("react");
var NavLink = require("react-router-dom").NavLink;
import logo from "../assets/images/taco-icon.png";
import radar from "../assets/images/radar.png";

function Nav(){
    return(
        <header className="navbar-fixed">
            <nav>
                <div className="nav-wrapper bg-green-flag">
                    <a href="/" className="brand-logo">
                        <img src={logo} id="logo"  alt=""/>
                        SA Taco Radar
                    </a>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink exact activeClassName="active" to="/" >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink id="nearest" exact to="/findtaco">
                                <img id="radar" src={radar}/>
                                <span>Nearest Taco</span>
                            </NavLink>
                        </li>
                        <li>
                            <a className="dropdown-button" href="#!" data-activates="toprated">Top Places for:<i className="material-icons right">arrow_drop_down</i></a>
                        </li>
                        <li>
                            <NavLink exact to="/contact" >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <ul id="toprated" className="dropdown-content">
                        <li><NavLink to="/toprated">Tacos</NavLink></li>
                        <li><NavLink to="/top-pozoles">Pozole</NavLink></li>
                        <li className="divider"></li>
                        <li><NavLink to="/top-general">Mexican food in General</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

module.exports = Nav;