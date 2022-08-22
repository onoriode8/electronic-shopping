import React, { Component } from 'react';
import Items from '../../components/Items/Items';
import macBook from '../../assests/macbook.webp';
import hp from '../../assests/HP.jpg';
import lenovo from '../../assests/lenovo-laptops.webp';
import macbookForShow from '../../assests/macboo_for_show.jpg';
import dellForShow from '../../assests/dell_for_show.webp';
import lenovoForShow from '../../assests/lenovo_for_show.jpg';
import { v4 as uuidv4 } from 'uuid';
import './input.css';


 const Laptops = [
            {
                id: uuidv4(),
                image: macBook,
                name: "macbook",
                description: "13-inch macBook Air Eight-core Apple M1 CPU 256GB SSD 8GB",
                price: 999
            },
            {
                id: uuidv4(),
                image: hp,
                name: "hp",
                description: "Hp Pavilion 15 Du3047tx 11th Gen i5 8GB 1TB+256GB SSD Win10",
                price: 99.9
            },
            {
                id: uuidv4(),
                name: "lenovo",
                image: lenovo,
                description: "Intel® Celeron® Processor (1.10 GHz up to 2.80 GHz) Windows 11 Home 64 8GB 14 FHD IPS (1920 x 1080)",
                price: 463.94
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

    const filteredLaptops = Laptops.filter(laptops => laptops.name === this.state.input.toLowerCase());

    let searchResult = null
    if(filteredLaptops.length !== 0) {
        searchResult = filteredLaptops.map(item => <Items key={item.id} id={item.id} 
            name={item.name} price={item.price} image={item.image} description={item.description} />);
    } 

    return <header style={{marginTop: "10em", textAlign: "center"}}>
        <div>
           <input ref={this.state.inputElement} style={{padding: "10px 20px"}} type='text' placeholder="Search Laptops" onChange={this.onChangeHandler}/>
        </div>
           {searchResult}
        <div style={{marginTop: "5em",fontFamily: "Roman", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            <div className="macbook">
                <div><img className='macbookImg' src={macbookForShow}  alt='' /></div>
                <div>macbook</div>
                <div>MacBook Pro review 2020.</div>
            </div>
            <div className="macbook">
                <div><img className='macbookImg' src={dellForShow}  alt='' /></div>
                <div>Dell</div>
                <div>Dell Latitude 5420 P137g Intel Core i5 8GB 256GB Grey.</div>
            </div>
            <div className="macbook">
                <div><img className='macbookImg' src={lenovoForShow}  alt='' /></div>
                <div>lenovo</div>
                <div>Lenovo ThinkBook 15 G3</div>
            </div>
        </div>
    </header>
}

};


export default Input;