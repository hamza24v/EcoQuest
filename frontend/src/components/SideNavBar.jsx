import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
import avatar from "../assets/avatar.png";

export const SideNavBar = () => {
    const navigate = useNavigate();

    return (
        <div>
        
        <SideNav onSelect={(selected) => {
            console.log(selected);
            if(selected !== "logout"){
                navigate("/" + selected);
            }
        }}
            className="sideNavBar"
        >   
            
            <h1 className='header'>EcoQuests</h1>
            <img className= 'avatar' src={avatar} alt='avatar'/>
            
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">

                <NavItem eventKey="Home">
                    <NavIcon><i className='fa fa-fw fa-arrow-right-from-bracket' style={{ fontSize: "1rem" }} /></NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="quests">
                    <NavIcon><i className='fa fa-fw fa-leaf' style={{ fontSize: "1rem" }} /></NavIcon>
                    <NavText>Quests</NavText>
                </NavItem>

                <NavItem eventKey="profile">
                    <NavIcon><i className='fa fa-fw fa-gauge' style={{ fontSize: "1rem" }} /></NavIcon>
                    <NavText>Profile</NavText>
                </NavItem>


                <NavItem eventKey="map">
                    <NavIcon ><i className='fa fa-fw fa-recycle' style={{ fontSize: "1rem" }} /></NavIcon>
                    <NavText>Recycle Locations</NavText>
                </NavItem>

                <NavItem eventKey="logout">
                    <NavIcon><i className='fa fa-fw fa-arrow-right-from-bracket' style={{ fontSize: "1rem" }} /></NavIcon>
                    <NavText>Logout</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        </div>
    )
}
