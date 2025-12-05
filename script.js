const articles = [
    {
        id: 1,
        image: "photos/1.jpg",
        title: "Айкидо — это про полёты",
        excerpt: "Девочка-акселерат буквально поняла команду тренера “Раскидай этих мелких” и полчаса кидалась мальчиками в спортзале комплекса “Мамонтенок”.",
        category: "Спорт",
        icon: "🥋",
        color: "#f97316"
    },
    {
        id: 2,
        image: "photos/2.jpg",
        title: "За деньги — нет. На счет всего остального — можно договориться",
        excerpt: "В прошлую пятницу заместитель директора ООО “ГМХ” связалась с главными поставщиками “Годного контента” и предложила им основной производственный продукт — “Дурьирадость” на обмен. Представители согласились при условии, если в обмен будет добавлен инновационный препарат “Слабоум”. Обе стороны разошлись, довольные друг другом.",
        category: "Переговоры",
        icon: "🤝",
        color: "#a855f7"
    },
    {
        id: 3,
        image: "photos/3.jpg",
        title: "Рыжий ужас снова требует",
        excerpt: "о словам очевидцев, свирепый маньяк вновь вышел на свое проклятое мастерство. Вот уже который день подряд в службу спасения поступают звонки с жалобами и просьбами о помощи, ведь теперь по вечерам на улице вас может подстерегать эта безжалостная женщина и требовать сделать ей чай. Убедительная просьба для граждан оставаться дома, а, если вы все-таки выходите, не берите с собой чайные пакетики. И, если вы вдруг услышите вопрос “Есть чай? А если найду?” то просто бегите не оглядываясь.",
        category: "Жёлтая пресса",
        icon: "📰",
        color: "#eab308"
    },
    {
        id: 4,
        image: "photos/44.jpg",
        title: "Жрать или не жрать, вот в чем вопрос…",
        excerpt: "“Жрать!” — диетологи Анастасия и Антонина Сицилицины утверждают, что плотные яства благоприятно влияют на весь ваш организм и психологическое состояние. Благодаря технологии “Жрать” ваша кожа будет гладкой, настроение благосклонным, а жизнь наполнена красками.",
        category: "Высокая кухня",
        icon: "🥗",
        color: "#ec4899"
    },
    {
        id: 5,
        image: "photos/11.jpg",
        title: "Мое тотемное животное — львица.",
        excerpt: "Сексолог и коуч Сицилицина Анастасия Юрьевна поделилась секретами своей запредельной сексуальности: — Просто нужно помнить, что каждая женщина — это львица! Нужно четко знать, когда выпускать коготки, когда ласково мурчать, а когда прогибать спинку. И мальчик поплыл, мальчик попал…",
        category: "Сексология",
        icon: "💋",
        color: "#dc2626"
    },
    {
        id: 6,
        image: "photos/12.jpg",
        title: "Мальчик, водочки нам принеси.",
        excerpt: "Известную звезду телеэкрана удалось заснять в одном из отелей на Ибице. Никаких эксцессов или скандалов, однако надежный источник сообщил, что один из бассейнов отеля наполнили вместо воды - водкой, так как дива готовится к гостям из России.",
        category: "Шоубиз",
        icon: "🎬",
        color: "#7c3aed"
    },
    {
        id: 7,
        image: "photos/13.jpg",
        title: "А на море белый песок.",
        excerpt: "А на белом песке аквапарк. А в аквапарке прошла масштабная фотосессия с участием звезд Playboy. Особое внимание уделялось восходящее звезде - Сицилициной Анастасии. Она буквально приковывала все внимание зрителей и съемочной группы к себе. Сам Хью Хефнер дал комментарий, что новый \"кролик\" появится и на новогоднем календаре.",
        category: "Новости",
        icon: "💬",
        color: "#b45309"
    },
    {
        id: 8,
        image: "photos/14.jpg",
        title: "НЕЛЬЗЯ ЖАЛЕТЬ!",
        excerpt: "В статье подробно рассмотрим такое понятие, как брак. Почему женщина считается хранительницей очага, а мужчина добытчиком и защитником. Для упрощения эксперимента мы возьмем для примера супружескую пару Кавеленых-Сицилициных, которые наглядно доказывают, что в браке главное уважение, любовь и взаимопонимание, а не страх, абьюз и буллинг.",
        category: "Отношения",
        icon: "👥",
        color: "#6d28d9"
    },
    {
        id: 9,
        image: "photos/15.jpg",
        title: "“От милашки к стерве” — нашумевший бестселлер!",
        excerpt: "В этом интервью автор книги “От милашки к стерве” Анастасия Сицилицина расскажет, что именно побудило ее сесть и написать свою историю, а также ответит на многие вопросы своих читателей. Также Анастасия поделилась, что не собирается останавливаться на одной книге, и у нее уже есть черновые варианты книг “Он не дебил, просто особенный человек”, “Рабочие моменты или вертела я его Страдивари на Каприс №24 ля минор” и “У каждой женщины должна быть тупая подруга. Мне повезло вдвойне”.",
        category: "Литература",
        icon: "📚",
        color: "#d97706"
    },

        {
        id: 10,
        image: "photos/20.jpg",
        title: "Вечер удался на славу!",
        excerpt: "Минздрав предупреждал, но всем плевать, потому что день рождения бывает только раз в году! Анастасия Сицилицина отметила его с размахом, начав дегустировать вина разной направленности и остановившись на моменте, когда перестала чувствовать нотки дуба, винограда урожая 70 года с берега Сицилии, шафрана и сладковатое послевкусие, а начала чувствовать головокружение и непреодолимое желание потанцевать под “Императрицу” Аллегровой.",
        category: "дегустация",
        icon: "🍷",
        color: "#d92206ff"
    },

        {
        id: 11,
        image: "photos/21.jpg",
        title: "Утро удалось ужасным!",
        excerpt: "“Еще никогда ягода не была ко мне так жестока” — именно этой фразой Анастасия Сицилицина встретила нашего корреспондента. К сожалению, более менее складного диалога дальше не получилось, так как у дивы обнаружились серьезные провалы в памяти, полное не состояние принять вертикальное положение, неприятный привкус во рту и в целом отсутствие желания жить дальше. Поэтому наш корреспондент спешно проводить спасательную операцию и в срочном порядке выехал в ближайший магазин “за минералочкой”.",
        category: "Интервью",
        icon: "🎤",
        color: "#d9c706ff"
    },

        {
        id: 12,
        image: "photos/22.jpg",
        title: "День удался в шоковом состоянии!",
        excerpt: "Наш корреспондент оказал первую помощь местной диве Анастасии Сицилициной, и привез гуманитарную помощь в виде минералочки и таблетки аспирина. А также предоставил материалы прошедшего вечера, что и позволило запечатлеть непередаваемые эмоции счастья и восторга на лице Анастасии Юрьевной. Однако съемочной группе пришлось срочно сворачиваться и покидать место съемок, под предлогом, что гостям не гоже долго задерживаться. И поездка корреспондента в травмпункт никак с этим не связана.",
        category: "Шок-контент",
        icon: "😱",
        color: "#068cd9ff"
    },

    {
        id: 13,
        type: "ad",
        image: "photos/ad1.jpg",
        color: "#dcf3f7ff"
    },

        {
        id: 14,
        type: "ad",
        image: "photos/ad2.jpg",
        color: "#7c22c5ff"
    },

        {
        id: 15,
        type: "ad",
        image: "photos/ad3.jpg",
        color: "#c55322ff"
    },

    {
        id: 16,
        type: "video",
        video: "photos/video.mp4",
        preview: "photos/video-preview.jpg"
    },

    {
        id: 17,
        type: "announcement",
        image: "photos/7.jpg",
        title: "Продам гараж.",
        text: "Фотки гаража нет, но есть фотка с машиной. А значит и гараж есть. Гараж хороший. Приезжайте, смотрите. Возможен торг.",
    },

    {
        id: 18,
        type: "announcement",
        image: "photos/4.jpg",
        title: "Профессиональный друг-унижатель.",
        text: "Если вы мягкая булочка, которая не может постоять за себя, то я — ваше решение. В стоимость входят следующие услуги:<br> - Посылать нахер<br> - Смотреть, как на говно<br> - Приподнять бровь так, чтобы собеседник умер<br> - Попросить открыть вторую кассу<br><br> Для постоянных клиентов также предоставляется услуга \"Твоя мамаша\".",

    },

        {
        id: 19,
        type: "announcement",
        image: "photos/5.jpg",
        title: "Все бабы, как бабы, а я - королева.",
        text: "Коуч по повышению самооценки. Девочки, успеваем записаться! Число мест ограничено. Три месяца и вы почувствуете себя королевами. Научу правильно смотреть, манипулировать, повелевать одним жестом, а также использовать военные стратегии ведения боя, основанные на римских построениях с адаптацией на современную действительность. И заплетать королевские косы.",
    },

];

