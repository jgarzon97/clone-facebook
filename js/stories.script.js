const storiesContainer = document.getElementById('stories');

const storiesData = [
    { name: 'Amumu', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt40dfbe48a61c439f/5db05fa80b39e86c2f83dbf9/RiotX_ChampionList_amumu.jpg?quality=90&width=250', time: Date.now() },
    { name: 'Alistar', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b366925d2fd8fdb/5db05fa856458c6b3fc1750b/RiotX_ChampionList_alistar.jpg?quality=90&width=250', time: Date.now() },
    { name: 'Akshan', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdd84b33ec501c137/60f9ede33f40e5481e85c0c6/RiotX_ChampionList_akshan_v2.jpg?quality=90&width=250', time: Date.now() },
    { name: 'Akali', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt80ff58fe809777ff/5db05fa8adc8656c7d24e7d6/RiotX_ChampionList_akali.jpg?quality=90&width=250', time: Date.now() },
    { name: 'Ahri', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90&width=250', time: Date.now() },
    { name: 'Aatrox', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90&width=250', time: Date.now() },
];

function createStory(storyData) {
    const story = document.createElement('div');
    story.classList.add('story');
    
    const storyImage = document.createElement('img');
    storyImage.src = storyData.image;
    storyImage.alt = 'Nueva historia';

    const storyContent = document.createElement('div');
    storyContent.classList.add('story-content');

    const storyName = document.createElement('h3');
    storyName.textContent = storyData.name;

    storyContent.appendChild(storyName);
    story.appendChild(storyImage);
    story.appendChild(storyContent);

    return story;
}

storiesData.sort((a, b) => b.time - a.time);

storiesContainer.innerHTML = '';

storiesData.forEach(storyData => {
    const story = createStory(storyData);
    storiesContainer.appendChild(story);
});