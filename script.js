function startCountdown() {
    const countdownElement = document.querySelector('.countdown__timer');
    const timer = document.querySelector('.js-countdown').getAttribute('data-timer');
    const labels = document.querySelector('.js-countdown').getAttribute('data-labels').split(',');

    let remainingTime = parseInt(timer, 10); // Переводимо час у секунди

    const countdownInterval = setInterval(() => {
        const hours = Math.floor(remainingTime / 3600); // Час в годинах
        const minutes = Math.floor((remainingTime % 3600) / 60); // Час в хвилинах
        const seconds = remainingTime % 60; // Час в секундах

        // Оновлюємо значення в HTML
        countdownElement.querySelector('.countdown__value--1').textContent = hours < 10 ? '0' + hours : hours;
        countdownElement.querySelector('.countdown__value--2').textContent = minutes < 10 ? '0' + minutes : minutes;
        countdownElement.querySelector('.countdown__value--3').textContent = seconds < 10 ? '0' + seconds : seconds;

        remainingTime--;

        // Якщо час вичерпано, зупиняємо лічильник
        if (remainingTime < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

window.onload = startCountdown; // Запускаємо лічильник при завантаженні сторінки





function validatePhone() {
    let phoneInput = document.getElementById("phone");
    let errorMessage = document.getElementById("error");
    let phoneValue = phoneInput.value.trim();

    if (phoneValue.startsWith("+38") && phoneValue.length > 3) {
        let numberAfterCode = phoneValue.substring(3);
        
        if (!numberAfterCode.startsWith("0")) {
            errorMessage.style.display = "block";
            return false;
        } else {
            errorMessage.style.display = "none";
            alert("Форма успішно відправлена!");
        }
    } else {
        errorMessage.style.display = "block";
    }
}