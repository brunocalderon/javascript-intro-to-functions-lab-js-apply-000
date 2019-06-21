function shout(text) {
  return text.toUpperCase();
}

function whisper(text) {
  return text.toLowerCase();
}

function logShout(text) {
  let upperCased = whisper(text);
  console.log(upperCased);
}

function logShout(text) {
  let upperCased = text.toUpperCase();
  console.log(upperCased);
}