import React, { Component } from "react";
import "../css/GeneralStyle.css"
import { bindActionCreators } from "../../node_modules/redux";
import {connect} from 'react-redux';
import {
    GetInbox,
    GetOutbox,
    DeleteInboxEmail,
    DeleteOutboxEmail
} from "../Actions/EmailsActions"
import EmailTble from "../ShareComponent/EmailTble";

class MangeEmailsPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            InboxShow:true,
            InboxList:[],
            OutboxList:[],
            ActiveTbl:""
        }
    }
    componentDidMount = async () =>{

       await this.GetInbox();

    }
    GetInbox = async () =>{
        this.setState({
            ActiveTbl:""
        })
        await this.props.GetInbox().then(()=>{
            this.setState({
                ActiveTbl:<EmailTble ListData={this.props.Email_Inbox} deleteFun ={this.DeleteInboxEmail}/>
            })
           
            
        })
       
    
    }
    GetOutbox = async () =>{
        this.setState({
            ActiveTbl:""
        })
       await this.props.GetOutbox().then(()=>{
            this.setState({

                ActiveTbl:<EmailTble ListData={this.props.Email_Outbox} deleteFun ={this.DeleteOutboxEmail}/>
            })
        })
       
    }

    DeleteInboxEmail = (Email) =>{
        this.setState({
            ActiveTbl:""
        })
        this.props.DeleteInboxEmail(Email).then(()=>{
            debugger
            this.setState({

                ActiveTbl:<EmailTble ListData={this.props.Delete_EmailInbox} deleteFun ={this.DeleteOutboxEmail}/>
            })
        })
    }
    
    DeleteOutboxEmail = (Email) =>{
        this.setState({
            ActiveTbl:""
        })
        this.props.DeleteOutboxEmail(Email).then(()=>{
            debugger
            this.setState({

                ActiveTbl:<EmailTble ListData={this.props.Delete_EmailOutbox} deleteFun ={this.DeleteOutboxEmail}/>
            })
        })
    }



    render(){
        
        return(
            <div className="container">
                <h1>My Email Box</h1>
                <div class="tab">
                    <button onClick={this.GetInbox} className="tablinks" >Inbox</button>
                    <button onClick={this.GetOutbox} className="tablinks" >outbox</button>
                </div>
                
                   {this.state.ActiveTbl}
                
                    <div className="nav-btn">
                        <button onClick={()=> this.props.history.push("./ComposeEmailPage")} className="btn-goTo">Send Email</button>
                    </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        Email_Outbox:state.Email_Outbox,
        Email_Inbox:state.Email_Inbox,
        Delete_EmailOutbox:state.Delete_EmailOutbox,
        Delete_EmailInbox:state.Delete_EmailInbox
    };
  };

  function matchDispatchToProps(dispatch){
    return bindActionCreators({
        GetInbox:GetInbox,
        GetOutbox:GetOutbox,
        DeleteInboxEmail:DeleteInboxEmail,
        DeleteOutboxEmail:DeleteOutboxEmail
    },dispatch)
  }
  export default connect(mapStateToProps,matchDispatchToProps)(MangeEmailsPage);
