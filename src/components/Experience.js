// Experience.js
import React, { useState } from 'react';

function Experience({ experience, setExperience }) {
  const [newExperience, setNewExperience] = useState({ company: '', position: '', responsibilities: '', fromDate: '', toDate: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddExperience = () => {
    if (editIndex !== null) {
      const updatedExperience = [...experience];
      updatedExperience[editIndex] = newExperience;
      setExperience(updatedExperience);
      setEditIndex(null);
    } else {
      setExperience(prevState => [...prevState, newExperience]);
    }
    setNewExperience({ company: '', position: '', responsibilities: '', fromDate: '', toDate: '' });
  };

  const handleEdit = (index) => {
    setNewExperience(experience[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setExperience(prevState => prevState.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Experience</h2>
      <input type="text" name="company" placeholder="Company" value={newExperience.company} onChange={handleChange} />
      <input type="text" name="position" placeholder="Position" value={newExperience.position} onChange={handleChange} />
      <input type="text" name="responsibilities" placeholder="Responsibilities" value={newExperience.responsibilities} onChange={handleChange} />
      <input type="text" name="fromDate" placeholder="From Date" value={newExperience.fromDate} onChange={handleChange} />
      <input type="text" name="toDate" placeholder="To Date" value={newExperience.toDate} onChange={handleChange} />
      <button onClick={handleAddExperience}>{editIndex !== null ? 'Save' : 'Add Experience'}</button>

      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            <strong>{item.company}</strong> - {item.position} ({item.fromDate} to {item.toDate})<br />
            Responsibilities: {item.responsibilities}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
