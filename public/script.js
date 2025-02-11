// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Firebase configuration and initialization
    const firebaseConfig = {
        apiKey: "AIzaSyC0cxgA0bt73seZ1Co3TJIXPhcRJa2y66E",
        authDomain: "tutor-8d2e9.firebaseapp.com",
        databaseURL: "https://tutor-8d2e9-default-rtdb.firebaseio.com/",
        projectId: "tutor-8d2e9",
        storageBucket: "tutor-8d2e9.appspot.com",
        messagingSenderId: "317317669118",
        appId: "1:317317669118:web:6b77752aac53d15d1445af",
        // measurementId: "G-757QJJEL1K"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database().ref("freeTrialForm");

    document.getElementById("freeTrialForm").addEventListener("submit", submitForm);
    function submitForm(e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const board = document.getElementById("board").value;
        const grade = document.getElementById("grade").value;
        const countryCode = document.getElementById("countryCode").value;

        // Check if we're updating an existing message or adding a new one
        checkEmailAndWrite(name, email, phone, board, grade, countryCode);
    }

    function checkEmailAndWrite(name, email, phone, board, grade) {
        db.orderByChild("email").equalTo(email).once("value", snapshot => {
            if (snapshot.exists()) {
                console.log("Email already exists");
                // You can show a message to the user here
                document.getElementById("clickPrompt").textContent = "This email is already registered.";
                document.getElementById("clickPrompt").style.display = "block";
            } else {
                // Email doesn't exist, proceed with writing data
                writeUserData(name, email, phone, board, grade, countryCode);
                document.getElementById("clickPrompt").textContent = "Registration successful!";
                document.getElementById("clickPrompt").style.display = "block";
            }
        });
    }

    function writeUserData(name, email, phone, board, grade, countryCode) {
        // Use the Firebase SDK methods directly
        db.push({
          username: name,
          email: email,
          phone: phone,
          board: board,
          grade: grade,
          countryCode: countryCode
        });
    }

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });


    // // country code selector
    // const countryCode = document.getElementById("countryCode");
    // countryCode.addEventListener("change", function() {
    //     console.log(countryCode.value);
    // });

});