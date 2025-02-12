export const countUnique = (word: string) => {
  const letters = word.split("");
  const uniqueArray = [...new Set(letters)];
  return uniqueArray.length;
};
