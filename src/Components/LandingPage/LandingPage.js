import React, { useState, useEffect } from 'react'
import classes from "./LandingPage.module.css"

import {Link} from "react-router-dom"

import axios from "axios"


//https://5d76bf96515d1a0014085cf9.mockapi.io/product


function LandingPage() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(err => {
                console.log("Error")
            })
    }, [])

  

    var HandleClick = (id)=>{
        alert(id)
    }

    console.log(data)

    return (
        <div className={classes.LandingPage}>
            <h1 className={classes.titlePage}>Clothing for Men and Women</h1>

            <section className={classes.cardsSection}>
                {
                    data.map(item => {
                        return (
                            <Link to={`/DetailsPage/${item.id}`}>
                            <div key={item.id} className={classes.itemCard} onClick={()=>HandleClick(item.id)}>
                                <img className={classes.itemImage} src={item.preview} alt="images" />
                                <h2 className={classes.itemName}>{item.name}</h2>
                                <p className={classes.brandName}>{item.brand}</p>
                                <p className={classes.itemPrice}>{item.price}</p>

                            </div>
                            </Link>
                        )
                    })
                }

            </section>

        </div>
    )
}

export default LandingPage
