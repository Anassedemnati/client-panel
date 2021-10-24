import React, { Component } from 'react';
import {Consumer} from '../context';


class AddContact extends Component {
    state={
        name:'',
        phone:'',
        email:''
    }
    onChangeInput=(e)=>this.setState({[e.target.name] : e.target.value})

    submit= (dispatch, size,e) =>{
        e.preventDefault();//stop page refreche
        // console.log(this.state)
        dispatch({
            type: "ADD_CONTACT",
            payload:{
                id: size +1,
                name:this.state.name,
                email:this.state.email,
                tel:this.state.phone

            }
        })
        this.setState=({
            name:'',
            email:'',
            phone:''
        })

    };
    render() {
        const {name,phone,email}=this.state;
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
                                               
                                        <div className="form-group">
                                                <label htmlFor="">Name</label>
                                                <input type="text" className="form-control"
                                                name="name" 
                                                defaultValue={name}
                                                onChange={this.onChangeInput}
                                                />
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="">Phone</label>
                                                <input type="text" className="form-control"
                                                name="phone"
                                                defaultValue={phone}
                                                onChange={this.onChangeInput}/>
                                                
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="">Email </label>
                                               <input type="email" className="form-control" 
                                               name="email"
                                               defaultValue={email}
                                               onChange={this.onChangeInput}
                                               />
                                              
                                        </div>
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