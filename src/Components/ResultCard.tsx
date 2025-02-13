interface ResultCardProps {
  result: string;
}

const ResultCard = (props: ResultCardProps) => {
  const { result } = props;

  return (
    <>
      <div className="card w-[96vw] md:w-[30%] rounded-md">
        <>
          <div
            className="w-[100%] h-[100%] flex flex-col justify-center items-center"
            style={{ padding: "5vmin", background: "white" }}
          >
            <img
              src={result === "Win" ? "happy.png" : "lose.png"}
              height={220}
              width={200}
              style={{ textAlign: "center" }}
            />

            <p
              className="font-extrabold font-poppins "
              style={{
                marginTop: "5vmin",
                fontSize: "5vmin",
                letterSpacing: "0.15vmin",
              }}
            >
              {result === "Win" ? "Hurray!!! You Won " : "Oops! You Lose "}
            </p>

            <button
              className="bg-[#FF0000] text-white"
              style={{
                padding: "1.15vmin",
                borderRadius: "0.15vmin",
                marginTop: "5vmin",
              }}
              onClick={() => {
                location.reload();
              }}
            >
              Play Again !!!
            </button>
          </div>
        </>
      </div>
    </>
  );
};

export default ResultCard;
