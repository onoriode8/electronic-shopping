import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Input from './containers/Inputs/Inputs';
import Television from './containers/Television/Television';
import Navigation from './components/Navigation/Navigation';
import ChartsLaptop from './containers/Charts/charts';
import ChartsTv from './components/TelevisionItems/ChartTv/ChartTv';
import Order from './containers/Order/Order';
import SideDrawer from './components/SideDrawer/SideDrawer';

const App = () => {
    return (
        <React.Fragment>
                <Navigation />
                <SideDrawer />
            <Switch>
                <Route path="/laptops" exact component={Input} />
                <Route path="/televisions" exact component={Television} />
                <Route path="/chartsLap" exact component={ChartsLaptop} />
                <Route path="/chartsTv" exact component={ChartsTv} />
                <Route path="/orders" exact component={Order} />
                <Redirect to="/televisions" />
            </Switch>
        </React.Fragment>
    );
};

export default App;
