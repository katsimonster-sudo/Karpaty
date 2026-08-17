/* ==========================================================================
   База даних: Спорядження для карпатських походів
   ========================================================================== */

window.GEAR_DATA = [
  /* 1. БІВАК ТА НАМЕТИ */
  {
    id: "gear-1",
    category: "shelter",
    categoryLabel: "Бівак та намети",
    name: "Намет Hubba Hubba NX 2",
    brand: "MSR",
    weightGrams: 1720,
    status: "owned", // owned (у рюкзаку) | planned (у планах)
    rating: 5,
    description: "Двомісний ультралегкий намет із двома входами та просторими тамбурами. Перевірений штормовими вітрами на Чорногорі.",
    verdict: "Витримав нічну зливу на Скопеській без жодної краплі всередині. Справжній золотий стандарт.",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gear-2",
    category: "shelter",
    categoryLabel: "Бівак та намети",
    name: "Спальник Helium 400 Down",
    brand: "Mountain Equipment",
    weightGrams: 855,
    status: "owned",
    rating: 5,
    description: "Пуховий спальник на комфорт -3°C (ліміт -9°C). Наповнювач 700+ FP качиний пух з водовідштовхувальною обробкою.",
    verdict: "Ідеальний для весни, літа та ранньої осені в Карпатах. Дуже компактний у компресійнику.",
    image: "https://images.unsplash.com/photo-1525811902-f2342640856e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gear-3",
    category: "shelter",
    categoryLabel: "Бівак та намети",
    name: "Килимок NeoAir XTherm NXT",
    brand: "Therm-a-Rest",
    weightGrams: 439,
    status: "planned",
    rating: 5,
    description: "Найтепліший надувний килимок на ринку (R-Value 7.3). Товщина 7.6 см, що забезпечує королівський сон на мерзлому ґрунті.",
    verdict: "У планах для зимових виходів 2026/2027 року на Піп Іван та зимову Сивулю.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80"
  },

  /* 2. ОДЯГ ТА ВЗУТТЯ */
  {
    id: "gear-4",
    category: "clothing",
    categoryLabel: "Одяг та взуття",
    name: "Черевики Tibet GTX",
    brand: "Lowa",
    weightGrams: 1800,
    status: "owned",
    rating: 5,
    description: "Важкі шкіряні трекінгові черевики з мембраною Gore-Tex та жорсткою підошвою Vibram під важкий наплічник і кам'янисті Ґорґани.",
    verdict: "Пройшли всі курумники Сивулі та Довбушанки без жодного натяку на пробиття чи ковзання.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gear-5",
    category: "clothing",
    categoryLabel: "Одяг та взуття",
    name: "Штормова куртка Beta AR GTX Pro",
    brand: "Arc'teryx",
    weightGrams: 455,
    status: "owned",
    rating: 5,
    description: "Мембранна куртка з 3-шарового матеріалу GORE-TEX Pro Most Rugged. Повний захист від карпатського горизонтального дощу та мокрого снігу.",
    verdict: "Рятує життя, коли на хребті починається справжній карпатський армагеддон.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gear-6",
    category: "clothing",
    categoryLabel: "Одяг та взуття",
    name: "Пуховий светр Ghost Whisperer/2",
    brand: "Mountain Hardwear",
    weightGrams: 249,
    status: "planned",
    rating: 5,
    description: "Ультралегка пухова куртка 800-fill з вагою менше чверті кілограма. Максимальне тепло на стоянках.",
    verdict: "Планую придбати для оптимізації ваги рюкзака на швидких радіалках.",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=600&q=80"
  },

  /* 3. КУХНЯ ТА ВОДА */
  {
    id: "gear-7",
    category: "cooking",
    categoryLabel: "Кулінарія та вода",
    name: "Пальник WindBurner 1.0L",
    brand: "MSR",
    weightGrams: 430,
    status: "owned",
    rating: 5,
    description: "Інтегрована система приготування їжі з радіатором та вітрозахистом. Закип'ячує 1 літр води навіть при штормовому вітрі.",
    verdict: "Жодного разу не згас на хребтах. Гарячий чай готовий за 3.5 хвилини в будь-яку погоду.",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gear-8",
    category: "cooking",
    categoryLabel: "Кулінарія та вода",
    name: "Фільтр для води BeFree 1.0L",
    brand: "Katadyn",
    weightGrams: 63,
    status: "owned",
    rating: 4,
    description: "М'яка фляга з мембранним мікрофільтром (0.1 мікрон). Очищає воду з будь-якого карпатського потічка зі швидкістю 2 л/хв.",
    verdict: "Легкий та миттєвий у використанні. Економить кілограми води у рюкзаку.",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80"
  },

  /* 4. ЕЛЕКТРОНІКА ТА НАВІГАЦІЯ */
  {
    id: "gear-9",
    category: "electronics",
    categoryLabel: "Електроніка та навігація",
    name: "Навігатор inReach Mini 2",
    brand: "Garmin",
    weightGrams: 100,
    status: "owned",
    rating: 5,
    description: "Супутниковий комунікатор із кнопкою SOS через мережу Iridium та функцією двостороннього обміну повідомленнями без мобільного зв'язку.",
    verdict: "Спокій для рідних і надійний зв'язок у глухих куточках Чивчинів та Мармаросів.",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gear-10",
    category: "electronics",
    categoryLabel: "Електроніка та навігація",
    name: "Налобний ліхтар Actik Core",
    brand: "Petzl",
    weightGrams: 88,
    status: "owned",
    rating: 5,
    description: "Потужність 450 люменів, акумуляторна батарея CORE з зарядкою від micro-USB або звичайні батарейки AAA. Червоне світло для намету.",
    verdict: "Нічні сходження на Петрос та вечірнє облаштування табору завжди з яскравим променем.",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=600&q=80"
  },

  /* 5. БЕЗПЕКА ТА АПТЕЧКА */
  {
    id: "gear-11",
    category: "safety",
    categoryLabel: "Безпека та аптечка",
    name: "Групова екстрена аптечка",
    brand: "Custom Carpathian Kit",
    weightGrams: 320,
    status: "owned",
    rating: 5,
    description: "Турнікет CAT Gen 7, гемостатичний бинт, знеболювальні, сорбенти, еластичний бинт, антигістамінні та армований скотч для ремонту.",
    verdict: "Обов'язковий елемент безпеки в кожному виході з 2024 року. Сподіваюсь ніколи не використати на повну.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gear-12",
    category: "safety",
    categoryLabel: "Безпека та аптечка",
    name: "Снігоступи MSR Lightning Ascent",
    brand: "MSR",
    weightGrams: 1840,
    status: "planned",
    rating: 5,
    description: "Агресивні рамні снігоступи з компенсаторами підйому під п'яту для крутих обледенілих схилів зимових Карпат.",
    verdict: "Запланована покупка на зимовий сезон 2026/2027 для легкого пересування цілиною.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=80"
  }
];
