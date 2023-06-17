var data = [
    { title: 'Result 1', description: 'This is the description for Result 1.' },
    { title: 'Result 2', description: 'This is the description for Result 2.' },
    { title: 'Result 3', description: 'This is the description for Result 3.' },
    { title: 'Result 4', description: 'This is the description for Result 4.' },
    { title: 'Result 5', description: 'This is the description for Result 5.' }
  ];
  
  function search() {
    var query = document.getElementById('search-input').value.toLowerCase();
    var results = document.getElementById('search-results');
    results.innerHTML = '';
  
    if (query === '') {
      results.innerHTML = '<p>Please enter a search query.</p>';
      return;
    }
  
    var matchingResults = data.filter(function(result) {
      return result.title.toLowerCase().includes(query) || result.description.toLowerCase().includes(query);
    });
  
    if (matchingResults.length === 0) {
      results.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    matchingResults.forEach(function(result) {
      var resultHtml = '<div class="result">' +
                       '<h3>' + result.title + '</h3>' +
                       '<p>' + result.description + '</p>' +
                       '</div>';
      results.innerHTML += resultHtml;
    });
  }
  