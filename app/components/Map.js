var React = require("react");
var Loading = require("./Loading");
import poweredGoogle from '../assets/images/powered_by_google_on_white_hdpi.png';

class Map extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            gotLocation: false
        }
    }

    // componentDidMount(){
    //     this.setState(function(){
    //        return {
    //             gotLocation: true
    //        }
    //     });
    // }

    render(){
        return(
            <main className="content container-fluid">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <form action="/search">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">search</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                    <label htmlFor="icon_prefix">City, Address, Zip Code</label>
                                <img className="powered-google right" src={poweredGoogle} alt=""/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12">
                        <h5>Nearest taco places</h5>
                        <div id="map"></div>
                    </div>
                </div>
                {/*{!this.state.gotLocation ? <Loading/> : null }*/}
            </main>
        );
    }
}

module.exports = Map;