// Handle Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your booking has been confirmed!');
});

// Handle Review Form Submission
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const review = document.getElementById('review').value;
    const reviewContainer = document.getElementById('reviews-container');
    const reviewItem = document.createElement('p');
    reviewItem.textContent = review;
    reviewContainer.appendChild(reviewItem);
    document.getElementById('review').value = '';
});