import React from 'react';
import "./Header.css"
import BackPic from "../../Images/burjalarab_cop.jpg"
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="background" style={{ backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.60),rgba(128, 128, 128, 0.60)), url(${BackPic})`}}>
           <div className="navigation-main">
               <Link to="/" >Home</Link>
               <Link to="/login" >Login</Link>
               <Link to="/book" >Book</Link>
           </div>
           <div className="burj">
               <h1>Burj Al Arab</h1>
               <h1 className="para">A global icon of Arabian luxary</h1>
           </div>
        </div>
    );
};

export default Header;