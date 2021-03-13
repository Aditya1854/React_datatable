import React from 'react';
import './App.css';
import axios from 'axios';
import Add from './modal/Add';
import Edit from './modal/Edit';
import Delete from './modal/Delete';
import Success from './modal/Success';
import Table from './table'

class App extends React.Component {
     //for storing clicked row data and it's id
     rowdata = null;
     id =null;
    //state
    state = {
        student : [],
        add : 'false',
        edit : 'false',
        delete : 'false',
        success : 'false',
        msg : ''
    }
    //create axios 
    api = axios.create({
        baseURL : 'http://localhost:8080/student'
    })

   // adding data
    adding = (tname,temail,tuniversity) =>{
        let sdata ={
            id :0,
            name: tname,
            email : temail,
            universityName : tuniversity
        }
        this.api.post('/',sdata).then(res =>{            
            let temp = [...this.state.student]
            this.setState({
                student : [...temp,res.data],
                success : 'true',
                msg : 'Added Succesfully'
            })  
        })
        
    }
// editing data
editing = (index,tid,tname,temail,tuniversity) =>{
    let sdata ={
        id :tid,
        name: tname,
        email : temail,
        universityName : tuniversity
    }
    
    this.api.put('/',sdata).then(res =>{            
        let temp = [...this.state.student]
        temp[index] = res.data
        this.setState({
            student : [...temp],
            success:'true',
            msg : 'Edited Succesfully'
        })   
    })
}
//deleting
deleting = (index,tid) =>{
         
    this.api.delete('/'+ tid).then(res =>{ 
                   
        let temp = [...this.state.student]
        temp.splice(index,1);
        this.setState({
            student : [...temp],
            success:'true',
            msg : 'Deleted Succesfully'
        })
        
    })
}
//fetch all
    componentDidMount() {
        
       let output = ''
       this.api.get('/').then(res => {
           output = res.data;
        this.setState({
            student : [...output]

        })
     //   this.call();
       
        })
}
//form close
close = () =>{
    this.setState({add:'false',
                    edit : 'false', delete : 'false'})
}
clear = () =>{
    
    let temp = setInterval(() => {
        this.setState({success : 'false'})
        clearInterval(temp);
      }, 2000);    
}
edittrue = (data) =>{
    this.setState({ edit : 'true'})
    const dt = {id : data.id, name : data.name, email : data.email, universityName : data.universityName};
    this.rowdata = dt;
    this.id = data.tableData.id;
    
}
deltrue =(data) =>{
    this.setState({ delete : 'true'})
    const dt = {id : data.id, name : data.name, email : data.email, universityName : data.universityName};
    this.rowdata = dt;
    this.id = data.tableData.id;
}

    render() {
        return (
            <div className="MainDiv" style = {{fontSize : 13}}>
            <Table data = {this.state.student} edit ={this.edittrue} del ={this.deltrue} />
                <br></br>
                <div className = 'd-flex justify-content-center' >
                <p><span onClick = {() => this.setState({ add : 'true'})}  ><button className="btn btn-success" style = {{width : 130, height :35, fontSize : 13, color : 'white'}}>Add New Student</button></span></p>
                </div>
                <div>
                    {
                        this.state.add === 'true' ? <Add click = {this.adding} state = {this.close}/> : null
                    }
                </div>
                <div>
                    {
                        
                        this.state.edit === 'true' ? <Edit index = {this.id} click = {this.editing} rowdata = {this.rowdata}  state = {this.close}/> : null
                        
                    }
                </div>
                <div>
                    {
                        
                        this.state.delete === 'true' ? <Delete index = {this.id} click = {this.deleting} rowdata = {this.rowdata}  state = {this.close}/> : null
                        
                    }
                </div>
                <div>
                    {
                        

                        
                        this.state.success === 'true' ? <Success calling = {this.clear()} mesg = {this.state.msg}  state = {this.close}/> : null
                        
                    }
                </div>                     
            </div>

        );
        
    }
}
export default App;