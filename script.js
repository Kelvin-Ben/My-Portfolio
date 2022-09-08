/* eslint-disable no-unused-vars */
function menuOpen() {
  document.getElementById('overlay').style.display = 'flex';
}

function menuClose() {
  document.getElementById('overlay').style.display = 'none';
}
menuOpen();
menuClose();

// eslint-disable-next-line no-unused-vars
const projects = [
  {
    name: 'Tonic',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredimage: './images/SnapshootPortfolio.png',
    technologies: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    languages: [
      'html', 'css', 'javaScript',
    ],
    live_version: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '1',
  },
  {
    name: 'Multi-Post Stories',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredimage: './images/SnapshootPortfolio2.png',
    technologies: 'FACEBOOK',
    role: 'Back End Dev',
    year: '2015',
    languages: [
      'html', 'Ruby on rails', 'css', 'javascript',
    ],
    live_version: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '2',
  },
  {
    name: 'Tonic',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredimage: './images/SnapshootPortfolio3.png',
    technologies: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    languages: [
      'html', 'css', 'javaScript',
    ],
    live_version: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '3',
  },
  {
    name: 'Uber Navigation',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredimage: './images/SnapshootPortfolio4.png',
    technologies: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    languages: [
      'html', 'Ruby on rails', 'css', 'javascript',
    ],
    live_version: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '4',
  },
];

const ret = (arr) => {
  let lang = '';
  arr.forEach((item) => {
    lang += `<li>${item}</li>`;
    return lang;
  });
  return lang;
};

const workcards = document.getElementById('Portfolio');

projects.forEach((item) => {
  workcards.innerHTML += `<article class="workcard" id=${item.id}>
  <div>
  <img src=${item.featuredimage} alt="" class="image">
  </div>
    <div class="block">
      <h2 class="tonic1">${item.name}</h2>
      <div class="technologies">
      <div class="frame canopy">${item.technologies}</div>
      <div class="frame counter"></div>
      <div class="frame backend">${item.role}</div>
      <div class="frame counter"></div>
      <div class="frame year">${item.year}</div>
    </div>
    <p class="paragraph">${item.description}</p>
      <div class="tags">
        <ul class="tech">
        ${ret(item.languages, item)}
        </ul>
      </div>
      <button class="projects" id=${item.id} onclick="popupOpen(this.id)"><span class="see-projects">See Projects</span></button>
    </div>
  </article>
  `;
});

const popup = document.getElementById('popup');

const popupbutton = document.getElementsByClassName('projects');

function popupClose() {
  popup.style.display = 'none';
}

function popupOpen(id) {
  popup.style.display = 'flex';
  projects.forEach((item) => {
    if (id === item.id) {
      popup.innerHTML += `
    <div class="popup">
        <div class="closer">
        <img id="closer" src="./images/closer.png" alt="close" onclick="popupClose()">
        </div>
        <div id="items">
        <h2 class="tonic1">${item.name}</h2>
        <div class="technologies">
        <div class="frame canopy">${item.technologies}</div>
        <div class="frame counter"></div>
        <div class="frame backend">${item.role}</div>
        <div class="frame counter"></div>
        <div class="frame year">${item.year}</div>
      </div>
      
      <img class = "img" src=${item.featuredimage} alt="">
      <div id="huge">
      <div id="desc">
      <p class="lorem">${item.longDescription}</p>
      </div>
      <div id ="side">
      <div class="tags">
        <ul class = "tech">
         ${ret(item.languages, item)}
        </ul>
      </div>
      <div id="btn">
        <span class="action">
          <h4>See live</h4>
          <img src="./images/see.png" alt="See live" class="see">
        </span>
        <span class="action">
          <h5>See Source</h5>
          <img src="./images/Icon-GitHub.png" alt="" id="see">
        </span>
      </div>
    </div>
    </div>
</div>`;
    }
  });
}
const form = document.querySelector('#form');
const emailAdrdress = document.getElementById('email');

const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
const msgError = document.querySelector('#message_error');
const msgSuccess = document.querySelector('#message_success');

form.addEventListener('submit', (e) => {
  if (!emailAdrdress.value.match(emailPattern)) {
    e.preventDefault();
    msgError.classList.toggle('error');

    setTimeout(() => { msgError.classList.toggle('error'); }, 1300);
  } else {
    msgSuccess.classList.toggle('success');

    setTimeout(() => { form.submit(); }, 1300);
  }
});

form.addEventListener('input', () => {
  const formName = document.getElementById('name');
  const formEmail = document.getElementById('email');
  const formTextArea = document.getElementById('textarea');
  const object = {
    nameinput: formName.value,
    emailinput: formEmail.value,
    textareainput: formTextArea.value,
  };
  window.localStorage.setItem('storedInfo', JSON.stringify(object));
});

function fillfield(input) {
  form.name.value = input.nameinput;
  form.email.value = input.emailinput;
  form.textarea.textContent = input.textareainput;
}

window.addEventListener('load', () => {
  const info = window.localStorage.getItem('storedInfo');
  const infoObj = JSON.parse(info);
  fillfield(infoObj);
});