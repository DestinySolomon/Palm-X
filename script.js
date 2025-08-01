const counters = document.querySelectorAll(".counter");

function runCounter(counter) {
  let target = +counter.getAttribute("data-target");
  let count = 0;
  const increment = target / 200;

  const updateCount = () => {
    count += increment;
    if (count < target) {
      counter.textContent = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = target;
    }
  };

  updateCount();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Reset and run counter
        counters.forEach((counter) => {
          counter.textContent = "0"; // Reset counter
          runCounter(counter); // Animate again
        });
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the section is visible
  }
);

// Observe the section
const section = document.querySelector(".auto-counter-section");
if (section) {
  observer.observe(section);
}

// FAQ section

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

//  testimonial section

const testimonials = [
  {
    name: "Chinaza U.",
    text: "PalmX connected me to trustworthy palm oil sellers. I never imagined it could be this easy. Bravo!",
    image: "assest/images/testimonial-2.jpg",
  },
  {
    name: "Emeka B.",
    text: "Their trading system is smooth and reliable. I’ve already made profit using the speculative tools.",
    image: "assest/images/testimonial-3.jpg",
  },
  {
    name: "Fatima K.",
    text: "I used to struggle selling in bulk — now buyers find me directly. Thank you PalmX!",
    image: "assest/images/testimonial-5.jpg",
  },
  {
    name: "Tunde A.",
    text: "This platform is the Uber of Palm Oil. Fast, fair, and future-ready.",
    image: "assest/images/testimonial-6.jpg",
  },
  {
    name: "Grace O.",
    text: "Verified seller badge helped me get more buyers. Love it!",
    image: "assest/images/testimonial-4.jpg",
  },
  {
    name: "Yakubu D.",
    text: "Even from the north, I was able to buy and resell easily. Transparency is key, and PalmX has it.",
    image: "assest/images/testimonial-1.jpg",
  },
  {
    name: "Ngozi M.",
    text: "The customer service was responsive and helpful. Felt like family.",
    image: "assest/images/testimonial-8.jpg",
  },
  {
    name: "Kabiru L.",
    text: "Tracking my sales and getting paid was easy. And I love the modern interface!",
    image: "assest/images/testimonial-7.jpg",
  },
];

let index = 0;

function showTestimonial() {
  const textBox = document.getElementById("testimonial-text");
  const imageBox = document.getElementById("testimonial-image");

  const { name, text, image } = testimonials[index];

  textBox.innerHTML = `
    <h3 style="color:#4c7031;">${name}</h3>
    <p style="margin-top: 0.8rem;">"${text}"</p>
  `;

  imageBox.innerHTML = `
    <img src="${image}" alt="${name}'s picture" />
  `;

  index = (index + 1) % testimonials.length;
}
showTestimonial();
setInterval(showTestimonial, 5000); // rotate every 10 seconds

// Login Form

const loginBtn = document.querySelector(".login-btn");
const toast = document.getElementById("toast");

const messages = [
  "🌴 Welcome back, oil boss!",
  "💰 Logging you into the palm paradise...",
  "🚀 Your palm oil empire awaits!",
  "🛒 Ready to trade? Let’s go!",
  "🔥 Welcome to the market heat!",
  "📦 Loading fresh palm insights...",
];

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Remove if real login needed

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  toast.textContent = randomMsg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  // Automatically hide the toast after 2 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    document.querySelector(".login-form").submit(); // manually submit after toast
  }, 2000);

  return false; // prevent immediate form submit
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");
  const isVisible = passwordInput.type === "text";

  passwordInput.type = isVisible ? "password" : "text";
  toggleIcon.textContent = isVisible ? "👁️" : "🙈";
}

// Registration form page

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const hint = document.getElementById("password-strength");

  const isStrong =
    password.length >= 8 &&
    /[A-Z]/i.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password);

  hint.style.color = isStrong ? "green" : "red";
}

function validateForm() {
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return false;
  }

  if (pass.length < 8 || !/\d/.test(pass) || !/[!@#$%^&*]/.test(pass)) {
    alert(
      "Password must be at least 8 characters, include a number and a special character."
    );
    return false;
  }

  return true;
}



  const toggleBtn = document.getElementById('darkModeToggle');
  const icon = toggleBtn.querySelector('i');

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  //SideBar

