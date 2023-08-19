// Select the element where you want to display the JSON data
const jsonDataElement = document.getElementById('flora-json-data');

// Replace 'https://example.com/data.json' with the actual URL
// const url = 'https://o59w7.wiremockapi.cloud/taxanomy';

// Load the JSON data from the local file
const jsonData = [
    {
      "name": "Eastern Gray Squirrel",
      "scientific_name": "Sciurus carolinensis",
      "url": "https://i.pinimg.com/originals/fc/1f/e5/fc1fe59118e63c4e109f8728cadebbd6.jpg"
    },
    {
      "name": "American Robin",
      "scientific_name": "Turdus migratorius",
      "url": "https://www.allaboutbirds.org/guide/assets/photo/60412911-1900px.jpg"
    },
    {
      "name": "Mallard Duck",
      "scientific_name": "Anas platyrhynchos",
      "url": "https://www.wildlifeillinois.org/wp-content/uploads/2019/01/Mallard-Askren.jpeg"
    },
    {
      "name": "White-tailed Deer",
      "scientific_name": "Odocoileus virginianus",
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Odocoileus_virginianus_clavium_fawn.jpg"
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

