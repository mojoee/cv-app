// GeneralInfo.js
import React from 'react';

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>General Information</h2>
      <input type="text" name="name" placeholder="Name" value={generalInfo.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={generalInfo.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={generalInfo.phone} onChange={handleChange} />
    </div>
  );
}

export default GeneralInfo;
