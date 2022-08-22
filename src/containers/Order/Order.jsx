import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TvOrder from '../../components/TvOrder/TvOrder';
import LaptopOrder from '../../components/LaptopOrder/LaptopOrder';
import { FcCheckmark } from 'react-icons/fc';


const Order = (props) => {
    const [orderLaptop, setOrderLaptop] = useState(null);
    const [orderTelevision, setOrderTelevision] = useState(null);
    const [orderedLoading, setOrderedLoading] = useState(false);
    const [deleteTvOrdered, setDeleteTvOrdered] = useState(false);
    const [loadingDeleteOrdered, setLoadingDeleteOrdered] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setOrderedLoading(true);
        axios.get("/postOrdersLaptop.json")
            .then(res => {
                setOrderedLoading(false);
                const laptopData = [];
                for(let idex in res.data) {
                    laptopData.push({
                        ...res.data[idex],
                        id: idex
                    })
                }
                setOrderLaptop(laptopData);
            })
            .catch(err => setError(err.message));
    }, []);

    useEffect(() => {
        axios.get("/postOrdersTelevision.json")
            .then(res => {
                const data = [];
                for(let key in res.data) {
                    data.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setOrderTelevision(data);
            })
            .catch(() => {});
    }, []);

    const deleteTvOrderHandler = (id) => {
        setLoadingDeleteOrdered(true);
        axios.delete(`/postOrdersTelevision/${id}.json`)
            .then(res => {
                setLoadingDeleteOrdered(false);
                setDeleteTvOrdered(true);
                setTimeout(() => {
                    setDeleteTvOrdered(false)
                }, 3000);
            })
            .catch(() => {});
    }


    const deleteLaptopOrderHandler = (id) => {
        setLoadingDeleteOrdered(true);
        axios.delete(`/postOrdersLaptop/${id}.json`)
            .then(res => {
                setLoadingDeleteOrdered(false);
                setDeleteTvOrdered(true);
                setTimeout(() => {
                    setDeleteTvOrdered(false)
                }, 3000);
            })
            .catch(() => {});
    }


    let tvOrder = null;
    if(orderTelevision !== null) {
        tvOrder = orderTelevision.map(tv => <TvOrder key={tv.id} 
            name={tv.name} price={tv.price}
            image={tv.image} description={tv.description}
            deleteHandler={() => deleteTvOrderHandler(tv.id)}

            /> )
    }

    const pushToLaptopHandler = () => props.history.push("/laptops");

    let laptopOrder = <div style={{textAlign: "center", marginTop: "5em"}}>
            <hr />
            <p><strong>Your order is empty for Laptops!</strong></p>
            <p>Search our categories and discover our best products!</p>
            <button style={{background: "rgb(220, 138, 10)", color: "#fff"}} onClick={pushToLaptopHandler}>START ORDERING</button>
    </div>
    if(orderLaptop !== null) {
        laptopOrder = orderLaptop.map(laptop => <LaptopOrder key={laptop.id}
            deleteLaptopOrdered={() => deleteLaptopOrderHandler(laptop.id)}
             name={laptop.name} price={laptop.price}
            image={laptop.image} description={laptop.description}/> );
    }

    return <header>
            {loadingDeleteOrdered ? <p style={{color: "green", fontFamily: "Roman", textAlign: "center",marginTop:"10em"}}>Loading...</p> : null}
            {deleteTvOrdered ? <p style={{color: "green", fontFamily: "Roman", textAlign: "center",marginTop:"10em"}}>Deleted! <FcCheckmark /></p> : null}
            {orderedLoading && <p style={{textAlign: "center", color: "red", marginTop: "10em"}}>Loading order...</p>}
            {error && <div style={{textAlign: "center", color: "red", marginTop: "4em"}}>
                    <p><strong>Your behind a bad connection</strong></p>
                    <p><strong>turn on connection</strong></p>
                </div>}
            {tvOrder}
            {laptopOrder}
    </header>
    };

export default Order;


