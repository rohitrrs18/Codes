function submitReview() {
    var audioFile = document.getElementById('audioFile').files[0];
    var reviewText = document.getElementById('reviewText').value;
  
    var formData = new FormData();
    formData.append('audio', audioFile);
    formData.append('review', reviewText);
  
    // Perform AJAX request to the backend for review submission
    // Example: using Fetch API
    fetch('/submit-review.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.success) {
        document.getElementById('message').textContent = 'Review submitted successfully.';
        loadReviews(); // Refresh review list
      } else {
        document.getElementById('message').textContent = 'Failed to submit review.';
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  
  function loadReviews() {
    // Perform AJAX request to the backend for fetching reviews
    // Example: using Fetch API
    fetch('/fetch-reviews.php')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var reviewList = document.getElementById('reviewList');
      reviewList.innerHTML = '';
  
      data.forEach(function(review) {
        var reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = '<p><strong>Review:</strong> ' + review.review + '</p>' +
                              '<audio controls><source src="' + review.audio + '" type="audio/mpeg"></audio>';
        reviewList.appendChild(reviewDiv);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  
  // Load initial reviews on page load
  document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
  });
  