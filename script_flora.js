// Select the element where you want to display the JSON data
const jsonDataElement = document.getElementById('flora-json-data');

// Replace 'https://example.com/data.json' with the actual URL
// const url = 'https://o59w7.wiremockapi.cloud/taxanomy';

// Load the JSON data from the local file
const jsonData = [
    {
      "name": "Tulip",
      "description": "Tulips, nature's elegant chalices, emerge as a vibrant parade of color after the hush of winter. Each blossom unfurls with grace, a burst of vivid hues that paint the garden with nature's exuberance. From the classic beauty of the Triumph tulips to the fringed edges of Parrot tulips, these floral gems summon the dawn of spring with breathtaking flair.",
      "fun_fact": "During the \"Tulip Mania\" in the 17th century, tulip bulbs were so valuable that they were considered a form of currency in the Netherlands.",
      "scientific_name": "Tulipa spp.",
      "url": "https://tinyurl.com/47hnr6jv"
    },
    {
      "name": "Rose",
      "description": "The Rose, a timeless symbol of love and elegance, graces gardens with its velvet petals and bewitching fragrance. Each delicate petal holds a lifetime of emotions—red signifies passionate love, while soft pinks evoke tenderness. Whether trailing along trellises or standing as solitary queens, roses evoke sentiments that words can barely capture.",
      "fun_fact": "Rose petals are edible and have been used to create culinary delights, from rose-flavored desserts to infused beverages.",
      "scientific_name": "Rosa spp.",
      "url": "https://cdn.wallpapersafari.com/69/75/FmR2l5.jpg"
    },
    {
      "name": "Carnation",
      "description": "Carnations, the multi-layered storytellers, present themselves with ruffled petals that hold the whispers of centuries. Symbolizing fascination and admiration, they unfurl in an array of colors—classic white, fiery red, and tender pink. Each bloom is a symphony of elegance, inviting both admiration and a fragrant journey through history.",
      "fun_fact": "Carnations have been cultivated for over 2,000 years and were even used in ancient Greece and Rome for their culinary and medicinal properties.",
      "scientific_name": "Dianthus caryophyllus",
      "url": "https://images.freeimages.com/images/large-previews/0fd/carnation-flower-1633539.jpg"
    },
	  {
      "name": "Daffodil",
      "description": "Daffodils, spring's emissaries, rise from the earth with golden trumpets and alabaster robes. Their balletic dance is a hymn to rejuvenation, an ode to hope after winter's slumber. From classic varieties that herald a new season to frilled, double-flowered daffodils that exude opulence, they narrate nature's triumphant reawakening.",
      "fun_fact": "Daffodils contain a substance called galantamine, which has been used in medicine to treat memory impairments and cognitive disorders, offering a surprising link between these cheerful blooms and brain health.",
      "scientific_name": "Narcissus spp.",
      "url": "https://mcdn.wallpapersafari.com/medium/14/33/YFfGz7.jpg"
    },
	  {
      "name": "Lavender",
      "description": "Lavender, the garden's aromatic poet, stands tall with slender stems adorned in regal purple or soothing blue. Its fragrance is an olfactory embrace, a soothing balm for weary souls. Bees and butterflies flit around its blooms, drawn to the gentle allure of lavender's nectar-laden flowers that hold tales of summer sun and restful dreams.",
      "fun_fact": " Lavender has been used for centuries in aromatherapy to promote relaxation and sleep, making it a popular choice for calming gardens.",
      "scientific_name": "Lavandula spp.",
      "url": "https://as1.ftcdn.net/v2/jpg/02/07/98/94/1000_F_207989400_FGXAWjokAh1ZnXmSjbJlvr9rahDqtsEy.jpg"
    },
	  {
      "name": "Sunflower",
      "description": "Sunflowers, the sun's faithful devotees, stretch toward the heavens with golden petals that radiate warmth and joy. Their towering presence is a lesson in resilience, following the sun's arc with unwavering devotion. Their vibrant demeanor transforms gardens into radiant havens, their sunny faces tracking the sun's journey from dawn to dusk.",
      "fun_fact": "Sunflowers have a unique behavior known as heliotropism, where young flowers face the sun but turn to the east as they mature to maximize sun exposure.",
      "scientific_name": "Helianthus annuus",
      "url": "https://c4.wallpaperflare.com/wallpaper/280/716/905/sun-flower-yellow-flowers-grass-wallpaper-preview.jpg"
    },
	  {
      "name": "Lily",
      "description": "Lilies, enchantresses of the garden, unfurl their velvety petals like secrets whispered. Majestic and captivating, each bloom is a symphony of color and fragrance, an invitation to pause and savor the exquisite details. From the striking Asiatic lilies to the intoxicating scent of Oriental varieties, they bestow gardens with an aura of grace and grandeur.",
      "fun_fact": "Lilies are not only a feast for the eyes but also a culinary delight in some cultures. In parts of Asia, certain species of lilies are used in cooking, adding a unique floral fragrance to dishes and desserts.",
      "scientific_name": "Lilium spp.",
      "url": "https://blog.longfield-gardens.com/wp-content/uploads/2016/07/Asiatic-Lilies.jpg"
    },
	  {
      "name": "Basil",
      "description": "Basil, the aromatic maestro, unfurls glossy leaves that beckon chefs and gardeners alike. Its fragrance is a symphony of freshness, conducting the senses to culinary symphonies of pesto and sauces. With sweet Genovese and spirited Thai varieties, basil bestows gardens with a fragrant note that echoes in the heart of every meal.",
      "fun_fact": "Basil is considered sacred in many cultures and is often used in religious ceremonies and rituals.",
      "scientific_name": "Ocimum basilicum",
      "url": "https://gardeningjones.com/wp-content/uploads/2014/03/basil.jpg"
    },
    {
      "name": "Petunia",
      "description": "Petunias, nature's vibrant painters, grace gardens with a palette of colors that dazzle and delight. Their petals unfold in an array of hues, from velvety purples to ethereal whites, creating a canvas of joy that enchants all who behold it. Whether they spill from hanging baskets or illuminate garden beds, petunias infuse spaces with dynamic allure.",
      "fun_fact": "Petunias are part of the Solanaceae family, which includes tomatoes, potatoes, and peppers.",
      "scientific_name": "Petunia spp.",
      "url": "https://www.plantopedia.com/wp-content/uploads/2017/04/petunia-n9.jpg"
    },
    {
      "name": "Mint",
      "description": "Mint, the invigorating traveler, stretches toward the sun, releasing its refreshing scent into the breeze. A single pluck conjures visions of aromatic teas and cool refreshments that tantalize the senses. From the invigorating coolness of spearmint to the peppermint's zesty edge, mint cultivates an oasis of vitality in gardens and teacups alike.",
      "fun_fact": "Mint's invigorating scent is not only loved by humans but also disliked by many pests, making it a natural insect repellent.",
      "scientific_name": "Mentha spp.",
      "url": "https://wallpapercave.com/wp/wp7822384.jpg"
    },
    {
      "name": "Marigold",
      "description": "Marigolds, the stalwart protectors, burst forth in fiery oranges and yellows, warding off unwanted visitors while infusing surroundings with warmth. Their vibrant presence is an emblem of positivity, their sunny disposition echoing the sun's embrace. From the radiant African marigolds to the delicate French varieties, these resilient blooms are nature's guardians.",
      "fun_fact": "Marigolds have been used traditionally in various cultures for their medicinal properties, such as wound healing and reducing inflammation.",
      "scientific_name": "Tagetes spp.",
      "url": "https://gardeningwithcharlie.com/wp-content/uploads/2014/01/marigold.jpg"
    },
    {
      "name": "Zinnia",
      "description": "Zinnias, the garden's jubilant revelers, burst forth in a riot of colors and shapes. From dainty pom-poms to regal dahlia-like blooms, their exuberance invites celebration. Each flower is a testament to life's vivacity, evoking laughter, enchantment, and an irresistible urge to join the festivities.",
      "fun_fact": "Zinnias are named after the German botanist Johann Gottfried Zinn and are native to North and South America.",
      "scientific_name": "Zinnia spp.",
      "url": "https://www.photos-public-domain.com/wp-content/uploads/2014/11/orange-zinnia-flowers.jpg"
    },
    {
      "name": "Lettuce",
      "description": "Lettuce, the crisp conductor of culinary compositions, unfurls tender leaves like edible poetry. Its delicate texture and refreshingly cool taste are notes that harmonize in salads, sandwiches, and wraps. From the delicate butterhead varieties to the robust crunch of romaine, lettuce transforms gardens into bountiful edible landscapes.",
      "fun_fact": "Lettuce is believed to have been cultivated for over 4,500 years and was enjoyed by ancient Egyptians.",
      "scientific_name": "Lactuca sativa",
      "url": "https://healthjade.com/wp-content/uploads/2017/11/romaine-lettuce.jpg"
    },
    {
      "name": "Geranium",
      "description": "Geraniums, the steadfast companions, adorn gardens with clusters of blossoms ranging from soft pinks to bold reds. Their foliage releases a scent that is an homage to summer afternoons. A favorite of both garden beds and hanging baskets, they flourish as versatile performers, turning every corner into a vibrant oasis.",
      "fun_fact": "Geraniums are known for their mosquito-repelling properties, making them not only lovely companions but also natural pest deterrents.",
      "scientific_name": "Pelargonium spp.",
      "url": "https://gardentabs.com/wp-content/uploads/2019/07/flower-3595825_1920.jpg"
    },
    {
      "name": "Snapdragon",
      "description": "Snapdragons, the enchanting illusionists, captivate gardens with their spiky stalks adorned by colorful blooms. Their unique feature lies in their \"dragon-like\" mouths that can be gently opened, creating a playful transformation. From pastel shades to vibrant hues, they stand tall, enticing curiosity and interaction.",
      "fun_fact": "The name \"snapdragon\" comes from the flower's ability to open and close its mouth-like petals, resembling a dragon's jaw snapping shut.",
      "scientific_name": "Antirrhinum majus",
      "url": "https://i.pinimg.com/originals/f8/e1/7e/f8e17e5d80dc872c13690e4ff84943ae.jpg"
    }
  ];

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
    jsonData.forEach(item => {
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

    // Append the table to the jsonDataElement
    jsonDataElement.appendChild(table);


