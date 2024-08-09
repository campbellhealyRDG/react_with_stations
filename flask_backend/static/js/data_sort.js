function sortTable(columnIndex) {
    console.log('Sorting column:', columnIndex); // Check if function is triggered
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
    table = document.getElementById("sortableTable");
    switching = true;
    dir = "asc"; // Set the sorting direction to ascending

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            var xContent = x.innerText || x.textContent;
            var yContent = y.innerText || y.textContent;

            // Handle numbers
            if (!isNaN(xContent) && !isNaN(yContent)) {
                xContent = parseFloat(xContent);
                yContent = parseFloat(yContent);
                if (dir === "asc") {
                    if (xContent > yContent) shouldSwitch = true;
                } else if (dir === "desc") {
                    if (xContent < yContent) shouldSwitch = true;
                }
            } else { // Handle text
                if (dir === "asc") {
                    if (xContent.toLowerCase() > yContent.toLowerCase()) shouldSwitch = true;
                } else if (dir === "desc") {
                    if (xContent.toLowerCase() < yContent.toLowerCase()) shouldSwitch = true;
                }
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchCount++;
                break;
            }
        }

        if (switchCount === 0 && dir === "asc") {
            dir = "desc";
            switching = true;
        }
    }
}
