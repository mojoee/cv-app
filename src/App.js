import logo from './logo.svg';
import './App.css';

// App.js
import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />
    </div>
  );
}

export default App;