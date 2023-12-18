// Функция для загрузки отзывов из localStorage
function loadReviewsFromLocalStorage() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    return reviews;
}

// Функция для сохранения отзывов в localStorage
function saveReviewToLocalStorage(review) {
    const reviews = loadReviewsFromLocalStorage();
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Функция для отображения отзывов из localStorage
function displayReviewsFromLocalStorage() {
    const reviews = loadReviewsFromLocalStorage();
    const commentsContainer = document.getElementById('commentsContainer');

    commentsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением отзывов

    reviews.forEach(function (review) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <strong>${review.username}</strong>:
            <span>${review.reviewText}</span>
            <span>${review.selectedEmoji}</span>
        `;
        commentsContainer.appendChild(reviewElement);
    });
}

// Функция для отправки отзыва
function submitReview(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const reviewText = document.getElementById('reviewText').value;
    const selectedEmoji = document.querySelector('input[name="emoji"]:checked').value;

    const review = { username, reviewText, selectedEmoji };
    saveReviewToLocalStorage(review);

    // Очистка формы после отправки отзыва
    document.getElementById('username').value = '';
    document.getElementById('reviewText').value = '';

    // Перезагрузка отзывов после добавления нового
    displayReviewsFromLocalStorage();
}

// Слушатель события отправки формы отзыва
document.getElementById('reviewForm').addEventListener('submit', submitReview);

// Отображаем сохраненные отзывы при загрузке страницы из localStorage
window.addEventListener('DOMContentLoaded', function () {
    displayReviewsFromLocalStorage();

    // Отображаем отзывы из API при загрузке страницы
    fetch('/api/get_reviews')
    .then(response => response.json())
    .then(reviews => {
        // Обработка полученных отзывов
        console.log(reviews);

        // Отображение полученных отзывов в созданный контейнер на странице
        const commentsContainer = document.getElementById('commentsContainer');

        reviews.forEach(function (review) {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <strong>${review.username}</strong>:
                <span>${review.reviewText}</span>
                <span>${review.selectedEmoji}</span>
            `;
            commentsContainer.appendChild(reviewElement);
        });
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});
// Функция для очистки отзывов из localStorage
function clearReviews() {
    localStorage.removeItem('reviews');
    displayReviewsFromLocalStorage(); // Обновляем отображение после очистки
}

// Слушатель события клика по ссылке "Очистить отзывы"
document.getElementById('clearReviewsLink').addEventListener('click', clearReviews);

