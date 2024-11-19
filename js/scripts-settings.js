document.addEventListener('DOMContentLoaded', () => {
    const settingItems = document.querySelectorAll('.setting-item');

    settingItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        const currentValue = item.querySelector('.current-value');

        item.addEventListener('click', (e) => {
            // Toggle active class
            settingItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');

            // Prevent click from propagating to document
            e.stopPropagation();
        });

        // Add click event to dropdown items
        const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(dropdownItem => {
            dropdownItem.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the setting-item click event
                currentValue.textContent = dropdownItem.textContent;
                item.classList.remove('active');
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        settingItems.forEach(item => item.classList.remove('active'));
    });

    // Reset button functionality
    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', () => {
        const defaultValues = {
            'message-mode': 'Голосовые и текстовые',
            'speech-speed': '1.0X',
            'language-level': 'Не выбрано',
            'hints': 'Включены'
        };

        settingItems.forEach(item => {
            const setting = item.dataset.setting;
            const currentValue = item.querySelector('.current-value');
            currentValue.textContent = defaultValues[setting];
        });
    });
});