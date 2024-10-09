document.addEventListener('DOMContentLoaded', () => {
    const generateCatButton = document.getElementById('generateCat');
    const catImage = document.getElementById('catImage');

    generateCatButton.addEventListener('click', fetchCatImage);

    async function fetchCatImage() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            
            if (data && data.length > 0) {
                catImage.src = data[0].url;
                catImage.classList.remove('hidden');
            } else {
                throw new Error('No cat image found');
            }
        } catch (error) {
            console.error('Error fetching cat image:', error);
            alert('Failed to fetch a cat image. Please try again.');
        }
    }
});
