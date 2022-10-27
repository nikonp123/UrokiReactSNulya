import React, { useState } from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from './AddUser';


function User(props) {

    const [editForm, setEditForm] = useState(false);
    
    const user=props.user;
    // console.log(editForm);
    
    return (<li className='user' key={user.id}>{user.first_name}
        <p>{user.last_name}</p>
        <p>{user.email}</p>
        <img src={user.avatar} alt="" />
        <p>{user.isHappy ? 'Happy!' : 'Unhappy((('}</p>
        <IoCloseCircleSharp className='delete-icon' onClick={() => props.onDelete(user.id)}/>
        <IoHammerSharp className='edit-icon' onClick={() => {
            setEditForm( !editForm); props.onEdit(user);
        }}/>

        {editForm && <AddUser user={user} onAddMy={props.onEdit}/>}
    </li>)   
}

export default User;