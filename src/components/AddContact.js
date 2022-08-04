import React from 'react';

class AddContact extends React.Component {
    
    state={
        name:"",
        email:"",
    }

    add = (e) => {
        e.preventDefault();  //we dont want our page to get refreshed when we click the add button
        if(this.state.name==="" || this.state.email==="")
        {
            alert("All the fields are mandatory!");
            return;
        }

        this.props.addContactHandler(this.state); //passing information from props i.e child to parent i.e in app.js function addContactHandler

        this.setState({name:"",email:""}); //after adding the contact this is what will wbe displayed inside the text boxes
        //console.log(this.state);
        

        this.props.history.push("/");  //Bruh its giving error wtf!
    }
    
    render() {
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" name="name" placeholder='name' value={this.state.name}  onChange={(e) => this.setState({name:e.target.value})}/>
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input type="text" name="email" placeholder='email' value={this.state.email}  onChange={(e) => this.setState({email:e.target.value})}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
};

export default AddContact;