document.addEventListener('DOMContentLoaded', () => {

    // ======= Глобальный popup для рекламы =======
    const adPopup = document.createElement('div');
    adPopup.className = 'ad-popup';
    adPopup.innerHTML = `<img class="ad-popup-img" src="" alt="Реклама">`;
    document.body.appendChild(adPopup);
    const adPopupImg = adPopup.querySelector('.ad-popup-img');

    // ======= Функция рендера карточек =======
    function renderArticles() {
        articles.forEach(item => {
            const card = document.createElement('div');
            let targetGrid;

            if (item.id <= 12) targetGrid = document.getElementById('bestGrid');
            else if (item.id <= 16) targetGrid = document.getElementById('adsGrid');
            else targetGrid = document.getElementById('announcementsGrid');

            // Статья
            if (!item.type || item.type === 'article') {
                card.className = 'article-card';
                card.style.setProperty('--card-color', item.color);
                card.innerHTML = `
                    <div class="article-header">
                        <span class="article-category">${item.category}</span>
                        <div class="article-icon">${item.icon}</div>
                    </div>
                    <div class="article-body">
                        <img class="article-thumb" src="${item.image}" alt="${item.title}">
                        <h4 class="article-title">${item.title}</h4>
                    </div>
                    <div class="article-footer">
                        <p class="article-excerpt">${item.excerpt}</p>
                    </div>
                `;
            }

            // Реклама
            if (item.type === 'ad') {
                card.className = 'ad-card';
                card.style.setProperty('--card-color', item.color);
                card.innerHTML = `<img class="simple-thumb" src="${item.image}" alt="Реклама">`;
            }

            // Видео
            if (item.type === 'video') {
                card.className = 'video-card full-width-video';
    
    // Предположим, что у тебя есть item.preview — это картинка-превью
                    card.innerHTML = `
                    <div class="video-wrapper">
                    <img src="${item.preview}" class="video-preview">
                    <div class="play-button"></div>
                    </div>
                    `;

            const wrapper = card.querySelector('.video-wrapper');
                wrapper.addEventListener('click', () => {
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = true;
                video.className = 'video-block';
                video.style.width = '100%';
                video.innerHTML = `<source src="${item.video}" type="video/mp4">`;
                card.innerHTML = '';
                card.appendChild(video);
    });
}

            // Объявление
            if (item.type === 'announcement') {
                card.className = 'announcement-block';
                card.innerHTML = `
                    <img class="announcement-thumb" src="${item.image}" alt="${item.title}">
                    <h4 class="announcement-title">${item.title}</h4>
                    <div class="announcement-text">${item.text}</div>
                `;
            }

            targetGrid.appendChild(card);

            // ======= Обработчик рекламы =======
            if (item.type === 'ad') {
                const thumb = card.querySelector('.simple-thumb');

                function showPopup() {
                    adPopupImg.src = thumb.src;
                    adPopup.style.display = 'block';

                    const rect = thumb.getBoundingClientRect();
                    const popupRect = adPopup.getBoundingClientRect();
                    let left = rect.right + 8;
                    let top = rect.top + (rect.height / 2) - (popupRect.height / 2);

                    // проверка границ экрана
                    if (left + popupRect.width > window.innerWidth) {
                        left = rect.left - popupRect.width - 8;
                    }
                    if (top < 8) top = 8;
                    if (top + popupRect.height > window.innerHeight) top = window.innerHeight - popupRect.height - 8;

                    adPopup.style.left = left + 'px';
                    adPopup.style.top = top + 'px';
                }

                function hidePopup() {
                    adPopup.style.display = 'none';
                }

                thumb.addEventListener('mouseenter', showPopup);
                thumb.addEventListener('mouseleave', hidePopup);
                thumb.addEventListener('touchstart', e => {
                    e.preventDefault();
                    if (adPopup.style.display === 'block') hidePopup();
                    else showPopup();
                });

                window.addEventListener('scroll', () => {
                    if (adPopup.style.display === 'block') showPopup();
                }, { passive: true });
                window.addEventListener('resize', () => {
                    if (adPopup.style.display === 'block') showPopup();
                });
            }
        });
    }

    renderArticles();

    // ======= Попап с вопросами =======
    const questions = [
        "Вам исполнилось 30 или есть 25+?",
        "Вы кудрявый и бородатый индивид или, к сожалению, дружите с таким?",
        "Вы уже пытались продать ваших друзей или в вашем окружении есть ушлая еврейская морда?",
        "Вы душнила или кто-то постоянно забирает ваш кислород?",
        "Вы рыжая и шладкая или хотите расцеловать щечки этой булошки?"
    ];

    let current = 0;
    const overlay = document.getElementById("age-overlay");
    const overlayContent = document.querySelector(".overlay-content");
    const questionText = document.getElementById("question-text");
    const mainSite = document.getElementById("main-site");

    mainSite.classList.add("blur");

    document.getElementById("yes-btn").addEventListener("click", () => {
        overlayContent.classList.add("hide");
        setTimeout(() => {
            current++;
            if (current < questions.length) {
                questionText.innerText = questions[current];
                overlayContent.classList.remove("hide");
            } else {
                overlay.style.display = "none";
                mainSite.classList.remove("blur");
            }
        }, 400);
    });

    document.getElementById("no-btn").addEventListener("click", () => {
        alert("Извините, вы не можете попасть на сайт 😏");
    });

});
