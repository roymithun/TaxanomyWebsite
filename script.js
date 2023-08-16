// Select the element where you want to display the JSON data
const jsonDataElement = document.getElementById('json-data');

// Replace 'https://example.com/data.json' with the actual URL
const url = 'https://o59w7.wiremockapi.cloud/taxanomy';

// Fetch the JSON data from the URL
fetch(url)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Loop through the array of objects and build HTML content
    let htmlContent = '';
    data.forEach(item => {
      htmlContent += `
        <div>
          <p>Name: ${item.name}</p>
          <p>Scientific Name: ${item.scientific_name}</p>
          <p>Url: ${item.url}</p>
        </div>
      `;
    });

    // Update the HTML content to display the fetched data
    jsonDataElement.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });
