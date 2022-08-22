import React, { Component } from 'react';
import TelevisionItems from '../../components/TelevisionItems/TelevisionItems';
import Lg from '../../assests/lg-smart-tv.jpg';
import samsung from '../../assests/samsung.jpg';
import hisense from '../../assests/hisense-43-smart.jpg';
import HisenseForShow from '../../assests/hisense_for_show.webp';
import samsungForShow from '../../assests/samsung_for_show.jpg';
import lgForShow from '../../assests/Lg_for_show.jpg';
import { v4 as uuidv4 } from 'uuid';

const Televisions = [
    {
        id: uuidv4(),
        image: Lg,
        name: "LG",
        description: "LG 65 INCHES ULTRA HD-4K-SMART HDR TV",
        price: 1372.56 
    },
    {
        id: uuidv4(),
        image: samsung,
        name: "SAMSUNG",
        description: "SAMSUNG 40-inch Class LED Smart FHD TV 1080P 2019 Model",
        price: 50.9
    },
    {
        id: uuidv4(),
        name: "HISENSE",
        image: hisense,
        description: "HISENSE 43 INCHES SMART FULL HD TV",
        price: 409.38
    }
];

class Input extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            inputElement: React.createRef()
        }
    };

    componentDidMount() {
        this.state.inputElement.current.focus();
    }
   
    onChangeHandler = (event) => this.setState({input: event.target.value});

    render() {
    const filteredTelevisions = Televisions.filter(television => television.name === this.state.input.toUpperCase());

    let searchResult = null
    if(filteredTelevisions) {
        searchResult = filteredTelevisions.map(item => <TelevisionItems key={item.id} id={item.id}
            name={item.name} price={item.price} image={item.image} description={item.description} />);
    } 

    return <header style={{marginTop: "10em", textAlign: "center"}}>
        <div>
           <input ref={this.state.inputElement} style={{padding: "10px 20px"}} type='text' placeholder="Search Televisions" onChange={this.onChangeHandler}/>
        </div>
           {searchResult}
           <div style={{marginTop: "3em"}}>
                <div>
                    <div></div>
                    <div>COMPLETE CRUD (create, read, update, delete) WEBSITE</div>
                </div>
           </div>
           <div style={{marginTop: "5em",fontFamily: "Roman", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            <div className="macbook">
                <div><img className='macbookImg' src={HisenseForShow}  alt='' /></div>
                <div>Hisense</div>
                <div>Hisense 55-in 55H77G 4K UHD VIDAA HDR Smart TV.</div>
            </div>
            <div className="macbook">
                <div><img className='macbookImg' src={samsungForShow}  alt='' /></div>
                <div>Samsung</div>
                <div>Samsung 86” Class TU9010 LED 4K UHD Smart Tv.</div>
            </div>
            <div className="macbook">
                <div><img className='macbookImg' src={lgForShow}  alt='' /></div>
                <div>LG</div>
                <div>LG smart TV</div>
            </div>
        </div>
    </header>
}

};


export default Input;