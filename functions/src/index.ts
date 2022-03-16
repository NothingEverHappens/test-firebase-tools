import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp({});

const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
  db.collection("translations").add({ input: "pirojok" });
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
