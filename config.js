import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyDEgJ68MC-9yokyaawj1lJCp44oIhvfY9U',
  authDomain: 'medplants-3f862.firebaseapp.com',
  projectId: 'medplants-3f862',
  storageBucket: 'medplants-3f862.appspot.com',
  messagingSenderId: '1073350626727',
  appId: '1:1073350626727:web:3c5759a585dac99fbefa82',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
