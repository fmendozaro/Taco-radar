var React = require("react");
var NavLink = require("react-router-dom").NavLink;

function Nav(){
    return(
        <nav>
            <div className="nav-wrapper bg-green-flag">
                <a href="/" className="brand-logo">
                    <img src="/assets" alt=""/>
                    SA Taco Radar
                </a>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="bt hide-on-med-and-down">
                    <li>
                        <NavLink exact activeClassName="active" to="/" >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/" >
                            Top 10 Taco places
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/" >
                            Nearest Mex-Mex Taco
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/" >
                            Best Pozole places
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/" >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

module.exports = Nav;