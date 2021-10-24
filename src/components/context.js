import React, { Component } from 'react'
import axios from 'axios';
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
    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            contacts:res.data
        }))
        .catch(err=> console.error(err));
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
