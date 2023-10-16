const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalizeLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);//here were dealing with only the first letter
}

tutorials.forEach((tutorial) => {//this is to iterate through the turorial object
  const words = tutorial.split(' ');
  const titleCased = []; // Define an empty array to store the title-cased words.

  words.forEach((word) => {//this is to iterate through each word
    titleCased.push(capitalizeLetter(word)); // Push the title-cased words into the array.
  });

  const titleString = titleCased.join(' ');
  console.log(titleString);
});
