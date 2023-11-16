import { useState } from "react";

function UserInput() {
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
    setUserInput((prevUserInput) => {
      const newInput = { ...prevUserInput };
      newInput[inputIdentifier] = newValue;
      return newInput;
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  ); // end of return
}

export default UserInput;
