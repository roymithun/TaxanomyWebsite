// Select the element where you want to display the JSON data
const jsonDataElement = document.getElementById('flora-json-data');

// Replace 'https://example.com/data.json' with the actual URL
// const url = 'https://o59w7.wiremockapi.cloud/taxanomy';

// Load the JSON data from the local file
const jsonData = [
    {
      "name": "Tulip",
      "scientific_name": "Tulipa",
      "url": "https://tinyurl.com/47hnr6jv"
    },
    {
      "name": "Rose",
      "scientific_name": "Rosa",
      "url": "https://cdn.wallpapersafari.com/69/75/FmR2l5.jpg"
    },
    {
      "name": "Carnation",
      "scientific_name": "Dianthus caryophyllus",
      "url": "https://images.freeimages.com/images/large-previews/0fd/carnation-flower-1633539.jpg"
    },
	{
      "name": "Daffodil",
      "scientific_name": "Syringa vulgaris",
      "url": "https://mcdn.wallpapersafari.com/medium/14/33/YFfGz7.jpg"
    },
	{
      "name": "Lilac",
      "scientific_name": "Dianthus caryophyllus",
      "url": "https://as1.ftcdn.net/v2/jpg/02/07/98/94/1000_F_207989400_FGXAWjokAh1ZnXmSjbJlvr9rahDqtsEy.jpg"
    },
	{
      "name": "Carnation",
      "scientific_name": "Dianthus caryophyllus",
      "url": "https://images.freeimages.com/images/large-previews/0fd/carnation-flower-1633539.jpg"
    }
  ];

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
    jsonData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.scientific_name}</td>
        <td><img src="${item.url}" alt="${item.name}" class="table-image"></td>
      `;
      tbody.appendChild(row);
    });

    // Append the table to the jsonDataElement
    jsonDataElement.appendChild(table);

