import type { UserInputType } from "../types";
import { calculateInvestmentResults } from "../util/investment";

type Props = {
  input: UserInputType;
};

function Results({ input }: Props) {
  //console.log(input);
  const resultsData = calculateInvestmentResults(input);
  console.log('results data:');
  console.log(resultsData);
  return (
    <>
      <p>Results...</p>
    </>
  );
}

export default Results;
