const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
let storyText = 'It was 94 fahrenheit outside, so Willy the Goblin went for a walk. When they got to Disneyland, they stared in horror for a few moments, then spontaneously combusted. Bob saw the whole thing, but was not surprised — Willy the Goblin weighs 300 pounds, and it was a hot day. ';
let insertX =['Willy the Goblin , Big Daddy, Father Christmas'];
let insertY = ['the soup kitchen , Disneyland , the White House'];
let insertZ = ['spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {

    let newStory = 'It was 94 fahrenheit outside, so Willy the Goblin went for a walk. When they got to Disneyland, they stared in horror for a few moments, then spontaneously combusted. Bob saw the whole thing, but was not surprised — Willy the Goblin weighs 300 pounds, and it was a hot day. ';

    let xItem = randomValueFromArray(insertX)
    let yItem = randomValueFromArray(insertY)
    let zItem = randomValueFromArray(insertZ)

  if(customName.value !== '') {
    let name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}
