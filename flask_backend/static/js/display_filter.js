// Trying to get this function to capture the TOC oprion selected so that it can be displayed on the index.html
// script trigger is in the base.html after body

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
    var submitBtn = document.getElementById("submit_btn");
    console.log("submit:", submitBtn);
    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            var selectedOption = document.getElementById("toc_filter").value;
            document.getElementById("selected_option").innerText = "Selected TOC: " + selectedOption;
        });
    } else {
        console.log("Element with ID 'submit' not found");
    }
});