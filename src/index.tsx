import { hydrate, render } from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/style/main.scss';
import './config/fa.config';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6aZBGiceo_JJ6nUJ40o-PuvdK9AQ39JE",
  authDomain: "solutionplus-7c19d.firebaseapp.com",
  projectId: "solutionplus-7c19d",
  storageBucket: "solutionplus-7c19d.appspot.com",
  messagingSenderId: "481054635274",
  appId: "1:481054635274:web:c7306e4ee5fce8624776f3",
  measurementId: "G-43TTX9HRTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const appElement = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const rootElement = document.getElementById('root');
const hasChildNodes = !!rootElement?.hasChildNodes();

hasChildNodes
  ? hydrate(appElement, rootElement)
  : render(appElement, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
