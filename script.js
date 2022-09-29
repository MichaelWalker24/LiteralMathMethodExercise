let warmHugs="Hi \, I\'m Olaf and I like warm hugs.";

console.log(warmHugs.toUpperCase());

warmHugs=warmHugs.replace("like", "love");
console.log(warmHugs);

// OR
// console.log(warmHugs.replace("like", "love"));

let beenImpaled="Oh, look at that. I've been impaled.";

console.log(beenImpaled.slice(18));

let dotDotDot="...";

let skullBones="I don't have a skull ${dotDotDot}or bones";

console.log(Math.PI);

// let randomNumber=Math.random(); //0->0.999999
// randomNumber *=3; //0->2.999999
// randomNumber ++;
// console.log(randomNumber);

// OR
let randomNumber=Math.floor(Math.random()*3+1);
console.log(randomNumber);

// BONUS
// let go="Let It Go!";
// console.log(go.repeat(2).toUpperCase());
console.log(go.repeat(2).toUpperCase().trim());

let reindeers="Reindeers are better than people";

console.log(reindeers.replaceAll(" ", "_"));

console.log(Math.sqrt(2));

// let newRandomNumber=Math.floor(Math.random()*(23-7+1)+7);
// OR
let newRandomNumber=Math.floor(Math.random()*(17)+7)

console.log(newRandomNumber);