import React, { useState } from 'react';
import axios from 'axios';
import classes from './Items.module.css';
import Card from '../card/card';
import Spinner from '../Spinner/Spinner';

const Items = props => {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabledCheck, setDisabledCheck] = useState(false);
  const [spinner, setSpinner] = useState(false);


    const orderHandler = () => {
        setSpinner(true)
         setLoading(true);
        const usersOrder = {
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image,
            id: props.id
        }
        axios.post("/postOrdersLaptop.json", usersOrder)
            .then(res => {
                setLoading(false);
                setSpinner(false);
                setSuccess("ordered successful");
                setTimeout(() => { setSuccess(false) }, 10000);
            })
            .catch(() => {});
    }

    const pushToChartHandler = () => {
        setDisabledCheck(true);
        const chart = {
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image,
            id: props.id
        }
        axios.post("/chartsLaptop.json", chart)
            .then(chart => {
                setDisabledCheck(false);
            })
            .catch(() => {});
    }

    return <header>
        <div>
        <div style={{textAlign: "center"}}>{success}</div>
        {loading && <div style={{textAlign: "center"}}>Loading... {spinner && <Spinner />}</div>}
            <Card>
                <img className={classes.image} src={props.image} alt='' />
                <div style={{margin: "1em 0px"}}>{props.name}</div>
                <div>{props.description}</div>
                <div style={{margin: "1em 0px"}}><strong>${props.price} USD</strong></div>
                <div>
                <div className={classes.buttonContainer}>
                    {disabledCheck ? <button disabled>Add To Chart</button> : 
                    <button className={classes.chart} onClick={pushToChartHandler}>Add to Chart</button>}
                    <button className={classes.order} onClick={orderHandler}>
                     <div style={{display: "flex"}}>
                        <div>{spinner && <Spinner />}</div>
                        <div>Order</div>
                     </div>
                    </button>
                </div>
            </div>
            </Card>
         </div>
    </header>
};

export default Items;