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
var Footer = require("./Footer");

class App extends React.Component{
    render(){
        return (
            <Router>
                <div id="router-wrap">
                    <Nav/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/* Error message */}
                            <Route render={function (){
                                return <p>Not Found</p>
                            }} />
                        </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

module.exports = App;