function shout(text) {
  return text.toUpperCase();
}

function whisper(text) {
  return text.toLowerCase();
}

function logShout(text) {
  let upperCased = shout(text);
  console.log(upperCased);
}

function logWhisper(text) {
  let lowerCased = whisper(text);
  console.log(lowerCased);
}

function sayHiToGrandma(text) {
  if (text.toLowerCase) {
    return 'I can\'t hear you!'
  }
  if (text.toUpperCase) {
    return 'YES INDEED'
  }
  else {
    return false;
  }
}