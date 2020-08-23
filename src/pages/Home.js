import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from '../Search';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/image">Image</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.clicktorelease.com/blog/svg-google-logo-in-305-bytes/images/header.jpg" alt="" className="logo"/>
                <div className="home_inputContainer">
                    <Search hideButtons/>
                </div>
            </div>
        </div>
    )
}

export default Home
