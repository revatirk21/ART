document.addEventListener("DOMContentLoaded", function () {
  
  


const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const title = document.querySelector('.title');
const bottomText = document.getElementById('bottom-text');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const joinNowBtn = document.getElementById('cta-btn');

if (modal && joinNowBtn) {
    joinNowBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        loginForm.style.display = "block"; 
        signupForm.style.display = "none";
        title.textContent = "Welcome Back"; 
    });
} else {
    console.error("Auth modal or Join Now button not found!");
}

  


loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  title.textContent = 'Welcome Back';
  bottomText.innerHTML = `Don't have an account? <a href="#" id="switch-to-signup">Sign up</a>`;
});


signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
  title.textContent = 'Create Account';
  bottomText.innerHTML = `Already have an account? <a href="#" id="switch-to-login">Login</a>`;
});


document.addEventListener('click', function (e) {
  if (e.target.id === 'switch-to-signup') {
    signupTab.click();
  }
  if (e.target.id === 'switch-to-login') {
    loginTab.click();
  }
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


  const leftBtn = document.getElementById('artist-slide-left');
  const rightBtn = document.getElementById('artist-slide-right');
  const artworkGrid = document.querySelector('.artwork-grid');
  
  leftBtn.addEventListener('click', () => {
    artworkGrid.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });
  
  rightBtn.addEventListener('click', () => {
    artworkGrid.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
  

});

// Handle Login button click (redirect to admin page)
loginBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission if any
  window.location.href = 'admin.html'; // Redirect to admin page
});


  
  document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('.nav-links a');

    
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        
        event.preventDefault();

        
        const targetId = link.getAttribute('href').substring(1);

        
        const targetSection = document.getElementById(targetId);

        
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
