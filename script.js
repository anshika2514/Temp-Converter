document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    const celsiusInput = document.getElementById('celsius');
    const convertedTempSpan = document.getElementById('convertedTemp');

    convertBtn.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            convertedTempSpan.textContent = fahrenheit.toFixed(2) + ' °F';
        } else {
            convertedTempSpan.textContent = 'Invalid input';
        }
    });
});
