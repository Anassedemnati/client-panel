import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup'
import axios from 'axios';
class EditContact extends Component {
    state={
        name:'',
        phone:'',
        email:'',
        errors:{
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id
        try{
            const res =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            this.setState({
                name:res.data.name,
                email:res.data.email,
                phone:res.data.phone
            })
        }catch(e){
            console.error(e);
        }
        
    }
    onChangeInput=(e)=>this.setState({[e.target.name] : e.target.value})

     submit = async (dispatch, size,e) =>{
        e.preventDefault();//stop page refreche
        
        // console.log(this.state)

        const{name,phone,email} = this.state;

        if(name===""){
            this.setState({errors:{name:'the name is Required'}})
            return;
        }
        if(phone===""){
            this.setState({errors:{phone:'the phone is Required'}})
            return;
        }
        if(email===""){
            this.setState({errors:{email:'the email is Required'}})
            return;
        }

        const upContact={
            name,
            email,
            phone
        }
            const id = this.props.match.params.id

        try{
            const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContact)
       
            dispatch({
                type: "UPDATE_CONTACT",
                payload:res.data
            })

        }catch(e){
            console.log(e);

        }
       

        

        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
        this.props.history.push('/');

    };
    render() {
        const {name,phone,email,errors}=this.state;
        return(
            <Consumer >
                {value=>{
                    const {dispatch}=value;
                    return (
                        <div>
                            <form onSubmit={this.submit.bind(this, dispatch,value.contacts.length)}>
                            <div className="card">
                               
                                <div className="card-body">
                                    <h4 className="card-title">Edit contact</h4>
                                    <div className="card-text">
                                               
                                       <TextInputGroup 
                                            label='Name' 
                                            type='text'
                                            name='name' 
                                            value={name}
                                            onChange={this.onChangeInput}
                                            error={errors.name}
                                        />
                                         
                                         <TextInputGroup 
                                            label='Phone' 
                                            type='text'
                                            name='phone' 
                                            value={phone}
                                            onChange={this.onChangeInput}
                                            error={errors.phone}
                                        />
                                        <TextInputGroup 
                                            label='Email' 
                                            type='email'
                                            name='email' 
                                            value={email}
                                            onChange={this.onChangeInput}
                                            error={errors.email}
                                        />
                                        <br />
                                        <button className="btn btn-danger btn-block">Update Contact</button>
            
            
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    )

                }}
            </Consumer>
        )
        
    }
}
export default EditContact;