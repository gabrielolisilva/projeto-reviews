const reviews = [
    {
      id: 1,
      name: "rafaela braga",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "Projeto inovador, com um caráter importante para a sustentabilidade e de grande impacto para o mundo. Parabéns pelo projeto!!!",
    },
    {
      id: 2,
      name: "ana fernandes",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Adorei a ideia por trás do projeto. Isso sem dúvida irá impactar várias pessoas de forma positiva e única. Meus parabéns!",
    },
    {
      id: 3,
      name: "joão augusto",
      job: "estagiário",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Esse projeto traz um aprendizado muito grande, sem dúvidas você irá ganhar um prêmio por isso. Sucesso demais!!",
    },
    {
      id: 4,
      name: "luiz fonseca",
      job: "engenheiro",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Já vi projetos semelhantes mas nenhum chega perto desse, incrível, sem dúvidas isso irá servir de base para vários outros projetos como esse. Parabéns!",
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
    console.log(currentItem)
});

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem >= reviews.length) currentItem = 0
    showPerson(currentItem)
    console.log(currentItem)
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem === -1) currentItem = reviews.length - 1 ;
    showPerson(currentItem);
    console.log(currentItem)
})


function showPerson(person){
    const item = reviews[person];
    img.src= item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

randomBtn.addEventListener('click', function(){
    const currentValue = Math.floor(Math.random() * reviews.length);
    showPerson(currentValue)
})