import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../context';
 class Contacts extends Component {
  
    deleteContact(id){
        // 
        const {contacts}= this.state;
        const newlistcontacts =  contacts.filter((contact)=>contact.id !== id)
        this.setState({
            contacts:newlistcontacts
        })
    }


    render() {

        return(
            <Consumer>
                {value=> (
                         <div>
                         {value.contacts.map((contact)=> 
                             <Contact key={contact.id} data={contact} deleteContactFromChild/>
                         )}
                     </div>
                )}
            </Consumer>
            
            )


      
    }
}



export default Contacts