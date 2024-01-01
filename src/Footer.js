import React from "react";
import { FaGithub,FaInstagram,FaEnvelope,FaLinkedin } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <div className="display: flex, flex-direction: row ">
     <div className="margin:80px">
       <h1 className="xyz" style={{color: "white" , margin:"1.5rem"}}>Connect with me</h1>
     </div>
     <div className="lets">
     <div className="git" style={{padding: "1rem"}} >
      <a href='https://github.com/amyra98'>
       <FaGithub color="red" size="2.5rem"/> 
       </a>
       </div>
       <div style={{padding: "1rem"}} >
       <a href='https://www.instagram.com/stories/_priti_k/2762905985374001350/'>
       <FaInstagram color="red" size="2.5rem"/>
       </a>
       </div>
       <div style={{padding: "1rem"}} >
       <a href='mailto:priti2002bwn@email.com'>
       <FaEnvelope color="red" size="2.5rem"/>
       </a>
       </div>
       <div style={{padding: "1rem"}} >
       <a href='https://linkedin.com/in/priti-kumari-1b47a1203/'>
       <FaLinkedin color="red" size="2.5rem"/>
       </a>
       </div>
       </div>
    </div>
  );
}

export default Footer;
