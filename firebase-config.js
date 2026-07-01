// Bikkgane Biryani - Global Configuration File
// Load this file before any other scripts in index.html and admin.html

// ─── Firebase Configuration ───
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDwyAGoWOp9XPt40ifj2tbM_DBWHmvg9Ek",
    authDomain: "briyani-97ee7.firebaseapp.com",
    projectId: "briyani-97ee7",
    storageBucket: "briyani-97ee7.firebasestorage.app",
    messagingSenderId: "317233686434",
    appId: "1:317233686434:web:b3cd609de872e122b174fb"
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
    firebase.initializeApp(FIREBASE_CONFIG);
}
const fbAuth = firebase.auth();
const fbDb = firebase.firestore();