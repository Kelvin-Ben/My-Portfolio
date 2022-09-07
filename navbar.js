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
    technologies: [
      'CANOPY', 'Back End Dev', '2015',
    ],
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
    technologies: [
      'FACEBOOK', 'Back End Dev', '2015',
    ],
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
    technologies: [
      'CANOPY', 'Back End Dev', '2015',
    ],
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
    technologies: [
      'Uber', 'Lead Developer', '2018',
    ],
    languages: [
      'html', 'Ruby on rails', 'css', 'javascript',
    ],
    live_version: 'placeholder',
    source: 'https://github.com/Kelvin-Ben/Desktop-Version-Portfolio',
    id: '4',
  },
];
const workcards = document.getElementById('Portfolio');

projects.forEach((item) => {
  workcards.innerHTML += `<article class="workcard" id=${item.id}>
  <div>
  <img src=${item.featuredimage} alt="" class="image">
  </div>
    <div class="block">
      <h2 class="tonic1">Tonic</h2>
      <div class="technologies">
      <div class="frame canopy">CANOPY</div>
      <div class="frame counter"></div>
      <div class="frame backend">Back End Dev</div>
      <div class="frame counter"></div>
      <div class="frame year">2015</div>
    </div>
    <p class="paragraph">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.</p>
      <div class="tags">
        <ul>
          <li class="tag html">html</li>
          <li class="tag css">css</li>
          <li class="tag javascript">javaScript</li>
        </ul>
      </div>
      <button class="projects"><span class="see-projects">see projects</span></button>
    </div>
  </article>
  `;
});
const popup = [
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
];


