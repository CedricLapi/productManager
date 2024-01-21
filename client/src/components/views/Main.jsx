import React, { useState } from 'react'
import PersonForm from '../PersonForm'
import PersonList from '../PersonList'

const Main = (props) => {
    const [people, setPeople] = useState([]);

    
  return (
    /*PersonForm and PersonList can both utilize the getter and the setter established in their Component:*/
    <div>
        <PersonForm people={people} setPeople={setPeople}/>

        <hr/>
        
        <PersonList people={people} setPeople={setPeople} /> 
    </div>
  )
}

export default Main;