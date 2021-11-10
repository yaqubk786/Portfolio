import React from "react";
import ReactDom from "react-dom";
import clock from './clock.png'
import sahara from './sahara.png';
import todo from './todo.png';
import epf from './epf.png';
import css from './css.png';






function Portfolio(){
    return( <>
        <h1 className="pf-head">My Portfolio</h1>
        <hr className="pf-hr"></hr>
        <div className="pf-div1">
        <a href="https://yaqubk786.github.io/responsive/"><div className="subdiv" style={{backgroundImage:`url(${sahara})`}}></div></a>
        <a href="https://yaqubk786.github.io/clock/"><div className="subdiv" style={{backgroundImage:`url(${clock})`}}></div></a>
        <a href="https://yaqubk786.github.io/animations/"><div className="subdiv" className="subdiv" style={{backgroundImage:`url(${css})`}}></div></a>
            
        </div>
        <div className="pf-div2">
        <a href="https://yaqubk786.github.io/jstodos/"><img className="pr-pics" src={todo}></img></a>
        <a href="https://yaqubk786.github.io/employee-feedback-form/"><img className="pr-pics" src={epf}></img></a>
        {/* <a><img className="pr-pics" src={clock}></img></a> */}

        </div>
    </>

    )
}
export default Portfolio;