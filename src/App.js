import React from 'react';
import ResumeDetails from './Components/resumeDetails';
import ResumeImg from './Components/resumeImg';

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <ResumeDetails/>
        <ResumeImg/>    
      </div>

    </div>
  );
}

export default App;
