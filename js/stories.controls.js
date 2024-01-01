const storyContainer = document.getElementById('stories');
const storyControls = document.getElementById('story-controls');

let currentIndex = 0;
let numberOfStories = storiesData.length;

function showStories() {
    storyContainer.innerHTML = '';

    for (let i = currentIndex; i < currentIndex + 5 && i < numberOfStories; i++) {
        const story = createStory(storiesData[i]);
        storyContainer.appendChild(story);
    }
}

storyControls.addEventListener('click', event => {
    if (event.target.id === 'prev-story') {
        currentIndex -= 5;

        if (currentIndex < 0) {
            currentIndex = 0;
        }
    } else if (event.target.id === 'next-story') {
        currentIndex += 5;

        if (currentIndex >= numberOfStories - 5) {
            currentIndex = numberOfStories - 5;
        }
    }

    showStories();
});

showStories();