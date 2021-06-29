(function () {
    let buttons = document.querySelectorAll('.btn');
    let storeItems = document.querySelectorAll('.store-item');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            let filter = e.target.dataset.filter;

            storeItems.forEach(storeItem => {
                if (filter == 'all')
                    storeItem.style.display = 'block';
                else
                    storeItem.style.display = storeItem.classList.contains(filter) ? 'block' : 'none';
            });
        })
    });
})();

(() => {
    let searchBox = document.querySelector('#search-item');
    let storeItems = document.querySelectorAll('.store-item');

    searchBox.addEventListener('keyup', e => {
        let searchFilter = e.target.value.trim().toLowerCase();

        storeItems.forEach(storeItem => storeItem.style.display = storeItem.textContent.includes(searchFilter) ? 'block' : 'none');
    });
})();