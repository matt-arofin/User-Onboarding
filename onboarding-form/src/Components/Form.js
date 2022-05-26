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

                <div className="errors">
                    <div>{errors.fname}</div>
                    <div>{errors.fname}</div>
                    <div>{errors.fname}</div>
                    <div>{errors.fname}</div>
                    <div>{errors.fname}</div>

                </div>

                <div className="form-group submit">

                </div>

                <button disabled={disabled}>submit</button>
                    <label>First Name
                        <input 

                        />
                    </label>
          </div>
      </form>
  )

}