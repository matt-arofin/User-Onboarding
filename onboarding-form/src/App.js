import './App.css';
import {useState, useEffect} from 'react';
import Form from './Components/Form';
import Member from './Components/Member';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';

/* 
Post Endpoint URL: https://reqres.in/api/users
Get Endpoint URL: 
*/

const initialFormValues  = {
  first_name: '', // text input
  last_name: '', // text input
  email: '', // text input
  password: '', // text input
  terms: false, // checkbox
};

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}

const initialMembers = [];
const initialDisabled = true;

function App() {

  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialFormValues);  // State const for Stored entries
  const [formErrors, setFormErrors] = useState(initialFormErrors); // State const for errors
  const [disabled, setDisabled] = useState(initialDisabled); // State(?) const for validation

  // Helpers
  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {console.log(res)
        setMembers(res.data)
      }).catch(err => console.error(err))
  };

  // Event handlers
  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  };

  const formSubmit = () => {
    const newMember = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms
    }

    postNewMember(newMember);
  };  

  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  return (
    <div className="App">
      <h1>This App is Up and Running 🚀</h1>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        members.map(member => {
          <Member key={member.id} details={member} />
        })
      }
    </div>
  );
}

export default App;
