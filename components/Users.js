import React from 'react';
import User from './User';

function Users(props) {
    
    const users = props.propusers;

    if (users.length>0) {
        return (
            <div className='users'>
                <ol>
                    {users.map(el => (<User key={el.id} user={el} onDelete={props.onDeleteMy} onEdit={props.onEdit} />))}  
                </ol>
            </div>
        );
    
    } else {
        return (
        <div className='empty'>User list is empty</div>);
    }
}


export default Users;