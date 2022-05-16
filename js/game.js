/*    Game js
 */
 
var story = 0; // keep story from being undefined 
var form = document.getElementById('theAdventure');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var story_telling = {
  "start": { //beginning of the story
    "question": " Hello this is Dream Adventure part two. I suggest playing the first game before this one. I hope you enjoy! ",
    "answers": {
      "a": "Are you ready to start this adventure?",
   
    }
  },
  
  "1_a": {
    "question": "You sit up look around and feel confused. There is nothing around you but blue dust as far as you can see. You look up and you see two planets then realize this is not real. You start walking and after a while you come upon a small and what seems abandoned town. everything looks dull but then out of the corner of your eye you see someone dart across the street and kept running. ",
    "answers": {
      "a": "Run after them?",
      "b": "Stay and explore a little?", // dead end
      
    }
  },

  "2_a": {
    "question": "You catch up to them and as you grab them you both tumble to the ground you stand up and you realize it’s a girl. An image appears in your head of a woman standing near water.",
	"answers": {
      "a": "What is this place?",  //dead end
      "b": "Why were you running?",
	  "c":"Where is your mother?"  // dead end
  }
 },
  
  
  "2_b": {
    "question": "You keep looking around ignoring whoever ran off. Your stomach rumbles then you see what looks like a restaurant. ",
	"answers": {
      "d": "Walk into resturaunt?", //dead end
      "e": "Walk down the street?"// dead end
	}
  },
  

 // dead end 
 "3_a": {
    "question": "The girl looks at you funny. 'You don’t know?' she says. You remember everything and you wake up.",
	
 },
 
   "3_b": {
    "question": "I ran because I thought you were the magician.",
	"answers": {
      "b": "Who or what is a magician?",
      
	}
  },

  //dead end
   "3_c": {
    "question": "'I dont have a mother'. This is a dead end",
	  
	
  },
  
  
// dead end
    "3_d": {
    "question": "You walk into the restaurant there is no one there so you go to the back into the kitchen and see something that could be a refrigerator open it up and its fully stocked you pick out a couple of things then eat. After you eat your throat starts closing on you and you die from allergic reaction.",
	
  },
  
  
//dead end
   "3_e": {
    "question": "As you walk slowly down the street you suddenly see an old man come out of the shadows, he throws something at your feet and you die.",

  },
  
  
  
  
     "4_b": {
    "question": "'You don’t know about the magician?’ the girl asked with a curious look. 'He is an evil old man who runs the place, if he doesn’t like you, he will kill you. We need to get somewhere safe let’s go to the burrow'.",
	"answers": {
      "a": "Follow the young girl?",
	  "b": "Find your own way?"// dead end
      
	}
  },
  
  
     "5_a": {
    "question": "You follow the girl to the burrow and find out that it’s an underground bar. From the sound you can tell a lot of people are inside but once you walk in it suddenly quiets and all eyes are on you.",
	"answers": {
      "a": "Ask what is everyone staring at?", // dead end
	  "b": "Ignore the stares and walk towards a table in the back?"
      
	}
  },
  
  // dead end
     "5_b": {
    "question": "You start walking in the opposite direction but away from the town. The deserts hot sun is creating beads on your forehead without water you die of heat exhaustion",
	
  },
  
  
  
  // dead end
     "6_a": {
    "question": "Oh my gosh someone in the crowed threw a knife at you! You died Please try again",
	
  },
  
  
  
  
     "6_b": {
    "question": "Once you are seated the noise resumes and just a few are still looking at you. Looking back at the girl you see her writing on a napkin 'How to stop the magician' she looks up at you and asks you if you want in.",
	"answers": {
      "b": "Yeah, why not?",
      "c": "I would rather go home?"  //dead end
	}
  },
  
  
     "7_b": {
    "question": "'Great you’re in, my name is Kinzie by the way. The first place we start is the magician's brother to see if he has any information.'",
	"answers": {
      "a": "Head towards the brother?",
      
	}
  },
  
  
  
  //dead end
     "7_c": {
    "question": "'I can help you with that.' She touches the middle of your forehead and memories flood back and you wake up.",

  },
  
  
  
  
     "8_a": {
    "question": "As you leave the bar it gets quite again but you don’t care. On your way you cross a bridge into another world, but no its just a different part of this world. Snow like substance is covering the ground you lean down to touch it when something darts in front of your face.",
	"answers": {
      "a": "Wave your hand to swat at it?",  // dead end
	  "b": "Squint your eyes to get a better look?"
      
	}
  },
  
  
  // dead end
    "9_a": {
    "question": "What you swat at is a pixie and you killed her this dream suddenly turns into a nightmare and you get scared and wake up",
	
  },
  
  
  
     "9_b": {
    "question": "As you squint your eyes you notice that it’s a little tiny humanoid with wings. Kinzie tells you that it’s a sugar pixie and that most of them are friendly. The pixie flies to eye level and asks to join you both on this journey. ",
	"answers": {
      "b": "Say yes?",
      "c": "Say no?"
	}
  },
  
  
     "10_b": {
    "question": "With the pixie on board with the plan you finally make it to the brother, but it looks like a tree. Unsure of how to get inside a tree you start looking for a door or something to produce a door after surveying the tree you notice a branch loose.",
	"answers": {
      "a": "Pull the brach?",
      
	}
  },
  
  
  
  // dead end
     "10_c": {
    "question": "you tell her no and she gets mad and throws sugar in your eyes which makes you wake up",
	
  },
  
  
  
  
     "11_a": {
    "question": "Bingo Bango a secret door opens out of nowhere and a flash of memory a secret door appearing in a room full of books comes to mind. A boy comes into view at the door 'come in quick there are giants out there' the boy speaks, and his voice is warm and friendly you scurry into the tree that looks bigger on the inside and the boy closes the door.",
	"answers": {
      "a": "Continue",
      
	}
  },
  
  
   "12_a": {
    "question": "'I know who you are' the boy looks at you. 'I am the magician’s brother, but I am the true magician he is a scientist he never got the magic gene that I got which made him jealous and turn him into what he is now I know how to help you but first you must drink this' he looks at you once more.",
	"answers": {
      "a": "Drink what he gives you?",
	  "b": "Refuse to drink?" //dead end
      
	}
  },
  
   "13_a": {
    "question": "You take a swig, and it doesn’t taste as bad as you thought. 'This is going to help you become your best self. This is going to help you remember' says the actual magician. 'You do not need magic to fight my brother. Go to the mountain at the top of this mountain you will know what to do' he nods knowingly. Kinzie speaks up and looks at you 'which path to the mountain do you want to take?'",
	"answers": {
      "a": "Take the path to the wet north west?",  // better choice
	  "b": "Take the path to the dry north east?"
      
	}
  },
  

  // dead end
     "13_b": {
    "question": "You say no I don’t know you and you run out of the tree and get squashed by a giant",
	
  },
  
  
  
     "14_a": {
    "question": "Into the wetlands you passed many lakes and ponds the greenery around here is beautiful and lush. You then come to an ocean you see a boat you the three of you get in and you and Kinzie start paddling while you are paddling a mermaid appears from the water. 'You mind if I come up to dry my fins?' the mermaid was beautiful, and the group agreed that it was the kind thing to do and for your troubles the mermaid offered her narwal to pull the boat. As you relax you look down at the water. It looks so refreshing in the hot sun.",
	"answers": {
      "a": "Jump in and swim for a little bit?", //dead end
	  "b": "Stay put till the mountain?"
      
	}
  },
  
  
  
     "14_b": {
    "question": "Your journey in the dry lands is all deserts. There were parts of it that was solid dry dirt and parts pure sand as you and your group trudge along you come across an oasis with pretty trees and beautiful blue refreshing water will you stop and take a break or keep traveling to the mountain? ",
	"answers": {
      "c": "Take a break?",
      "b": "Keep heading towards the mountain?"
	}
  },
  
  //dead end
     "15_a": {
    "question": "Maybe you dont remember but you can't swim in dreams. Keep trying",
	
  },
  
  
     "15_b": {
    "question": "You finally make it to the mountain and there is a feast of food and drinks at the base of the mountain Kinzie tells you that the nymph's made this and it’s okay to eat.",
	"answers": {
      "a": "Sit down and relax with your friends?",
      "b": "Continue up the mountain?"
	}
  },
  
  // dead end
     "15_c": {
    "question": "You sit down at the oasis regardless of your companion’s opposition, the flowers smell so sweet and the water so still you drift off to sleep. Keep trying.",
	
  },
  
  
	 "16_a": {
	"question": "You all sit down to eat and drink but the more you consume the more memories come flooding back Then you realize you are in a dream. You stand up and then in one jump you start to fly! You take Kinzie's hand, and you fly up the mountain the pixie not far behind once on the mountain you huddle up and decide how to take down the scientist.", 	
	"answers": {
	  "a": "Turn him into a tree?",
	  "b": "Try talking to him?",  // dead end
	  "c": "Trap him?",
	  "d": "Make him fall alseep?"
	  
	}
  },
  
  
  
   //dead end
     "16_b": {
    "question": "You climb up the mountain one foot at a time meanwhile your friends are sitting down to eat as you look back at them you lose your grip and fall to your death. You really should have waited.",
	 
  },
  
  
    "17_a": {
    "question": "As the scientist approaches, you start running toward him and you dodge everything he throws at you when you reach him you put one finger on him forhead and he begins to turn into a tree. Your friends explode into celebration.",
	"answers": {
	   "a": "Continue",
	   
	} 
  },
  
  
  //dead end
  "17_b": {
    "question": "As the scientist approaches, you walk up to him and try to talk him down by telling him his brother loves him he gets angry at the mentioning of his brother and throws a pouch of dust at you which then kills you.",
  },
  
  "17_c": {
    "question": "As the scientist approaches, you quickly form a prism in your hand. You throw the prism and as you do it expands. Once it reaches the scientist He gets sucked inside where he is trapped and can't break free. You celebrate the win with your friends.",
	"answers": {
	   "a": "Continue",
	   
	} 
  },
	
	"17_d": {
    "question": "As the scientist approaches, You conjure up a pouch full of sleeping powder and throw it at him. He doges and you throw another one this time hitting him right in the face and he slumps over fast asleep. Because there was a lot of powder, he will sleep for approximately 1,000 years. You and your friends celebrate. ",
	"answers": {
	   "a": "Continue",
	   
	} 
	},
  
 "18_a": {
    "question": "After the defeat of the scientist your group went back down the mountain to really celebrate. Later you all split ways to tell the world the scientist is gone, and you decided it was time to wake up. This is where the story ends. I hope you enjoyed this game and thank you for playing.",
  
 },
  
};
 

// Continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
    console.log("Story time!"); // Console log to make sure things are working
  }
});

// Reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}

// Generate answers from story
function populateForm(story) {
  var current_story = story_telling[story];//take values from story_telling story
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }
  }

  form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
  form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning
