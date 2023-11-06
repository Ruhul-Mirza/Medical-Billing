const firebaseConfig = {
    apiKey: "AIzaSyCXye2tb6p3BhbQGYOsy386nmwri67H-S4",
  authDomain: "medical-billing-b8b29.firebaseapp.com",
  projectId: "medical-billing-b8b29",
  storageBucket: "medical-billing-b8b29.appspot.com",
  messagingSenderId: "108784198129",
  appId: "1:108784198129:web:f962d236c7d9d2dd902450",
  measurementId: "G-BZ572YE2Q4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Function to handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Add the form data to Firebase
    db.collection("contact-form-submissions").add({
        name: name,
        email: email,
        message: message
    })
    .then(function(docRef) {
        // Show the thank you popup
        document.getElementById("thank-you-popup").style.display = "block";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

// Function to close the popup
function closePopup() {
    document.getElementById("thank-you-popup").style.display = "none";
}