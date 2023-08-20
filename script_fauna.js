// Select the element where you want to display the JSON data
const jsonDataElementFauna = document.getElementById('fauna-json-data');

// Replace 'https://example.com/data.json' with the actual URL
// const url = 'https://o59w7.wiremockapi.cloud/taxanomy';

// Load the JSON data from the local file
const jsonDataFauna = [
    {
      "name": "American Robin",
      "scientific_name": "Turdus migratorius",
      "description": "The American Robin, scientifically known as Turdus migratorius, is a medium-sized songbird with a recognizable orange-red breast and grayish-brown upperparts. Despite its name, the American Robin is a thrush, not a true robin. It's a common sight in backyards, parks, and gardens, especially during the spring and summer months. Robins are known for their melodious and cheerful song, often heard at dawn and throughout the day.",
      "fun_fact": "American Robins are known for their remarkable ability to detect earthworms beneath the ground. They use their sharp eyesight to spot movement on the ground, and then they cock their heads to listen for the sound of wiggling worms.",
      "url": "https://www.allaboutbirds.org/guide/assets/photo/60412911-1900px.jpg"
    },
    {
      "name": "Squirrel",
      "scientific_name": "Sciurus spp.",
      "description": "Squirrels, the acrobatic foragers, scamper through parks with boundless energy. Their fluffy tails and quick movements add a touch of whimsy to the natural surroundings.",
      "fun_fact": "Squirrels plant thousands of trees each year by forgetting where they buried their acorns.",
      "url": "https://cdn.britannica.com/55/145555-050-2808426A/squirrels-red-North-American-United-Kingdom-most.jpg"
    },
    {
      "name": "Rabbit",
      "scientific_name": "Oryctolagus cuniculus",
      "description": "Rabbits, the gentle grazers, can be spotted nibbling on grasses in park meadows. Their soft fur and twitching noses lend an air of innocence to the landscape.",
      "fun_fact": "Rabbits have a behavior called \"binkying,\" where they jump and twist in the air, expressing their joy and contentment.",
      "url": "https://wallpapercave.com/wp/1B76Pm2.jpg"
    },
    {
      "name": "Cabbage White Butterfly",
      "scientific_name": "Pieris rapae",
      "description": "The Cabbage White Butterfly, scientifically known as Pieris rapae, is a small to medium-sized butterfly with distinctive white wings marked with black dots. Both males and females of this species have similar wing patterns, but females usually have two black spots on each forewing, while males have only one. The caterpillars of the Cabbage White Butterfly are known for their voracious appetite and their preference for consuming plants from the Brassicaceae family, including cabbage, broccoli, and mustard.",
      "fun_fact": "The Cabbage White Butterfly is known for its migratory behavior. In some regions, these butterflies undertake seasonal migrations, flying long distances to find suitable breeding and feeding grounds.",
      "url": "https://cdn.butterflyatlas.org/img/aba/species-images/Cabbage-White_baldwin_10JUN2018_Karen-chiasson.jpg"
    },
    {
      "name": "Duck",
      "scientific_name": "Anas spp.",
      "description": "Ducks, the serene swimmers, grace park ponds with their elegant presence. From the vibrant Mallard to the graceful Wood Duck, they navigate waterways with tranquility.",
      "fun_fact": "Ducks have waterproof feathers due to an oil gland located near their tails, which they spread over their plumage to stay dry.",
      "url": "https://weknowyourdreams.com/images/duck/duck-04.jpg"
    },
    {
      "name": "Goose",
      "scientific_name": "Anser spp.",
      "description": "Geese, the communal wanderers, often form V-shaped formations in the sky during migration. In parks, their distinctive honking and regal presence bring a touch of the wild to urban landscapes.",
      "fun_fact": "Geese fly in a V formation during migration to conserve energy; the lead goose takes the brunt of the wind, and when it tires, another takes its place.",
      "url": "https://images.freeimages.com/images/large-previews/402/canadian-goose-1379384.jpg"
    },
    {
      "name": "Raccoon",
      "scientific_name": "Procyon lotor",
      "description": "Raccoons, the curious nocturnals, emerge at dusk to explore park trash cans and water sources. With their masked faces and nimble paws, they embody a sense of intrigue.",
      "fun_fact": "Raccoons have highly dexterous front paws that allow them to manipulate objects, almost resembling human-like hands.",
      "url": "https://images.alphacoders.com/929/thumb-1920-929049.jpg"
    },
    {
      "name": "Western Honey Bee",
      "scientific_name": "Apis mellifera",
      "description": "The Western Honey Bee, scientifically known as Apis mellifera, is a well-known insect vital to ecosystems and agriculture due to its role as a pollinator. Honey bees are social insects that live in organized colonies, with worker bees, drones (males), and a single queen bee. They are excellent pollinators of a wide range of plants, contributing to the reproduction of many crops and flowering plants.",
      "fun_fact": "Honey bees perform a unique 'waggle dance' to communicate the location of nectar sources to other members of the hive. The direction and duration of the dance convey the distance and quality of the food source.",
      "url": "https://cff2.earth.com/uploads/2021/12/03095748/Western-honey-bee-scaled.jpg"
    },
    {
      "name": "Turtle",
      "scientific_name": "Various",
      "description": "Turtles, the patient sun-seekers, can often be found basking on rocks or logs near park ponds. With their slow movements and ancient demeanor, they connect the present to prehistoric times.",
      "fun_fact": "Some turtles can \"breathe\" through their skin, allowing them to extract oxygen from water even when they are submerged.",
      "url": "https://i.pinimg.com/736x/35/32/e7/3532e791390c2e6796382637c8583fc8--box-turtles-green-turtle.jpg"
    },
    {
      "name": "Chipmunk",
      "scientific_name": "Tamias spp.",
      "description": "Chipmunks, the ground-dwelling performers, scurry and dart among fallen leaves, showcasing their striped backs and cheek pouches filled with treasures.",
      "fun_fact": "Chipmunks stuff their cheek pouches with food, and each pouch can expand to three times the size of their head!",
      "url": "https://facts.net/wp-content/uploads/2021/04/chipmunk.jpg"
    },
    {
      "name": "Common Frog",
      "scientific_name": "Rana temporaria",
      "description": "The Common Frog, scientifically known as Rana temporaria, is a widespread amphibian found in various habitats, including gardens, woodlands, and wetlands. It has a variable coloration ranging from green to brown with dark markings, helping it blend into its surroundings. Common Frogs are known for their distinctive hopping movements and their ability to jump considerable distances when startled.",
      "fun_fact": "Common Frogs have a unique adaptation called the 'hibernaculum,' where they find shelter in damp places like logs or under leaves during the colder months. They often hibernate in large groups, creating cozy frog communities to survive the winter.",
      "url": "https://www.pentaxuser.com/images/gallery/2018/07/large/common-frog_1530473273.jpg"
    },
    {
      "name": "Deer",
      "scientific_name": "Odocoileus spp.",
      "description": "Deer, the graceful grazers, may visit parks during dawn or dusk, bringing an air of elegance as they move among trees and grassy areas.",
      "fun_fact": "White-tailed deer communicate through their tails; a raised tail acts as an alert signal, while a lowered tail indicates a calm and relaxed state.",
      "url": "http://www.mwallerphotos.com/Animals/Deer/slides/3715.jpg"
    },
    {
      "name": "Bat",
      "scientific_name": "Various",
      "description": "Bats, the silent nocturnal hunters, take to the skies at night, using their echolocation to catch insects on the wing. Parks become their expansive playgrounds after sunset.",
      "fun_fact": "Bats are the only mammals capable of sustained flight, using their flexible wing membranes to navigate and catch prey.",
      "url": "https://www.baystatewildlife.com/wp-content/uploads/2018/12/shutterstock_1050912656.jpg"
    },
    {
      "name": "Fox",
      "scientific_name": "Vulpes spp.",
      "description": "Foxes, the elusive wanderers, may be glimpsed in the twilight hours. Their keen senses and rust-colored fur add a touch of wild allure to park landscapes.",
      "fun_fact": "Foxes have excellent hearing and can locate prey beneath the snow by using their acute sense of sound.",
      "url": "https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461451-fox-animals.jpg"
    }
  ];

const tableFauna = document.createElement('table');
    tableFauna.innerHTML = `
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
    const tbodyFauna = tableFauna.querySelector('tbody');
    jsonDataFauna.forEach(item => {
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
      tbodyFauna.appendChild(row);
    });

    // Append the table to the jsonDataElementFauna
    jsonDataElementFauna.appendChild(tableFauna);

