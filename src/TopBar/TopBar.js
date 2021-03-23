import React from 'react'
import classes from "./TopBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faSearch } from '@fortawesome/free-solid-svg-icons'

function TopBar() {
    return (

        <div className={classes.header}>
            <h1 className={classes.mainLogo}><span className={classes.firstHalfLogo}>shop</span><span className={classes.secondHalfLogo}>lane</span></h1>
            <p className={classes.clothingText}>clothing</p>
            <p className={classes.accessoriesText}>accessories</p>

            {/* <i className={[classes.searchIcon,classes.fas,classes.fa-search]}></i> */}
            <FontAwesomeIcon icon={faSearch} className={classes.searchIcon}/><input type="search" placeholder="search accessories and clothing" className={classes.searchBox} />
            <FontAwesomeIcon icon={faShoppingCart} />

            {/* <i className={classes.cartIcon} className={classes.fas fa-shopping-cart}></i> */}
            <div className={classes.profilePict}>
                <img className={classes.profilePic} src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Q8/135/1581404410220/front-left-side-47.jpg" alt="img" />
                <p className={classes.profileText}>profile picture</p>
            </div>

        </div>

    )
}

export default TopBar
