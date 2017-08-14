var React = require("react");
var NavLink = require("react-router-dom").NavLink;

function Nav(){
    return(
        <nav className="nav-extended">
            <div className="nav-background red darken-3">
                <div className="ea k"
                     style={{ backgroundImage: 'url(//scdn.shopify.com/s/files/1/1775/8583/t/1/assets/icon-seamless.png?3602604866228935180)'
                }}></div>
            </div>
            <div className="nav-wrapper db">
                <a href="/pages/demo" className="brand-logo"><i className="material-icons">face</i>Logo</a>
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
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <div className="nav-header de">
                    <h1>Taco Radar</h1>
                    <h3>It's not Tex-Mex it's Mex-Mex</h3>
                    <p className="ge">Welcome to the Taco Radar a place where you can find the nearest and finest real mexican flavored tacos in San Antonio, Texas. If you ever wonder how a real taco taste like, you can give it a shot and see for yourself.</p>
                </div>
            </div>
        </nav>
    )
}

module.exports = Nav;