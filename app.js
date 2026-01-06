const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
   {
    id: 5,
    name: 'Ntombi Mashinini',
    job: 'software developer',
    img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/177/198/original/WhatsApp_Image_2025-12-16_at_14.13.12_%281%29.jpeg?1767705293',
    text: 'Ntombi Mashinini is an emerging Software Developer who thrives on turning ideas into practical, well‑built applications. With a sharp eye for detail and a drive for continuous growth, she brings both technical skill and creative problem‑solving to every project she tackles.',
  },
];

//Selecting Items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const randomBtn = document.querySelector('.randomBtn');

//Selecting items
let currentItem = 0;

//Setting up the page load
window.addEventListener('DOMContentLoaded', function () { 
  getPerson(currentItem); 
});

function getPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener('click', function(){
currentItem ++;
currentItem = currentItem > reviews.length-1 ? 0: currentItem;
getPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
currentItem --;
currentItem = currentItem < 0 ? reviews.length - 1 : currentItem;
getPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random()* reviews.length);
  getPerson(currentItem);
});

