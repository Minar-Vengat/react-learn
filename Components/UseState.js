import React, { useState } from 'react'

function UseState() {
    const [person, setPerson] = useState( {firstname : "", lastName : "" });
  return (
    <div>
        <hr/>
        <input type='text' onChange={(e) => setPerson({...person, firstname: e.target.value})}  placeholder='Enter first name'/>
        <input type='text' onChange={(e) => setPerson({...person, lastName: e.target.value })}  placeholder='Enter last name' />
        <p>First Name:{person.firstname} </p>
        <p>Last Name:{person.lastName} </p>
    </div>
  );
};
export default UseState;