import * as actions from './actions';

const initialState = {
    sideDrawerChange: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actions.OPEN_SIDEDRAWER):
            return {
                ...state,
                sideDrawerChange: !state.sideDrawerChange
            }
        case(actions.CLOSE_SIDEDRAWER):
            return {
                ...state,
                sideDrawerChange: !state.sideDrawerChange
            }
        default:
            return state;   
    }
};

export default reducer;