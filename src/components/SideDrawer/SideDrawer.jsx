import { NavLink } from "react-router-dom";
import classes from './SideDrawer.module.css';
import { connect } from 'react-redux';
import Backdrop from "../backdrop/backdrop";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaLaptop } from 'react-icons/fa';
import { AiOutlineDesktop } from 'react-icons/ai';
import { BsLaptop } from 'react-icons/bs';
import { RiShoppingBasketLine } from 'react-icons/ri';
import * as actions from '../../store/actions';
import { IoIosBasket } from 'react-icons/io';


const sideDrawer = (props) => {
    let side = [classes.sideDrawer, classes.close];
    if(props.toggleSideDrawerTrue) {
        side = [classes.sideDrawer, classes.open];
    }
    return (
        <>
        {props.toggleSideDrawerTrue && <Backdrop />}
        <header className={side.join(" ")}>
        <div style={{display: "flex", fontFamily: "Roman", justifyContent: "space-evenly", marginTop: "2em"}}><IoIosBasket style={{fontSize: "1.5em",
        color: "brown"}}
            /><div>Electronic Shopping</div></div>
            <hr />
            <ul style={{listStyle: "none", display: "inline-block",fontFamily: "Roman",}}>
                <li><NavLink onClick={props.toggleSideDrawerFalse} className={classes.list} to="/televisions"><AiOutlineDesktop style={{margin: "0px 7px"}}/> TV</NavLink></li><hr />
                <li><NavLink onClick={props.toggleSideDrawerFalse} className={classes.list} to="/laptops"><BsLaptop style={{margin: "0px 7px"}}/>Laptops</NavLink></li><hr />
                <li><NavLink onClick={props.toggleSideDrawerFalse} className={classes.list} to="/chartsLap"> <FaLaptop style={{margin: "0px 7px"}}/>ChartsLaptop</NavLink></li><hr />
                <li><NavLink onClick={props.toggleSideDrawerFalse} className={classes.list} to="/chartsTv"><RiShoppingBasketLine style={{margin: "0px 7px"}}/>ChartsTv</NavLink></li><hr />
                <li><NavLink onClick={props.toggleSideDrawerFalse} className={classes.list} to="/orders"><MdOutlineShoppingCart style={{margin: "0px 7px"}}/> Orders</NavLink></li><hr />
            </ul>
            <div style={{fontFamily: "Roman",textAlign: "center", marginTop: "5em"}}>
                <div>
                    <div>COMPLETE CRUD WEBSITE</div>
                    <div>Create Read Update Delete</div>
                    <div>@2022</div>
                </div>
            </div>
        </header>
    </>
    );
};

const mapStateToProps = state => {
    return {
        toggleSideDrawerTrue:  state.sideDrawerChange
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSideDrawerFalse: () => dispatch({type: actions.CLOSE_SIDEDRAWER})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);