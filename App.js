import { useEffect, useState } from 'react';
import Header from "./components/Header";
import './App.scss';
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from 'axios';

// test git

const baseURL = 'https://reqres.in/api/users?page=1';

function App() {
  // let defUsers=[];
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseURL);
        setUser(response.data);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);


  // const defUsers = [
  //   {
  //     id: 1,
  //     firstName: 'Alex',
  //     secondName: 'Ku',
  //     descr: 'Description here',
  //     age: 48,
  //     isHappy: true
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Norman',
  //     secondName: 'Pu',
  //     descr: 'Description here2',
  //     age: 33,
  //     isHappy: false
  //   }
  // ];
  // users.length = 0;

  console.log(users);
  // console.log(defUsers);

  const addUser = (user) => {
    const id = users.length+1;
    user.id = id;
    setUser(prevState => ([
      ...prevState,
      user]));
    // console.log(users);
  };

  const delUser = (id) => {
    setUser(users.filter((el) => el.id !==id))
  };

  const editUser = (user) => {
    // console.log(user);


    setUser(prevState => 
      prevState.map(item => 
        item.id === user.id 
        ? user
        // ? { ...item, firstName: user.firstName, secondName: user.secondName}
        : item
      ));      

  };

  return (
    <div className="App">
      <Header title='User list' />
      <main>
        list:
        <Users propusers={users} onDeleteMy={delUser} onEdit={editUser}/>
        <aside><AddUser onAddMy={addUser}/></aside>
      </main>
    </div>
  );




};

export default App;
