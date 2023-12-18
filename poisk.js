// Функция для фильтрации блюд по поиску
function filterBySearch() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchInput)
  );
  displayMenu(filteredDishes);
}

document.getElementById('searchInput').addEventListener('input', filterBySearch);

function displayMenu(dishesList) {
  const menuList = document.querySelector('.menu-list');
  menuList.innerHTML = '';

  dishesList.forEach((dish) => {
    const dishElement = document.createElement('div');
    dishElement.classList.add('dish-card');

    dishElement.innerHTML = `
      <img src="${getImagePath(dish.category, dish.name)}" alt="${dish.name}">
      <div class="dish-details">
        <h3>${dish.name}</h3>
        <p>${getDescription(dish.category)}</p>
        <p>Цена: ${dish.price} руб.</p>
      </div>
    `;
    menuList.appendChild(dishElement);
  });
}


  // Объекты с изображениями для пиццы и бургеров
  const pizzaImages = {
    'сырная пицца': 'food-3337656_640.jpg',
    'маргарита': '371ca16f9a887e4a7d2c90c17ebaab77.jpg',
    'пепперони': '584006059d5b9ba8c3b3560055c37a90.jpg',
    'вегетарианская пицца': '7072a7cb747d63a72f7c96c571bbb9c2.jpg',
    // Добавьте другие изображения для пиццы
  };

  const burgerImages = {
    'бургер': 'burger-3047550_640.jpg',
    'чизбургер': '234592f8ab997369dd2bd20ad04e61df.jpg',
    'гриль-бургер': '6516320288347632e65f2ce5b0627810.jpg',
    // Добавьте другие изображения для бургеров
  };
  // Объект с изображениями для напитков
  const drinkImages = {
    
    'фруктовый сок': 'sok.jpg',
    'чай': 'chai.jpg',
    'молочный коктейль': 'kokteil.jpg',
    'какао': 'kakao.jpg',
    
    // Добавьте другие изображения для напитков
  };
  // Функция для предварительной загрузки изображений
  function preloadImages(imagePaths) {
    for (const key in imagePaths) {
      if (Object.hasOwnProperty.call(imagePaths, key)) {
        const img = new Image();
        img.src = imagePaths[key];
      }
    }
  }

  // Функция для получения пути к изображению в зависимости от категории и имени напитка
  function getImagePath(category, dishName) {
    const pizzaImages = {
      'сырная пицца': 'food-3337656_640.jpg',
      'маргарита': '371ca16f9a887e4a7d2c90c17ebaab77.jpg',
      'пепперони': '584006059d5b9ba8c3b3560055c37a90.jpg',
      'вегетарианская пицца': '7072a7cb747d63a72f7c96c571bbb9c2.jpg',
      // Добавьте другие изображения для пиццы
    };
  
    const burgerImages = {
      'бургер': 'burger-3047550_640.jpg',
      'чизбургер': '234592f8ab997369dd2bd20ad04e61df.jpg',
      'гриль-бургер': '6516320288347632e65f2ce5b0627810.jpg',
      // Добавьте другие изображения для бургеров
    };
  
    const drinkImages = {
      
      'фруктовый сок': 'sok.jpg',
      'чай': 'chai.jpg',
      'какао': 'kakao.jpg',
      'молочный коктейль': 'nap.jpg'
      
      
      // Добавьте другие изображения для напитков
    };
  
    if (category.toLowerCase() === 'pizza') {
      return pizzaImages[dishName.toLowerCase()] || 'food-3337656_640.jpg';
    } else if (category.toLowerCase() === 'burger') {
      return burgerImages[dishName.toLowerCase()] || 'food-3337656_640.jpg';
    } else if (category.toLowerCase() === 'drinks') {
      return drinkImages[dishName.toLowerCase()] || 'kokteil.jpg';
    } else {
      return 'kokteil.jpg';
    }
  }
  
  function getDescription(category) {
    if (category.toLowerCase() === 'pizza') {
      return 'Вкусная пицца с разнообразными начинками.';
    } else if (category.toLowerCase() === 'burger') {
      return 'Сочный бургер с аппетитной котлетой и овощами.';
    } else if (category.toLowerCase() === 'drinks') {
      return 'Освежающий напиток для настоящего удовольствия.';
    } else {
      return 'Описание по умолчанию';
    }
  }
  

  // Вызываем предварительную загрузку изображений для обоих категорий
  preloadImages(pizzaImages);
  preloadImages(burgerImages);
  preloadImages(drinkImages);



  
  // Остальной код без изменений

  // ... (getDescription, dishes и т.д.)


