import React from 'react'
import "./SearchPage.css"
import {useStateValue} from "./StateProvider"
import useGoogleSearch from './useGoogleSearch';
import Response from "./response"
import {Link} from "react-router-dom";
import Search from "./Search"
import SeachIcon from "@material-ui/icons/Search"
import DecriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LoacalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVerIcon from "@material-ui/icons/MoreVert"


function SearchPage() {
    const [{term}, dispatch]= useStateValue();
    //const {data} = useGoogleSearch(term)
    
    const data = Response;
    console.log(data);

    //https://developers.google.com/custom-search/v1/using_rest 
    //https://cse.google.com/cse/create/new

    return (
        <div className="searchPage">
            <div className='searchPage__header'>
               <Link to="/">

                <img className="searchPage__logo" src="https://www.clicktorelease.com/blog/svg-google-logo-in-305-bytes/images/header.jpg"></img>
               </Link>
               <div className="searchPage__headerBody">
               <Search hideButtons/>
               <div className="searchPage__options">
            <div className="searchPage__optionLeft">
                <div className="searchPage_option">
                    <SeachIcon />
                    <Link to="/all">All</Link>
                </div>
                <div className="searchPage_option">
                <DecriptionIcon />
                <Link to="/news">News</Link>
            </div>
            <div className="searchPage_option">
            <ImageIcon />
            <Link to="/images">Image</Link>
        </div>
        <div className="searchPage_option">
        <LoacalOfferIcon />
        <Link to="/shoping">Shoping</Link>
    </div>
    <div className="searchPage_option">
    <RoomIcon />
    <Link to="/maps">Maps</Link>
</div>
<div className="searchPage_option">
<MoreVerIcon />
<Link to="/news">more</Link>
</div>
            </div>
            <div className="searchPage__optionRight">
                <div className="searchPage__option">
                    <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/tools">Tools</Link>
                </div>
                </div>
               </div>
               </div>
            </div>
           
     </div>
  )
}

export default SearchPage
