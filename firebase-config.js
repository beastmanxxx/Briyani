// Bikkgane Biryani - Global Configuration File
// Load this file before any other scripts in index.html and admin.html

// ─── Firebase Configuration ───
const firebaseConfig = {
    apiKey: "AIzaSyAlYwbddAh6PjvxgwQ2XEez_8sL6PEiLoI",
    authDomain: "biyani-a4b3b.firebaseapp.com",
    projectId: "biyani-a4b3b",
    storageBucket: "biyani-a4b3b.firebasestorage.app",
    messagingSenderId: "840967277466",
    appId: "1:840967277466:web:4ffe56c8af4c77f5cec823"
};

// ─── Cloudinary Configuration ───
const CLOUDINARY_CONFIG = {
    cloudName: "dc3o4gtxm",
    apiKey: "527249129648473",
    apiSecret: "7Ed9gPSeSAb0kdaKxtWbWnFip9w",
    uploadPreset: "briyani",
    uploadFolder: "briyani/assets"
};

// ─── Initialize Firebase ───
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const fbAuth = firebase.auth();
const fbDb = firebase.firestore();