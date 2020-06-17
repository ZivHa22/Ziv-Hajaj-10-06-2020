import React, { Component } from "react";
import "../css/GeneralStyle.css"
import {connect} from 'react-redux';
import { bindActionCreators } from "../../node_modules/redux";
import {SendEmail} from "../Actions/EmailsActions"


class ComposeEmailPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            Message:{
                subject:"",
                From:"",
                To:"",
                message:""
            }
        }
    }
    MessData = (event) =>{
        let MessTemp = this.state.Message
        switch(event.target.name){
            case "Subject":
                MessTemp.subject = event.target.value
                break;
            case "From":
                MessTemp.From = event.target.value
                break;
            case "To":
                MessTemp.To = event.target.value
                break;
            case "Message":
                MessTemp.message = event.target.value
                break;
        }
        this.setState({
            Message:MessTemp
        })
    }
    SendMess = () => {
        this.props.SendEmail(this.state.Message).then(()=>{
            if(this.props.Send_Email.status == "success")
            {
                alert("The email sent successfully");
                window.location.reload();
            }
            else
                alert("Error");
        })
    }
    g
    render() {
        return (
            <div className="container">
                <h1>Send Email</h1>
                <div  className="contact1-form">
                    <div className="wrap-feild">
                        <input onChange={this.MessData} placeholder="Subject" name="Subject" type="text" />
                    </div>   
                    <div className="wrap-feild">
                        <input onChange={this.MessData} placeholder="From" name="From" type="email" />
                    </div>   
                    <div className="wrap-feild">
                        <input onChange={this.MessData} placeholder="To" name="To" type="email" />
                    </div>   
                    <div className="wrap-feild">
                        <textarea onChange={this.MessData} placeholder="Message" name="Message" type="email" />
                    </div>
                    <div className="wrap-btn">              
                        <button  onClick={this.SendMess} className="send-btn">Send Email</button>
                        <button  onClick={()=>this.props.history.push("./MangeEmailsPage")} className="send-btn">Your Account</button>
                    </div>

                </div>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
      Send_Email:state.Send_Email
    };
  }
  
  function matchDispatchToProps(dispatch){
    return bindActionCreators({
        SendEmail:SendEmail
    },dispatch)
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(ComposeEmailPage);