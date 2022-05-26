// 



export default function Form(props) {
    const { values, change, submit, disabled, errors} = props;
        
    /* 
  - [ ] Name (first_name, last_name)
  - [ ] Email
  - [ ] Password
  - [ ] Terms of Service (checkbox)
  - [ ] A Submit button to send our form data to the server.
  */

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const useValue = type === "checkbox"? checked : value;
    change(name, useValue)
  };

  const onSubmit = evt => {
      evt.preventDefault();
      submit()
  };

  return (
      <form className="form-container" onSubmit={onSubmit}>
            <div className="form-group submit">
                
                <h2>Add New User</h2>

                <button disabled={disabled} id='submitBtn'>submit</button><br/><br/>

                <div className="form-group submit">
                    

                    <div className="errors">
                        <div>{errors.first_name}</div>
                        <div>{errors.last_name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.terms}</div>


                    </div>
                </div>
            </div>
                    
            <div className="form-group inputs">
                <h4>User Information</h4>

                <label>First Name:&nbsp;
                    <input 
                        value={values.first_name}
                        onChange={onChange}
                        name="first_name"
                        type="text"
                    />
                </label>&nbsp;&nbsp;

                <label>Last Name:&nbsp;
                    <input 
                        value={values.last_name}
                        onChange={onChange}
                        name="last_name"
                        type="text"
                    />&nbsp;
                </label><br/><br/>

                <label>Email Address:&nbsp;
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="email"
                    />
                </label>&nbsp;&nbsp;

                <label>Password:&nbsp;
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="text"
                    />
                </label><br/><br/>

                <label>Agree to Terms and Conditions:&nbsp;
                    <input 
                        value={values.terms}
                        onChange={onChange}
                        name="terms"
                        type="checkbox"
                    />
                </label>&nbsp;&nbsp;
            </div>
      </form>
  )

}