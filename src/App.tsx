import {useState} from 'react';
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import type { UserInputType } from "./types";
import "./App.scss";

function App() {  

  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // function handleChange(
  //   inputIdentifier: keyof UserInputType,
  //   newValue: number
  // ) {
  //   setUserInput((prevUserInput) => {
  //     return {
  //       ...prevUserInput,
  //       [inputIdentifier]: newValue,
  //     };
  //   });
  // }

  function handleChange(
    inputIdentifier: keyof UserInputType,
    newValue: number
  ) {
    setUserInput((prevUserInput: UserInputType) => {
      const newInput = { ...prevUserInput };
      newInput[inputIdentifier] = newValue;
      return newInput;
    });
  } // end of function handleChange

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />     

      {inputIsValid ? <Results input={userInput} /> : <p className='center'>Duration &gt;= 1</p>}
      
    </>
  );
}

export default App;
