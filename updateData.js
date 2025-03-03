const admin = require('firebase-admin');
const serviceAccount = require('./securityAccountKey.json');
const data = require('./admin/schema.json');


// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to upload data to Firestore
async function uploadDataToFirestore() {
  try {
    // Upload the data as a single document with the month in the ID
    await db.collection('main').doc(`data-2024`).set(data);
    console.log('Data successfully uploaded to Firestore!');
  } catch (error) {
    console.error('Error uploading data to Firestore:', error);
  } finally {
    // Close the Firebase Admin SDK connection
    // No need to manually delete the app; the Firebase Admin SDK handles connection management internally
  }
}

// Run the upload function
uploadDataToFirestore();