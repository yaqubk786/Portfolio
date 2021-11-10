import React from 'react';
import ReactDom from 'react-dom';
import mypic from './mypic.jpeg';


function Resume(){

    return(<>
        <h1 className="rs-h">Resume</h1>
        <hr className="pf-hr"></hr>
        <div className="rs-div1">
            <div className="rs-box1">
                <p className="rsp-a">Work Experience</p>
                <hr className="rs-hr"></hr>
                <ul className="rs-ul"><li className="rs-li">FULL-STACK Developer Internship</li></ul><span className="rs-s">Aug-Jan 2021-22</span>
                <p className="pb">Prepbytes.com</p>
                <p className="rsp-b">Education</p>
                <hr className="rs-hr"></hr>
                <ul className="rs-ul"><li className="rs-li">Bachelor of Computer Applications(BCA)</li></ul><span className="rs-s">2017-2020</span>
                <p className="pb">Amity University, Jharkhand<br></br>
                CGPA-6.65</p>
            </div>
            <div className="links">
            <ul className="link-list">
            <li><a href="https://github.com/yaqubk786?tab=repositories"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/yaqub-haider-khan-8a9b6418b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiG1oAku0QeWmEZalZLbXvQ%3D%3D"><i class="fab fa-linkedin"></i></a></li>
            </ul>
            </div>
            <img className="mypic" src={mypic}></img>
        </div>
    </>)

}
export default Resume;