import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(displayValue);
        setResult(result);
        setDisplayValue(result);
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'C') {
      setDisplayValue('');
      setResult('');
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue || '0'}</div>
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+', 'C'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
