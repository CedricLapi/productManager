
import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Paper } from '@mui/material';

const PersonForm = (props) => {

    //Keep track of what is being typed via useState hook
    const {people, setPeople} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //Handler when the form is submitted
    const onSubmitHandler = (e) => {
        //Prevent the default behavior of the submit

        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => {
                console.log(res); //always console log to get used to tracking your data!
                console.log(res.data);
                setPeople([...people, res.data]);

            })
            .catch(err => console.log(err))
}
  return (

    
    <form onSubmit={onSubmitHandler}>
        <Paper elevation={3}>
            <p>FILL THE FORM BELOW:</p>
        </Paper>

        <Card>
            <CardContent>
                <h3>Subscription will be closed quite soon, hurry up!</h3>
            </CardContent>
        </Card>


        <p>
            
            <label> First Name</label><br/>
            {/* When the user types in this input, our onChange synthetic event runs
            this arrow function, setting that event's target's (input) value (what's typed into the input)
            to our updated state*/}

            <input type="text" onChange = {(e) => setFirstName(e.target.value)} />
        </p>

        <p>
            <label> Last Name</label><br/>
            <input type="text" onChange = {(e) => setLastName(e.target.value)} />
        </p>

        <input type="submit" />

    </form>
  )
}

export default PersonForm;