// Function to open the notes modal and fetch data
function openNotesModal(deviceId) {
    const modal = document.getElementById('notesModal');
  
    // Show the modal
    modal.style.display = 'block';
  
    // Fetch content for the modal
    fetch(`/${deviceId}/notes`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('modal-body').innerHTML = data;
      })
      .catch(error => console.error('Error fetching notes:', error));
  }
  
  // Function to close the notes modal
  function closeNotesModal() {
    const modal = document.getElementById('notesModal');
    modal.style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Close the notes modal when the user clicks on the close button
    const closeButton = document.querySelector('#notesModal .close');
    if (closeButton) {
      closeButton.onclick = closeNotesModal;
    }
  
    // Close the notes modal if the user clicks outside of the modal-content
    window.onclick = function(event) {
      const modal = document.getElementById('notesModal');
      if (event.target === modal) {
        closeNotesModal();
      }
    };
  });
  