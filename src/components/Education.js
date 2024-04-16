// Education.js
import React, { useState } from 'react';

function Education({ education, setEducation }) {
  const [newEducation, setNewEducation] = useState({ school: '', study: '', date: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddEducation = () => {
    if (editIndex !== null) {
      const updatedEducation = [...education];
      updatedEducation[editIndex] = newEducation;
      setEducation(updatedEducation);
      setEditIndex(null);
    } else {
      setEducation(prevState => [...prevState, newEducation]);
    }
    setNewEducation({ school: '', study: '', date: '' });
  };

  const handleEdit = (index) => {
    setNewEducation(education[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setEducation(prevState => prevState.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Education</h2>
      <input type="text" name="school" placeholder="School" value={newEducation.school} onChange={handleChange} />
      <input type="text" name="study" placeholder="Study" value={newEducation.study} onChange={handleChange} />
      <input type="text" name="date" placeholder="Date" value={newEducation.date} onChange={handleChange} />
      <button onClick={handleAddEducation}>{editIndex !== null ? 'Save' : 'Add Education'}</button>

      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <strong>{item.school}</strong> - {item.study} ({item.date})
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
