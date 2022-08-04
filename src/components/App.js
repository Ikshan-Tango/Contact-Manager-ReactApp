import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//using routes instead of switch
//import { uuid } from 'uuidv4';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

// We use props to pass information from parent to child and we use handlers to pass information from child to parent

function App() {
  const LOCAL_STORAGE_KEY="contacts";

  const [contacts, setContacts] = useState([]);//iss meh contacts mera variable hai and setcontacts jo hai ek function hai jiska kaam by default contacts meh value [] ye daaalna hai 

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id!== id; //in the newcontactlist we want to add all those contacts whose ID is not equal to that ID of contact which we want to delete
    });

    setContacts(newContactList);
  };//this function need to be passed to the contact list as well because in contact list we can see our list of contacts, so final changes are implemented there only

  const addContactHandler = (contact) =>{
    console.log(contact); 
    setContacts([...contacts,{id: uuidv4(), name:contact.name, email:contact.email}]);  //we use ... to signal the computer to take all of the data
  };//FUcking hell bruh I did it!!!, just instead of writing ...contacts i wrote contact.name and contact.email 

  useEffect(() =>{
    const retrivecontacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivecontacts) 
     setContacts(retrivecontacts);
  },[]);// to retrive contact but isn't working 

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]); // to set the data of contacts in the local storage 

  
  return (
    <div className='ui container'>
      <Router>
        <Header />
          <Routes>{/* switches ki jagah ye use kr rhe hai ham*/}
            <Route path="/" exact element={<ContactList contacts={contacts} getContactId= { removeContactHandler }/>} />
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />  
            {/*   element= {() => (<AddContact addContactHandler={addContactHandler} authed={true}/> )}
            We use ( ) => function to pass the props to the handler inside specific routes */}
          </Routes>

        {/* <AddContact addContactHandler={addContactHandler}/> 
        <ContactList contacts={contacts} getContactId= { removeContactHandler }/>  */}
      </Router>
    </div>
  );
};

//In V6, you can't use the COMPONENT prop anymore. It was replaced in favor of element:

export default App;