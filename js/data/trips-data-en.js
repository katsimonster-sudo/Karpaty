/* ==========================================================================
   Database translation helper: Carpathian trips in-place English translation
   ========================================================================== */

(function() {
  if (!window.TRIPS_DATA) return;

  const translations = {
    "trip-2024-1": {
      season: "May 2–6, 2024",
      title: "Trip #1: Kvasy — Hoverla — Vorokhta",
      region: "Chornohora",
      difficultyLabel: "Hard (78.4 km)",
      route: "Kvasy — Mt. Hoverla — Vorokhta (area)",
      poi: ["Kvasy", "Mt. Hoverla", "Vorokhta"],
      shortDesc: "5-day spring hike on Chornohora of 78.4 km with +3938 m elevation gain, routing through Kvasy and Lazeshchyna.",
      elevationProfile: [
        { point: "Kvasy (start)", alt: 560 },
        { point: "Mt. Hoverla", alt: 2061 },
        { point: "Vorokhta (finish)", alt: 850 }
      ]
    },
    "trip-2024-2": {
      season: "June 7–12, 2024",
      title: "Trip #2: Yasinya — Hoverla — Vorokhta",
      region: "Chornohora",
      difficultyLabel: "Hard (78.0 km)",
      route: "Yasinya — Mt. Hoverla — Vorokhta",
      poi: ["Yasinya", "Mt. Hoverla", "Vorokhta"],
      shortDesc: "6-day summer hike on Chornohora of 78 km with +3900 m elevation gain, routing through Yasinya and Vorokhta.",
      elevationProfile: [
        { point: "Yasinya (start)", alt: 650 },
        { point: "Mt. Hoverla", alt: 2061 },
        { point: "Vorokhta (finish)", alt: 850 }
      ]
    },
    "trip-2024-3": {
      season: "August 15–18, 2024",
      title: "Trip #3: Tatariv — Khomyak — Synyak — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Medium (45.0 km)",
      route: "Tatariv — Mt. Khomyak — Mt. Synyak — Yasinya",
      poi: ["Tatariv", "Mt. Khomyak", "Mt. Synyak", "Yasinya"],
      shortDesc: "4-day summer hike in Gorgany of 45 km with +2100 m elevation gain, routing through Tatariv and Yasinya.",
      elevationProfile: [
        { point: "Tatariv (start)", alt: 750 },
        { point: "Mt. Khomyak", alt: 1542 },
        { point: "Mt. Synyak", alt: 1665 },
        { point: "Yasinya (finish)", alt: 650 }
      ]
    },
    "trip-2024-4": {
      season: "September 10–14, 2024",
      title: "Trip #4: Kvasy — Dragobrat — Hropa — Yasinya",
      region: "Svydovets",
      difficultyLabel: "Medium (65.0 km)",
      route: "Kvasy — Dragobrat — Mt. Hropa — Yasinya",
      poi: ["Kvasy", "Dragobrat", "Mt. Hropa", "Yasinya"],
      shortDesc: "5-day autumn hike on Svydovets of 65 km with +2900 m elevation gain, routing through Kvasy and Yasinya.",
      elevationProfile: [
        { point: "Kvasy (start)", alt: 560 },
        { point: "Dragobrat resort", alt: 1400 },
        { point: "Mt. Hropa", alt: 1759 },
        { point: "Yasinya (finish)", alt: 650 }
      ]
    },
    "trip-2024-5": {
      season: "October 5–10, 2024",
      title: "Trip #5: Kvasy — Lazeshchyna — Khomyak — Synyak — Yaremche",
      region: "Gorgany",
      difficultyLabel: "Hard (94.2 km)",
      route: "Kvasy — Lazeshchyna — Mt. Khomyak — Mt. Synyak — Yaremche",
      poi: ["Kvasy", "Lazeshchyna", "Mt. Khomyak", "Mt. Synyak", "Yaremche"],
      shortDesc: "6-day autumn hike in Gorgany of 94.2 km with +4500 m elevation gain, routing through Kvasy and Yaremche.",
      elevationProfile: [
        { point: "Kvasy (start)", alt: 560 },
        { point: "Lazeshchyna village", alt: 700 },
        { point: "Mt. Khomyak", alt: 1542 },
        { point: "Mt. Synyak", alt: 1665 },
        { point: "Yaremche (finish)", alt: 550 }
      ]
    },
    "trip-2025-1": {
      season: "May 1–5, 2025",
      title: "May Gorgany Crossing: Yaremche — Zhenets — Chorna Tysa — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Medium (66.9 km)",
      route: "Yaremche — Zhenets — Chorna Tysa — Yasinya",
      poi: ["Yaremche", "Zhenets", "Chorna Tysa", "Yasinya"],
      shortDesc: "5-day spring hike in Gorgany of 66.9 km with +3282 m elevation gain, routing through Yaremche and Yasinya.",
      elevationProfile: [
        { point: "Yaremche (start)", alt: 550 },
        { point: "Climb towards Zhenets", alt: 1656 },
        { point: "Ridge near Gorgany Reserve", alt: 1654 },
        { point: "Towards Chorna Tysa", alt: 1613 },
        { point: "Yasinya (finish)", alt: 600 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "May 1",
          route: "Yaremche → climb towards Zhenets",
          notes: "Start from Yaremche. Largest elevation gain of the trip (+1545 m). Pace 19:17 min/km."
        },
        {
          day: 2,
          date: "May 2",
          route: "Pasichna → crossing the ridge near Gorgany reserve",
          notes: "Longest day of the hike by distance (18.48 km). Pace 18:26 min/km."
        },
        {
          day: 3,
          date: "May 3",
          route: "Zhenets watershed → Chorna Tysa valley",
          notes: "Scenic forest and river valley descent. Rest and split pacing."
        },
        {
          day: 4,
          date: "May 4",
          route: "Chorna Tysa valley → climb towards Yasinya outskirts",
          notes: "Calm hiking day with some steep climbs. Pace 19:40 min/km."
        },
        {
          day: 5,
          date: "May 5",
          route: "Yasinya outskirts → Yasinya center (finish)",
          notes: "Short final day and heading back home. Pace 17:30 min/km."
        }
      ]
    },
    "trip-2025-2": {
      season: "June 12–18, 2025",
      title: "Gorgany Expedition: Yaremche — Syvulya — Tavpyshyrika — Bratkivska — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Hard (108.5 km)",
      route: "Yaremche — Mt. Syvulya — Tavpyshyrika ridge — Mt. Bratkivska — Yasinya",
      poi: ["Yaremche", "Mt. Syvulya", "Tavpyshyrika", "Mt. Bratkivska", "Yasinya"],
      shortDesc: "7-day summer hike in Gorgany of 108.5 km with +5200 m elevation gain, routing through Yaremche and Yasinya.",
      elevationProfile: [
        { point: "Yaremche (start)", alt: 550 },
        { point: "Mt. Syvulya", alt: 1836 },
        { point: "Tavpyshyrika ridge", alt: 1500 },
        { point: "Mt. Bratkivska", alt: 1788 },
        { point: "Yasinya (finish)", alt: 650 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "June 12",
          route: "Yaremche (start) → climb towards Syvulya",
          notes: "Tough start with full backpacks. Long ascent on forest trails."
        },
        {
          day: 2,
          date: "June 13",
          route: "Highlands of Gorgany: Syvulya ridge",
          notes: "Hike on stone run. Reached peak alt of 1836 m. Incredible panoramic views."
        },
        {
          day: 3,
          date: "June 14",
          route: "Tavpyshyrika botanical reserve → Tavpyshyrika ridge",
          notes: "Traversing the spectacular Tavpyshyrika ridge on stone debris."
        },
        {
          day: 4,
          date: "June 15",
          route: "Tavpyshyrika → descent to Bystrytsya valley",
          notes: "Steep descents and river crossings. Resupply at Bystrytsya village."
        },
        {
          day: 5,
          date: "June 16",
          route: "Bystrytsya → climb to Bratkivska foothills",
          notes: "A slow and exhausting uphill towards the Bratkivska ridge."
        },
        {
          day: 6,
          date: "June 17",
          route: "Mt. Bratkivska ridge → descent to Chorna Tysa",
          notes: "Second longest day (17.42 km) reaching Mt. Bratkivska (1783 m)."
        },
        {
          day: 7,
          date: "June 18",
          route: "Chorna Tysa → Yasinya (finish)",
          notes: "Final day following the river. Finished at Yasinya train station."
        }
      ]
    },
    "trip-2025-3": {
      season: "July 10–15, 2025",
      title: "Summer Traverse: Synyogora — Gorgany — Tavpyshyrika — Svydovets",
      region: "Svydovets",
      difficultyLabel: "Hard (88.0 km)",
      route: "Synyogora — Tavpyshyrika ridge — Dragobrat — Yasinya",
      poi: ["Synyogora", "Tavpyshyrika", "Dragobrat", "Yasinya"],
      shortDesc: "6-day summer hike on Svydovets of 88 km with +4100 m elevation gain, routing through Synyogora and Yasinya.",
      elevationProfile: [
        { point: "Synyogora (start)", alt: 900 },
        { point: "Tavpyshyrika ridge", alt: 1500 },
        { point: "Dragobrat resort", alt: 1400 },
        { point: "Yasinya (finish)", alt: 650 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "July 10",
          route: "Synyogora (start)",
          notes: "Steep ascent and setting up high-altitude camp on the ridge."
        },
        {
          day: 2,
          date: "July 11",
          route: "Synyogora ridge → Gorgany crossing",
          notes: "Moving through typical Gorgany stone run. Excellent sunny weather."
        },
        {
          day: 3,
          date: "July 12",
          route: "Gorgany → Tavpyshyrika ridge",
          notes: "Traversing Tavpyshyrika under moderate heat. Camp near the forest line."
        },
        {
          day: 4,
          date: "July 13",
          route: "Tavpyshyrika → Dragobrat valley",
          notes: "Moving towards Svydovets ridge. Picturesque meadows and lakes."
        },
        {
          day: 5,
          date: "July 14",
          route: "Dragobrat resort → Yasinya foothills",
          notes: "Scenic descent along mountain streams. Relaxed pace."
        },
        {
          day: 6,
          date: "July 15",
          route: "Yasinya foothills → Yasinya center (finish)",
          notes: "Short walk to Yasinya and train departure."
        }
      ]
    },
    "trip-2025-4": {
      season: "September 12–18, 2025",
      title: "Great Autumn Traverse: Borzhava — Gorgany — Krasna — Svydovets",
      region: "Borzhava",
      difficultyLabel: "Hard (118.0 km)",
      route: "Volovets — Borzhava — Krasna — Svydovets — Yasinya",
      poi: ["Volovets", "Borzhava", "Krasna", "Svydovets", "Yasinya"],
      shortDesc: "7-day autumn hike on Borzhava and Svydovets of 118 km with +5800 m elevation gain, routing through Volovets and Yasinya.",
      elevationProfile: [
        { point: "Volovets (start)", alt: 500 },
        { point: "Borzhava ridge", alt: 1500 },
        { point: "Krasna ridge", alt: 1400 },
        { point: "Svydovets ridge", alt: 1700 },
        { point: "Yasinya (finish)", alt: 650 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "September 12",
          route: "Volovets → Borzhava ridge",
          notes: "Start with a heavy climb to Great Top (1587 m). Windy but clear."
        },
        {
          day: 2,
          date: "September 13",
          route: "Borzhava traverse → Kamyanka ridge",
          notes: "Stunning views of Borzhava blueberry fields. Deep valleys."
        },
        {
          day: 3,
          date: "September 14",
          route: "Kamyanka → Gorgany outskirts (Negrovets)",
          notes: "Tough transition from Borzhava grass to Gorgany stone blocks."
        },
        {
          day: 4,
          date: "September 15",
          route: "Negrovets → Krasna ridge (Topas)",
          notes: "Walking on Krasna ridge. Reached old metal fire tower on Topas."
        },
        {
          day: 5,
          date: "September 16",
          route: "Krasna ridge → Kolochava village",
          notes: "Descent to Kolochava. Resupply and hot dinner."
        },
        {
          day: 6,
          date: "September 17",
          route: "Kolochava → Ust-Chorna → Svydovets ridge",
          notes: "Long road transition and a very steep climb to Svydovets."
        },
        {
          day: 7,
          date: "September 18",
          route: "Svydovets ridge (Blyznytsya) → Kvasy (finish)",
          notes: "Traversing Blyznytsya (1870 m) and long descent to Kvasy. Finish!"
        }
      ]
    },
    "trip-2025-5": {
      season: "November 10–14, 2025",
      title: "Late Autumn Trek: Gorgany — Synyogora — Tavpyshyrika — Durnya — Svydovets",
      region: "Gorgany",
      difficultyLabel: "Hard (75.3 km)",
      route: "Bystrytsya — Synyogora — Tavpyshyrika ridge — Mt. Durnya — Yasinya",
      poi: ["Bystrytsya", "Synyogora", "Tavpyshyrika", "Mt. Durnya", "Yasinya"],
      shortDesc: "5-day late autumn hike in Gorgany and Svydovets of 75.3 km with +3900 m elevation gain, routing through Bystrytsya and Yasinya.",
      elevationProfile: [
        { point: "Bystrytsya (start)", alt: 750 },
        { point: "Synyogora", alt: 1500 },
        { point: "Tavpyshyrika ridge", alt: 1500 },
        { point: "Mt. Durnya", alt: 1700 },
        { point: "Yasinya (finish)", alt: 650 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "November 10",
          route: "Bystrytsya (start) → climb to Synyogora foothills",
          notes: "Cold autumn start. Frosty morning, first light snow patches."
        },
        {
          day: 2,
          date: "November 11",
          route: "Synyogora ridge → Gorgany crossing",
          notes: "Extremely slippery stones. Slow pacing for safety."
        },
        {
          day: 3,
          date: "November 12",
          route: "Gorgany → Tavpyshyrika ridge",
          notes: "Stunning winter-like views on the ridge. Below freezing temperatures."
        },
        {
          day: 4,
          date: "November 13",
          route: "Tavpyshyrika → Mt. Durnya → Svydovets borders",
          notes: "Trekking through the dwarf pine trails of Mt. Durnya."
        },
        {
          day: 5,
          date: "November 14",
          route: "Svydovets borders → Yasinya (finish)",
          notes: "Descent to Yasinya and returning home. Great cold weather test."
        }
      ]
    },
    "trip-2026-1": {
      season: "May 1–5, 2026",
      title: "Transcarpathian Autonomous Trek: Borzhava — Krasna — Svydovets",
      region: "Borzhava",
      difficultyLabel: "Hard (88.5 km)",
      route: "Volovets — Borzhava — Krasna — Svydovets — Kvasy",
      poi: ["Volovets", "Borzhava", "Krasna", "Svydovets", "Kvasy"],
      shortDesc: "5-day spring hike on Borzhava and Svydovets of 88.5 km with +4210 m elevation gain, routing through Volovets and Kvasy.",
      elevationProfile: [
        { point: "Volovets (start)", alt: 500 },
        { point: "Borzhava ridge", alt: 1500 },
        { point: "Krasna ridge", alt: 1400 },
        { point: "Svydovets ridge", alt: 1700 },
        { point: "Kvasy (finish)", alt: 560 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "May 1",
          route: "Volovets → Borzhava ridge",
          notes: "Steep uphill under light rain. Set up camp near Mt. Play."
        },
        {
          day: 2,
          date: "May 2",
          route: "Borzhava traverse → Krasna foothills",
          notes: "Fast walking on Borzhava meadows. Descent to Tereblya valley."
        },
        {
          day: 3,
          date: "May 3",
          route: "Krasna ridge traverse",
          notes: "Stunning open ridges. Good warm weather, moderate pacing."
        },
        {
          day: 4,
          date: "May 4",
          route: "Krasna → Ust-Chorna → Svydovets ridge",
          notes: "Hardest climb of the route from Ust-Chorna to Svydovets."
        },
        {
          day: 5,
          date: "May 5",
          route: "Svydovets ridge (Blyznytsya) → Kvasy (finish)",
          notes: "Climbing Blyznytsya peaks (1870 m) and long descent to Kvasy. Done!"
        }
      ]
    },
    "trip-2026-2": {
      season: "June 12–16, 2026",
      title: "Great Gorgany Loop: Yaremche — Stanymyr — Synyogora — Maksymets",
      region: "Gorgany",
      difficultyLabel: "Medium (68.0 km)",
      route: "Yaremche — Stanymyr meadow — Synyogora ridge — Maksymets",
      poi: ["Yaremche", "Stanymyr", "Synyogora", "Maksymets"],
      shortDesc: "5-day summer hike in Gorgany of 68 km with +3120 m elevation gain, routing through Yaremche and Maksymets.",
      elevationProfile: [
        { point: "Yaremche (start)", alt: 550 },
        { point: "Stanymyr meadow", alt: 1200 },
        { point: "Synyogora ridge", alt: 1500 },
        { point: "Maksymets village (finish)", alt: 700 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "June 12",
          route: "Yaremche → climb towards Stanymyr",
          notes: "Gentle forest climb. Camped near a clean spring."
        },
        {
          day: 2,
          date: "June 13",
          route: "Stanymyr meadow traverse",
          notes: "Vibrant summer meadows. Beautiful views of the high Gorgany peaks."
        },
        {
          day: 3,
          date: "June 14",
          route: "Stanymyr → Synyogora ridge climb",
          notes: "Steep trail through dwarf pines. Warm weather, high sun."
        },
        {
          day: 4,
          date: "June 15",
          route: "Synyogora ridge traverse",
          notes: "Scenic walking on stony trails. Pacing 20:00 min/km."
        },
        {
          day: 5,
          date: "June 16",
          route: "Synyogora → Maksymets (finish)",
          notes: "Descent to Maksymets and taking local shuttle back."
        }
      ]
    },
    "trip-2026-3": {
      season: "July 10–17, 2026",
      title: "Great Carpathian Traverse: Yaremche — Stanymyr — Vysoka — Osmoloda — Slavske",
      region: "Gorgany",
      difficultyLabel: "Hard (134.2 km)",
      route: "Yaremche — Stanymyr meadow — Mt. Vysoka — Osmoloda — Slavske",
      poi: ["Yaremche", "Stanymyr", "Mt. Vysoka", "Osmoloda", "Slavske"],
      shortDesc: "8-day summer hike in Gorgany and Beskydy of 134.2 km with +6450 m elevation gain, routing through Yaremche and Slavske.",
      elevationProfile: [
        { point: "Yaremche (start)", alt: 550 },
        { point: "Stanymyr meadow", alt: 1200 },
        { point: "Mt. Vysoka", alt: 1803 },
        { point: "Osmoloda village", alt: 720 },
        { point: "Slavske town (finish)", alt: 600 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "July 10",
          route: "Yaremche → climb to Stanymyr",
          notes: "Heavy start with full 8-day food ration. Slow climb."
        },
        {
          day: 2,
          date: "July 11",
          route: "Stanymyr meadow traverse",
          notes: "Walking through dense spruce forests and open pastures."
        },
        {
          day: 3,
          date: "July 12",
          route: "Stanymyr → Mt. Vysoka foothills",
          notes: "Climb through stone run towards the peak area."
        },
        {
          day: 4,
          date: "July 13",
          route: "Mt. Vysoka peak (1803 m) → Osmoloda",
          notes: "Stunning 360-degree views from Vysoka, followed by a long descent."
        },
        {
          day: 5,
          date: "July 14",
          route: "Osmoloda village → rest day",
          notes: "Half day rest in Osmoloda. Dries gear, refills supplies."
        },
        {
          day: 6,
          date: "July 15",
          route: "Osmoloda → climb to Beskydy ridges",
          notes: "Entering the grassy Beskydy mountains. Soft trails."
        },
        {
          day: 7,
          date: "July 16",
          route: "Beskydy ridge traverse",
          notes: "Very scenic and relaxed walking on rolling hills."
        },
        {
          day: 8,
          date: "July 17",
          route: "Beskydy ridges → Slavske (finish)",
          notes: "Final descent to Slavske railway station and heading home."
        }
      ]
    },
    "trip-2026-4": {
      season: "September 12–18, 2026",
      title: "Borzhava Traverse: Volovets — Borzhava — Synevyr — Torun — Slavske",
      region: "Borzhava",
      difficultyLabel: "Hard (112.0 km)",
      route: "Volovets — Borzhava — Synevyr lake — Torun pass — Slavske",
      poi: ["Volovets", "Borzhava", "Synevyr lake", "Torun pass", "Slavske"],
      shortDesc: "7-day autumn hike on Borzhava and Synevyr of 112 km with +4800 m elevation gain, routing through Volovets and Slavske.",
      elevationProfile: [
        { point: "Volovets (start)", alt: 500 },
        { point: "Borzhava ridge", alt: 1500 },
        { point: "Synevyr lake", alt: 989 },
        { point: "Torun pass", alt: 930 },
        { point: "Slavske town (finish)", alt: 600 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "September 12",
          route: "Volovets → Borzhava ridge",
          notes: "Climb to Borzhava under sunny autumn skies. Warm breeze."
        },
        {
          day: 2,
          date: "September 13",
          route: "Borzhava ridge traverse → Lopata",
          notes: "Traversing Borzhava peaks. Camp near a clean spring in the woods."
        },
        {
          day: 3,
          date: "September 14",
          route: "Lopata → descent to Mizhgirya",
          notes: "Long descent to Mizhgirya town. Quick lunch and resupply."
        },
        {
          day: 4,
          date: "September 15",
          route: "Mizhgirya → climb to Synevyr lake",
          notes: "Trekking through Synevyr National Park. Beautiful lakeshores."
        },
        {
          day: 5,
          date: "September 16",
          route: "Synevyr lake → Torun pass",
          notes: "Calm hiking day along old borders. Historic WW1 trenches."
        },
        {
          day: 6,
          date: "September 17",
          route: "Torun pass → Beskydy ridges",
          notes: "Walking on high grassy meadows towards Slavske."
        },
        {
          day: 7,
          date: "September 18",
          route: "Beskydy ridges → Slavske (finish)",
          notes: "Final descent to Slavske and train departure. Finished!"
        }
      ]
    },
    "trip-2026-5": {
      season: "October 1–5, 2026",
      title: "Gorgany Autonomous Trek: Yaremche — Stanymyr — Gorgany — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Hard (78.3 km)",
      route: "Yaremche — Stanymyr meadow — Gorgany ridge — Yasinya",
      poi: ["Yaremche", "Stanymyr", "Gorgany ridge", "Yasinya"],
      shortDesc: "5-day autumn hike in Gorgany of 78.3 km with +3890 m elevation gain, routing through Yaremche and Yasinya.",
      elevationProfile: [
        { point: "Yaremche (start)", alt: 550 },
        { point: "Stanymyr meadow", alt: 1200 },
        { point: "Gorgany ridge", alt: 1500 },
        { point: "Yasinya (finish)", alt: 600 }
      ],
      daysBreakdown: [
        {
          day: 1,
          date: "October 1",
          route: "Yaremche (start) → climb to Stanymyr",
          notes: "Golden forest climb. Heavy fog in the evening, cool weather."
        },
        {
          day: 2,
          date: "October 2",
          route: "Stanymyr meadow traverse",
          notes: "Beautiful calm day. Camped near shepherd shelter."
        },
        {
          day: 3,
          date: "October 3",
          route: "Stanymyr → Gorgany ridge",
          notes: "Hard climb on stone debris. Reached ridge elevation of 1500 m."
        },
        {
          day: 4,
          date: "October 4",
          route: "Gorgany ridge traverse → Chorna Tysa valley",
          notes: "Walking on the scenic high ridge. Descent to river valley."
        },
        {
          day: 5,
          date: "October 5",
          route: "Chorna Tysa valley → Yasinya (finish)",
          notes: "Easy flat walk along the river to Yasinya station. Done!"
        }
      ]
    }
  };

  window.TRIPS_DATA.forEach(trip => {
    const t = translations[trip.id];
    if (t) {
      // Apply translated fields
      if (t.season) trip.season = t.season;
      if (t.title) trip.title = t.title;
      if (t.region) trip.region = t.region;
      if (t.difficultyLabel) trip.difficultyLabel = t.difficultyLabel;
      if (t.route) trip.route = t.route;
      if (t.poi) trip.poi = t.poi;
      if (t.shortDesc) trip.shortDesc = t.shortDesc;
      
      // Update elevation profile labels
      if (t.elevationProfile && trip.elevationProfile) {
        t.elevationProfile.forEach((p, idx) => {
          if (trip.elevationProfile[idx]) {
            trip.elevationProfile[idx].point = p.point;
          }
        });
      }

      // Update daily breakdown text
      if (t.daysBreakdown && trip.daysBreakdown) {
        t.daysBreakdown.forEach((d, idx) => {
          if (trip.daysBreakdown[idx]) {
            trip.daysBreakdown[idx].date = d.date;
            trip.daysBreakdown[idx].route = d.route;
            trip.daysBreakdown[idx].notes = d.notes;
          }
        });
      }
    }
  });
})();
