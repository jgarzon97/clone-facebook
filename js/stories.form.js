const storyForm = document.getElementById('storyForm');

storyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const imageURL = document.getElementById('imageURL').value;
    const time = Date.now(); // Captura la hora actual en milisegundos

    const newStory = { name, image: imageURL, time };
    storiesData.push(newStory);
    storiesData.sort((a, b) => b.time - a.time); // Ordena las historias por tiempo

    // Update the total number of stories and reset the current index
    numberOfStories = storiesData.length;
    currentIndex = 0;

    // Only refresh the displayed stories
    showStories();

    // Limpiar los campos del formulario después de agregar la historia
    storyForm.reset();
});