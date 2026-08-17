/* ==========================================================================
   База даних: 15 походів у Карпати (2024–2026)
   Координати, профілі висот, реакції та детальні маршрути
   ========================================================================== */

window.TRIPS_DATA = [
  /* --- 2024 РІК (5 походів) --- */
  {
    id: "trip-2024-1",
    year: 2024,
    season: "Травень 2024",
    title: "Чорногірський траверс: Петрос та Говерла",
    region: "Чорногора",
    regionKey: "chornohora",
    difficulty: "hard", // easy, medium, hard, extreme
    difficultyLabel: "Складний",
    distanceKm: 34,
    elevationGainM: 1850,
    durationDays: 3,
    coordinates: [48.1602, 24.5003], // [lat, lng] - Говерла / Петрос
    elevationProfile: [
      { point: "с. Кваси", alt: 560 },
      { point: "пол. Менчул", alt: 1250 },
      { point: "г. Петрос", alt: 2020 },
      { point: "пол. Скопеська", alt: 1550 },
      { point: "г. Говерла", alt: 2061 },
      { point: "т/б Заросляк", alt: 1330 }
    ],
    reactions: { fire: 24, mountain: 31, tent: 18, snow: 7 },
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    route: "с. Кваси — пол. Менчул — г. Петрос (2020м) — пол. Скопеська — г. Говерла (2061м) — т/б Заросляк",
    poi: ["г. Петрос (2020м)", "г. Говерла (2061м)", "Полонина Менчул", "Джерело під Петросом"],
    shortDesc: "Перший великий триденний похід у сезоні. Стрімкий підйом на Петрос по сніжниках та штормовий вітер на Говерлі.",
    fullStory: "Похід розпочався з легендарного джерела у с. Кваси. Підйом на Петрос у травні був з викликом через залишки фірну на північному схилі. Ночівля на полонині Скопеська під зоряним небом та світанок на найвищій вершині України."
  },
  {
    id: "trip-2024-2",
    year: 2024,
    season: "Липень 2024",
    title: "Кам'яні Ґорґани: Хом'як та Синяк",
    region: "Ґорґани",
    regionKey: "gorgany",
    difficulty: "medium",
    difficultyLabel: "Середній",
    distanceKm: 21,
    elevationGainM: 1220,
    durationDays: 2,
    coordinates: [48.3703, 24.5001], // г. Хом'як
    elevationProfile: [
      { point: "с. Татарів", alt: 680 },
      { point: "пол. Хом'яків", alt: 1300 },
      { point: "г. Хом'як", alt: 1542 },
      { point: "г. Синяк", alt: 1665 },
      { point: "пол. Щівка", alt: 1200 },
      { point: "с. Поляниця", alt: 910 }
    ],
    reactions: { fire: 19, mountain: 28, tent: 14, snow: 2 },
    coverImage: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Татарів — пол. Хом'яків — г. Хом'як (1542м) — г. Синяк (1665м) — пол. Щівка — с. Поляниця",
    poi: ["г. Хом'як", "г. Синяк", "Цекоти (куруми)", "Полонина Хом'яків"],
    shortDesc: "Справжній ґорґанський курумник. Стрибки по велетенських зелених брилах цекотів та неймовірна панорама Карпат.",
    fullStory: "Класичний перехід через живий кам'яний розсип Ґорґан. Ніч у наметі на полонині Хом'яків під шум смерек та неймовірні сирні дегустації у місцевих пастухів."
  },
  {
    id: "trip-2024-3",
    year: 2024,
    season: "Серпень 2024",
    title: "Чорничні полонини Боржави",
    region: "Боржава",
    regionKey: "borzhava",
    difficulty: "easy",
    difficultyLabel: "Легкий",
    distanceKm: 28,
    elevationGainM: 950,
    durationDays: 2,
    coordinates: [48.6508, 23.2386], // Великий Верх / Боржава
    elevationProfile: [
      { point: "смт Воловець", alt: 480 },
      { point: "г. Темнатик", alt: 1343 },
      { point: "г. Плай", alt: 1323 },
      { point: "г. Великий Верх", alt: 1598 },
      { point: "водоспад Шипіт", alt: 740 }
    ],
    reactions: { fire: 22, mountain: 16, tent: 25, snow: 1 },
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "смт Воловець — г. Темнатик — г. Плай — г. Великий Верх (1598м) — водоспад Шипіт",
    poi: ["Водоспад Шипіт", "г. Великий Верх", "Стара метеостанція", "Чорничні поля"],
    shortDesc: "Оксамитові хребти полонини Боржава, мільйони зірок і кілограми свіжої лісової чорниці.",
    fullStory: "Затишний серпневий вихід на полонину Боржава. Пологий хребет дозволяє насолоджуватися безкінечним горизонтом на 360 градусів, фінішуючи біля шуму водоспаду Шипіт."
  },
  {
    id: "trip-2024-4",
    year: 2024,
    season: "Вересень 2024",
    title: "Гуцульські Альпи: Мармароси",
    region: "Мармароси",
    regionKey: "marmarosy",
    difficulty: "extreme",
    difficultyLabel: "Екстремальний",
    distanceKm: 46,
    elevationGainM: 2300,
    durationDays: 4,
    coordinates: [47.9238, 24.3276], // Піп Іван Мармароський
    elevationProfile: [
      { point: "с. Ділове", alt: 350 },
      { point: "р. Білий", alt: 600 },
      { point: "пол. Лисича", alt: 1480 },
      { point: "Піп Іван Мармароський", alt: 1936 },
      { point: "г. Головаче", alt: 1540 },
      { point: "с. Костилівка", alt: 420 }
    ],
    reactions: { fire: 35, mountain: 42, tent: 20, snow: 8 },
    coverImage: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Ділове — р. Білий — пол. Лисича — г. Піп Іван Мармароський (1936м) — г. Головаче — с. Костилівка",
    poi: ["г. Піп Іван Мармароський", "Полонина Лисича", "Прикордонні стовпчики", "Скелясті кари"],
    shortDesc: "Гострі скелі, урвища та відчуття справжніх Альп прямо на кордоні з Румунією.",
    fullStory: "Мармароси різко відрізняються від решти Карпат своїми крутими скельними формами. Похід потребував спеціального прикордонного дозволу, проте пейзажі вранішнього цирку перевершили всі очікування."
  },
  {
    id: "trip-2024-5",
    year: 2024,
    season: "Жовтень 2024",
    title: "Золота осінь Свидовця",
    region: "Свидовець",
    regionKey: "svydovets",
    difficulty: "medium",
    difficultyLabel: "Середній",
    distanceKm: 32,
    elevationGainM: 1400,
    durationDays: 2,
    coordinates: [48.2215, 24.2324], // г. Близниця
    elevationProfile: [
      { point: "смт Ясіня", alt: 650 },
      { point: "ур. Драгобрат", alt: 1400 },
      { point: "г. Близниця", alt: 1881 },
      { point: "оз. Івор", alt: 1600 },
      { point: "хр. Свидовець", alt: 1700 },
      { point: "с. Кваси", alt: 560 }
    ],
    reactions: { fire: 21, mountain: 26, tent: 19, snow: 5 },
    coverImage: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "смт Ясіня — ур. Драгобрат — г. Близниця (1881м) — оз. Івор — хр. Свидовець — с. Кваси",
    poi: ["г. Близниця", "Озеро Івор (Драгобратське)", "Скелясті Жандарми", "Букові ліси"],
    shortDesc: "Осінні багряні кольори, дзеркальні льодовикові озера та перший іній на наметах.",
    fullStory: "Золотий жовтень розфарбував схили Свидовця у мідні тони. Нічна температура впала до -2°C, але ранковий підйом на Близницю нагородив неймовірною панорамою Чорногори."
  },

  /* --- 2025 РІК (5 походів) --- */
  {
    id: "trip-2025-1",
    year: 2025,
    season: "Травень 2025",
    title: "Дика Сивуля: Східні Ґорґани",
    region: "Ґорґани",
    regionKey: "gorgany",
    difficulty: "hard",
    difficultyLabel: "Складний",
    distanceKm: 38,
    elevationGainM: 2100,
    durationDays: 3,
    coordinates: [48.5492, 24.1247], // Велика Сивуля
    elevationProfile: [
      { point: "с. Гута", alt: 600 },
      { point: "р. Лопушна", alt: 850 },
      { point: "пол. Рущина", alt: 1420 },
      { point: "Велика Сивуля", alt: 1836 },
      { point: "Мала Сивуля", alt: 1818 },
      { point: "с. Бистриця", alt: 750 }
    ],
    reactions: { fire: 29, mountain: 37, tent: 22, snow: 4 },
    coverImage: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Гута — р. Лопушна — пол. Рущина — г. Велика Сивуля (1836м) — г. Мала Сивуля (1818м) — с. Бистриця",
    poi: ["Велика Сивуля", "Урочище Пекло", "Витік річки Бистриця", "Полонина Рущина"],
    shortDesc: "Найвищі вершини кам'янистих Ґорґан. Фортифікаційні окопи Першої світової та суворий жереп.",
    fullStory: "Експедиція у серце найдикіших гір Карпат. Проходження гострого кам'яного гребеня Сивулі вимагало максимальної концентрації та надійного зчеплення черевиків."
  },
  {
    id: "trip-2025-2",
    year: 2025,
    season: "Червень 2025",
    title: "Скелясті Шпиці та озеро Бребенескул",
    region: "Чорногора",
    regionKey: "chornohora",
    difficulty: "hard",
    difficultyLabel: "Складний",
    distanceKm: 36,
    elevationGainM: 1900,
    durationDays: 3,
    coordinates: [48.1256, 24.5689], // Шпиці / Бребенескул
    elevationProfile: [
      { point: "с. Бистрець", alt: 720 },
      { point: "пол. Гаджина", alt: 1450 },
      { point: "г. Шпиці", alt: 1863 },
      { point: "г. Ребра", alt: 2001 },
      { point: "оз. Бребенескул", alt: 1801 },
      { point: "г. Гутин Томнатик", alt: 2016 }
    ],
    reactions: { fire: 38, mountain: 45, tent: 26, snow: 3 },
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Бистрець — пол. Гаджина — г. Шпиці (1863м) — г. Ребра (2001м) — оз. Бребенескул — г. Гутин Томнатик",
    poi: ["Скелі Шпиці", "Озеро Бребенескул (1801м)", "Урочище Гаджина", "г. Ребра"],
    shortDesc: "Містичні кам'яні вежі Шпиць та найвисокогірніше озеро України серед величних карпатських амфітеатрів.",
    fullStory: "Гаджина зустріла нас квітучими рододендронами (червоною рутою). Підйом на Шпиці крізь скельні вежі нагадував сцени з фентезі."
  },
  {
    id: "trip-2025-3",
    year: 2025,
    season: "Липень 2025",
    title: "Панорами Костричі та Кукула",
    region: "Чорногора",
    regionKey: "chornohora",
    difficulty: "easy",
    difficultyLabel: "Легкий",
    distanceKm: 24,
    elevationGainM: 850,
    durationDays: 2,
    coordinates: [48.2281, 24.6892], // хр. Кострича
    elevationProfile: [
      { point: "Кривопільський перевал", alt: 970 },
      { point: "хр. Кострича", alt: 1586 },
      { point: "пол. Веснарка", alt: 1320 },
      { point: "смт Ворохта", alt: 750 }
    ],
    reactions: { fire: 17, mountain: 19, tent: 24, snow: 0 },
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "Кривопільський перевал — хр. Кострича (1586м) — пол. Веснарка — смт Ворохта",
    poi: ["Хребет Кострича", "Полонина Веснарка", "Кращий вид на всю Чорногору", "Гуцульська колиба"],
    shortDesc: "Найкраща оглядова точка Карпат. Весь Чорногірський хребет як на долоні від Петроса до Попа Івана.",
    fullStory: "Ідеальний легкий похід для відновлення сил. Смачний карпатський чай на вогнищі з видом на захід сонця над Говерлою."
  },
  {
    id: "trip-2025-4",
    year: 2025,
    season: "Серпень 2025",
    title: "Гринявські полонини та Чивчин",
    region: "Гриняви",
    regionKey: "hryniavy",
    difficulty: "extreme",
    difficultyLabel: "Екстремальний",
    distanceKm: 52,
    elevationGainM: 2400,
    durationDays: 4,
    coordinates: [47.8631, 24.7125], // г. Чивчин
    elevationProfile: [
      { point: "с. Пробійнівка", alt: 710 },
      { point: "хр. Пнів'є", alt: 1580 },
      { point: "г. Масний Присліп", alt: 1587 },
      { point: "г. Чивчин", alt: 1766 },
      { point: "с. Шибене", alt: 840 }
    ],
    reactions: { fire: 28, mountain: 36, tent: 29, snow: 3 },
    coverImage: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Пробійнівка — хр. Пнів'є — г. Масний Присліп — Чивчини — с. Шибене",
    poi: ["г. Чивчин", "Полонина Дуконя", "Кляуза Перкалаб", "Джерела Чорного Черемоша"],
    shortDesc: "Справжня карпатська тайга. Повна автономність, відсутність людей на десятки кілометрів.",
    fullStory: "Чотири дні повної відірваності від цивілізації. Зустріч зі слідами ведмедя, кришталево чисті потічки та безкраї полонини."
  },
  {
    id: "trip-2025-5",
    year: 2025,
    season: "Листопад 2025",
    title: "Передзимовий Піп Іван Чорногірський",
    region: "Чорногора",
    regionKey: "chornohora",
    difficulty: "hard",
    difficultyLabel: "Складний",
    distanceKm: 26,
    elevationGainM: 1600,
    durationDays: 2,
    coordinates: [48.0469, 24.6272], // Піп Іван Чорногірський
    elevationProfile: [
      { point: "с. Дземброня", alt: 810 },
      { point: "Смотрицькі водоспади", alt: 1300 },
      { point: "г. Вухатий Камінь", alt: 1864 },
      { point: "г. Піп Іван", alt: 2028 },
      { point: "с. Шибене", alt: 840 }
    ],
    reactions: { fire: 31, mountain: 40, tent: 17, snow: 21 },
    coverImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Дземброня — Смотрицькі водоспади — г. Вухатий Камінь — г. Піп Іван (2028м) — с. Шибене",
    poi: ["Обсерваторія Білий Слон", "Смотрицькі водоспади", "Скелі Вухатого Каменя", "г. Смотрич"],
    shortDesc: "Перший сніг на кам'яній фортеці «Білий Слон». Шквальний вітер 25 м/с та випробування спорядження на міцність.",
    fullStory: "Листопадовий похід перевірив наше зимове екіпірування. Обсерваторія зустріла обмерзлими стінами та фантастичними хмарними хвилями під ногами."
  },

  /* --- 2026 РІК (5 походів) --- */
  {
    id: "trip-2026-1",
    year: 2026,
    season: "Січень 2026",
    title: "Зимова експедиція: Сніговий Білий Слон",
    region: "Чорногора",
    regionKey: "chornohora",
    difficulty: "extreme",
    difficultyLabel: "Екстремальний",
    distanceKm: 22,
    elevationGainM: 1550,
    durationDays: 2,
    coordinates: [48.0469, 24.6272], // Зимовий Піп Іван
    elevationProfile: [
      { point: "с. Шибене", alt: 840 },
      { point: "оз. Марічейка", alt: 1510 },
      { point: "г. Піп Іван (Білий Слон)", alt: 2028 },
      { point: "ур. Погорілець", alt: 1050 }
    ],
    reactions: { fire: 44, mountain: 53, tent: 15, snow: 58 },
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Шибене — оз. Марічейка — г. Піп Іван (2028м) — ур. Погорілець",
    poi: ["Зимова обсерваторія", "Замерзле озеро Марічейка", "Снігові надуви", "Рятувальний пост"],
    shortDesc: "Справжній зимовий альпінізм у кішках та снігоступах. Мороз -18°C та крижане царство вершини.",
    fullStory: "Новорічний зимовий вихід. Сніг по пояс, видимість 10 метрів, орієнтування суто по GPS треку. Дістатися вершини було справою честі та командного духу."
  },
  {
    id: "trip-2026-2",
    year: 2026,
    season: "Квітень 2026",
    title: "Весняне пробудження Ґорґан: Довбушанка",
    region: "Ґорґани",
    regionKey: "gorgany",
    difficulty: "hard",
    difficultyLabel: "Складний",
    distanceKm: 29,
    elevationGainM: 1750,
    durationDays: 2,
    coordinates: [48.4258, 24.3764], // г. Довбушанка
    elevationProfile: [
      { point: "с. Зелена", alt: 580 },
      { point: "ур. Зубринка", alt: 950 },
      { point: "г. Ведмежик", alt: 1737 },
      { point: "г. Довбушанка", alt: 1754 },
      { point: "с. Зелена", alt: 580 }
    ],
    reactions: { fire: 26, mountain: 33, tent: 16, snow: 12 },
    coverImage: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Зелена — г. Довбушанка (1754м) — г. Ведмежик — ур. Зубринка",
    poi: ["г. Довбушанка", "Заповідні ґорґанські ліси", "Весняні струмки", "г. Ведмежик"],
    shortDesc: "Таємничий масив Довбушанки серед мохів, весняних первоцвітів та стрімких курумників.",
    fullStory: "Квітневий похід подарував контраст: в долинах цвіли крокуси, а на вершині Довбушанки нас чекав щільний туман та міцний весняний наст."
  },
  {
    id: "trip-2026-3",
    year: 2026,
    season: "Травень 2026",
    title: "Льодовикові кари Свидовця: Озеро Догяска",
    region: "Свидовець",
    regionKey: "svydovets",
    difficulty: "medium",
    difficultyLabel: "Середній",
    distanceKm: 34,
    elevationGainM: 1350,
    durationDays: 2,
    coordinates: [48.2721, 24.1611], // Догяска / Герешаска
    elevationProfile: [
      { point: "с. Чорна Тиса", alt: 780 },
      { point: "пол. Крачунєска", alt: 1350 },
      { point: "г. Догяска", alt: 1761 },
      { point: "оз. Герешаска", alt: 1577 },
      { point: "г. Трояска", alt: 1702 },
      { point: "с. Усть-Чорна", alt: 530 }
    ],
    reactions: { fire: 27, mountain: 31, tent: 25, snow: 4 },
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Чорна Тиса — г. Догяска (1761м) — оз. Герешаска — г. Трояска — с. Усть-Чорна",
    poi: ["Озеро Герешаска (Догяска)", "г. Трояска", "Витік Чорної Тиси", "Полонина Крачунєска"],
    shortDesc: "Кришталеве високогірне озеро прямо під прямовисними скельними стінами Свидовця.",
    fullStory: "Неймовірна травнева зелень полонин та прохолодна вода високогірного озера, в якому відбивається блакитне карпатське небо."
  },
  {
    id: "trip-2026-4",
    year: 2026,
    season: "Червень 2026",
    title: "Хребет Пішконя та озеро Синевир",
    region: "Пішконя",
    regionKey: "pishkonya",
    difficulty: "medium",
    difficultyLabel: "Середній",
    distanceKm: 30,
    elevationGainM: 1450,
    durationDays: 2,
    coordinates: [48.5147, 23.7082], // г. Негровець / Пішконя
    elevationProfile: [
      { point: "с. Синевирська Поляна", alt: 800 },
      { point: "оз. Синевир", alt: 989 },
      { point: "г. Негровець", alt: 1709 },
      { point: "г. Горб", alt: 1687 },
      { point: "г. Барвінок", alt: 1461 },
      { point: "с. Колочава", alt: 630 }
    ],
    reactions: { fire: 25, mountain: 30, tent: 22, snow: 1 },
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Синевирська Поляна — г. Негровець (1709м) — г. Горб — г. Барвінок — с. Колочава",
    poi: ["г. Негровець", "г. Ясновець", "Озеро Синевир", "Музейне село Колочава"],
    shortDesc: "Величний хребет Пішконя з видами на Національний парк Синевир та автентичні карпатські колиби.",
    fullStory: "Один із наймальовничіших панорамних маршрутів Закарпаття. Захід сонця над Негровцем закарбувався в пам'яті на все життя."
  },
  {
    id: "trip-2026-5",
    year: 2026,
    season: "Серпень 2026",
    title: "Гранд-Траверс Мармароського Кордону",
    region: "Мармароси",
    regionKey: "marmarosy",
    difficulty: "extreme",
    difficultyLabel: "Екстремальний",
    distanceKm: 58,
    elevationGainM: 2900,
    durationDays: 4,
    coordinates: [47.9351, 24.4678], // Неніска Велика / Стіг
    elevationProfile: [
      { point: "с. Ділове", alt: 350 },
      { point: "Піп Іван Мармароський", alt: 1936 },
      { point: "г. Неніска Велика", alt: 1815 },
      { point: "пол. Щаул", alt: 1420 },
      { point: "г. Стіг", alt: 1650 },
      { point: "с. Шибене", alt: 840 }
    ],
    reactions: { fire: 56, mountain: 64, tent: 38, snow: 9 },
    coverImage: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    videoEmbed: "",
    route: "с. Ділове — г. Піп Іван Мармароський — г. Неніска Велика (1815м) — г. Стіг — с. Шибене",
    poi: ["г. Неніска Велика (Міка-Маре)", "г. Стіг (стик кордонів)", "Мармароський хребет", "Полонина Щаул"],
    shortDesc: "Фінальний 15-й грандіозний вихід. Повний траверс уздовж українсько-румунського кордону.",
    fullStory: "Кульмінація трирічного гірського шляху (2024–2026). 58 кілометрів шалених перепадів, незабутніх світанків над хмарами та відчуття абсолютної свободи Карпат."
  }
];
