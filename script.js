
//console.log(localStorage.getItem("Star rating"))
// let companyData = {
//     Scotiabank: { rating: null }
// };

// function updateRating(company, rating) {
//     companyData[company].rating = rating;
// }

// // Displaying the Saved Rating and Average Rating:
// function updateRatingsDisplay() {
//     // Retrieve the saved ratings from localStorage
//     var selectedRating = localStorage.getItem('selectedRating');

//     // Calculate the average rating (assuming you have more than one rating saved)
//     var ratings = JSON.parse(localStorage.getItem('ratings')) || [];
//     ratings.push(parseInt(selectedRating)); // Add the new rating to the array
//     localStorage.setItem('ratings', JSON.stringify(ratings)); // Save the updated ratings array to localStorage

//     var total = 0;
//     for (var i = 0; i < ratings.length; i++) {
//         total += ratings[i];
//     }

//     var averageRating = total / ratings.length;

//     // Update the displayed ratings
//     var selectedRatingDisplay = document.getElementById('selectedRatingDisplay');
//     var averageRatingDisplay = document.getElementById('averageRatingDisplay');

//     if (selectedRatingDisplay && averageRatingDisplay) {
//         selectedRatingDisplay.textContent = "Your Rating: " + selectedRating;
//         averageRatingDisplay.textContent = "Average Rating: " + averageRating.toFixed(2);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("dataForm").addEventListener("submit", function (event) {
//         event.preventDefault();

//         document.getElementById('ratingChange').addEventListener('change', function () {
//             updateRating("Scotiabank", this.value);
//         });

//         console.log(companyData);

//         // Saving the Rating to localStorage:
//         document.getElementById('ratingChange').addEventListener('change', function () {
//             var selectedRating = this.value; // Get the selected rating value
//             console.log("Selected Rating: " + selectedRating); // Log the selected rating (optional)

//             // Save the selected rating to localStorage
//             localStorage.setItem('selectedRating', selectedRating);

//             // Call a function to update the displayed rating and average rating
//             updateRatingsDisplay();
//         });
//     });
// });