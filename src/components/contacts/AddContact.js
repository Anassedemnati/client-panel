import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup'

class AddContact extends Component {
    state={
        name:'',
        phone:'',
        email:'',
        errors:{

        }
    }
    onChangeInput=(e)=>this.setState({[e.target.name] : e.target.value})

    submit = (dispatch, size,e) =>{
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
        dispatch({
            type: "ADD_CONTACT",
            payload:{
                id: size +1,
                name,
                email,
                phone

            }
        })
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
                                    <h4 className="card-title">Add contact</h4>
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
                                        <button className="btn btn-success btn-block">Add Contact</button>
            
            
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
export default AddContact;