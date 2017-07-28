var React = require("react");
var NavLink = require("react-router-dom").NavLink;

function Nav(){
    return(
        <nav className="nav-extended">
            <div className="nav-backgorund">
                <div className="ea k" style={{backgroundImage: `url('//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/icon-seamless.png?3602604866228935180')`}}></div>
            </div>
            <div className="nav-wrapper">
                <a href="/pages/demo" className="brand-logo"><i className="material-icons">camera</i>Gallery</a>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="bt hide-on-med-and-down">
                    <li className="k"><a href="/pages/demo">Gallery</a></li>
                    <li><a href="/pages/dark-theme">Dark Theme</a></li>
                    <li><a href="/pages/blog">Blog</a></li>
                    <li><a href="/pages/docs">Docs</a></li>
                    <li><a className='dropdown-button' href='#' data-activates='feature-dropdown' data-belowOrigin="true" data-constrainWidth="false">Features<i className="material-icons bt">arrow_drop_down</i></a></li>
                </ul>
                <ul id='feature-dropdown' className='dropdown-content'>
                    <li><a href="/pages/full-header">Fullscreen Header</a></li>
                    <li><a href="/pages/horizontal">Horizontal Style</a></li>
                    <li><a href="/pages/no-image">No Image Expand</a></li>
                </ul>

                <div className="nav-header de">
                    <h1>I MAKE THINGS</h1>
                    <div className="ge">Portfolio</div>
                </div>

                <div className="categories-wrapper af lighten-1">
                    <div className="categories-container">
                        <ul className="categories db">
                            <li className="k"><a href="#all">All</a></li>
                            <li><a href="#polygon">Polygon</a></li>
                            <li><a href="#bigbang">Big Bang</a></li>
                            <li><a href="#sacred">Sacred Geometry</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <li>
                <NavLink exact activeClassName="active" to="/" >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/" >
                    Calculate
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/" >
                    Contact
                </NavLink>
            </li>
        </nav>
    )
}

module.exports = Nav;