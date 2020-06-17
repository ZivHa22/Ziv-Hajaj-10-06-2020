import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class HomePage extends Component{
    constructor(props){
        super(props)
    }

    GoTO = (go)=>{
        switch(go){
            case "Send":
                this.props.history.push("./ComposeEmailPage");
                break;
            case "Acount":
                this.props.history.push("./MangeEmailsPage");
                break;
        }
    }
    render(){
        return(
            <div className="container">
               <h1>Wolcome To Email System</h1>
               <div className="nav-btn">
                   <button onClick={()=> this.GoTO("Send")} className="btn-goTo">Send Email</button>
                   <button onClick={()=> this.GoTO("Acount")} className="btn-goTo">My Acount</button>
               </div>
            </div>
        )
    }
}

export default withRouter(HomePage)