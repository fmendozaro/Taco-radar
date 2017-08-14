var React = require("react");

class Map extends React.Component{
    render(){
        return(
            <main className="content">
                Map
                <div id="map"></div>
            </main>
        );
    }
}

module.exports = Map;