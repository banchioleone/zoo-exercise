// creating the class Animal
class Animal {
    // constructor of the class Animal
    constructor(sound) {
      this.sound = sound;
    }
    // methods of the class Animal
    // method speak, receives a phrase as a parameter
    speak(phrase) {
      
      //alternative 1: less code but it can fail if the last char in the phrase is a blank space
      let newPhrase = phrase.replaceAll(" "," "+this.sound+" "); // replace every blank space with the animal sound surrounded by spaces
      newPhrase += " "+this.sound; // add a last sound after the phrase
      
      // alternative 2: iterating the array of words in the phrase
      let words = phrase.split(" "); // split the phrase into an array of words
      let newPhrase2 = ""; // new phrase empty
      for(let i=0; i<words.length; i++){ 
        if(i>0){ newPhrase2 +=" "; }; // if it's not the first word, i add a blank space
        newPhrase2 += words[i]+" "+this.sound; // adding the animal sound after each word
      }
      
      return newPhrase2; //returns the modified phrase using the alternative 2
    }
  }
  
  var lion = new Animal("roar"); //creates the object lion
  var tiger = new Animal("grrr"); //creates the object tiger
  
  //examples to try in the console:
  //lion.speak( "I'm a lion" );
  //tiger.speak( "Lions suck" );