import axios from 'axios';
import React, { Component } from 'react';
import ChartTvOutput from './chartTvOutput';
import Spinner from '../../Spinner/Spinner';

class Charts extends Component {
    constructor() {
        super()
        this.state = {
            charts: [],
            chartSuccess: false,
            deleteSuccess: false
        }
    }

    componentDidMount() {
        axios.get("/chartsTv.json")
            .then(chart => {
                const fetchData = [];
                for(let key in chart.data) {
                    fetchData.push({
                        ...chart.data[key],
                        id: key
                    });
                }
                this.setState({ chartSuccess: true, charts: fetchData });
            })
            .catch(() => {});
    }

    deleteTvChartHandler = (id) => {
        axios.delete(`/chartsTv/${id}.json`)
        .then(res => {
            this.setState({ deleteSuccess: true });
        })
        .catch(() => {});
    };

    render() {

    let mapChart = <div style={{marginTop: "10em"}}><Spinner /> Loading...</div>;
    if(this.state.charts.length !== 0) {
        mapChart = this.state.charts.map(chart => <ChartTvOutput 
            key={chart.id} name={chart.name} image={chart.image}
             description={chart.description} price={chart.price} id={chart.id}
             deleteHandler={() => this.deleteTvChartHandler(chart.id)}/>);
    }


    return (
        <div>
            <div style={{position: "fixed", textAlign: "center"}}>
                {this.state.deleteSuccess && <div style={{color: "green", fontFamily: "Roman",
                }}>Deleted!</div>}
            </div>
           
            {mapChart}
        </div>
   );
 }
}
export default Charts;