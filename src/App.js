//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender:'',
    phoneno:'',
    email: '',
    password: '',
    address:''
  });


  const handleInputChange=(event)=>{
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }


  // name
  const handleInputname= (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      const nameRegex = /^[A-Za-z]+$/;
      
      if (!nameRegex.test(value)) {
        // Display an error message or perform any desired action
        alert('Name must contain only alphabetic characters.');
        return;
      }
    }
  
    setFormData({ ...formData, [name]: value });
  };



// address 
  const handleInputaddress= (event) => {
    const { name, value } = event.target;
    if (name === 'address') {
      const nameRegex = /^[A-Za-z]+$/;
      
      if (!nameRegex.test(value)) {
        // Display an error message or perform any desired action
        alert('address must contain only alphabetic characters.');
        return;
      }
    }
  
    setFormData({ ...formData, [name]: value });
  };

  // password

const handleInputpassword=(event)=>{
  const { name, value } = event.target;
   
  const passwordRegex = /^(?=.*[!@#$%^&*])/;
  if (value.trim() === '') {
    alert('Password cannot be empty!');
    return;
  }
    if (!passwordRegex.test(value)) {
    alert('Password must contain at least one special character!');
    return;
  }
  setFormData({ ...formData, [name]: value });
}

// phoneno
  const  handleMob=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    if(value.is){
     return;
    }else if(value===" "){
      return;
    }else{
      setFormData({ ...formData, [name]: value });    
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const allFieldsEmpty = Object.values(formData).every((value) => value.trim() === '');
    if (allFieldsEmpty) {
      alert('Please fill in the required fields.');
      return;
    }
   console.log(formData);
    localStorage.setItem('submittedData', JSON.stringify(formData));
    setFormData({
      name: '',
      gender:'',
      phoneno:'',
      email: '',
      password:'',
      address:''
    });
    alert('thank you for  submit ')
  
  };
 
  const reset=()=>{
    setFormData({
      name: '',
      gender:'',
      phoneno:'',
      email: '',
      password:'',
      address:''
    });
    }

  return (
    <center>
      <h1>LOGIN PAGE
        <h2><marquee 
                 bgcolor="Green"
                 behavior="alternate"
                 direction="left"
                  >Welcome to Chetu india pvt ltd</marquee></h2>
      </h1>
    <form onSubmit={handleSubmit}>
    
      <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
    
        value={formData.name}
        onChange={handleInputname}
 
      /></div>
  
  <div>
          <label htmlFor="gender">Gender:</label>
                <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
              />
              Female
        </div>
       <div>
 <label htmlFor="phoneno">Phone no:</label>
      <input
        type="number"
        id="phoneno"
        name="phoneno"
        value={formData.phoneno}
        onChange={handleMob}
      />
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
 </div>
 <div>
      <label htmlFor="password">password:</label>
      <input 
      type="text"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputpassword}
      />
</div>
 <div>
      <label htmlFor="address">address:</label>
      <textarea
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputaddress}
      ></textarea>
</div>

<div>
      <button type="submit">Submit</button>
      </div>
      <div>
      <button type="reset" onClick={reset}>Reset</button>
      </div>
      
    </form>
    </center>
  );
};

export default FormComponent;
