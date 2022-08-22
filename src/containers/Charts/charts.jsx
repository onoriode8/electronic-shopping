import axios from 'axios';
import React, { Component } from 'react';
import ChartOutput from './chartOutput';
import Spinner from '../../components/Spinner/Spinner';

class Charts extends Component {
    constructor() {
        super()
        this.state = {
            charts: [],
            chartSuccess: false,
            deleted: false
        }
    }

    componentDidMount() {
        axios.get("/chartsLaptop.json")
            .then(chart => {
                const data = [];
                for(let key in chart.data) {
                    data.push({
                        ...chart.data[key],
                        id: key
                    });
                }
                this.setState({chartSuccess: true, charts: data})
            })
            .catch(() => {});
    }

    deleteLaptopHandler = (id) => {
        axios.delete(`/chartsLaptop/${id}.json`)
            .then(res =>  this.setState({ deleted: true }))
            .catch(() => {});
    };

    render() {
    const { charts } = this.state;
    let mapChartLaptop = <div style={{marginTop: "10em"}}><Spinner /> Loading...</div>;
    if(charts !== null) {
        mapChartLaptop = charts.map(chartLap => <ChartOutput 
            key={chartLap.id} name={chartLap.name} image={chartLap.image} id={chartLap.id}
             description={chartLap.description} price={chartLap.price}
             deleteHandler={() => this.deleteLaptopHandler(chartLap.id)} />);
    }
   
    return (
        <div>
            {this.state.deleted && <div style={{color: "green", marginTop: "7em",
                fontFamily: "Roman", textAlign: "center", position: "fixed"}}>Deleted Successfully</div>}
            {mapChartLaptop}
        </div>
   );
 }
}
export default Charts;