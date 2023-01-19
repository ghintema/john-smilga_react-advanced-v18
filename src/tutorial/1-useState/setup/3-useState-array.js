import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [names, setNames] = React.useState(data);


  const deletePerson = (id) => { 
    // const id = e.target.parentNode.id;
    const namesCopy = [...names];
    const newNames = namesCopy.filter(name => name.id != id)
    setNames(newNames);
    console.log('newNames', newNames)
  }

  return (
    <>
      {names.map((person, index) => {
        const { id, name } = person;
        return (
          <div key = {id} id={id} className="item" >
            <h4>{name}</h4>
            <button onClick={() => deletePerson(id)}>löschen</button>
          </div>  
        )
      })}
      <button onClick={() => setNames(data)}>Restore the list</button>
    </>
    )
};

export default UseStateArray;
