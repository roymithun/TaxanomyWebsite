function loadTabContent(tableDiv, url) {
  // Fetch the JSON data from the URL
  fetch(url)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Create a table
    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>About me</th>
          <th>How do I look?</th>
          <th>Fun facts</th>
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
        <td>
          <div class="item-name">${item.name}</div>
          <div class="scientific-name"><p><b>Scientific Name:</b> <i>${item.scientific_name}</i></p></div>
          <div class="item-description"><b>Description:</b> ${item.description}</div>
        </td>
        <td><img src="${item.url}" alt="${item.name}" class="table-image"></td>
        <td class="fun-facts">${item.fun_fact}</td>
      `;
      tbody.appendChild(row);
    });

    // Append the table to the tableDiv
    tableDiv.appendChild(table);
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });  
}

let arrayOfElements = [
  {element: document.getElementById('flora-json-data'), url: 'https://5z4j4.wiremockapi.cloud/flora-data'}, 
  {element: document.getElementById('fauna-json-data'), url: 'https://5z4j4.wiremockapi.cloud/fauna-data'}
]

arrayOfElements.forEach(item => {
  loadTabContent(item.element, item.url)
})
