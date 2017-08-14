var React = require("react");
var Link = require("react-router-dom").Link;

class Footer extends React.Component {
    render(){
        return(
            <div>
                <footer className="page-footer bg-red-flag">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Let's Taco'bout it</h5>
                                <p className="grey-text text-lighten-4">Find the best real mexican taco flavored places in San Antonio, Texas.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Other Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2017 SA Taco Radar
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

module.exports = Footer;