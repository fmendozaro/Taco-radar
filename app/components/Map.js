var React = require("react");

class Map extends React.Component{
    render(){
        return(
            <main className="content container">

                <div className="row">
                    <div className="col s8 offset-s2">
                        <form action="/search">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">search</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                    <label htmlFor="icon_prefix">Address, Zip Code</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12">
                        <label htmlFor="map">Results:</label>
                        <div id="map"></div>
                    </div>
                </div>

            </main>
        );
    }
}

module.exports = Map;