/**
 * Created by Woohyeon on 2017. 12. 13..
 */
class Header {
  constructor() {
    this.init();
  }

  init() {
    this.header = document.querySelector('header');
    this.loginModalBtn = document.querySelector('.login-button');
    this.signupModalBtn = document.querySelector('.signup-button');
    this.loginModal = document.querySelector('.bq-modal-signin');
    this.signupModal = document.querySelector('.bq-modal-signup');
    this.dimmer = document.querySelector('.dimmer');
    this.closeBtn = document.querySelectorAll('.modal-close-button');
    this.signupBtn = document.querySelector('.signup-btn');
    this.loginBtn = document.querySelector('.login-btn');
    this.signupLink = document.querySelector('.link-to-signup-btn');
    this.loginLink = document.querySelector('.link-to-signin');

    this.url = "http://dev.amigotrip.co.kr/" // should be changed for release

    if (document.querySelector('title').innerText === 'Amigo') {
      this.header.querySelector('.header-search-city-input').classList.remove('is-visible');
    }

    window.addEventListener('scroll', e => {
      this.showHeaderUnderline();
    });

    this.loginModalBtn.addEventListener('click', this.addFadeIn.bind(this));
    this.signupModalBtn.addEventListener('click', this.addFadeIn.bind(this));
    for (let i = 0; i < this.closeBtn.length; i++) {
      this.closeBtn[i].addEventListener('click', this.closeModal.bind(this));
    }
    this.signupLink.addEventListener('click', this.linkToSignup.bind(this));
    this.loginLink.addEventListener('click', this.linkToLogin.bind(this));
    this.loginBtn.addEventListener('click', this.tryLogin.bind(this));
    this.signupBtn.addEventListener('click', this.trySignup.bind(this));
  }

  showHeaderUnderline() {
    if (window.scrollY > 20 && !this.header.classList.contains('show-underline')) {
      this.header.classList.add('show-underline');
    } else if (window.scrollY < 21) {
      this.header.classList.remove('show-underline');
    }
  }

  addFadeIn(e) {
    this.dimmer.style.display = "block";
    if (e.target.classList.contains('login-button')) {
      this.loginModal.classList.add('fade-in');
    }
    if (e.target.classList.contains('signup-button')) {
      this.signupModal.classList.add('fade-in');
    }
  }

  linkToSignup(e) {
    this.loginModal.classList.remove('fade-in');
    this.signupModal.classList.add('fade-in');
  }

  linkToLogin(e) {
    if (e.target.tagName === "A") {
      this.signupModal.classList.remove('fade-in');
      this.loginModal.classList.add('fade-in');
    }
  }

  closeModal(e) {
    this.loginModal.classList.remove('fade-in');
    this.signupModal.classList.remove('fade-in');
    this.dimmer.style.display = "none";
  }

  tryLogin(e) {
    fetch(this.url + "users/login", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: document.querySelector("#login-email"),
                            password: document.querySelector("#login-password")})
    }).then(res=>res.json())
      .then(res => console.log(res));
  }

  trySignup(e) {
    fetch(this.url + "users/", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: document.querySelector("#signup-email"),
                            password: document.querySelector("#signup-password"),
                            name: document.querySelector("#signup-username")})
    }).then(res=>res.json())
      .then(res=> console.log(res));
  }
}

new Header();