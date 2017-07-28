var React = require("react");
var NavLink = require("react-router-dom").NavLink;

function Nav(){
    return(
        <nav className="nav-extended blue-darken-2">
            <div className="nav-background">
                <div className="ea k blue"
                     style={{ backgroundImage: 'url(//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/icon-seamless.png?3602604866228935180)'
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
                            Calculate prays
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/" >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <div className="nav-header de">
                    <h1>Title</h1>
                    <div className="ge">Welcome this is an automatic way to calculate how many prayers you have to make in order to reach forgiveness</div>
                </div>
            </div>
        </nav>
    )
}

module.exports = Nav;