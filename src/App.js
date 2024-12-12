import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState('');

const handleclick = (val) =>{

  if(
    (/[0-9]/.test(val) && (value !== '' || val !== '0')) ||
    (/[+\-*/%]/.test(val)  && value && /[0-9]$/.test(value) )
  ){
    setValue((prevvalue) => prevvalue + val);
  }
}

  const handlePercentage = () => {
    if (value === '') return;
    if (/[0-9]$/.test(value)) {
      setValue(value + '%'); 
    }
  };
  const handleEvaluate = () => {
    try {
      let evaluatedValue = value;
      if (evaluatedValue.includes('%')) {
        evaluatedValue = evaluatedValue.replace(/(\d+)%(\d+)/g, (match, number1, number2) => {
          return `(${number1} * ${number2}) / 100`; 
        });
        evaluatedValue = evaluatedValue.replace(/(\d+)%/g, (match, number1) => {
          return `(${number1} / 100)`;
        });
      }
      let result = eval(evaluatedValue);
      result = parseFloat(result.toFixed(5));

      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };

  const handle00Click = () => {
    if (/[0-9]/.test(value[value.length - 1])) {
      setValue(value + '00');
    }
  };


  return (
    <div>
      <form action=''>
        <div className="container">
          <div className="input-container">
            <div className='text-box'>
              <input type='text' value={value} readOnly />
            </div>

            <div>
              <input type='button' value="AC" className='AC' onClick={() => setValue('')} />
              <input type='button' value="DE" className='DE' onClick={() => setValue(value.slice(0, -1))} />
              <input type='button' value="/" onClick={() => handleclick('/')} />
              <input type='button' value="%" onClick={handlePercentage} />
            </div>

            <div>
              <input type='button' value="7" onClick={() => handleclick('7')} />
              <input type='button' value="8" onClick={() => handleclick('8')} />
              <input type='button' value="9" onClick={() => handleclick('9')} />
              <input type='button' value="*" onClick={() => handleclick('*')} />
            </div>

            <div>
              <input type='button' value="4" onClick={() => handleclick('4')} />
              <input type='button' value="5" onClick={() => handleclick('5')} />
              <input type='button' value="6" onClick={() => handleclick('6')} />
              <input type='button' value="+" onClick={() => handleclick('+')} />
            </div>

            <div>
              <input type='button' value="1" onClick={() => handleclick('1')} />
              <input type='button' value="2" onClick={() => handleclick('2')} />
              <input type='button' value="3" onClick={() => handleclick('3')} />
              <input type='button' value="-" onClick={() => handleclick('-')} />
            </div>

            <div>
              <input type='button' value="00" onClick={handle00Click} />
              <input type='button' value="0" onClick={() => handleclick('0')} />
              <input type='button' value="." onClick={() => handleclick('.')} />
              <input type='button' value="=" className='equal' onClick={handleEvaluate} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

