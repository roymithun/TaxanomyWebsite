// Select the element where you want to display the JSON data
const jsonDataElement = document.getElementById('json-data');

// Replace 'https://example.com/data.json' with the actual URL
const url = 'https://o59w7.wiremockapi.cloud/taxanomy';

// Fetch the JSON data from the URL
fetch(url)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // // Loop through the array of objects and build HTML content
    // let htmlContent = '';
    // data.forEach(item => {
    //   htmlContent += `
    //     <div>
    //       <p>Name: ${item.name}</p>
    //       <p>Scientific Name: ${item.scientific_name}</p>
    //       <p>Url: ${item.url}</p>
    //     </div>
    //   `;
    // });

    // // Update the HTML content to display the fetched data
    // jsonDataElement.innerHTML = htmlContent;

    // Create a table
    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Scientific Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;

    // Populate the table with data
    const tbody = table.querySelector('tbody');
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.scientific_name}</td>
        <td><img src="${item.url}" alt="${item.name}"></td>
      `;
      tbody.appendChild(row);
    });

    // Append the table to the jsonDataElement
    jsonDataElement.appendChild(table);
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });
