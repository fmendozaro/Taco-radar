var React = require("react");
var Link = require("react-router-dom").Link;

class Home extends React.Component{
    render(){
        return(
            <div className="home-container">
                <Link className="button" to="/battle">
                    Calculate
                </Link>
            </div>
        )
    }
}

module.exports = Home;