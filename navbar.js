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
        <ul>
        ${ret(item.languages, item)}
        </ul>
      </div>
      <button class="projects" id=${item.id} onclick="popupOpen(this.id)"><span class="see-projects">See Projects</span></button>
    </div>
  </article>
  `;
});

/*const popuparray = [
  {
    id: '1',
    name: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/SnapshootPortfolio.png',
    imageDesktop: './images/DesktopSnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    live_version: '',
    source_link: '',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/SnapshootPortfolio.png',
    imageDesktop: './images/DesktopSnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    live_version: '',
    source_link: '',
  },
  {
    id: '3',
    name: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/SnapshootPortfolio.png',
    imageDesktop: './images/DesktopSnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    live_version: '',
    source_link: '',
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/SnapshootPortfolio.png',
    imageDesktop: './images/DesktopSnapshootPortfolio.png',
    technologies: ['html', 'css', 'javascript'],
    live_version: '',
    source_link: '',
  },
];*/

const popup = document.getElementById('popup');

const popupbutton = document.getElementsByClassName('projects');

function popupClose() {
  popup.style.display = 'none';
}

function popupOpen(id) {
  popup.style.display = 'block';
  projects.forEach((item) => {
    if (id === item.id) {
      popup.innerHTML += `<div class="popup">
      <div class="block">
        <div class="closer"><img id="closer" src="Icon.png" alt="close" onclick="popupClose()"><div>
        <h2 class="tonic1">${item.name}</h2>
        <div class="technologies">
        <div class="frame canopy">${item.technologies}</div>
        <div class="frame counter"></div>
        <div class="frame backend">${item.role}</div>
        <div class="frame counter"></div>
        <div class="frame year">${item.year}</div>
      </div>
      </div>
      <img src=${item.featuredimage} alt="">
      <p class="lorem">${item.description}</p>
      <div class="tags">
        <ul>
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
    </div#>`;
    }
  });
}


