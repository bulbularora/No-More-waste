import React from "react";

const Profile = () => {
  return (
    <div>
      <title>Profile</title>
      <div class="profile">
        <div class="grid grid--1x2 grid-cards">
          <div class="name-profile profile-padding">
            <label for="name" class="form-label">
              Name
            </label>
            <br />
            <input
              type="text"
              id="na-me"
              name="name"
              class="form-input text-profile"
              value="John Smith"
              
            />
            <br />
          </div>
          <div class="email-profile profile-padding">
            <label for="email" class="form-label">
              Email Address
            </label>
            <br />
            <input
              type="email"
              id="email-address"
              name="email"
              class="form-input text-profile"
              value="johnsmith@gmail.com"
              
            />
            <br />
          </div>
          <div className="address-profile profile-padding">
            <label for="address" class="form-label">
              Address
            </label>
            <br />
            <input
              type="text"
              id="address-line"
              name="address"
              class="form-input text-profile address-prof"
              value="123 Crane Cres, Regina SK, Canada"
              
            />
            <br />
          </div>
          <div class="number-profile profile-padding">
            <label for="number" class="form-label">
              Phone Number
            </label>
            <br />
            <input
              type="tel"
              id="address-line"
              name="phone_number"
              class="form-input text-profile"
              value="3061234567"
              
            />
            <br />
          </div>
          <div class="business-profile profile-padding">
            <label for="business" class="form-label">
              Business Name
            </label>
            <br />
            <input
              type="text"
              id="business-name"
              name="businessname"
              class="form-input text-profile"
              value="Mcdonalds"
              
            />
            <br />
          </div>
          <div class="password-profile profile-padding">
            <label for="password" class="form-label">
              Password
            </label>
            <br />
            <input
              type="password"
              id="pass-word"
              name="password"
              class="form-input text-profile"
              value="123456"
              
            />
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <button class="card-button update-profile">Update information</button>
    </div>
  );
};

export default Profile;
