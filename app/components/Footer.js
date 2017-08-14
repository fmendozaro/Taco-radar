var React = require("react");
var Link = require("react-router-dom").Link;

class Footer extends React.Component {
    render(){
        return(
            <div>
                <footer className="page-footer bg-red-flag">
                    Footer example
                </footer>
            </div>
        )
    }
}

module.exports = Footer;