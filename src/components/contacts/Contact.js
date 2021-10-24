import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../context';
import './contact.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state={
        showContactToggle:true
    }
    showContact(myMsg){
        console.log('salam', myMsg);
        this.setState({
            showContactToggle:!this.state.showContactToggle
        })
        
        
    }
     onDeleteClick = async (id,dispatch)=>{
         try{
             await axios.delete("https://jsonplaceholder.typicode.com/users/"+id)
            
            dispatch({
                type:'DELETE_CONTACT',
                payload: id
                })
         }
         catch(e){
             console.error(e);
         }
          


        

        
    }


    render() {

           
        const {id,name,phone,email} = this.props.data;
        return (
            <Consumer>
                {value=>{
                    const {dispatch}=value;
                    return (
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                    {name} <i style={{cursor:'pointer' ,color:'blue'}} 
                                    onClick={this.showContact.bind(this ,name) } className="fa fa-sort-down"></i>
                                    <Link to={`/contact/edit/${id}`}>
                                        <i className="fa fa-pencil" style={{
                                            color:"orange",
                                            float:"right",
                                            cursor:"pointer",
                                            marginLeft:"8px"
                                        }}></i>
                                    </Link>
                                    <i style={{color:'red',float:'right',cursor:'pointer'}} className="fa fa-times" aria-hidden="true"
                                    onClick={this.onDeleteClick.bind(this,id,dispatch)}
                                    
                                    ></i>

                                </h4>
            
                            <p className="card-text">
                             {(this.state.showContactToggle)?( <ul className="list-group">
                                    <li className="list-group-item">{phone}</li>
                                    <li className="list-group-item">{email}</li>
                                    </ul>): null}
                            
                            </p>
                        </div>
                    </div>
    
                    )


                }
              
                }
                
            </Consumer>
        )
       
    }
}
Contact.defaultProps = { 
    name:"my name",
    tel: "00000",
    email:"myemail@email.com"

}
Contact.propTypes ={
    data: PropTypes.object.isRequired,
    
    
    
  } 
  


export default Contact