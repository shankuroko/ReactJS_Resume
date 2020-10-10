import React,{ Component } from "react";
import Certificates from "./certificates";
import Education from "./education";
import Skills from "./skills";
import Contact from "./contact";


export default class ResumeDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            style_hr:{
                border:"1px solid #aaa"
            },
            education:[
                {
                    id:0,
                    year:"2019-Till Date",
                    instituteName:"Madras Institute Of Technology , Chennai , India",
                    degree:"B.Tech Information Technology",
                    marks:"CGPA:9.2"
                },
                {
                    id:1,
                    year:"2019",
                    instituteName:"Vidya Mandir Senior Sec School , Chennai , India",
                    degree:"High School",
                    marks:"93%"
                }
            ],
            certificates:[
                {
                    id:0,
                    institute:"NIELIT",
                    details:" Online 4 Week Certificate Course in Core Java",
                    link:"./certificates/java.pdf"
                }
            ],
            skills:[
                {
                    id:0,
                    title:"Programming Languages",
                    content:"C++ , JAVA , Python , JavaScript"
                },
                {
                    id:1,
                    title:"Database",
                    content:"MySQL , SQLite"
                },
                {
                    id:2,
                    title:"Web Technology",
                    content:"HTML , CSS"
                },
                {
                    id:3,
                    title:"Communication Languages",
                    content:"Tamil , Hindi , English"
                }
            ],
            contact:[
                {
                    id:0,
                    title:"Email ID",
                    content:"shankarsar9942@gmail.com"
                },
                {
                    id:1,
                    title:"Mobile No",
                    content:"9444856670"
                }
                
            ]   
                    
        }
    }        
    render(){
        return(
            <div className="col-sm-8 order-sm-1 order-2">
                <h2 className=" text-center">Resume</h2>
                <h5 className="font-weight-normal text-center text-secondary">Shankar Narayanan</h5>
                <Skills details={this.state.skills} style_hr={this.state.style_hr}/>
                <Education details={this.state.education} style_hr={this.state.style_hr}/>
                <Certificates details={this.state.certificates} style_hr={this.state.style_hr}/>
                <Contact details={this.state.contact} style_hr={this.state.style_hr}/>

            </div>
        );
    }
}