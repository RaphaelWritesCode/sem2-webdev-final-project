/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Raphael Antioquia
 *      Student ID: 031379126
 *      Date:      August 3, 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { reviewData } = window;

// For debugging, display all of our data in the console. You can remove this later.

document.addEventListener("DOMContentLoaded", function () {
  displayReviews();

  document.getElementById("review-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents page from reloading on submit

    // Get values from the form
    const username = document.getElementById("username").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    // Create a new date object and format it as needed
    const date = new Date();
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    // Add new review to the reviewData array
    reviewData.push({
      name: username,
      rating: rating,
      review: review,
      date: dateString
    });

    displayReviews();

    // Reset the form
    document.getElementById("review-form").reset();
  });
});

function displayReviews() {
  const cardContainer = document.getElementById("dynamic-card-container");
  cardContainer.innerHTML = ""; // clear previous reviews

  reviewData.forEach((review) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const reviewerName = document.createElement("h3");
    reviewerName.textContent = review.name;
    cardElement.appendChild(reviewerName);

    const rating = document.createElement("span");
    rating.textContent = "Rating: " + review.rating + "/5";
    cardElement.appendChild(rating);

    const reviewDate = document.createElement("time");
    reviewDate.className = "review-date";
    reviewDate.textContent = "Date: " + review.date;
    cardElement.appendChild(reviewDate);

    const reviewText = document.createElement("p");
    reviewText.textContent = review.review;
    cardElement.appendChild(reviewText);

    cardContainer.appendChild(cardElement);
  });
}
