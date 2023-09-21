import React, { useState } from 'react';
import './Sidebar.css';
import {
    
    FaBars,
    FaUserAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import {
    
    HiHome
}from "react-icons/hi";
import {
    BiSolidHelpCircle
   
}from "react-icons/bi";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<HiHome/>
        },
        {
            path:"/productList",
            name:"Category",
            icon:<FaThList/>
        },
        {
            path:"/product",
            name:"My Orders",
            icon:<FaShoppingBag/>
        },
        {
            path:"/analytics",
            name:"Help",
            icon:<BiSolidHelpCircle/>
        },
       
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;