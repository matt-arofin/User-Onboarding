import './App.css';
import {useState, useEffect} from 'react';
import Form from './Components/Form';
import Member from './Components/Member';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';

/* 
Endpoint URL: https://reqres.in/api/users
*/

const baseURL = 'https://reqres.in/api/users';

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

  // Network Helpers
  const getMembers = () => {
    axios.get(baseURL)
      .then(res => {
        setMembers(res.data.data)
        console.log("members array: ", members)
      }).catch(handleError)
  };

  const postNewMember = newMember => {
    axios.post(baseURL, newMember)
      .then(res => {
        setMembers(members.concat(res.data, ...members))
      })
      .catch(handleError)
      .finally(resetForm)
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""})
      ).catc(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  };


  // Other Helpers
  const handleError = err => console.error(err);

  const resetForm = () => setFormValues(initialFormValues);
    
  // Effect Handlers
  useEffect(() => getMembers(), [])

  // Event handlers
  const inputChange = (name, value) => {
    validate(name, value);
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

  // side effects
  useEffect(() => {
    getMembers()
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <h1>This App is Up and Running 🚀</h1>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        // setValues={setFormValues}
      />

      {/* {
        members.map(member => {
          return <Member key={member.id} details={member} />
        })
      } */}
    </div>
  );
}

export default App;
