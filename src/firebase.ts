import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBpxqWIkOTsgI04mP-hXZggpVzZs6QxXhU',
  authDomain: 'firehostub.firebaseapp.com',
  projectId: 'firehostub',
  storageBucket: 'firehostub.appspot.com',
  messagingSenderId: '906525775888',
  appId: '1:906525775888:web:73f287186dec51a48cd295',
  measurementId: 'G-XDQW3CMJ9B',
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
