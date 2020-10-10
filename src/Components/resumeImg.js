import React,{ Component } from "react";


export default class ResumeImg extends Component{
    constructor(props){
        super(props);
        this.state={};
    }       
    render(){
        return(
            <div className="col-sm-4 order-1">
                <div className="d-flex justify-content-center">
                    <div className="card border-info ml-2 mb-3 d-flex justify-content-center ">
                        <img className="card-img-top" src="./shankar.jpg" alt="Shankar Narayanan"/>
                        <div className="card-body py-0 mt-2">
                            <h6 className="card-text text-center">Shankar Narayanan</h6>
                            <p className="card-subtitle mb-2 text-muted text-center">Student</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}