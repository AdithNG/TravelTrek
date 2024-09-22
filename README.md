# TravelTrek – AI-Powered Travel Recommender

**TravelTrek** is a web-based application that recommends travel locations and hotels based on user preferences and budget. This project was developed as part of the CMSC 447 Software Engineering course, integrating OpenAI's GPT API to provide personalized travel suggestions through an interactive chatbot.

## Features
- **AI Chatbot**: The website integrates with GPT to offer personalized travel and hotel recommendations based on user inputs such as budget and preferred destinations.
- **Dynamic Hotel Database**: Utilizes a custom dataset of hotels, filtering results according to user preferences.
- **Responsive Design**: Built using React.js and TailwindCSS, providing a seamless experience across different devices.
- **Real-Time Interaction**: The GPT-powered chatbot offers instant responses to user queries.
- **Firebase Integration**: Handles backend operations, including storing user data and managing the hotel dataset.

## Technologies Used
- React.js
- OpenAI GPT API
- Firebase
- TailwindCSS
- Node.js
- TypeScript

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/AdithNG/TravelTrek.git
   cd TravelTrek
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Build the production version of the app:
   ```bash
   npm run build
   ```
4. Start the deployment server:
   ```bash
   npm start
   ```
5. Open http://localhost:3000 in your browser to access the website locally.
   
## Firebase Deployment (Optional)
If you wish to deploy the website to Firebase, follow these steps:

1. Set up Firebase:
   - Add your Firebase configuration in the firebase.json file.
   - Initialize the database with firebase init.

2. Build the production version of the app:
   ```bash
   npm run build
   ```
3. Deploy the app to Firebase:
   ```bash
   firebase deploy
   ```
4. Access your website at the provided Firebase Hosting URL.

## Usage
- **Chatbot Interaction:** Start a conversation with the chatbot to get travel recommendations based on your preferences.
- **Hotel Filtering:** Use the custom filters to refine hotel recommendations based on budget, location, and amenities.

## Future Enhancements
- Integration with third-party travel APIs for real-time booking.
- Expanding the chatbot's functionality to include flight recommendations.
   
