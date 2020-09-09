import React, { Component } from 'react'
import InvestorService from '../services/InvestorService';

export default class CreateInvestorComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            emailId:'',
            sport:'',
            pwd:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeSportHandler = this.changeSportHandler.bind(this);
        this.changepwdHandler = this.changepwdHandler.bind(this)
        this.saveinvestor = this.saveinvestor.bind(this);
    }
    saveinvestor = (e) => {
        e.preventDefault();
        let investor = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId
            , sport: this.state.sport, pwd:this.state.pwd};
        console.log('investor => ' + JSON.stringify(investor));
        InvestorService.createinvestor(investor).then(res =>{
            this.props.history.push("/athletes")
        });
    }
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    changeSportHandler = (event) => {
        this.setState({sport: event.target.value});
    }
    changepwdHandler = (event)=>{
        this.setState({pwd:event.target.value});
    }
    cancel(){
        this.props.history.push('/home');
    }
    render() {
        return (
            <div>
                <div className="containter">
                    <div classNAme="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 classNAme="text-center">Create your profile!</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>    
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>    
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>    
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Sport</label>    
                                        <input placeholder="Sport" name="sport" className="form-control"
                                            value={this.state.sport} onChange={this.changeSportHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Your Password</label>    
                                        <input type = "password" placeholder="Password" name="pwd" className="form-control"
                                            value={this.state.pwd} onChange={this.changepwdHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveinvestor}>Proceed</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
