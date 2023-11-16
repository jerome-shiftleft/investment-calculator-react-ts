import type { UserInputType } from "../types";
import { calculateInvestmentResults, formatter } from "../util/investment";

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
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map(yearData => (            
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Results;
