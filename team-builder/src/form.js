import React, { useState } from 'react';

const dummyData = [
    {name:'Turtleman',  role:'full-turtle man',email:'turtleman@turtles.com'},
    {name:'tom bielawski', role:'the dummy', email:'tommyhillgofigure.com'}
]
const initialFormValues = { name: '', email: '', role: '' }

export default function Form(){
    const [members, setMembers] = useState(dummyData)
    const [formValues, setFormValues] = useState(initialFormValues)

    const change = (event) => {
        const { value, name } = event.target
        // const newObj = {...formValues}
        // newObj[name] = value
        // setFormValues(newObj)
        setFormValues({...formValues, [name]: value})
      }

      const submit = (event) => {
        event.preventDefault()
        const newMember = {
          name: formValues.name.trim(),
          role: formValues.role.trim(),
          email: formValues.email.trim(),
        }
    
        setMembers([...members, newMember])
        setFormValues(initialFormValues)
      }
    
    return (
        <div className='container'>
            <h1>The Form</h1>
            {members.map((member, idx) => (
                <div key={idx}>
                   Name: {member.name} Role: {member.role} Contact: {member.email}
                </div>
            ))}
            
            <form onSubmit={submit}>
                <label htmlFor='memberName'>Name: </label>
                <input 
                id='memberName'
                placeholder='name'
                type='text'
                name='name'
                onChange={change}
                />
                <label htmlFor='memberRole'>Role: </label>
                <input 
                id='memberRole'
                placehodler='role'
                type='text'
                name='role'
                onChange={change}
                />
                <label htmlFor='memberEmail'>Email:</label>
                <input 
                id='memberEmail'
                placeholder='email'
                type='text'
                name='email'
                onChange={change}
                />
                <button>SUBMITTTT</button>
            </form>
        </div>
    )
 }
 