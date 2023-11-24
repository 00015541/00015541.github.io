
// function for sales section on the home page
window.onload = function () {
  const customCarousel = document.querySelector(".sales-carousel");
  const items = customCarousel.querySelectorAll(".sales-item");

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      for (let j = 0; j < items.length; j++) {
        if (i !== j) {
          items[j].classList.remove("active");
        }
      }
      items[i].classList.toggle("active");
    });
  }
};
// FAQ section
const toggles = document.querySelectorAll('.faq-btn');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
// Upload files in the form
var selDiv = "";
  var storedFiles = []; //store the object of the all files

  document.addEventListener("DOMContentLoaded", init, false);

  function init() {
     //To add the change listener on over file element
     document.querySelector('#attachfile').addEventListener('change', handleFileSelect, false);
     //allocate division where you want to print file name
     selDiv = document.querySelector("#filelist");
  }

  //function to handle the file select listenere
  function handleFileSelect(e) {
     //to check that even single file is selected or not
     if(!e.target.files) return;

     //for clear the value of the selDiv
     selDiv.innerHTML = "";

     //get the array of file object in files variable
     var files = e.target.files;
     var filesArr = Array.prototype.slice.call(files);

     //print if any file is selected previosly
     for(var i=0;i<storedFiles.length ;i++)
     {
         selDiv.innerHTML += "<div class='filename'> <span> " + storedFiles[i].name + "</span></div>";
     }
     filesArr.forEach(function(f) {
         //add new selected files into the array list
         storedFiles.push(f);
         //print new selected files into the given division
         selDiv.innerHTML += "<div class='filename'> <span> " + f.name + "</span></div>";
     });

     //store the array of file in our element this is send to other page by form submit
     $("input[name=replyfiles]").val(storedFiles);
}

// filter in the store

document.querySelector('.ice').addEventListener('click', function (e) {
  var shopCards = document.querySelectorAll('.shop-card');
  for (var i = 0; i < shopCards.length; i++) {
    shopCards[i].style.display = 'none';
  }
  var iceCards = document.querySelectorAll('*[data-cat="ice"]');
  for (var j = 0; j < iceCards.length; j++) {
    iceCards[j].style.display = 'block';
  }
});

document.querySelector('.bakery').addEventListener('click', function (e) {
  var shopCards = document.querySelectorAll('.shop-card');
  for (var i = 0; i < shopCards.length; i++) {
    shopCards[i].style.display = 'none';
  }
  var bakeryCards = document.querySelectorAll('*[data-cat="bakery"]');
  for (var j = 0; j < bakeryCards.length; j++) {
    bakeryCards[j].style.display = 'block';
  }
});

document.querySelector('.chocolate').addEventListener('click', function (e) {
  var shopCards = document.querySelectorAll('.shop-card');
  for (var i = 0; i < shopCards.length; i++) {
    shopCards[i].style.display = 'none';
  }
  var chocolateCards = document.querySelectorAll('*[data-cat="chocolate"]');
  for (var j = 0; j < chocolateCards.length; j++) {
    chocolateCards[j].style.display = 'block';
  }
});

document.querySelector('.all').addEventListener('click', function (e) {
  var shopCards = document.querySelectorAll('.shop-card');
  for (var i = 0; i < shopCards.length; i++) {
    shopCards[i].style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = [
      { category: 'breakfast', title: 'Ахуенный омлет с сосиской', price: '50 000 UZD.', imageUrl: 'path/to/omelette.jpg', description: 'Но названию не понятно чтоли?).' },
      { category: 'salads', title: 'Гейский Каприз', price: '40 000 UZD.', imageUrl: 'path/to/cesar.jpg', description: 'Классический салат для педиков.' },
      { category: 'dinner', title: 'Стейк из Единорога', price: '150 000 UZD.', imageUrl: 'path/to/steak.jpg', description: 'Жареный стейк из белого единогора на которым болжен был прийти твой принц)' },
      { category: 'desserts', title: 'Торт Негр', price: '30 000 UZD.', imageUrl: 'path/to/tiramisu.jpg', description: 'Торт из негров.' },
      { category: 'drinks', title: 'Мохито Клубничный', price: '15 000 UZD.', imageUrl: 'path/to/mojito.jpg', description: 'Если мне бы предложили выбрать Бугати и Макларен то я бы выбрал МОХИТО КЛУБНИЧНЫЙ!' }
  ];

  const menuContainer = document.querySelector('.menu');
  const navItems = document.querySelectorAll('.navigation li');

  function filterMenu(category) {
      menuContainer.innerHTML = '';
      const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);

      filteredMenu.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
              <img src="${item.imageUrl}" alt="${item.title}">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button onclick="showModal('${item.title}', '${item.description}')">Подробнее</button>
          `;
          menuContainer.appendChild(card);
      });
  }

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          document.querySelector('.navigation .active').classList.remove('active');
          item.classList.add('active');
          filterMenu(item.getAttribute('data-category'));
      });
  });

  filterMenu('all');
});

function showModal(title, description) {
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = `
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>${title}</h2>
      <p>${description}</p>
  `;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
