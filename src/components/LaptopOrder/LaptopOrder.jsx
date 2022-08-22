import Card from '../card/card';

const LaptopOrder = (props) => (
        <header style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "7em"}}>
            <Card>
                <div style={{textAlign: "center"}}> 
                    <img style={{width: "100%"}} src={props.image} alt="" />
                    <p>{props.name}</p>
                    <p>{props.description}</p>
                    <p><strong>${props.price}</strong></p>
                    <div></div>
                    <button onClick={props.deleteLaptopOrdered}>DELETE</button>
                </div>
            </Card>
    </header>
  );

export default LaptopOrder;