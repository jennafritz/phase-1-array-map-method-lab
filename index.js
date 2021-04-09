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

const titleCased = () => {
  let arrayOfWordArrays = tutorials.map(function(eachTitle){
    let arraysOfWords = eachTitle.split(" ")
    return arraysOfWords
  })
  
  let separateTitleArrays = arrayOfWordArrays.map(function(eachTitle){
    let capitalizeFirstLetter = eachTitle.map(function(eachWord) {
      return eachWord[0].toUpperCase() + eachWord.substring(1)
    })
    return capitalizeFirstLetter
  })
  
  let separateTitles = separateTitleArrays.map(function(eachTitleArray){
    return eachTitleArray.join(" ")
  })
  
  return separateTitles
}