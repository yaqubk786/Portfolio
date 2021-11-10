import React from "react";
import ReactDOM  from "react-dom";
import aquib from './aquib.jpeg';
import mypic from './mypic.jpeg';
import anjali from './anjali.png';
import rahul from './rahul.jpeg'





function People(){
    return(<>
     <h1 className="pp-head">What People say about me</h1>
     <hr className="pp-hr"></hr>
     <div className="pp-div1">
         <div className="pp-box">
             <img className="aq-pic" src={aquib}></img>
             <p>Aaquib Ahmed</p>
             <p>Scale.io</p><br></br>

           <p> I have worked with Yaqub on many projects. Potential Guy with lots of Knowledge regarding frontend stack.
              He is very passionate about his work and always eager to learn something new.</p>
         </div>
         <div className="pp-box">
         <img className="aq-pic" src={anjali}></img>
             <p>Anjali Ojha</p>
             <p>Whitehat.jr</p><br></br>

           <p> Yaqub’s expertise helped us in formulating strategies and action plans in order to achieve desired results.
            His exceptional problem skills and the ability to adapt to changing scenarios has put him ahead of every situation.</p>
         </div>
         <div className="pp-box">
         <img className="aq-pic" src={rahul}></img>
             <p>Rahul</p>
             <p>Wipro</p><br></br>

           <p> Yaqub is wonderful to work with and has exceptional expertise in what he does.
            His work demonstrates dedication, motivation, comprehension, and methodical strategies in web development.</p>
         </div>
     </div>

    </>)
}
export default People;