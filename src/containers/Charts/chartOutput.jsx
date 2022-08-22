import React, { useState } from 'react';
import axios from 'axios';
import Card from '../../components/card/card';
import './chartsLaptop.css';

const OutputChart = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [update, setUpdate] = useState(false);
    const [updatedSuccessful, setUpdatedSuccessful] = useState(false);

    const updateLaptopHandler = (e) => {
        e.preventDefault();
        const updateLaptop = {
            name,
            price,
            description,
            image
        }
        axios.put(`/chartsLaptop/${props.id}.json`, updateLaptop)
            .then(res => {
                setUpdatedSuccessful(true);
            })
            .catch(() => {});
    };

    let submitLaptop = <button disabled>UPDATE</button>
    if(name.trim().length !== 0 && price.trim().length !== 0 && 
        description.trim().length > 3 && image.trim().length !== 0) {
            submitLaptop =  <button type="submit" style={{color: "green", margin: "0px 10px"}}>UPDATE</button>
    }

    return (
    <div style={{marginTop: "7em"}}>
        <Card>
            <header style={{textAlign: "center"}}>
                <img style={{width: "100%"}} src={props.image} alt="" />
                <p>{props.name}</p>
                <p><strong>${props.price}</strong></p>
                <p>{props.description}</p>
            </header>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button onClick={props.deleteHandler}>DELETE</button>
               <button onClick={() => setUpdate(true)}>EDIT</button>
            </div>
        </Card>
        {update && <div style={{background: "rgba(0,0,0,0.5)",
         width: "100%", height: "100vh", top: "0", position: "fixed", zIndex: "124"}}></div>}
        {update && <div style={{position: "relative", zIndex: "125",
             display: "block"}}>
            <div className='formContainer'>
         <form onSubmit={updateLaptopHandler} style={{textAlign: "center"}}>
            {updatedSuccessful ? <div style={{color: "green", fontFamily: 'Roman'}}>Updated Laptop Chart</div>: null}
            <div>Edit Laptop Chart</div>
            <input type="text" className='input' placeholder='enter imageUrl' onChange={(e) => setImage(e.target.value)} /><br />
            <input type="text" className='input' placeholder={props.name} onChange={(e) => setName(e.target.value)} /><br />
            <input type="text" className='input' placeholder={props.price} onChange={(e) => setPrice(e.target.value)} /><br />
            <input type="text" className='input' placeholder={props.description} onChange={(e) => setDescription(e.target.value)} /><br />
            <div style={{display: "flex", justifyContent: "center"}}>
                {submitLaptop}
                <button onClick={() => setUpdate(false)} style={{color: "red"}}>CANCEL</button>
            </div>
        </form>
        </div >
        </div>}
    </div>
  );
};

export default OutputChart;