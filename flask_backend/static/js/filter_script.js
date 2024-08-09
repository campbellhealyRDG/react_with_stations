
// Function to update display of last chosen environment
// Define a mapping of environment IDs to environment names

function updateLastChosenEnvironment() {
    var environmentId = document.getElementById("environment_filter").value;
    // var environmentName = environment_names[environmentId]; // Assuming environment_names is the mapping of environment ids to names
    // var environmentName = environment.EnvironmentName; // Assuming environment_names is the mapping of environment ids to names
    var displayText = "Environment: " + environmentId;
    // var displayText = "Environment: " + environmentName;
    document.getElementById("lastChosenEnvironment").innerText = displayText;
}
// Add event listener to environment filter dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("environment_filter").addEventListener("change", updateLastChosenEnvironment);
});
// Initial update of last chosen environment on page load
window.addEventListener("load", updateLastChosenEnvironment);


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

    // Function to log the selected environment filter value
    function logSelectedEnvironment() {
        console.log("Environment filter change event triggered");
        
        // Get the selected environment filter value and text
        var environmentFilter = document.getElementById("environment_filter");
        var selectedEnvironmentId = environmentFilter.value;
        var selectedEnvironmentName = environmentFilter.options[environmentFilter.selectedIndex].text;
        
        // Log the selected Environment ID and Name
        console.log("Selected Environment ID:", selectedEnvironmentId);
        console.log("Selected Environment Name:", selectedEnvironmentName);
    }

    // Add event listener to environment filter dropdown menu
    var environmentFilter = document.getElementById("environment_filter");
    if (environmentFilter) {
        console.log("Environment filter element found");
        environmentFilter.addEventListener("change", logSelectedEnvironment);
    } else {
        console.error("Environment filter element not found!");
    }
});

