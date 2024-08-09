document.addEventListener("DOMContentLoaded", function() {
    // Get current date
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Month is zero-based
    var currentDay = currentDate.getDate();

    // Set default values for day, month, and year selectors
    var daySelector = document.querySelector('[name="decommissioned_day"]');
    var monthSelector = document.querySelector('[name="decommissioned_month"]');
    var yearSelector = document.querySelector('[name="decommissioned_year"]');

    // Populate day options
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        if (i === currentDay) {
            option.selected = true;
        }
        daySelector.appendChild(option);
    }

    // Populate month options
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        if (i === currentMonth) {
            option.selected = true;
        }
        monthSelector.appendChild(option);
    }

    // Populate year options starting from 2023 to current year
    for (var i = currentYear; i >= 2023; i--) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        if (i === currentYear) {
            option.selected = true;
        }
        yearSelector.appendChild(option);
    }
});
