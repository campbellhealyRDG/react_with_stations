document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        var target = event.target;
        var dropdown, optionToSelect;

        switch (target.id) {
            case 'productionButton':
                dropdown = document.getElementById("environment_filter");
                optionToSelect = "2";
                dropdown.value = optionToSelect;
                $('#environment_filter').trigger('change');
                break;
            case 'stagingButton':
                dropdown = document.getElementById("environment_filter");
                optionToSelect = "3";
                dropdown.value = optionToSelect;
                $('#environment_filter').trigger('change');
                break;
            case 'operationalButton':
                dropdown = document.getElementById("status_filter");
                optionToSelect = "2";
                dropdown.value = optionToSelect;
                break;
            case 'spareButton':
                dropdown = document.getElementById("status_filter");
                optionToSelect = "3";
                dropdown.value = optionToSelect;
                break;
            case 'logoutButton':
                window.location.href = '/logout';
                break;
            case 'awcButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "2";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'c2cButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "3";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'chilternButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "4";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'crosscountryButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "5";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'emrButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "6";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'gaButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "7";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'gwrButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "8";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'lnerButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "9";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'northernButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "10";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'rspButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "11";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'rstlButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "12";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'seButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "13";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'swrButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "14";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'tfwrButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "15";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'tpeButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "16";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'wmrButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "19";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'umbrellaButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "17";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
            case 'unicardButton':
                dropdown = document.getElementById("toc_filter");
                optionToSelect = "18";
                dropdown.value = optionToSelect;
                $('#toc_filter').trigger('change');
                break;
        }
    });
});
