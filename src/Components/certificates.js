import React,{ Component } from "react";


export default class Certificates extends Component{
      
    render(){
        return(
            <div>
                <div className="row mt-4 ">
                    <div className="col-3">
                        <hr style={this.props.style_hr} />
                    </div>
                    <div className="col-6">
                        <p className="text-center">CERTIFICATES</p>
                    </div>
                    <div className="col-3">
                        <hr style={this.props.style_hr}/>
                    </div>
                </div>
                {this.props.details.map((records)=>
                    <CertificatesRowByInstitute key={records.id} rec={records}/>
                )}
            </div>
        );
    }
    
}
class CertificatesRowByInstitute extends Component{
             
    render(){
        return(
            <div className="row">
                <div className="col-3">
                    <p className="font-weight-bold text-secondary">{this.props.rec.institute}</p>
                </div>
                <div className="col-8 offset-1 text-justify">
                    <p className="para">{this.props.rec.details} <br/>
                        <span className="font-italic">
                            <a href={this.props.rec.link}>Link</a>
                        </span>
                        <br/><br/>
                    </p>
                </div>
            </div>
        );
    }
    
}
