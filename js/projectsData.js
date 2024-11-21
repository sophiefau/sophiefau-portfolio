// projectsData.js
export const projects = [
  {
    title: 'Pokédex',
    liveLink: 'https://sophiefau.github.io/pokedex/',
    repoLink: 'https://github.com/sophiefau/pokedex',
    description: 'This project is a simple web application displaying a list of Pokémon, fetched from the PokéAPI. Step into the enchanting world of Pokémon! Search and click on any Pokémon to uncover its unique details and abilities.',
    features: [
      'Fetches a list of 300 Pokémon from the PokéAPI',
      'Displays a list of Pokémons with their image and type',
      'Look for a specific Pokémon using the search field',
      'Organize Pokémon by type',
      'Check the details for each Pokémon'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'EsLint'],
    images: ['img/pokedex_webview.png']
  },
  {
    title: 'CatFlix',
    liveLink: 'https://catflixmovies.netlify.app/',
    repoLink: 'https://github.com/sophiefau/CatFlix',
    description: 'Welcome to CatFlix, the ultimate app showcasing a delightful collection of movies featuring our feline friends! Discover and list your favorite cat movies, and immerse yourself in a world of cuteness and adventure.',
    features: [
      'Retrieve a list of all movies',
      'Browse a list of movies featuring cats',
      'Filter movies by title or genre',
      'View details for each movie',
      'Browse all the cats and get their details',
      'View similar movies',
      'Easily create an account and access your profile',
      'Update your profile information',
      'Add or remove movies from your favorites list',
      'Delete your account'
    ],
    tech: [
      'React → For building the user interface',
      'Parcel → For building and serving the app',
      'Bootstrap → For responsive design and styling',
      'Sass → For custom styles',
      'Redux → For state management',
      'Node and Express → For building the API',
      'MongoDB → For building the database',
      'REACT AI → For creating the images used for the logo',
      'Krita → For creating the final logo and editing the images',
      'Swagger → For documenting the API'
    ],
    images: ['img/screenshot_movies.png', 'img/screenshot_moviedetail.png']
  },
  {
    title: 'Meet!',
    liveLink: 'https://sophiefau.github.io/meet/',
    repoLink: 'https://github.com/sophiefau/meet',
    description: 'Meet app allows users to see events in the city where there are. They can select the city and look for events. The app is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
    features: [
      'Authenticate via Google',
      'Filter Events by City', 
      'Specify Number of Events', 
      'Show/Hide Event Details', 
      'Use the App When Offline', 
      'Display Charts Visualizing Event Details'
    ],
    tech: [
      'React → for building the user interface',
      'Serverless and AWS → for scalable backend services',
      'Google Calendar API → for fetching event data',
      'Jest and Puppeteer → for testing and end-to-end coverage',
      'Recharts → for data visualization'
    ],
    images: ['img/meetapp_full.png', 'img/meetapp_mobile.png']
  }
];