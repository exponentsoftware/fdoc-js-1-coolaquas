//1.a
// const countWords = (para, w1, w2) => {
//   let arr = para.split(" ");
//   let data = {
//     [w1]: 0,
//     [w2]: 0,
//   };
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index].includes(w1)) data[w1] += 1;
//     if (arr[index].includes(w2)) data[w2] += 1;
//   }
//   return data[w1] === data[w2]
//     ? `The word ${w1} and ${w2}  occurred same time`
//     : `The word ${
//         data[w1] > data[w2] ? w1 : w2
//       } more frequently occurred than ${data[w1] < data[w2] ? w1 : w2}.`;
// };

// 1.b
const cleanText = (str) => str.replace(/[%@$;!#&]/g, "");

//1.c
const countWords = (cleanStr) =>
  cleanStr.split(" ").filter((x) => x.length !== 1).length;

//1.d
const varietyOfWords = (str) => [...new Set(str)].length;

//2.a
const triangle = () => [...Array(8)].map((v, i) => console.log("#".repeat(i)));

//2.b
const sevenRandomNumbers = () => {
  const result = new Set();
  while (result.size !== 8) {
    result.add(Math.floor(Math.random() * 10));
  }
  return [...result];
};

//2.c
const reverseArray = (arr) => {
  let temp = [];
  while (arr.length !== 0) {
    temp.push(arr.pop());
  }
  return temp;
};

//2.d
const checkUniqueness = (arr) => {
  const result = new Set();
  arr.map((x) => result.add(x));
  return [...result].length === arr.length ? true : false;
};
