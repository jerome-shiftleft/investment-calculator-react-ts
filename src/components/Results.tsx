import type { UserInputType } from "../types";

type Props = {
  input: UserInputType;
};

function Results({ input }: Props) {
  console.log(input);
  return (
    <>
      <p>Results...</p>
    </>
  );
}

export default Results;
