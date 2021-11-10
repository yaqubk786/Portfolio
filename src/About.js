import React from 'react';
import ReactDom from 'react-dom';
import netlify from './netlify-logo.png';
import codingboy from './codingboy.png';



function About(){
    return (<>

        <div className="about">
        <img className="boy" src={codingboy}></img>
            <div className="am-box1">
                <h1>About Me</h1>
                <hr className="hr-a"></hr>
                <br></br>
                <p>I am a computer science graduate, front-end designer and developer with 3 months of hands-on experience,my major focus is on designing, web mobile and tablet interfaces.<br>
                </br>
                <br></br>
                I enjoy turning complex problems into simple, beautiful and intutive designs. when i'm not pushing pixels you'll find me cooking, working out or writing poetry.</p>
            </div>
            <div className="am-box2">
                <p className="am-p">Languages/Library/Technology</p><hr className="hr-b"></hr>
                <span className="icons" style={{color:"orangered"}}><br></br><i  class="fab fa-html5">HTML</i></span>
                <span className="icons" style={{color:"#14149b"}}><i class="fab fa-css3-alt">CSS</i></span>
                <span className="icons"  style={{color:"yellow"}}><i class="fab fa-js"></i></span>
                <span className="icons"> <img className="netlify" src={netlify} alt="netlify-logo"></img></span>
                <span className="icons"><i class="fab fa-bootstrap"></i></span>
                <span className="icons" style={{color:"lightblue"}}><i class="fab fa-react"></i></span>
                <span className="icons" style={{color:"black"}}><i class="fab fa-github"></i></span>
            </div>
        </div>
    </>

    );
}

export default About;