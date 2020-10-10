import React,{ Component } from "react";


export default class Education extends Component{
    
    render(){
        return(
            <div>
                <div className="row mt-4">
                    <div className="col-4">
                        <hr style={this.props.style_hr}/>
                    </div>
                    <div className="col-4">
                        <p className="text-center">EDUCATION</p>
                    </div>
                    <div className="col-4">
                        <hr style={this.props.style_hr}/>
                    </div>
                </div>
                {this.props.details.map((records)=><EducationRow key={records.id} rec={records}/>)}
            </div>
        );
    }
    
}
class EducationRow extends Component{
 
    render(){
        return(
            <div className="row">
                <div className="col-3">
                    <p className="font-weight-bold text-secondary">{this.props.rec.year}</p>
                </div>
                <div className="col-8 offset-1 text-justify">
                    <p className="para">
                        <strong>{this.props.rec.instituteName}</strong>
                        <br/>{this.props.rec.degree}<br/>
                        <span className="font-italic">{this.props.rec.marks}</span>
                    </p>
                </div>
            </div>
        );
    }
    
}
