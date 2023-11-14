import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div>
          <h2>Your BMI is: {bmi.toFixed(2)}</h2>
          <p>
            Interpretation: {bmi < 18.5 ? 'Underweight' : bmi < 24.9 ? 'Normal weight' : 'Overweight'}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
