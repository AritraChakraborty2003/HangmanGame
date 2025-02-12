export const Search = (word: string, input_letter: string): number[] => {
  const wordArr: string[] = word.split("");
  const indexArr: number[] = [];

  wordArr.map((letter: string, index: number) => {
    if (letter.toLowerCase() === input_letter.toLowerCase()) {
      indexArr.push(index + 1);
    }
  });

  return indexArr;
};
