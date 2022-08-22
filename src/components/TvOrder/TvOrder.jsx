import Card from '../card/card';

const outPutTvOrder = ({ name, image, description, price, deleteHandler }) => {
    return <header style={{marginTop: "7em"}}>
            <Card>
            <div style={{marginTop: "4em", textAlign: "center"}}>
                <img style={{width: "100%"}} src={image} alt="" />
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <button onClick={deleteHandler}>DELETE</button>
            </div>
            </Card>
    </header>
};

export default outPutTvOrder;