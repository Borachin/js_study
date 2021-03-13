const customName = document.getElementById('customname');
// "Enter custom name" 텍스트 필드 값을 저장
const randomize = document.querySelector('.randomize');
// "Generate random story" 버튼 오브젝트를 저장
const story = document.querySelector('.story');
// story 변수에 저장하며 해당 엘리먼트에는 랜덤한 이야기가 복사

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let newstory = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
let insertX = ('Willy the Goblin , Big Daddy, Father Christmas');
let insertY = ('the soup kitchen , Disneyland , the White House');
let insertZ = ('spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away');

randomize.addEventListener('click', result);

function result() {

    let newStory = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = placeholder(':insertx:',xItem);
    newStory = placeholder(':insertY:',yItem);
    newStory = placeholder(':insertZ:',zItem);

    if (customName.value !== '') {
        let name = customName.value;

        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);

    }

    story.textContent = ;
    story.style.visibility = 'visible';
}