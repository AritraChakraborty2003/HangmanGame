export const GenerateWordandHint = () => {
  const words = [
    ["apple", "A common fruit that is red, green, or yellow."], // 5 letters
    ["banana", "A long yellow fruit that monkeys love."], // 6 letters
    ["grape", "Small, round fruit often used for juice or wine."], // 5 letters
    ["orange", "A citrus fruit known for its vitamin C content."], // 6 letters
    ["melon", "A large fruit with a green rind and sweet flesh."], // 5 letters
    ["peach", "A sweet, juicy fruit with fuzzy skin."], // 5 letters
    ["cherry", "A small, round fruit that can be sweet or tart."], // 6 letters
    ["mango", "A tropical stone fruit with sweet, juicy flesh."], // 5 letters
    ["tiger", "A large wild cat known for its striped coat."], // 5 letters
    ["robot", "A machine capable of carrying out a complex series of actions."],
    ["Moon", "A natural satellite of Earth, visible at night."], // 4 letters
    ["Book", "A collection of written pages, often used for reading."], // 4 letters
  ];
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * words.length);
  return [words[randomIndex][0], words[randomIndex][1]];
};
