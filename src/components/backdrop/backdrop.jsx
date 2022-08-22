import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const backdrop = props => (
    <div 
    style={{
        background: "rgba(0, 0, 0, 0.9)",
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: "109",
        top: "0"
    }} 
    onClick={props.toggleSideDrawerFalse}></div>
);

const mapDispatchToProps = dispatch => {
    return {
        toggleSideDrawerFalse: () => dispatch({type: actions.CLOSE_SIDEDRAWER})
    }
}

export default connect(null, mapDispatchToProps)(backdrop);