

// App.js
import React, { useState } from 'react';
import './App.css';
import logo from './Screenshot 2024-03-14 032046.png'; // Import the logo image file
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

function App() {
  const [step, setStep] = useState(1);
  const steps = ['Personal Info', 'Additonal info', 'Identification', 'Upload Documents', 'Review']; // Array of step names

  const handleStepChange = (stepNumber) => {
    setStep(stepNumber);
  };

  return (
    <div className="App">
      <nav className="navbar">
        {/* Replace text with logo image */}
        <img src={logo} alt="Logo" className="logo" /> 
        <div className="steps">
          {steps.map((stepName, index) => (
            <div
              key={index}
              className={`step ${index + 1 === step ? 'active' : ''}`}
              onClick={() => handleStepChange(index + 1)}
            >
              {stepName}
            </div>
          ))}
        </div>
      </nav>
      <div className="form-container">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
      </div>
    </div>
  );
}

export default App;
