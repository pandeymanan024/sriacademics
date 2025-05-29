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

    function checkEmailAndWrite(name, email, phone, board, grade, countryCode) {
        console.log("Checking email...", email); // Debug log with email value
        db.orderByChild("email").equalTo(email).once("value")
            .then(snapshot => {
                console.log("Snapshot value:", snapshot.val()); // Debug log snapshot
                if (snapshot.exists()) {
                    console.log("Email already exists");
                    document.getElementById("clickPrompt").textContent = "This email is already registered.";
                    document.getElementById("clickPrompt").className = "error";
                    document.getElementById("clickPrompt").style.display = "block";
                } else {
                    console.log("Email check passed, proceeding with registration..."); // Debug log
                    // Email doesn't exist, proceed with writing data
                    return writeUserData(name, email, phone, board, grade, countryCode);
                }
            })
            .then((result) => {
                if (result !== undefined) { // Only proceed if writeUserData was called
                    console.log("Registration successful!");
                    document.getElementById("clickPrompt").textContent = "Registration successful!";
                    document.getElementById("clickPrompt").className = "success";
                    document.getElementById("clickPrompt").style.display = "block";
                }
            })
            .catch(error => {
                console.error("Error during registration:", error);
                document.getElementById("clickPrompt").textContent = "Registration failed. Please try again.";
                document.getElementById("clickPrompt").className = "error";
                document.getElementById("clickPrompt").style.display = "block";
            });
    }

    function writeUserData(name, email, phone, board, grade, countryCode) {
        console.log("Writing user data..."); // Debug log
        // Use the Firebase SDK methods directly
        return db.push({
            username: name,
            email: email,
            phone: phone,
            board: board,
            grade: grade,
            countryCode: countryCode
        }).then(() => {
            console.log("Data written successfully");
            return true; // Return a value to indicate success
        }).catch(error => {
            console.error("Error writing data:", error);
            throw error; // Propagate error to the main chain
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

    document.querySelector('.contact-btn').addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.contact-btn')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (const dropdown of dropdowns) {
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                }
            }
        }
    });
});