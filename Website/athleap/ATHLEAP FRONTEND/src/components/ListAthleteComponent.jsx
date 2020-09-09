import React, { Component } from 'react'
import AthleteService from '../services/AthleteService'

export default class ListAthleteComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            athletes: []
        }
        this.addAthlete=this.addAthlete.bind(this);
    }
    componentDidMount(){
        AthleteService.getAthletes().then((res)=>{
            this.setState({athletes : res.data});
        });
    }
    addAthlete(){
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Athletes</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addAthlete}>Home</button>
                </div>
                <div className="row">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Athlete First Name</th>
                                <th>Athlete Last Name</th>
                                <th>Athlete Email</th>
                                <th>Athlete ID</th>
                                <th>Athlete Sport</th>
                                <th>Athlete TPOCE</th>
                                <th>Athlete DPP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.athletes.map(
                                    athlete =>
                                    <tr key={athlete.id}>
                                        <td>{athlete.firstName}</td>
                                        <td>{athlete.lastName}</td>
                                        <td>{athlete.emailId}</td>
                                        <td>{athlete.id}</td>
                                        <td>{athlete.sport}</td>
                                        <td>{athlete.tpoce}</td>
                                        <td>{athlete.dpp}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
