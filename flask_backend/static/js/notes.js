function submitDecommission() {
    // Set the action URL to the decommission route
    document.getElementById("notes_form").action = "{{ url_for('decommission', device_id=device.IdDevice) }}";
    // Submit the form
    document.getElementById("notes_form").submit();
}

function submitNotes() {
    // Set the action URL to the notes route
    document.getElementById("notes_form").action = "{{ url_for('notes', device_id=device.IdDevice) }}";
    // Submit the form
    document.getElementById("notes_form").submit();
}
