// projectsData.js
export const projects = [
  {
    title: 'Pokédex',
    liveLink: 'https://sophiefau.github.io/pokedex/',
    repoLink: 'https://github.com/sophiefau/pokedex',
    description: 'This project is a simple web application displaying a list of Pokémon, fetched from the PokéAPI. Step into the enchanting world of Pokémon! Search and click on any Pokémon to uncover its unique details and abilities.',
    details: 'The application is built using HTML, CSS, and JavaScript, and it loads data from an external API. It is fully responsive, prioritizing a seamless user experience.',
    features: [
      'Fetches a list of 300 Pokémon from the PokéAPI',
      'Displays a list of Pokémons with their image and type',
      'Look for a specific Pokémon using the search field',
      'Organize Pokémon by type',
      'Check the details for each Pokémon'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'EsLint'],
    images: ['img/pokedex-full.png', 'img/pokedex-modal.png', 'img/pokedex_mobile.png']
  },
  {
    title: 'CatFlix',
    liveLink: 'https://catflixmovies.netlify.app/',
    repoLink: 'https://github.com/sophiefau/CatFlix-client',
    customLink: 'https://github.com/sophiefau/CatFlix',
    description: 'Welcome to CatFlix, the ultimate app showcasing a delightful collection of movies featuring our feline friends! Discover and list your favorite cat movies, and immerse yourself in a world of cuteness and adventure.',
    details: 'CatFlix application is a full-stack web project that lets users explore an extensive movie catalog. The backend API, built with Node.js, Express, and MongoDB, supports CRUD operations and includes user authentication and authorization. The frontend is developed with React and Redux. The project is hosted on Heroku (backend), MongoDB Atlas (database), and Netlify (frontend).',
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
    images: ['img/catflix-full.png', 'img/catflix-movie-details.png', 'img/catflix_mobile1.png', 'img/catflix_mobile2.png']
  },
  {
    title: 'Meet!',
    liveLink: 'https://sophiefau.github.io/meet/',
    repoLink: 'https://github.com/sophiefau/meet',
    description: 'Meet app lets users view events in their selected city, with options to search for specific events. It includes charts for data visualization and can be accessed offline to enhance user experience.',
    details: 'Meet is a serverless, progressive web app (PWA) built with React and a test-driven development (TDD) approach. The application uses the Google Calendar API to fetch upcoming events. The app uses OAuth2 for authentication and AWS Lambda for serverless functions. It is cross-browser compatible, responsive, and meets PWA checklist standards with offline support and home screen installation.',
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
    images: ['img/meet_full.png', 'img/meet_mobile.png', 'img/meet_test.png', 'img/meet_test_coverage.png']
  },
  {
    title: 'ChatMe',
    repoLink: 'https://github.com/sophiefau/ChatMe',
    description: 'ChatMe is a real-time mobile chat app running on both iOS and Android. It allows users to chat and share images and locations.',
    details: 'Built with React Native, the app uses Expo for development and testing, and Google Firestore for seamless communication, supporting both online and offline modes. ',
    features: [
      'Real-time messaging',
      'Background customization', 
      'Send a picture, from the galery or taken with the phone camera', 
      'Location Sharing', 
      'Offline access to cached messages'
    ],
    tech: [
      'React Native → JavaScript framework',
      'Expo → Development platform',
      'Android Studio Emulator → Testing',
      'GiftedChat → React Native chat library',
      'Firebase → Database & file storage',
      'AsyncStorage → Caching for offline mode',
      'React Native Maps → Display shared location',
      'ImagePicker → Upload and share images',
    ],
    images: ['img/chatme_mobile.png']
  },
  {
    title: 'CatFlix Angular: Development and Workflow',
    repoLink: 'https://github.com/sophiefau/CatFlix-angular',
    description: 'Welcome to the Angular version of the CatFlix Movie app—a responsive, single-page web application built with Angular. This project provided an opportunity to dive deeper into responsive design and refine the user experience through Angular’s powerful framework.',
    details: 'The app was rebuilt with a focus on user flows, user stories, and organizational workflows, utilizing a story points system to streamline workload management. It includes comprehensive documentation to help other developers understand the codebase and contribute effectively.',
    features: [
      'Real-time messaging',
      'Background customization', 
      'Send a picture, from the galery or taken with the phone camera', 
      'Location Sharing', 
      'Offline access to cached messages'
    ],
    tech: [
      'Frontend Framework → Angular',
      'UI Components: Angular Material',
      'CSS Styling → SCSS',
      'Backend API → Movie API',
      'Typedoc → documentation',
      'Trello → Project management',
      'Google Drawings → User flows',
    ],
    images: ['img/kaban.png', 'img/user_story.png', 'img/user_story2.png']
  }
];