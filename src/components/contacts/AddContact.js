import React, { Component } from 'react'

class AddContact extends Component {
    state={
        name:'',
        phone:'',
        email:''
    }
    onChangeInput=(e)=>this.setState({[e.target.name] : e.target.value})
    submit= e =>{
        e.preventDefault();
        console.log(this.state)
    };
    render() {
        const {name,phone,email}=this.state;
        return (
            <div>
                <form onSubmit={this.submit}>
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
    }
}
export default AddContact;