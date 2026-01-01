// Step 1: Select all tabs and tab content
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// Step 2: Loop through each tab and add click event
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        const target = this.dataset.tab; // Get the data-tab attribute

        // Step 3: Remove 'active' from all tabs and contents
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // Step 4: Add 'active' to clicked tab and corresponding content
        this.classList.add("active");
        document.querySelector(`.tab-content[data-tab="${target}"]`).classList.add("active");

        console.log("Active tab:", target);
    });
});
