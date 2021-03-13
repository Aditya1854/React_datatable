import React from 'react';
import './index.css';
import  'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

export default class Edit extends React.Component {
   
    render() {
        return (
            
           <>
                <div className="modal3" >
                    <div className="cross">
                        <label style = {{cursor : 'pointer'}}><span onClick={this.props.state} className="close" title="Close Modal"><h1 style={{color  : 'red', fontSize : 35}}>×</h1></span></label>
                    </div>
                    <form id="edit" action="#" noValidate>
                        <center><h3 >Edit Student</h3></center><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <label>Name :</label><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" ref =  {(name) => this.name = name}  style={{width : 320}} defaultValue ={this.props.rowdata.name} required /><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label className='warning' id='name_error1'></label><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <label>Email :</label><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" ref =  {(email) => this.email = email}  style={{width : 320}} yle={{width : 320}} defaultValue ={this.props.rowdata.email} required /><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label className='warning' id='email_error1'></label><br></br>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                         
                         <label>University Name :</label><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <input type="text" ref =  {(university) => this.university = university}  style={{width : 320}} yle={{width : 320}} defaultValue ={this.props.rowdata.universityName} required /><br></br>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <label className='warning' id='university_error1'></label><br></br>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                         <div className = 'd-flex justify-content-center' >
                         <input type="submit" style={{width : 90, height :35, fontSize : 13, color : 'white'}} id="addNew" onClick = {() =>{ this.props.state() ; return this.props.click(this.props.index, this.props.rowdata.id, this.name.value,this.email.value,this.university.value)}} className="btn btn-success" value="Edit" /><label>&nbsp;&nbsp;&nbsp;&nbsp;</label>


                         <span onClick={this.props.state}><label></label><button style={{width : 90, height : 35, fontSize : 13, color : 'white'}} className="btn btn-warning">Close</button></span>
                         </div>
                      
                    </form>
                </div>
            </>

        );
    }

}



