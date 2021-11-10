import React from 'react';
import ReactDom from 'react-dom';


function Contact(){
    return (<>
         <h1 className="pf-head">Contact</h1>
        <hr className="pf-hr"></hr>
        <div className="c-div1">
            <div className="c-subdiv-1">
                <h2>Let's Connect</h2>
                <br></br>
                <ul className="connect-link"><li><i class="fas fa-envelope-square"><p className="con">yaqubk477@gmail.com</p></i></li>
                <br></br>
                <li><i class="fas fa-phone-volume"><p className="con">+917488244113</p></i></li>
                </ul>
            </div>
            <div className="c-subdiv-2">
            <h2>Send me a message</h2>
                <form>
                <label for="fname">First & Last Name</label><br></br>
                <input type="text" id="fname" name="fname" required></input>
                <br></br>
                <label for="fnumber">Phone Number</label><br></br>
                <input type="number" id="fnumber" name="fnumber" required></input>
                <br></br>
                <label for="emails">Email address</label><br></br>
                <input type="email" id="emails" name="emails" required></input>
                <br></br>
                <label for="message">Message</label><br></br>
                <textarea id="message" name="message" row="10" cols="40">Your message here........</textarea>
                <br></br>
                <input className="submit" type="submit"></input>


                </form>
            </div>
        </div>
    </>)
}
export default Contact;