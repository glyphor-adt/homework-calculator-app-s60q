import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstOperand, setFirstOperand] = useState('');

  const handleNumberClick = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
    setFirstOperand(display);
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(display);
    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert('Cannot divide by zero!');
          return;
        }
        result = num1 / num2;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperator('');
    setFirstOperand('');
  };

  const handleClearClick = () => {
    setDisplay('0');
    setOperator('');
    setFirstOperand('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-64">
        <div className="text-right text-4xl mb-4 text-gray-800">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          <button className="bg-gray-200 hover:bg-gray-300 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={handleClearClick}>C</button>
          <button className="bg-gray-200 hover:bg-gray-300 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleOperatorClick('/')}>/</button>
          <button className="bg-gray-200 hover:bg-gray-300 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleOperatorClick('*')}>*</button>
          <button className="bg-gray-200 hover:bg-gray-300 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleOperatorClick('-')}>-</button>

          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('7')}>7</button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('8')}>8</button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('9')}>9</button>
          <button className="bg-gray-200 hover:bg-gray-300 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleOperatorClick('+')}>+</button>

          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('4')}>4</button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('5')}>5</button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('6')}>6</button>
          <button className="bg-blue-500 hover:bg-blue-600 rounded-xl py-2 text-lg font-semibold text-white transition-all duration-300" rowSpan={2} onClick={handleEqualsClick}>=</button>

          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('1')}>1</button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('2')}>2</button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('3')}>3</button>

          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300 colSpan={2} onClick={() => handleNumberClick('0')}>0</button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-xl py-2 text-lg font-semibold text-gray-700 transition-all duration-300" onClick={() => handleNumberClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
