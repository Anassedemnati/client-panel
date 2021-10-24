import React, { Component } from 'react'
import axios from 'axios';
import Contact from './contacts/Contact';
const Context= React.createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT': 
        return{
            contacts: state.contacts.filter((contact)=>contact.id !== action.payload)
        };
        case 'ADD_CONTACT': 
        return{
            contacts: [action.payload, ...state.contacts]
        };
        case 'UPDATE_CONTACT': 
        return{
            contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)  
        };
        default:
            return state;
    }

    
}
export  class Provider extends Component {
    state={
        contacts:[
            {id:1, name:"anasse demnati", phone:"0632089439", email:"anas@gmail.com"},
            {id:2, name:"abdeladim demnati", phone:"0632089445", email:"abdeladim@gmail.com"},
            {id:3, name:"boutaina demnati", phone:"0632089410", email:"boutaina@gmail.com"},
            {id:4, name:"Mohamed demnati", phone:"0632089410", email:"boutaina@gmail.com"},
        ],
        dispatch: action => this.setState(state=> reducer(state,action))

    }
    async componentDidMount(){
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.setState({
                 contacts:res.data
             })

        }catch(e){
            console.error(e);
        }
       
       
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
