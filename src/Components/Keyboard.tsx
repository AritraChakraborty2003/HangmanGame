import Key from "./Key";
const Keyboard = () => {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  return (
    <>
      <div className="h-[45vh] w-[100%] ">
        <div
          className="keyBoardManager flex flex-wrap gap-x-4 gap-y-4 lg:gap-x-7 lg:gap-y-4 justify-center"
          style={{ marginTop: "3vmin" }}
        >
          <Key data={letters} />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
