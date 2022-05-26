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

  const onChange = evt => {};

  const onSubmit = evt => {
      evt.preventDefault();
      submit()
  };

  return (
      <form className="form-container" onSubmit={onSubmit}>
          <div className="form-group submit">
                
                <h2>Add New User</h2>

                <button disabled={disabled}>submit</button><br/><br/>

                <div className="form-group submit">
                    

                    <div className="errors">
                        <div>{errors.fname}</div>
                        <div>{errors.lname}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.terms}</div>


                    </div>
                </div>
            </div>
                    
                <div className="form-groups inputs">
                    <h4>User Information</h4>

                    <label>First Name:&nbsp;
                        <input 
                            value={values.fname}
                            onChange={onChange}
                            name="fname"
                            type="text"
                        />
                    </label>&nbsp;&nbsp;

                    <label>Last Name:&nbsp;
                        <input 
                            value={values.lname}
                            onChange={onChange}
                            name="lname"
                            type="text"
                        />
                    </label><br/><br/>

                    <label>Email Address:&nbsp;
                        <input 
                            value={values.empasswordail}
                            onChange={onChange}
                            name="password"
                            type="text"
                        />
                    </label><br/><br/>

                    <label>Last Name:&nbsp;
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name="fname"
                            type="email"
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