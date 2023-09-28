// Code your solutions in this file
for (let age=30; age<40; age++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`)

    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(nameString,eventName) {
  const messages=[];
  for (let i = 0; i <nameString.length; i++) {
      const message= `Thank you, ${nameString[i]}, for the wonderful ${eventName} gift!`
      messages.push(message);
  }
  return messages;
}

function countDown(x) {
  while (x >= 0) {
    console.log(x);
    x--;
  }
}