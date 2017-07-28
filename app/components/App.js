/**
 * Created by fer on 7/4/17.
 */
var React = require("react");
var ReactRouter = require("react-router-dom");
var Switch = require("react-router-dom").Switch;
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require("./Nav");
var Home = require("./Home");

// Adding an example of a Stateless functional component
function Welcome(props){
    return (
        <h2>Welcome to Pray4Me {props.username}</h2>
    )
}

Welcome.defaultProps = {
    username: ""
}

class App extends React.Component{
    render(){
        return (
            <Router>
                <div id="router-wrap">
                    <Nav />
                    <div className="container">
                        <div className="row">
                            <div className="col l12 m12 s12">
                                <Welcome />
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    {/* Error message */}
                                    <Route render={function (){
                                        return <p>Not Found</p>
                                    }} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

module.exports = App;