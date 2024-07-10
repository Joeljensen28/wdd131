document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    reviewCount += 1;
    const reviewsDisplay = document.querySelector('span');
    reviewsDisplay.textContent = reviewCount;

    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('review-count').textContent = reviewCount;
});