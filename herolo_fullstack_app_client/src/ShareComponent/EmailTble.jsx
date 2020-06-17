import React, { Component } from "react";

class RowTB extends Component{
    constructor(props){
        super(props);
        debugger
        this.state={
            RowData: this.props.RowData,
            showHide:false
        }
    }
    showDetails = () =>{
        if(this.state.showHide){
          this.setState({
            showHide:false
          })
        }
        else{
          this.setState({
            showHide:true
          })
        }
    }
    DelFunc = () =>{
        this.props.DelFunc(this.state.RowData)
    }
    render(){
        return([
            <tr className="visible-details">
                <td>{this.state.RowData.From}</td>
                <td>{this.state.RowData.To}</td>
                <td>{this.state.RowData.subject}</td>
                <td onClick={this.showDetails}>Open</td>
                <td onClick={this.DelFunc}>remove</td>
            </tr>,
            <tr className={this.state.showHide ?"show-details":"hide-details"}>
               <td>{this.state.RowData.message}</td>
           </tr>
        ]
        )
    }
}

class EmailTble extends Component {
    constructor(props){
        super(props)
        this.state={
            ListData:this.props.ListData
        }
    }


    GetRows = (RowData) =>{
        
        return <RowTB RowData={RowData} DelFunc={this.DelFunc}/>
    }
    DelFunc = (email) =>{
        this.props.deleteFun(email)
    }
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Subject</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.ListData.map((row)=>this.GetRows(row))}
                </tbody>
            </table>
        )
    }
}
export default EmailTble