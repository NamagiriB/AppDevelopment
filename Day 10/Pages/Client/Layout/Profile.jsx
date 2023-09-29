import React, { useState } from 'react';
import '../../../Assets/css/Profile.css'
const Profile = () => {
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-form-container">
    <div className="profile-form">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          </label>
          <input
            type="text"
            value={Fname}
            onChange={(e) => setFName(e.target.value)}
            required
          />
        <label>
          Last Name:
          </label>
          <input
            type="text"
            value={Lname}
            onChange={(e) => setLName(e.target.value)}
            required
          />
       
        <label>
          Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label>
          Phone Number:
          </label>
          <input
            type="number"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
       
        
      </form>
      <div className="profile-btn">
        <button type="submit">Update Profile</button>
        </div>
    </div>
    </div>
  );
};

export default Profile;