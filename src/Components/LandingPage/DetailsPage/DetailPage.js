import React, { useState, useEffect } from 'react'
import classes from "./DetailsPage.module.css"
import axios from "axios"
import { useRouteMatch, useParams } from "react-router-dom";
var dArr = []
function DetailPage() {
    // const [id, setId] = useState()

    const [datas, setDatas] = useState({})
    const [dataArr, setDataArr] = useState([])
console.log(localStorage.getItem("cartData"))
    const [localData, setLocalData] = useState(localStorage.getItem("cartData") == null ? [] : JSON.parse(localStorage.getItem("cartData")))

    // const [locData, set]

    const match = useRouteMatch()
    const params = useParams()

    // console.log(match)
    // console.log(params)
    // setId(params)n 
    // const fetchCode = async () => {
    // const { res } = await axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${params.Vid}`)
    // setData(res)
    // console.log(res)



    useEffect(() => {
        async function fetchData() {

            var fetcedeData = await axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${params.Vid}`)
            // .then(response => {
            //     console.log(response.data)
            //     setDatas(response.data)
            // })
            // .catch(err => {
            //     console.log("error")
            // })
            return (fetcedeData.data)
            // setDatas(fetcedeData)
        }
        fetchData().then(response => {
            // console.log(response)
            response.qty = 1
            setDatas(response)
        })
            .catch(err => {
                console.log("Error")
            })
        // console.log(datas)
    }, [])






    // var dataFromStorage = localStorage.getItem("cartData") == null ? [] : JSON.parse(localStorage.getItem("cartData"))


    var HandleAddToCart = () => {
        alert("clicked")
        //    console.log(datas)
        if (localData.length === 0) {
            setDatas(datas)
            console.log("setData" + datas)
            setDataArr([...dataArr, datas])

            console.log("local" , localData)
            localStorage.setItem("cartData", JSON.stringify(dataArr))
            setLocalData(JSON.parse(localStorage.getItem("cartData")))


        } else if (localData.length !== 0) {
            let datafromls = JSON.parse(localStorage.getItem("cartData"))
            alert("not zero")
            setDatas(datas)
            console.log("setData" + datas)
            console.log(datafromls)
            // datafromls.push(datas)
            setDataArr([...datafromls, datas])
            console.log("setArr" + JSON.stringify(dataArr))
            localStorage.setItem('cartData', JSON.stringify(datafromls))

        }


    }

    return (
        <section className={classes.detailSection}>

            <section className={classes.imageSection}>

                <img src={datas.preview} alt="img" className={classes.itemImage} />
            </section>

            <section className={classes.rightSection}>

                <h1 className={classes.itemName}>{datas.name}</h1>

                <p className={classes.itemBrand}>{datas.brand}</p>

                <p className={classes.itemPriceText}>Price is Rs <span className={classes.itemPriceValue}>{datas.price}</span></p>

                <p className={classes.itemDescription}>Description</p>
                <div className={classes.itemDescriptionText}>{datas.description}</div>

                <p className={classes.productPr}>product preview</p>

                <div className={classes.imgPreview}>

                    {/* <div>{datas.photos}</div> */}
                    {/* <img class="previewImg" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg" alt=""/> */}
                    {datas.photos && datas.photos.map(item => {
                        return <img key={item.id} className={classes.previewImg} src={item} alt="" />
                    })}

                </div>


                <button className={classes.addToCartBtn} onClick={HandleAddToCart}>Add to Cart</button>
            </section>


        </section>

    )
}

export default DetailPage
