import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { connect } from "react-redux";
import * as actions from '../../store/actions';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosBasket } from 'react-icons/io';


const navigation = props => {
    return <>
        <header >
            <nav className={classes.header}>
              <li className={classes.menu} onClick={props.openSideDrawer}
                ><AiOutlineMenu style={{color: "#fff", fontSize: "1.5em"}}/></li>
                <li className={classes.bas}><IoIosBasket 
                    style={{fontSize: "1.5em",color: "white"}}/></li>
                <ul className={classes.ul_header}>
                    <li><NavLink className={classes.television} to="/televisions">TV</NavLink></li>
                    <li><NavLink className={classes.laptops} to="/laptops">Laptops</NavLink></li>
                    <li><NavLink className={classes.orders} to="/chartsLap">ChartsLaptop</NavLink></li>
                    <li><NavLink className={classes.orders} to="/chartsTv">ChartsTv</NavLink></li>
                    <li><NavLink className={classes.orders} to="/orders">Orders</NavLink></li>
                </ul>
            </nav>
         </header>
    </>
};

const mapDispatchToProps = dispatch => {
    return {
        openSideDrawer: () => dispatch({type: actions.OPEN_SIDEDRAWER})
    }
}

export default connect(null, mapDispatchToProps)(navigation);