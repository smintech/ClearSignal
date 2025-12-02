document.addEventListener('DOMContentLoaded', () => {
    const selectWrapper = document.querySelector('.categorywrapper');
    const selectHeader = document.querySelector('.select-header');
    const categoryLabels = document.querySelectorAll('.category-label');

    selectHeader.addEventListener('click', () => {
        selectWrapper.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!selectWrapper.contains(event.target)) {
            selectWrapper.classList.remove('open');
        }
    });

    categoryLabels.forEach(label => {
        label.addEventListener('click', (event) => {
            event.stopPropagation();

            const parentGroup = label.closest('.category-group');
            parentGroup.classList.toggle('expanded');
        });
    });
    const options = document.querySelectorAll('.options-group li');
    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            selectHeader.textContent = option.textContent;
            
            selectWrapper.classList.remove('open');
        });
    });
});
