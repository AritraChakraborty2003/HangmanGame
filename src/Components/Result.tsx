import ResultCard from "./ResultCard";

interface ResultProps {
  isWin: boolean;
  isLose: boolean;
}

const Result: React.FC<ResultProps> = (props) => {
  const { isWin, isLose } = props;

  return (
    <>
      <div className="w-[100vw] h-[100vh] main bg-[#FFB22C] flex items-center justify-center">
        {isWin === true && <ResultCard result="Win" />}
        {isLose === true && <ResultCard result="Lose" />}
      </div>
    </>
  );
};

export default Result;
