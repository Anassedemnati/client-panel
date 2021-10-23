import React, { Component } from 'react'

const Context= React.createContext();

export  class Provider extends Component {
    state={
        contacts:[
            {id:1, name:"anasse demnati", tel:"0632089439", email:"anas@gmail.com"},
            {id:2, name:"abdeladim demnati", tel:"0632089445", email:"abdeladim@gmail.com"},
            {id:3, name:"boutaina demnati", tel:"0632089410", email:"boutaina@gmail.com"},
            {id:3, name:"Mohamed demnati", tel:"0632089410", email:"boutaina@gmail.com"},
        ]

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
