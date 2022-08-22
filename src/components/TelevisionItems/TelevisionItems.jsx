import React, { useState } from 'react';
import axios from 'axios';
import classes from './TelevisionItems.module.css';
import Card from '../card/card';
import Spinner from '../Spinner/Spinner';

const Items = props => {
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disabledCheck, setDisabledCheck] = useState(false);
    const [spinner, setSpinner] = useState(false);


      const orderTvHandler = () => {
        setLoading(true);
        setSpinner(true);
        const usersTvOrder = {
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image,
            id: props.id
        }
        axios.post("/postOrdersTelevision.json", usersTvOrder)
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
        const chartTv = {
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image,
            id: props.id
        }
        axios.post("/chartsTv.json", chartTv)
            .then(chart => {
                setDisabledCheck(false);
            })
            .catch(() => {});
    }

    return <header>
        <div>
        <p style={{textAlign: "center"}}>{success}</p>
        {loading && <p style={{textAlign: "center"}}>Loading...</p>}
            <Card>
                <img className={classes.image} src={props.image} alt='' />
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p><strong>${props.price} USD</strong></p>
                <div>
                <div className={classes.buttonContainer}>
                    {disabledCheck ? <button disabled>Add to Chart</button> : <button 
                        className={classes.chart} onClick={pushToChartHandler}>Add to Chart</button>}
                    <button className={classes.order} onClick={orderTvHandler}>
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