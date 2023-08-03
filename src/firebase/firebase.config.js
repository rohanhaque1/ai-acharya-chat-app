import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxHOCeZZTl6MAXhx2WNSyCj7uhD6IuXs0",
  authDomain: "mokx-client.firebaseapp.com",
  projectId: "mokx-client",
  storageBucket: "mokx-client.appspot.com",
  messagingSenderId: "589181619753",
  appId: "1:589181619753:web:3e21e8175481e1890f9638",
};

const app = initializeApp(firebaseConfig);
export default app;