import React from 'react'
import TableFormat from "./TableFormat.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    { id: 1, name: 'Basana Gouda', age: 50, city: 'Raichur', gender:'Male', Designation:'Farmer' },
    { id: 2, name: 'Vanajakshi', age: 42, city: 'Kurnool', gender:'Female',Designation:'HouseWife'  },
    { id: 3, name: 'Anusha', age: 28, city: 'HSR layout', gender:'Female', Designation:'Senior Test Engineer'  },
    { id: 4, name: 'Rakesh', age:29, city: 'Hospet', gender:'Male', Designation:'Informative Engineer'  },
    { id: 5, name: 'Vaishnavi', age:26, city: 'Hyderbad', gender:'Female', Designation:'Software Developer'  },
    { id: 6, name: 'Amarnath', age:30, city: 'Adoni', gender:'Male',Designation:'Senior Java Developer'  },
    { id: 7, name: 'H Mallikarjuna', age: 24, city: 'Rajajinagar', gender:'Male',Designation:'Junior Developer'  },
    { id: 8, name: 'Aarya', age: 1, city: 'Agara', gender:'Female',Designation:'NBB'  },

  ];
  
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'city', label: 'City' },
    {key: 'gender', label: 'gender'},
    {key:'Designation', label:'Designation'}
  ];

const App = () => {
  return (
    <div >
    <h1 style={{textAlign:'center', marginTop:'50px',color:'white', backgroundColor:'black'}}>FAMILY MEMBERS DETAILS</h1>
    < TableFormat data={data} columns={columns} />
  </div>
  )
}

export default App