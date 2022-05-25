import './App.css';
import {useState, useEffect} from 'react';
import Form from './Components/Form';

function App() {

  // State const for formValues
  // State const for Stored entries
  // State const for errors
  // State(?) const for validation
  
  /* 
  - [ ] Name (first_name, last_name)
  - [ ] Email
  - [ ] Password
  - [ ] Terms of Service (checkbox)
  - [ ] A Submit button to send our form data to the server.
  */

  return (
    <div className="App">
      <h1>This App is Up and Running 🚀</h1>
      <h3></h3>
      <Form />
    </div>
  );
}

export default App;
