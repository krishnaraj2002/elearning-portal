/*const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



const swiper = new Swiper(".swiperCarousel", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const slides = document.getElementsByClassName("swiper-slide");
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      const { className } = slide;
      if (className.includes("swiper-slide-next")) {
        swiper.slideNext();
      } else if (className.includes("swiper-slide-prev")) {
        swiper.slidePrev();
      }
    });
  }
  
  function resizeTextToFit() {
    const quoteEls = document.getElementsByClassName('quote');
    for (const el of quoteEls) {
      el.style.width = el.offsetWidth;
      el.style.height = el.offsetHeight;
    }
    textFit(quoteEls, { maxFontSize: 14 });
  }
  resizeTextToFit();
  addEventListener("resize", (event) => {
    resizeTextToFit();
  });*/

  const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDH88-4n2R-AuVKT-R0rZiV2-oSIFpxLZE",
    authDomain: "employee-4db87.firebaseapp.com",
    databaseURL: "https://employee-4db87-default-rtdb.firebaseio.com",
    projectId: "employee-4db87",
    storageBucket: "employee-4db87.appspot.com",
    messagingSenderId: "864308202844",
    appId: "1:864308202844:web:ccc570980f62c66d914599"
};

firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
    var email = document.querySelector('#signup_email').value;
    var password = document.querySelector('#signup_password').value;
    var username = document.querySelector('#signup_username').value;

    // Validate input fields (add your own validation logic)
    if (email && password && username) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
                var user = userCredential.user;
                var user_data = {
                    email: email,
                    username: username,
                };
                // Create User data in the database
                database.ref('users/' + user.uid).set(user_data);
                alert('User Created!!');
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        alert('Please fill in all the required fields.');
    }
}

// Set up our login function
function login() {
    var email = document.querySelector('#login_email').value;
    var password = document.querySelector('#login_password').value;

    // Validate input fields (add your own validation logic)
    if (email && password) {
        auth.signInWithEmailAndPassword(email, password)
            .then(function (userCredential) {
                alert('User Logged In!!');
                window.location.href = 'Home page.html';
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        alert('Please fill in all the required fields.');
    }
}