import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../images/noMoreWasteLogo.svg";
import axios from "axios";


const Signup = () => {
  const [inputs, setInputs] = useState({
    businessname: "",
    address: "",
    username: "",
    phone_number: "",
    email: "",
    password: "",
    role: "r", 
  })

  const handleChange =  e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

const handleSubmit = async e =>{
  e.preventDefault()
  try{
    const res = await axios.post("https://sea-turtle-app-8pyey.ondigitalocean.app//api/auth/signup", inputs)
    console.log(res)
  }
  catch(err){
    console.log(err)
    //console.log(res)
  }

}
  return (
    <div class="body-style">
      <div class="sign-up-logo">
        <img src={Logo} alt="" />
      </div>
      <div class="sign-up">
        <form class="signup-form">
          <h3 class="sign-up-heading">Sign Up!</h3>
          <label for="business" class="form-label">
            Business Name
          </label>
          <br />
          <input
            type="text"
            id="business-name"
            name="businessname"
            class="form-input"
            onChange = {handleChange}
          />
          <br />
          <label for="address" class="form-label">
            Address Line
          </label>
          <br />
          <input
            type="text"
            id="address-line"
            name="address"
            class="form-input"
            onChange = {handleChange}

          />
          <br />
          <label for="names" class="form-label">
            First and Last name
          </label>
          <br />
          <input
            type="text"
            name="username"
            id="contact-name"
            class="form-input"
            onChange = {handleChange}

          />
          <br />
          <label for="number" class="form-label">
            Phone Number
          </label>
          <br />
          <input
            type="tel"
            name="phone_number"
            id="phone-number"
            class="form-input"
            onChange = {handleChange}

          />
          <br />
          <input
            type="checkbox"
            id="business-option"
            name="businessOption"
            value="Business"
            class="form-input"
          />
          <label for="isBusiness" class="form-label">
            Business
          </label>
          {/*     <!-- <p class="or-in-form">or</p> -->
           */}
          <input
            type="checkbox"
            id="shelter-option"
            name="shelterOption"
            value="Shelter"
            class="form-input"
          />
          <label for="isShelter" class="form-label">
            Shelter
          </label>
          <br />
          <label for="email" class="form-label">
            Email Address
          </label>
          <br />
          <input
            type="email"
            id="email-address"
            name="email"
            class="form-input"
            onChange = {handleChange}

          />
          <br />
          <label for="password" class="form-label">
            Password
          </label>
          <br />
          <input
            type="password"
            id="pass-word"
            name="password"
            class="form-input"
            onChange = {handleChange}

          />
          <br />
          <p class="is-member">
            Already a member? <Link to="/login">Sign In</Link>
          </p>
          {/*     <a href="#" class="sign-in">Sign in</a> <br />
           */}
          <button onClick={handleSubmit} class="card-button signup-button">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
