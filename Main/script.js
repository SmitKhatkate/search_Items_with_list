document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const noResult = document.getElementById('noResult');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const items = itemList.getElementsByTagName('li');
        let visibleCount = 0;

        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].textContent.toLowerCase();
            if (itemText.includes(searchText)) {
                items[i].style.display = "";
                visibleCount++;
            } else {
                items[i].style.display = "none";
            }
        }

        // Display the "No result found" message if no items are visible
        noResult.style.display = visibleCount === 0 ? "" : "none";
    });
});