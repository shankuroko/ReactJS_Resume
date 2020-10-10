import React,{ Component } from "react";


class Skills extends Component{
     
    render(){
        return(
            <div>
                <div className="row mt-4">
                    <div className="col-4">
                        <hr style={this.props.style_hr} />
                    </div>
                    <div className="col-4">
                        <p className="text-center">SKILLS</p>
                    </div>
                    <div className="col-4">
                        <hr style={this.props.style_hr}/>
                    </div>
                </div>
                {this.props.details.map((record)=><SkillsRow key={record.id} title={record.title} content={record.content}/>)}
            </div>
        );
    }
    
}
class SkillsRow extends Component{
    render(){
        return(  
            <div className="row">
                <div className="col-3">
                    <p className="font-weight-bold text-secondary">{this.props.title}</p>
                </div>
                <div className="col-8 offset-1 text-justify">
                    <p className="para">{this.props.content}</p>
                </div>
            </div>
        );
    }   
}
export default (Skills,SkillsRow);