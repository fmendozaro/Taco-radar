var React = require("react");
var Link = require("react-router-dom").Link;
import tacoImg from '../assets/images/taco-header.jpg';
import tacoImg3 from '../assets/images/tacos-header-3.jpg';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={tacoImg} />
                    </div>
                </div>

                <div className="section white black-text">
                    <div className="row container">
                        <h1 className="header">Taco Radar</h1>
                        <h3>It's not Tex-Mex it's Mex-Mex</h3>
                        <p>Welcome to the Taco Radar a place where you can find the nearest and finest real mexican flavored tacos in San Antonio, Texas. If you ever wonder how a real taco taste like, you can give it a shot and see for yourself.</p>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax">
                        <img src={tacoImg3}/>
                    </div>
                </div>

            </div>
        )
    }
}

module.exports = Home;