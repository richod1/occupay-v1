import React from 'react'
import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'



function NavBar() {
  return (
   <Nav>
    <NavLink to="/">
        <h1>logo</h1>
    </NavLink>
    <Bars/>
    <NavMenu>
        <NavLink to="/payfee" activestyle="true">
        Fee Pay
        </NavLink>
        <NavLink to="/Payresit" activestyle="true">
            Resit Pay
        </NavLink>
        <NavLink to="/about" activestyle="true">
            About Us
        </NavLink>
        <NavLink to="/process" activestyle="true">
            Process
        </NavLink>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLinks to="/signup">Sign Up</NavBtnLinks>
        </NavBtn>
        
    </NavMenu>
   </Nav>
  )
}

export default NavBar
const Nav=styled.nav`
background:#000;
height:80px;
display:flex;
justify-content:space-between;
padding:0.5rem calc((100vw - 1000px)/2);
z-index:10;
`
const NavBtn=styled.nav`
align-items:center;
margin-right:24px;
display:flex;

@media screen and (max-width:768px){
    display:none;
}

`
const NavMenu=styled.div`
display:flex;
align-items:center;
margin-right:-24px;

@media screen and (max-width:768px){
    display:none;
}

`

const Bars=styled(FaBars)`
display:none;
color:#fff;

@media screen and(max-width:768px){
    display:block;
    position:absolute;
    transform:translate(-100%, 75%);
    font-size:1.8rem;
    top:0;
    right:0;
    cursor:pointer;

}
`

const NavLink=styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;
padding:0 1rem;
height:100%;

&:active{
    color:#15cdfc;
}
`

const NavBtnLink=styled(Link)`
border-radius:4px;
background:2256c1;
padding:10px 22px;
border:none;
outline:none;
color:#fff;
cursor:pointer;
transition:all 0.5s ease-in-out;
text-decoration:none;


&:hover{
    transition:all 0.5s ease-in-out;
    background:#fff;
    color:#010606;
}
`

const NavBtnLinks=styled(Link)`
border-radius:4px;
background:2256c1;
padding:10px 22px;
border:none;
outline:none;
color:#fff;
cursor:pointer;
transition:all 0.5s ease-in-out;
text-decoration:none;


&:hover{
    transition:all 0.5s ease-in-out;
    background:green;
    color:#010606;
}
`