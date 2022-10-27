import React, { useState } from 'react';


function AddUser(props) {
    let userAdd = {};
    const defValue = {
        first_name: '',
        last_name: '',
        descr: '',
        email: '',
        avatar: ''        
    };

    const [user, setUser] = useState(defValue);

    const handleChange = e => {
        let { name, value } = e.target;
        if (name==='isHappy') {
            value=e.target.checked;    
        };
        // console.log(e.target);
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // console.log(user);
    // console.log(props.onAddMy);
    
    const cancelCourse = () => { 
        setUser(defValue); 
    }

    return (
        <form id='create-course-form'>
            <input placeholder='First Name' type="text" value={user.first_name} name='first_name' onChange={handleChange}/>
            <input placeholder='Last Name' type="text" value={user.last_name} name='last_name' onChange={handleChange}/>
            <input placeholder='email' type="email" value={user.email} name='email' onChange={handleChange} />
            <textarea placeholder='descr' value={user.descr} name='descr' onChange={handleChange}></textarea>
            <label htmlFor='isH'>Is happy?</label>
            <input placeholder='Is happy?' type="checkbox" id='isH' value={user.isHappy} name='isHappy' onChange={handleChange}/>
            <button type='button' onClick={() => {
                cancelCourse();
                userAdd =     
                    {first_name: user.first_name,
                    last_name: user.last_name,   
                    descr: user.descr,   
                    email: user.email,   
                    avatar: user.avatar   
                    };
                if (props.user) {
                    userAdd.id=props.user.id;    
                }   
                props.onAddMy(userAdd);
                }}>Submit</button>
        </form>
    );      
}

export default AddUser;