const firebaseConfig = {
    apiKey: "AIzaSyDEJcPvVj9DLLsk6iyO7vlKkDt0MOy0GFA",
    authDomain: "blockchainbasedvoting-5f458.firebaseapp.com",
    projectId: "blockchainbasedvoting-5f458",
    storageBucket: "blockchainbasedvoting-5f458.appspot.com",
    messagingSenderId: "938535485529",
    appId: "1:938535485529:web:10fbb4cf1a55d7abda7148",
    measurementId: "G-15LHK80GQS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

// Initialize Firebase Realtime Database
const database = firebase.database();

// Log a message to confirm initialization
console.log("Firebase initialized");

// Your additional JavaScript code for testing
function testFirebase() {
    // Log a test message
    console.log("Firebase test successful");

    // Add data to the Realtime Database
    const dataRef = database.ref('testData');
    dataRef.set({
        message: 'Hello from Firebase!'
    });

    // Listen for changes in the Realtime Database
    dataRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log('Realtime Database updated:', data);
    });
}

// Call the test function
testFirebase();