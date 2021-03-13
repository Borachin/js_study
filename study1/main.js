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

let start = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
// let insertx = ['Willy the Goblin, Big Daddy, Father Christmas'];
// let inserty = ['the soup kitchen, Disneyland, the White House'];
// let insertZ = ['spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away'];


// Q1.
// ↑ 위에 선언된 것을 사용했을때는 이름이 적용되는데 스토리가 랜덤으로 안 바뀌고 
// ↓ 아래 코드를 입력했을때는 이름값은 적용이 안되는데 스토리는 랜덤으로 돌아가요.



let insertx = ('Willy the Goblin, Big Daddy, Father Christmas');
let inserty = ('the soup kitchen, Disneyland, the White House');
let insertZ = ('spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away');


randomize.addEventListener('click', result);

function result() {

    let newStory = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(insertx);
    let zItem = randomValueFromArray(insertx);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
    newStory = newStory.replace(':insertx:',xItem);


    if (customName.value !== '') {
        let name = customName.value;

        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300) + ' stone';
        let temperature = Math.round(94) + 'centigrade';

        newStory = newStory.replace('94 farenheit', temperature);
        
        // Q2. 왜 'centigrade'로 안 바뀌는거일까요?
        // Q3. 수치값을 다르게 보여주려면 어떻게 해야하나요?

        newStory = newStory.replace('300 pounds', weight);
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}