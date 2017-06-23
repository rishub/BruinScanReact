import React, { Component } from 'react';
import BarChart from 'react-bar-chart';
 

class Graph extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      width: 500,
      margin: {top: 20, right: 20, bottom: 30, left: 40},
      data: [
        {text: 'A+', value: 10},
        {text: 'A', value: 25},
        {text: 'A-', value: 30},
        {text: 'B+', value: 20},
        {text: 'B', value: 5},
        {text: 'B-', value: 5},
        {text: 'C+', value: 0},
        {text: 'C', value: 0},
        {text: 'C-', value: 0},
        {text: 'D+', value: 0},
        {text: 'D', value: 0},
        {text: 'D-', value: 0},
        {text: 'F', value: 5},
      ]
    };
  }


  componentDidMount(){
    window.onresize = () => {
      console.log(window.innerWidth / 400);
      this.setState({width: window.innerWidth * 0.4, height: 300}); 
    };
  }


  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }

  render() {
    return (
        <div>
            <div> 
                <BarChart 
                  width={this.state.width}
                  height={300}
                  margin={this.state.margin}
                  data={this.state.data}
                  onBarClick={this.handleBarClick}/>
            </div>
        </div>
    );
  }

}

export default Graph;


