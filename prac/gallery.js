// Step 1: Select preview and all gallery images
const preview = document.getElementById("preview");
const galleryImages = document.querySelectorAll(".gallery img");

// Step 2: Loop through all images and attach click event
galleryImages.forEach(function(img) {
    img.addEventListener("click", function() {
        // Step 3: Update the preview src with clicked image src
        preview.src = this.src;

        console.log("Preview updated to:", this.alt);
    });
});
