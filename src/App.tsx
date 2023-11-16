import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import "./App.scss";

function App() {

  type UserInputType = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };

  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

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
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results />
    </>
  );
}

export default App;
