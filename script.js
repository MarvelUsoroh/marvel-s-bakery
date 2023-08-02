// Get the image element using a class selector
const images = document.querySelectorAll('.item');

// Loop through all the images and add event listeners
images.forEach(image => {
    // Add a mouseenter event listener to the image
    image.addEventListener('mouseenter', function () {
        // Modify the CSS properties of the image
        image.style.transform = 'scale(1.5)'; // Increase the scale to make it pop out
        image.style.transition = 'transform 0.3s ease'; // Add a smooth transition effect
    });

    // Add a mouseleave event listener to the image
    image.addEventListener('mouseleave', function () {
        // Reset the CSS properties of the image
        image.style.transform = 'none'; // Reset the scale to its original size
    });
    
    image.addEventListener('click', function () {
        alert("Saved ❤");
    })
});

