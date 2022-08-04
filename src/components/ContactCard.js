import React, {useState} from "react";
import users from "../images/users.jpg";

const ContactCard = (props) => {

    const {id,name,email} = props.contact; //just a shortcut to use direclty name and email instead of writing contact.name and contact.email

    return(
        <div className="item">
            <img className="ui avatar image" src={users} alt="users"/>
                <div className="content">
                    <div className="header">{ name }</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon" onClick={() => props.clickHandler(id)} key={id}></i>  {/*key is very important to be added else it will delete all the contact */}
                {/* style={{color:"red",marginTop:"7px"}} */} 
        </div>
    );
};
//Clickhandler function gets activated when icon is clicked, and we have gone from child to parent using props, and as its parent is in contact list -> render contact list, from there we need anothe handler that passes that function to above where its actual definition is written
export default ContactCard;