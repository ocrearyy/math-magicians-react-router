import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({});

  const handleEvent = (e) => {
    const button = e.target.textContent;
    const value = calculate(obj, button);
    setObj(value);
  };

  const { total, operation, next } = obj;
  const getResult = () => {
    let result = 0;
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return result;
  };

  return (
    <div className="calculator">
      <div className="input-wrap">
        <div className="output">
          <p className="input-text">{getResult()}</p>
        </div>
        <div className="button-wrap">
          {/* row 1 */}
          <button className="function" type="button" onClick={handleEvent}>AC</button>
          <button className="function" type="button" onClick={handleEvent}>+/-</button>
          <button className="function" type="button" onClick={handleEvent}>%</button>
          <button className="operator" type="button" onClick={handleEvent}>÷</button>
          {/* row 2 */}
          <button className="number" type="button" onClick={handleEvent}>7</button>
          <button className="number" type="button" onClick={handleEvent}>8</button>
          <button className="number" type="button" onClick={handleEvent}>9</button>
          <button className="operator" type="button" onClick={handleEvent}>x</button>
          {/* row 3 */}
          <button className="number" type="button" onClick={handleEvent}>4</button>
          <button className="number" type="button" onClick={handleEvent}>5</button>
          <button className="number" type="button" onClick={handleEvent}>6</button>
          <button className="operator" type="button" onClick={handleEvent}>-</button>
          {/* row 4 */}
          <button className="number" type="button" onClick={handleEvent}>1</button>
          <button className="number" type="button" onClick={handleEvent}>2</button>
          <button className="number" type="button" onClick={handleEvent}>3</button>
          <button className="operator" type="button" onClick={handleEvent}>+</button>
        </div>
        {/* row 5 */}
        <div className="final-row">
          <button className="number" type="button" onClick={handleEvent}>0</button>
          <button className="function" type="button" onClick={handleEvent}>.</button>
          <button className="operator" type="button" onClick={handleEvent}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
