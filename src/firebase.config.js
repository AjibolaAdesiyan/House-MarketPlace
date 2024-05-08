import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

//Your web app's Firebase Configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwXmIyNT3Ynr9faXn-3fTHYcbwFUX1gI4',
  authDomain: 'house-marketplace-app-21f63.firebaseapp.com',
  projectId: 'house-marketplace-app-21f63',
  storageBucket: 'house-marketplace-app-21f63.appspot.com',
  messagingSenderId: '192998964682',
  appId: '1:192998964682:web:e05377aa22e655aced6333',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
