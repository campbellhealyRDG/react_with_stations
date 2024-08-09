// Get the toggle button, search button, and text box
var btnToggle = document.getElementById("toggleButton");
var btnSearch = document.getElementById("searchButton");
var inputAdditional = document.getElementById("additionalInput");

// Get the hidden inputs for search type and additional text
var inputSearchType = document.getElementById("searchType");
var inputAdditionalText = document.getElementById("additionalText");

// Initial state
var state = 0;

// Function to toggle the button appearance and state
btnToggle.onclick = function() {
    state = (state + 1) % 3;
    switch(state) {
        case 0:
            btnToggle.style.backgroundColor = "grey";
            btnToggle.textContent = "IRN/ISAM";
            inputSearchType.value = ""; // No search type for this state
            break;
        case 1:
            btnToggle.style.backgroundColor = "blue";
            btnToggle.textContent = "ISAM";
            inputSearchType.value = "ISAM";
            break;
        case 2:
            btnToggle.style.backgroundColor = "red";
            btnToggle.textContent = "IRN";
            inputSearchType.value = "IRN";
            break;
    }
}

// Function to handle the search button click
btnSearch.onclick = function(event) {
    if (state === 0) {
        event.preventDefault(); // Prevent form submission
        alert("Please select a search type by pressing the toggle button.");
    } else {
        inputAdditionalText.value = inputAdditional.value; // Set the hidden input with the additional text
    }
}
