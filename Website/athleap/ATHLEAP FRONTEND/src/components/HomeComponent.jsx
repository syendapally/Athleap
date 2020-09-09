import React, { Component } from 'react'

export default class HomeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    athletePage(){
        this.props.history.push('/add-athlete');
    }
    investorPage(){
        this.props.history.push('/investors');
    }
    render() {
        return (
            <div>
                <div className="container" >
                  
                 <img src = "./inv.PNG" height = "150" width = "500" class = "rounded" onClick={this.investorPage.bind(this)}></img>
                 &emsp;&emsp;&emsp;&emsp;
                 <img src = "./athl.PNG" height = "150" width = "500" class = "rounded" onClick={this.athletePage.bind(this)}></img>
                 </div>
               
            </div>
        )
    }
}
