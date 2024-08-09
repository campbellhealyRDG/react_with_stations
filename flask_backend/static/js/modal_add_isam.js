document.addEventListener("DOMContentLoaded", function() {
    // Function to open the modal
    function openModal(url) {
        var modal = document.getElementById("myModal");
        var iframe = document.getElementById("modalIframe");

        if (modal && iframe) {
            iframe.src = url;
            modal.style.display = "block";
        } else {
            console.error('Modal or iframe element not found.');
        }
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("myModal");
        var iframe = document.getElementById("modalIframe");

        if (modal && iframe) {
            iframe.src = ""; // Clear the iframe source when closing
            modal.style.display = "none";
        } else {
            console.error('Modal or iframe element not found.');
        }
    }

    // Expose functions to global scope
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Close the modal when clicking outside of the modal content
    window.onclick = function(event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            closeModal();
        }
    }

    // Adjust dropdown width
    function adjustDropdownWidth() {
        var dropdowns = document.querySelectorAll('.form-dropdown select');
        dropdowns.forEach(function(select) {
            var maxWidth = 0;

            // Create a temporary element to measure the width of the options
            var tempElement = document.createElement('span');
            tempElement.style.visibility = 'hidden';
            tempElement.style.position = 'absolute';
            tempElement.style.whiteSpace = 'nowrap';
            document.body.appendChild(tempElement);

            Array.from(select.options).forEach(function(option) {
                tempElement.textContent = option.textContent;
                maxWidth = Math.max(maxWidth, tempElement.offsetWidth);
            });

            document.body.removeChild(tempElement);

            // Apply max width to select element
            select.style.width = Math.min(maxWidth, select.parentElement.offsetWidth) + 'px';
        });
    }

    adjustDropdownWidth();

    // Adjust dropdown width if the modal content changes dynamically
    window.addEventListener('resize', adjustDropdownWidth);

    // Form validation and AJAX submission
    $('#submitBtn').click(function(event) {
        var environmentId = $('#environment_filter').val();
        var tocId = $('#toc_filter').val();
        var logicalGroupId = $('#logical_group_filter').val();
        var irn = $('#IRN').val().trim();
        var isamid = $('#ISAMID').val().trim();

        // Prevent default form submission
        event.preventDefault();

        // Validation checks
        if (!environmentId) {
            alert('No Environment Selected');
            return;
        }

        if (!tocId) {
            alert('No TOC Selected');
            return;
        }

        if (!logicalGroupId) {
            alert('No Logical Group Selected');
            return;
        }

        if (!irn) {
            alert('No IRN Entered');
            return;
        }

        if (!isamid) {
            alert('No ISAM ID Entered');
            return;
        }

        // Serialize form data
        var formData = $('#entryForm').serialize();

        // Perform AJAX submission
        $.ajax({
            url: $('#entryForm').attr('action'),
            method: $('#entryForm').attr('method'),
            data: formData,
            success: function(response) {
                // Close the modal on successful submission
                closeModal();
                alert('Form submitted successfully!');
                // Optionally, handle successful submission, e.g., update UI
            },
            error: function(xhr, status, error) {
                // Handle errors here
                alert('An error occurred: ' + error);
            }
        });
    });

    // Optional: Set up event listener for the button
    document.getElementById('openOIDListBtn').addEventListener('click', function() {
        openModal('/oid_list'); // Use Flask route here
    });
});
