import React,{ Component } from "react";
import SkillsRow from "./skills.js";
export default class Contact extends Component{
     
    render(){
        return(
            <div>
                <div className="row mt-4">
                    <div className="col-4">
                        <hr style={this.props.style_hr} />
                    </div>
                    <div className="col-4">
                        <p className="text-center">CONTACT</p>
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