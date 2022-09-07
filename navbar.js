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
    technologies: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    languages: [
      'html','css','javaScript',
    ]
    liveversion: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id:'1',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredimage: './images/SnapshootPortfolio2.png',
    technologies: [
      'FACEBOOK', 'Back End Dev', '2015',
    ],
    languages: [
      'html','Ruby on rails','css','javascript',
    ]
    liveversion: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '2'
  },
  {
  name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredimage: './images/SnapshootPortfolio3.png',
    technologies: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    languages: [
      'html','css','javaScript',
    ]
    liveversion: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '3',
  },
  {
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredimage: './images/SnapshootPortfolio4.png"',
    technologies: [
      'Uber', 'Lead Developer', '2018',
    ],
    languages: [
      'html','Ruby on rails','css','javascript',
    ]
    liveversion: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '4',
  },
];
const workcards = document.getElementById('Portfolio');
console.log(Array.of(workcards))
arr.forEach((item) => {
  workcards.innerHTML += `<section id= ${item.id} class="workcards">
  <img class="image" src=${item.featuredimage} alt="A Placeholder-image">
  <div class="block">
    <h2 class="tonic tonic1">${item.name}</h2>
    <p class="paragraph">${item.description}</p>
    <li class="tag">
    </li>
    <button class="projects">See Project</button>
  </div>
</section>`;

});