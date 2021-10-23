import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'

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
    onDeleteClick=()=>{

        console.log('deleteclick')
        this.props.deleteContactFromChild()
    }


    render() {

           
        const {name,tel,email} = this.props.data;
        return (
            <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                        {name} <i style={{cursor:'pointer' ,color:'blue'}} 
                        onClick={this.showContact.bind(this ,name) } className="fa fa-sort-down"></i>
                        <i style={{color:'red',float:'right',cursor:'pointer'}} className="fa fa-times" aria-hidden="true"
                        onClick={this.onDeleteClick}
                        
                        ></i>
                    </h4>

                <p className="card-text">
                 {(this.state.showContactToggle)?( <ul className="list-group">
                        <li className="list-group-item">{tel}</li>
                        <li className="list-group-item">{email}</li>
                        </ul>): null}
                   
                  
                      
                        
                    
                    
                </p>
            </div>
        </div>
            
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
    deleteContactFromChild:PropTypes.func.isRequired
    
    
  } 
  


export default Contact