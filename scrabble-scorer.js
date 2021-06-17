// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word="";
function initialPrompt() {
   console.log("Let's play some scrabble! ");
   let word=input.question("\nEnter a word to score:");
  //console.log( oldScrabbleScorer(word));
  return word;
}

let simpleScore = function(word){
  word = word.toLowerCase();
   let score = 0;
  console.log(word.length);
   for(let i=0;i<word.length;i++)
  {
    word[i] =1;
    score +=1;
  }
 return  score;
};

let vowelBonusScore = function(word){
   
  let word1=word.toLowerCase(); //convert  to  incase sensitine
  //let string=word.toString();
  //console.log(word1.length);
  //let score=0;
  let vowelsCount=0;
  let notvowelsCount=0;
  let vowelbonus;
  for(let i=0;i<=word1.length;i++) //loop to word length
  {
     if (word1[i] == "a" || word1[i] == "e" || word1[i] == "i" || word1[i] == "o" || word1[i] == "u") {
       vowelsCount += 1;
    }
      
    
  }
    //console.log(vowelsCount);
    
    let consonantCount=word1.length-vowelsCount;
    //console.log(nonvowelcount);
    //vowelbonus = 3 * vowelsCount;
    //let score=vowelBonus+nonvowelcount;
    return score=(3*vowelsCount)+consonantCount;
};

let scrabbleScore =function(word){

  word=word.toLowerCase();
  let letters;
  let score=0;
  for (i=0;i<word.length;i++)
  {
    letters=word[i];
    score += newPointStructure[letters]
  }
return score;
};



const scoringAlgorithms = [
{
          name:"Simple Score",
   description:"Each letter is worth 1 point",
scoringFunction: simpleScore
},

{
  name :"Bonus Vowels",
  description : "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction : vowelBonusScore
},

  {
  name:"Scrabble",
  description:"The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
}];

function scorerPrompt(word) {
  console.log("\n Which scoring Algorithms would you like to use?")
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  let chosen = input.question("\n Enter 0,1,or 2:");

     
     if(chosen==0){
       console.log(`word = ${word}`);
       console.log("\n Algorithm name :"+ scoringAlgorithms[0].name);
       console.log("Scorer function Result:"+ scoringAlgorithms[0].scoringFunction(word) )
      //console.log(simpleScore(word) );
     }
     if (chosen==1){
       console.log("\n Algorithm name :"+ scoringAlgorithms[1].name);
      console.log("scorer function Result:"+ scoringAlgorithms[1].scoringFunction(word) );
      
     }
     if (chosen==2){
       console.log("\n Algorithm name :"+ scoringAlgorithms[2].name);
      console.log("scorer function Result:"+ scoringAlgorithms[2].scoringFunction(word));
      }


}


function transform(oldPointStructure){
  const newObj = {};
  for (const [letterValue, letterArr] of Object.entries(oldPointStructure)) {
    for (const letter of letterArr) {
      newObj[letter.toLowerCase()] = Number(letterValue);
    }
  }
  return newObj;
}
//console.log(transform(oldPointStructure));
  

let newPointStructure = transform(oldPointStructure);

  

function runProgram() {
  let word=initialPrompt();
   scorerPrompt(word);
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

