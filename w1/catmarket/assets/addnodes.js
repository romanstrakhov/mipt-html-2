
let container = document.querySelector('section#items');
let item = container.querySelector('.item');
let point = container.querySelector('.clearfix');

let items = {
  "0": {
    "name": "Клаус",
    "category": "Длинношерстные",
    "image": "00000001",
    "rating": 3,
    "price_current": "20 000 ₽",
    "price_old": "",
    "description": "Идея (пафос), следовательно, иллюстрирует архетип, именно об этом комплексе движущих сил писал З.Фрейд в теории сублимации. Комедия просветляет депрессивный кризис. Действительно, априорная бисексуальность возможна. Выявляя устойчивые архетипы на примере художественного творчества, можно сказать, что художественная видимость откровенна."
  },
  "1": {
    "name": "Ольвия",
    "category": "Короткошерстные",
    "image": "00000002",
    "rating": 4,
    "price_current": "25 000 ₽",
    "price_old": "",
    "description": "Пластичность образа, согласно традиционным представлениям, свободна. Идентификация релевантно представляет собой персональный синтез искусств в силу которого смешивает субъективное и объективное, переносит свои внутренние побуждения на реальные связи вещей. Действительно, предмет искусства критично аннигилирует социальный филогенез."
  },
  "2": {
    "name": "Грем",
    "category": "Длинношерстные",
    "image": "00000003",
    "rating": 2,
    "price_current": "15 000 ₽",
    "price_old": "20 000 ₽",
    "description": "Агрессия, согласно традиционным представлениям, возможна. Сознание многопланово использует элитарный структурализм. Стратификация многопланово начинает филосовский архетип. Стимул выстраивает постмодернизм. Акцентуированная личность откровенна. "
  },
  "3": {
    "name": "Скиф Гризли Азор",
    "category": "Короткошерстные породистые",
    "image": "00000004",
    "rating": 4.5,
    "price_current": "60 000 ₽",
    "price_old": "",
    "description": "Художественное восприятие прекрасно заканчивает социометрический эдипов комплекс. Самонаблюдение представляет собой конструктивный стимул. Как было показано выше, идея (пафос) монотонно выбирает потребительский комплекс агрессивности. "
  },
  "4": {
    "name": "Синди",
    "category": "Надменные",
    "image": "00000005",
    "rating": 2.5,
    "price_current": "35 000 ₽",
    "price_old": "40 000 ₽",
    "description": "Целостность интегрирует неизменный механизм эвокации. Гомеостаз неизменяем. Лидерство дает объект. Экспрессионизм интегрирует диахронический подход. Самонаблюдение ненаблюдаемо."
  },
  "5": {
    "name": "Земби",
    "category": "Длинношерстные",
    "image": "00000006",
    "rating": 4.0,
    "price_current": "50 000 ₽",
    "price_old": "",
    "description": "Базовый тип личности, как бы это ни казалось парадоксальным, продолжает этикет. Весьма существенно следующее: искусство использует комплекс априорной бисексуальности. Снижение, в представлении Морено, заканчивает меланхолик. "
  },
  "6": {
    "name": "Норд Штраус",
    "category": "Длинношерстные",
    "image": "00000007",
    "rating": 3.0,
    "price_current": "50 000 ₽",
    "price_old": "",
    "description": "Действие просветляет биографический метод. Здесь автор сталкивает два таких достаточно далёких друг от друга явления как психоанализ абсурдно выстраивает катарсис, также это подчеркивается в труде Дж.Морено."
  },
  "7": {
    "name": "Скарлетт Дина фон Айра",
    "category": "Породистые",
    "image": "00000008",
    "rating": 4.5,
    "price_current": "30 000 ₽",
    "price_old": "50 000 ₽",
    "description": "Познавательная сфера, согласно традиционным представлениям, откровенна."
  },
  "8": {
    "name": "Винди Вир Вульф",
    "category": "Странные",
    "image": "00000009",
    "rating": 4,
    "price_current": "25 000 ₽",
    "price_old": "",
    "description": "Композиция дает гендер. Скиннер выдвинул концепцию 'оперантного', подкрепляемого научения, в которой художественное восприятие иллюстрирует фарс. Добавлю, что аутотренинг отталкивает принцип артистизма. "
  },
  "9": {
    "name": "Снежана Долли Айрис",
    "category": "Пушистые",
    "image": "00000010",
    "rating": 3.5,
    "price_current": "14 000 ₽",
    "price_old": "20 000 ₽",
    "description": "Интеллект, в первом приближении, интуитивно понятен. Прекрасное дает индивидуальный онтогенез речи. Эстетика вероятна. Цвет аккумулирует код. Мышление, по определению, заметно притягивает возрастной интеллект."
  }
}

for (i = 0; i < 10; i++) {
  let instance = item.cloneNode(true);
  if (items[i]) {
    if (items[i]['image']) {
      instance.querySelector('.item__image > img').setAttribute('src', 'cats/' + items[i]['image']+'.jpg')
    }
    instance.querySelector('.item__name > a').innerHTML = items[i]['name'];
    instance.querySelector('.item__category').innerHTML = items[i]['category'];
    instance.querySelector('.item__price_current').innerHTML = items[i]['price_current'];
    instance.querySelector('.item__price_old').innerHTML = items[i]['price_old'];
    instance.querySelector('.item__description').innerHTML = items[i]['description']; 
    
    let rating = Math.round(2 * Number(items[i]['rating']));
    let ratingdiv = instance.querySelector('.item__rating');
    let ratinglabels = ratingdiv.querySelectorAll('label');
    let ratinginputs = ratingdiv.querySelectorAll('input');

    ratinglabels.forEach((e)=>{
      e.setAttribute('for',  e.getAttribute('for').replace('num', i+1));
    });

    ratinginputs.forEach((e)=>{
      e.id = e.id.replace('num', i+1);
      e.setAttribute('name',  e.getAttribute('name').replace('num', i+1));
      if (Number(items[i]['rating']) === Number(e.getAttribute('value'))) {
        e.setAttribute('checked','');
      }
    });
  }
  
  container.insertBefore(instance, point);
}

item.classList.add('hidden');