import React, {useState, useReducer} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers';
import { 
  addOne, 
  applyNumber, 
  changeOperation, 
  clearDisplay,
  currentMemory, 
  applyMemory,
  clearMemory 
} from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  //event handler 1 - Connect a premade action - addOne - don't need
  // const handle1Click = () => {
  //   // console.log("check if click works")
  //   dispatch(addOne())
  // }

  //event handler 1b - Connect a BETTER premade action
  const handleNumberClick = (number) => {
    console.log(number);
    dispatch(applyNumber(number));
  }

  //event handler 2 - Create and Connect an action creator -- + - *
  const handleOperationClick = (operator) => {
    console.log(operator);
    dispatch(changeOperation(operator))
  }

  //event handler 3 - Create and connect a reducer case and action creator - clear button will dispatch/execute the clearDisplay action creator. clearDisplay() is the object you made in actions file, which is the object in the reducers file. 
  const clearDisplayClick = () => {
    console.log("clicked clear");
    dispatch(clearDisplay())
  }

  //event handler 4 - currentMemory
  const currentMemoryClick = () => {
    console.log("saved in current memory");
    dispatch(currentMemory())
  }

  //event handler 5 - applyMemory
  const applyMemoryClick = () => {
    console.log("added current memory to total value");
    dispatch(applyMemory())
  }

  //event handler 6 - clearMemory
  const clearMemoryClick = () => {
    console.log("cleared memory");
    dispatch(clearMemory())
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> 
          Reducer Challenge
        </a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay 
              value={state.total}
            />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> 
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> 
                {state.memory}
              </span>
            </div>
            
            <div className="row">
              <CalcButton 
                value={"M+"}
                onClick={() => currentMemoryClick()}
              />
              <CalcButton 
                value={"MR"}
                onClick={() => applyMemoryClick()}
              />
              <CalcButton 
                value={"MC"}
                onClick={() => clearMemoryClick()}
              />
            </div>

            <div className="row">
              <CalcButton 
                value={1}
                // onClick={handle1Click}
                //wrap eventhandler in a function -- so we pass in a function and call EH
                onClick={() => handleNumberClick(1)}
              />
              <CalcButton 
                value={2}
                onClick={() => handleNumberClick(2)}
              />
              <CalcButton 
                value={3}
                onClick={() => handleNumberClick(3)}
              />
            </div>

            <div className="row">
              <CalcButton 
                value={4}
                onClick={() => handleNumberClick(4)}             
              />
              <CalcButton 
                value={5}
                onClick={() => handleNumberClick(5)}              
              />
              <CalcButton 
                value={6}
                onClick={() => handleNumberClick(6)}             
              />
            </div>

            <div className="row">
              <CalcButton 
                value={7}
                onClick={() => handleNumberClick(7)}              
              />
              <CalcButton 
                value={8}
                onClick={() => handleNumberClick(8)}              
              />
              <CalcButton 
                value={9}
                onClick={() => handleNumberClick(9)}              
              />
            </div>

            <div className="row">
              <CalcButton 
                value={"+"}
                onClick={()=> handleOperationClick("+")}
              />
              <CalcButton 
                value={"*"}
                onClick={()=> handleOperationClick("*")}
              />
              <CalcButton 
                value={"-"}
                onClick={()=> handleOperationClick("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton 
                value={"CE"}
                onClick={() => clearDisplayClick()}
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
