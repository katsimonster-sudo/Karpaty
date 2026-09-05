/* ==========================================================================
   Database translation helper: Carpathian trips in-place English translation
   ========================================================================== */

(function() {
  if (!window.TRIPS_DATA) return;

  const translations = {
    "trip-2024-1": {
      season: "May 2-6, 2024",
      title: "Trip #1: Kvasy — Hoverla — Vorokhta",
      region: "Chornohora",
      difficultyLabel: "Hard (78.4 km)",
      route: "Kvasy — Mt. Hoverla — Vorokhta (area)",
      poi: ["Kvasy", "Mt. Hoverla", "Vorokhta"],
      shortDesc: "5-day spring hike across Chornohora, 78.4 km with 3938 m of elevation gain, via Kvasy and Lazeshchyna.",
      elevationProfile: [
        { point: "Kvasy (start)" },
        { point: "Mt. Hoverla" },
        { point: "Vorokhta (finish)" }
      ]
    },
    "trip-2024-2": {
      season: "June 7-12, 2024",
      title: "Trip #2: Yasinya — Hoverla — Vorokhta",
      region: "Chornohora",
      difficultyLabel: "Hard (78 km)",
      route: "Yasinya — Mt. Hoverla — Vorokhta",
      poi: ["Yasinya", "Mt. Hoverla", "Vorokhta"],
      shortDesc: "6-day summer hike across Chornohora, 78 km with 3900 m of elevation gain, via Yasinya and Vorokhta.",
      elevationProfile: [
        { point: "Yasinya (start)" },
        { point: "Mt. Hoverla" },
        { point: "Vorokhta (finish)" }
      ]
    },
    "trip-2024-3": {
      season: "July 19-25, 2024",
      title: "Trip #3: Tatariv — Khomyak — Synyak — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Medium (55.3 km)",
      route: "Tatariv — Mt. Khomyak — Mt. Synyak — Yasinya",
      poi: ["Tatariv", "Mt. Khomyak", "Mt. Synyak", "Yasinya"],
      shortDesc: "7-day summer traverse of Gorgany, 55.3 km over the peaks of Khomyak and Synyak, finishing in Yasinya.",
      elevationProfile: [
        { point: "Tatariv (start)" },
        { point: "Mt. Khomyak" },
        { point: "Mt. Synyak" },
        { point: "Yasinya (finish)" }
      ]
    },
    "trip-2024-4": {
      season: "September 2-7, 2024",
      title: "Trip #4: Kvasy — Dragobrat — Hropa — Yasinya",
      region: "Svydovets",
      difficultyLabel: "Hard (67.2 km)",
      route: "Kvasy — Dragobrat — Mt. Hropa — Yasinya",
      poi: ["Kvasy", "Dragobrat", "Mt. Hropa", "Yasinya"],
      shortDesc: "6-day autumn traverse of Svydovets, 67.2 km with 3653 m of elevation gain, from Kvasy to Yasinya.",
      elevationProfile: [
        { point: "Kvasy (start)" },
        { point: "Dragobrat" },
        { point: "Mt. Hropa" },
        { point: "Yasinya (finish)" }
      ]
    },
    "trip-2024-5": {
      season: "November 2-8, 2024",
      title: "Trip #5: Kvasy — Lazeshchyna — Khomyak — Synyak — Yaremche",
      region: "Gorgany",
      difficultyLabel: "Hard (82.5 km)",
      route: "Kvasy — Lazeshchyna — Mt. Khomyak — Mt. Synyak — Yaremche",
      poi: ["Kvasy", "Lazeshchyna", "Mt. Khomyak", "Mt. Synyak", "Yaremche"],
      shortDesc: "7-day late-autumn hike via Lazeshchyna, Khomyak, and Synyak, finishing in Yaremche. Distance 82.5 km, elevation gain 3226 m.",
      elevationProfile: [
        { point: "Kvasy (start)" },
        { point: "Lazeshchyna" },
        { point: "Mt. Khomyak" },
        { point: "Mt. Synyak" },
        { point: "Yaremche (finish)" }
      ]
    },
    "trip-2025-1": {
      season: "May 1-5, 2025",
      title: "May Gorgany Crossing: Yaremche — Zhenets — Chorna Tysa — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Medium (66.9 km)",
      route: "Yaremche — Zhenets — ridge near the Gorgany reserve — Dovzhyna / Chorna Tysa — Yasinya",
      poi: ["Yaremche", "Zhenets ridge", "Gorgany reserve", "Dovzhyna", "Chorna Tysa river", "Yasinya"],
      shortDesc: "5-day (4 hiking days) May crossing of Gorgany, 66.9 km from Yaremche to Yasinya via the Zhenets ridge and the Chorna Tysa valley.",
      elevationProfile: [
        { point: "Yaremche (start)" },
        { point: "Climb toward Zhenets / ridge" },
        { point: "Ridge near the Gorgany reserve" },
        { point: "Toward Dovzhyna / Chorna Tysa" },
        { point: "Yasinya (finish)" }
      ],
      daysBreakdown: [
        { date: "May 1", route: "Yaremche community → climb toward Zhenets / ridge", notes: "Start from Yaremche. Biggest elevation gain of the day in the whole trip (+1545 m). Pace 19:17 min/km." },
        { date: "May 2", route: "Pasichna community → crossing the ridge near the Gorgany reserve", notes: "Longest day of the trip by distance (18.48 km). Pace 18:26 min/km." },
        { date: "May 3", route: "Rest camp near the Gorgany reserve", notes: "Rest day with no active hiking before heading toward Polianytsia community." },
        { date: "May 4", route: "Polianytsia community → toward Dovzhyna / Chorna Tysa", notes: "Crossing toward Chorna Tysa after the rest day. Pace 17:34 min/km." },
        { date: "May 5 (Finish)", route: "Descent along the Chorna Tysa river → Yasinya", notes: "Final day — an easy valley descent to Yasinya. Pace 13:46 min/km." }
      ]
    },
    "trip-2025-2": {
      season: "June 8-18, 2025",
      title: "Gorgany Expedition: Yaremche — Syvulya — Tavpyshyrka — Bratkivska — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Hard (128.1 km)",
      route: "Yaremche — Syvulya ridge — Tavpyshyrka ridge — Bratkivska ridge — Yasinya",
      poi: ["Yaremche", "Syniachka ridge", "Zelena village", "Synyohora National Park", "Syvulya / Ihrovets ridge", "Tavpyshyrka reserve", "Bratkivska massif", "Chorna Tysa village", "Yasinya"],
      shortDesc: "11-day (10 hiking days) expedition across Gorgany, 128.1 km from Yaremche to Yasinya via the Syvulya, Tavpyshyrka, and Bratkivska ridges, with 6633 m of elevation gain.",
      elevationProfile: [
        { point: "Yaremche (start)" },
        { point: "Syniachka / Yavirnyk ridge" },
        { point: "Zelena — Maksymets" },
        { point: "Synyohora National Park / Bohorodchany ridge" },
        { point: "Approach to the Syvulya massif" },
        { point: "Syvulya / Ihrovets ridge (highpoint)" },
        { point: "Tavpyshyrka reserve" },
        { point: "Bratkivska massif" },
        { point: "Yasinya (finish)" }
      ],
      daysBreakdown: [
        { date: "June 8", route: "Yaremche → Syniachka / Yavirnyk ridge", notes: "Start from Yaremche, longest day of the trip (20.06 km). Pace 16:15 min/km." },
        { date: "June 9", route: "Zelena village → Zelenytsia river → Maksymets", notes: "Biggest elevation gain of the day in the whole trip (+1256 m). Pace 17:40 min/km." },
        { date: "June 10", route: "Synyohora National Park → Bohorodchany ridge", notes: "Crossing through Synyohora National Park onto the Bohorodchany ridge." },
        { date: "June 11", route: "Approach to the Syvulya massif", notes: "Short but steep approach (+372 m over 2.26 km) before storming the high mountains." },
        { date: "June 12", route: "Gorgany highlands: Syvulya / Ihrovets ridge", notes: "Climax day of the trip — the highest point at 1820 m on the Syvulya / Ihrovets ridge." },
        { date: "June 13", route: "Rest camp near Syvulya / Ihrovets", notes: "Rest day after reaching the highest point of the route." },
        { date: "June 14", route: "Solotvyn community — traverse/crossing", notes: "Return to the active route after the rest day." },
        { date: "June 15", route: "Tavpyshyrka reserve → Tavpyshyrka ridge", notes: "Crossing the botanical reserve onto the Tavpyshyrka ridge." },
        { date: "June 16", route: "Ust-Chorna Gorgany → crossing to Bratkivska ridge", notes: "Crossing to the Bratkivska massif through the Ust-Chorna part of Gorgany." },
        { date: "June 17", route: "Bratkivska massif → descent to Chorna Tysa village", notes: "Second-longest day of the trip (17.42 km), reaching the Bratkivska massif (1783 m)." },
        { date: "June 18 (Finish)", route: "Chorna Tysa → Yasinya (finish at the station)", notes: "Final day — descent along the Chorna Tysa river and finish in Yasinya near the railway station. Pace 14:37 min/km." }
      ]
    },
    "trip-2025-3": {
      season: "August 9-15, 2025",
      title: "Summer Traverse: Synyohora — Gorgany — Tavpyshyrka — Svydovets",
      region: "Synyohora — Gorgany — Svydovets",
      difficultyLabel: "Hard (142.1 km)",
      route: "Yaremche — Pasichna (Synyohora National Park) — Solotvyn (Gorgany, Tavpyshyrka reserve) — Polianytsia — Polianytsi — Yasinya — Svydovets massif — Kvasy village",
      poi: ["Synyohora National Park", "Gorgany ridges", "Tavpyshyrka reserve", "Svydovets massif", "Kvasy village"],
      shortDesc: "7-day summer traverse across Synyohora, Gorgany, and Svydovets — 142.1 km and 6902 m of elevation gain, finishing in Kvasy.",
      elevationProfile: [
        { point: "Start, Yaremche (day 1)" },
        { point: "Ridge (day 1, peak)" },
        { point: "Synyohora National Park, Pasichna (day 2)" },
        { point: "Gorgany traverse, Solotvyn (day 3)" },
        { point: "Tavpyshyrka reserve (day 4)" },
        { point: "Polianytsia (day 5)" },
        { point: "Polianytsi (day 6)" },
        { point: "Svydovets massif, Yasinya → Kvasy (day 7)" }
      ],
      daysBreakdown: [
        { date: "August 9", route: "Yaremche — start", notes: "Longest day of the whole trip by distance (54,450 steps) and hardest by elevation gain (2175 m). A strong opening day with a full starting load." },
        { date: "August 10", route: "Pasichna — Synyohora National Park", notes: "Crossing through Synyohora National Park onto the highest point of the first two days (1795 m)." },
        { date: "August 11", route: "Solotvyn — Gorgany traverse", notes: "Traverse along the Gorgany ridges at around 1786 m with modest elevation gain relative to distance — mostly ridge walking." },
        { date: "August 12", route: "Solotvyn — Tavpyshyrka reserve", notes: "Crossing the Tavpyshyrka botanical reserve with moderate elevation gain and a gradual transition toward Polianytsia community." },
        { date: "August 13", route: "Polianytsia", notes: "Shortest day of the whole trip (6.31 km, only 450 kcal) — short but concentrated elevation gain (539 m) over a small distance." },
        { date: "August 14", route: "Polianytsi", notes: "Average-effort day (33,930 steps, 1480 kcal). No data on max altitude or pace breakdown — the detail screenshot for this day was not saved." },
        { date: "August 15", route: "Yasinya — Svydovets massif — finish in Kvasy", notes: "Finish day through the Svydovets massif, reaching the highest point of the entire trip (1870 m) and completing the route in Kvasy village." }
      ]
    },
    "trip-2025-4": {
      season: "September 12-20, 2025",
      title: "Great Autumn Traverse: Borzhava — Gorgany — Krasna — Svydovets",
      region: "Borzhava — Gorgany — Krasna — Svydovets",
      difficultyLabel: "Extreme (180.7 km)",
      route: "Volovets community (start) — Velykyi Verkh ridge (Borzhava) — southeastern Borzhava — Kamianka ridge — Nehrovets massif (Gorgany) — Kolochava village — Krasna ridge (Topas, Syhla) — Ust-Chorna — Svydovets massif (Tempa, Unhariaska) — Blyznytsi massif (1870 m) — Trostianets — Kvasy village",
      poi: ["Velykyi Verkh ridge (Borzhava)", "Kamianka ridge", "Nehrovets massif (Gorgany)", "Kolochava village (Terebla river)", "Krasna ridge (Topas, Syhla)", "Ust-Chorna", "Svydovets massif (Tempa, Unhariaska)", "Blyznytsi massif (1870 m)", "Trostianets", "Kvasy village"],
      shortDesc: "The longest 9-day self-supported traverse across Borzhava, Gorgany, Krasna, and Svydovets — 180.7 km and 8720 m of elevation gain, finishing in Kvasy.",
      elevationProfile: [
        { point: "Start, Volovets community" },
        { point: "Velykyi Verkh ridge (Borzhava, day 1)" },
        { point: "Southeastern Borzhava (day 2)" },
        { point: "Kamianka ridge → toward Gorgany (day 3)" },
        { point: "Nehrovets massif (Gorgany, day 4)" },
        { point: "Kolochava village (Terebla river)" },
        { point: "Krasna ridge (day 5)" },
        { point: "Ust-Chorna" },
        { point: "Svydovets massif (day 8)" },
        { point: "Blyznytsi massif (peak, day 9)" },
        { point: "Kvasy village (finish)" }
      ],
      daysBreakdown: [
        { date: "September 12", route: "Volovets community → Velykyi Verkh ridge (Borzhava)", notes: "Start of the self-supported crossing with a full starting pack weight. Reaching the Borzhava ridge and climbing to the top of Mt. Velykyi Verkh (1587 m). Average speed 4.5 km/h, the longest day by elevation gain (1661 m)." },
        { date: "September 13", route: "Keretsky community → southeastern Borzhava", notes: "A shorter day along the southeastern part of the Borzhava ridge (max 1233 m). Moderate pace of 4.1 km/h, fastest split 11:37 min/km." },
        { date: "September 14", route: "Mizhhiria community → Kamianka ridge → onward to Gorgany", notes: "Longest day of the route by distance (30.97 km, 43,822 steps, 2207 kcal). A demanding transit day: leaving the Borzhava massif, crossing the Rika river valley and reaching the edge of Gorgany via the Kamianka ridge." },
        { date: "September 15", route: "Synevyr community → Nehrovets massif (Gorgany)", notes: "A short but high day: climbing to the highest point of the first four days — the Nehrovets massif (1689 m) in Gorgany. A late start (12:55) set up the next leg toward the Kolochava valley." },
        { date: "September 16", route: "Kolochava transit → Krasna ridge (Topas, Syhla)", notes: "The most demanding day of the trip by distance (43,070 steps, 1992 kcal). A steep descent through Horb village to Kolochava, a fast transit along the Terebla valley (fastest split 9:38 min/km), a vertical climb of over 1000 m onto the Krasna ridge, finishing along the open ridge over the peaks Topas and Syhla." },
        { date: "September 17", route: "Eastern spur of the Krasna ridge", notes: "A short recovery day after the 28-km effort. Late start, a calm traverse of the southeastern spur of Krasna (1400-1472 m) above the villages Nimetska Mokra and Ruska Mokra, camp set up before the descent into Ust-Chorna." },
        { date: "September 18", route: "Krasna → Svydovets via Ust-Chorna", notes: "A key connecting day between massifs. A steep descent into Ust-Chorna, crossing the Teresva river, a long climb (over 1000 m) along forest roads toward western Svydovets (Tempa, Unhariaska). Average speed 4.5 km/h." },
        { date: "September 19", route: "Main high ridge of Svydovets", notes: "The fastest day of the trip (5.0 km/h, splits down to 6:35 min/km). Moving along open alpine-meadow roads at 1600-1750 m past the peaks Tempa, Unhariaska, and Mala Blyznytsia to the edge of the protected massif." },
        { date: "September 20", route: "Blyznytsi massif → final descent into Kvasy", notes: "The final climax: climbing to the highest point of the entire route (1870 m, the shoulder of Blyznytsia), a drop of over 1300 m via Trostianets, finishing at the Kvasy railway station." }
      ]
    },
    "trip-2025-5": {
      season: "November 1-7, 2025",
      title: "Late Autumn Trek: Gorgany — Synyohora — Tavpyshyrka — Durnya ridge — Svydovets",
      region: "Gorgany — Svydovets",
      difficultyLabel: "Hard (110.6 km)",
      route: "Yaremche — Gorgany — Synyohora — Tavpyshyrka — Durnya ridge — Svydovets — Kvasy",
      poi: ["Gorgany reserve", "Synyohora National Park", "Tavpyshyrka reserve", "Durnya ridge", "Svydovets massif (Blyznytsi)"],
      shortDesc: "6 hiking days, 7 days in the mountains — 110.6 km along the late-autumn ridges from Gorgany to Svydovets, finishing in Kvasy.",
      elevationProfile: [
        { point: "Yaremche outskirts (Dora)" },
        { point: "Gorgany ridge (near Zelena village)" },
        { point: "Synyohora National Park" },
        { point: "Tavpyshyrka ridge" },
        { point: "Durnya ridge" },
        { point: "Zhary / Klympushi hamlets" },
        { point: "Svydovets massif (saddle below Blyznytsi)" },
        { point: "Kvasy village (finish)" }
      ],
      daysBreakdown: [
        { date: "November 1", route: "Yaremche (Dora) → Gorgany ridge (around the reserve) → Zelena village", notes: "Start from the outskirts of Yaremche. Ridge walking around the Gorgany reserve, then past Zelena village toward the Gorgany ridges with a steep climb to about 1532 m." },
        { date: "November 2", route: "Rest camp in the Gorgany ridges", notes: "Rest day to recover before continuing toward Synyohora National Park." },
        { date: "November 3", route: "Synyohora National Park → mountain stream valley → ridge near Stara Huta village", notes: "Solotvyn community, on the border of Synyohora National Park. A steep descent into a mountain stream valley and a new long climb along the ridge southeast of Stara Huta village." },
        { date: "November 4", route: "Polianytsia community → Tavpyshyrka reserve → Tavpyshyrka ridge", notes: "Crossing the Tavpyshyrka botanical reserve with a climb onto the ridge of the same name, followed by ridge walking with a gradual loss of elevation." },
        { date: "November 5", route: "Crossing into Zakarpattia (Ust-Chorna community) → Durnya ridge", notes: "A short but hard day: crossing into Zakarpattia and climbing the Durnya ridge with a long rest stop at altitude." },
        { date: "November 6", route: "Polianytsia community → Zhary / Klympushi hamlets", notes: "Ridge walking toward the hamlets of Zhary / Klympushi. A technical GPS signal failure occurred this day — the distance is recorded as a straight line." },
        { date: "November 7", route: "Yasinya community → Svydovets massif (saddle below Blyznytsi) → Trostianets → Kvasy village", notes: "Final day. The high point of the trip at 1870 m on the saddle below Blyznytsi, descent through Trostianets, finishing in Kvasy village." }
      ]
    },
    "trip-2026-1": {
      season: "June 10-17, 2026",
      title: "Transcarpathian Self-Supported Trek: Borzhava — Krasna — Svydovets",
      region: "Borzhava — Krasna — Svydovets",
      difficultyLabel: "Extreme (157 km)",
      route: "Volovets — Borzhava meadow (Stiy / Velykyi Verkh) — Mt. Kuk — Kolochava village — Krasna ridge — Ust-Chorna — Svydovets ridge (1871 m) — Kvasy village",
      poi: ["Volovets", "Borzhava meadow", "Mt. Kuk (1361 m)", "Kolochava village (Terebla river)", "Krasna ridge", "Ust-Chorna", "Svydovets massif (1871 m)", "Kvasy village"],
      shortDesc: "An epic self-supported trek of 157 km across Borzhava, Kuk, Krasna, and Svydovets — 7 hiking days plus 1 rest day (8 days total in the mountains) with almost 8000 m of combined elevation gain.",
      elevationProfile: [
        { point: "Volovets" },
        { point: "Mt. Velykyi Verkh" },
        { point: "Mt. Kuk" },
        { point: "Kolochava village" },
        { point: "Krasna ridge (Syhlansky)" },
        { point: "Ust-Chorna" },
        { point: "Svydovets ridge (highpoint)" },
        { point: "Kvasy village (finish)" }
      ],
      daysBreakdown: [
        { date: "June 10", route: "Volovets → Borzhava meadow", notes: "Start from Volovets railway station. A steep switchback climb onto the crest of the Borzhava meadow ridge (Stiy station / Mt. Velykyi Verkh)." },
        { date: "June 11", route: "Borzhava ridge → Keretsky community", notes: "Ridge walking southeast along Borzhava. A deep drop at km 10 into the Borzhava river valley and a long climb onto the next ridge." },
        { date: "June 12", route: "Tyushka / Richka ridges → edge of Pylypets community", notes: "A lighter day. Walking forested meadow ridges parallel to the villages of Tyushka, Richka, and Potik with a record pace (split 6:32 min/km)." },
        { date: "June 13", route: "Rika river valley (Vuchkove village) → storming the Kuk massif", notes: "A long ridge descent into the deep valley of Vuchkove village and crossing the Rika river. A steep climb onto the Kuk massif and a high-altitude camp." },
        { date: "June 14", route: "Mt. Kuk → Kolochava village → Krasna ridge", notes: "Descent from Mt. Kuk into the Kolochava valley, fording the Terebla river. A steep vertical climb of over 1000 meters onto the Krasna ridge." },
        { date: "June 15", route: "Krasna ridge → Ust-Chorna → onto Svydovets", notes: "A marathon crossing (38 km / +1923 m). Descent to Ust-Chorna, crossing the Teresva and Brustury rivers, a hard climb up the Yablunytsia valley onto the Svydovets massif." },
        { date: "June 16", route: "Rest camp on the Svydovets massif", notes: "Rest day to recover before the final push to the climax point of the route." },
        { date: "June 17", route: "Svydovets massif (1871 m) → Trostianets village → Kvasy village", notes: "The climax altitude of the trip (1871 m) along the highest Svydovets ridge. A steep spur descent through Trostianets village, finishing at the Kvasy railway station." }
      ]
    },
    "trip-2026-2": {
      season: "June 24-27, 2026",
      title: "Great Gorgany Loop: Yaremche — Stanymyr — Synyohora — Maksymets",
      region: "Gorgany",
      difficultyLabel: "Extreme (101 km)",
      route: "Yaremche (Dora/Yamna) — ridge — Chernyk village — Zelena village — Stanymyr ridge — Synyohora National Park — Maksymets village — Gorgany reserve — Yaremche",
      poi: ["Yaremche (Dora / Yamna)", "Chernyk village", "Zelenytsia river valley", "Stanymyr ridge (1532 m)", "Synyohora National Park", "Maksymets village", "Gorgany reserve (1549 m)", "Prut river"],
      shortDesc: "A self-supported 4-day mega-trek through wild Gorgany, 101.5 km with 4475 m of elevation gain.",
      elevationProfile: [
        { point: "Yaremche (Dora)" },
        { point: "Chornyi Pohar ridge" },
        { point: "Chernyk / Zelena villages" },
        { point: "Stanymyr ridge" },
        { point: "Maksymets village" },
        { point: "Gorgany reserve" },
        { point: "Yaremche (station)" }
      ],
      daysBreakdown: [
        { date: "June 24", route: "Yaremche (Dora / Yamna) → ridge → Chernyk", notes: "The first 5 km are a steep climb from the valley. The next 5-15 km follow the ridge with minor elevation changes (1000-1300 m), then a steep descent into the valley after km 15." },
        { date: "June 25", route: "Chernyk → Zelena village (Zelenytsia river) → Stanymyr ridge → edge of Synyohora National Park", notes: "Descent from the ridge, a fast transit through the Zelena village valley, followed by a long climb and extended walk along the Stanymyr ridge toward Stara Huta village." },
        { date: "June 26", route: "Synyohora National Park ridge → Maksymets village → ridges of the Gorgany reserve", notes: "Descent into the valley, a fast transit through Maksymets village (fast splits of 9:22 min/km), followed by an exhausting climb of 1200+ m onto the stony ridges of Gorgany." },
        { date: "June 27", route: "Gorgany massif → ridge descent → Yaremche (center / station)", notes: "A local elevation gain up to 1360 m, followed by a long and steady ridge descent into the Yaremche valley, crossing the Prut river and finishing in Yaremche." }
      ]
    },
    "trip-2026-3": {
      season: "May 2-8, 2026",
      title: "Great Carpathian Traverse: Yaremche — Stanymyr — Vysoka — Osmoloda — Slavske",
      region: "Gorgany — Skole Beskids",
      difficultyLabel: "Extreme (166 km)",
      route: "Yaremche — Stanymyr ridge — Mt. Vysoka (1777 m) — Osmoloda village — Perehinske ridge (1783 m) — Svicha river — Torun pass — Slavske",
      poi: ["Yaremche", "Stanymyr ridge (1532 m)", "Synyohora National Park", "Mt. Vysoka / Ihrovets (1777 m)", "Osmoloda village", "Perehinske ridge (1783 m)", "Svicha river", "Torun pass (1432 m)", "Slavske"],
      shortDesc: "An epic self-supported traverse of the Carpathians, 166 km from Yaremche to Slavske — 5 hiking legs (one of them two days long) plus a rest day, 7 days total in the mountains, with 7866 m of elevation gain via Stanymyr, Mt. Vysoka, Osmoloda, and the Perehinske ridges.",
      elevationProfile: [
        { point: "Yaremche" },
        { point: "Stanymyr ridge (max.)" },
        { point: "Synyohora National Park" },
        { point: "Mt. Vysoka (Ihrovets)" },
        { point: "Osmoloda village" },
        { point: "Perehinske ridge (max.)" },
        { point: "Svicha river" },
        { point: "Torun pass" },
        { point: "Slavske" }
      ],
      daysBreakdown: [
        { date: "May 2", route: "Yaremche → Chernyk village → Zelena village → Stanymyr ridge", notes: "Early start from Yaremche, a steep climb onto the ridge followed by a traverse along the villages Chernyk and Zelena. A hard, steep climb onto the Stanymyr ridge at km 27. Pace: 13:08 min/km." },
        { date: "May 3-4", route: "Stanymyr ridge → Synyohora National Park → Mt. Vysoka (Ihrovets)", notes: "Transit through Synyohora National Park. Difficult terrain, stony scree (Gorgany-style boulder fields) while storming Mt. Vysoka near Ihrovets. Pace: 18:03 min/km." },
        { date: "May 5", route: "Mt. Vysoka → Limnytsia river valley → Osmoloda village → Perehinske community ridge", notes: "Descent from Mt. Vysoka into the Limnytsia river valley, a fast traverse past Osmoloda village and a long climb onto the ridge in Perehinske community. Fastest split 8:29 min/km." },
        { date: "May 6", route: "Perehinske ridge → Svicha river → highest point of the route (1783 m)", notes: "The hardest day by distance. Descent from the high ridge, a traverse along the Svicha river, and reaching the highest point of the entire route (1783 m). 11 h 02 min moving time." },
        { date: "May 7", route: "Rest camp in the Perehinske ridges", notes: "Rest day and resupply before the final leg to Slavske." },
        { date: "May 8", route: "Synevyr community → Torun pass → Vyshkiv → Slavske", notes: "Start from Synevyr community, moving through the Torun pass and Vyshkiv with a final descent into Slavske (Lviv region). Pace 7:34 min/km — the fastest day of the trip." }
      ]
    },
    "trip-2026-4": {
      season: "March 19-25, 2026",
      title: "Borzhava Traverse: Volovets — Borzhava — Synevyr — Torun Pass — Slavske",
      region: "Borzhava — Skole Beskids",
      difficultyLabel: "Extreme (114 km)",
      route: "Volovets — Borzhava ridge — southeastern saddles — Mizhhiria — Stryhalnia / Zaverkhnia Kychera — Synevyrska Poliana (1517 m) — Lopushne — Torun — Torun pass — Mt. Trostyan — Slavske",
      poi: ["Volovets", "Borzhava ridge (1500 m)", "Mizhhiria", "Zaverkhnia Kychera (1387 m)", "Synevyrska Poliana (1517 m)", "Lopushne", "Torun village", "Torun pass (1236 m)", "Mt. Trostyan", "Slavske"],
      shortDesc: "A 7-day winter traverse of the Borzhava ridge, 114 km from Volovets to Slavske via Mizhhiria, Synevyrska Poliana, and Torun pass.",
      elevationProfile: [
        { point: "Volovets" },
        { point: "Borzhava ridge" },
        { point: "Southeastern Borzhava saddles" },
        { point: "Mizhhiria" },
        { point: "Stryhalnia / Zaverkhnia Kychera" },
        { point: "Ridge (Synevyrska Poliana)" },
        { point: "Torun pass" },
        { point: "Foot of Mt. Trostyan" },
        { point: "Slavske" }
      ],
      daysBreakdown: [
        { date: "March 19", route: "Volovets → Borzhava ridge", notes: "Start in Volovets. A long climb onto the Borzhava ridge. Most of the physical effort of the day goes into the initial elevation gain. Pace ~18:00 min/km." },
        { date: "March 20", route: "Transit across the open tops of the Borzhava ridge", notes: "A dynamic section with constant local ups and downs across open terrain. Pace ~16:40 min/km." },
        { date: "March 21", route: "Borzhava — southeastern saddles", notes: "Starts with a fairly steep descent (km 0-4), followed by flatter terrain and a climb to the day's finishing high point. Pace: 16:52 min/km." },
        { date: "March 22", route: "Descent to Mizhhiria → Stryhalnia → Zaverkhnia Kychera", notes: "Descent from the ridge into the valley, transit through Mizhhiria (the fastest and most consistent pace of the trip), followed by a long climb along the ridge to Stryhalnia and Zaverkhnia Kychera. Pace: 15:54 min/km." },
        { date: "March 23", route: "Ridge near Synevyrska Poliana → highest point of the route (1517 m)", notes: "Climbing onto the ridge parallel to the Synevyrska Poliana valley. At km 9, the highest point of the entire track was reached (1517 m), followed by a gentle traverse. Pace: 16:24 min/km." },
        { date: "March 24", route: "Lopushne → Torun → Prysli → Torun pass", notes: "Descent from the overnight camp into the valley and a fast valley transit through the villages Lopushne, Torun, and Prysli. A long northward climb along the ridge to Torun pass. The fastest split of the whole route: 9:05 min/km!" },
        { date: "March 25", route: "Foot of Mt. Trostyan → Slavka river → Slavske (finish)", notes: "Final descent from the foot of Mt. Trostyan along a forest track beside the Slavka river, finishing directly at the Slavske railway station. Pace: 15:01 min/km." }
      ]
    },
    "trip-2026-5": {
      season: "March 4-11, 2026",
      title: "Gorgany Self-Supported Trek: Yaremche — Stanymyr — Gorgany — Yasinya",
      region: "Gorgany",
      difficultyLabel: "Hard (93.8 km)",
      route: "Yaremche — Gorgany ridge — Zelena village — Stanymyr ridge (1459 m) — Maksymets village — Bystrytsia village — Gorgany reserve — peak 1692 m (Polianytsia community) — Chorna Tysa river — Yasinya",
      poi: ["Yaremche", "Gorgany ridge (1313 m)", "Zelena village (valley)", "Stanymyr ridge (1459 m)", "Maksymets village", "Bystrytsia village", "Gorgany reserve (1552 m)", "Peak 1692 m (Polianytsia community)", "Chorna Tysa river", "Yasinya"],
      shortDesc: "A self-supported March trek through wild Gorgany, 93.8 km from Yaremche to Yasinya — 5 hiking days and 3 rest days along the route (8 days total), with 4566 m of elevation gain and a peak at 1692 m.",
      elevationProfile: [
        { point: "Yaremche" },
        { point: "Gorgany ridge" },
        { point: "Zelena village" },
        { point: "Stanymyr ridge (max.)" },
        { point: "Maksymets village" },
        { point: "Gorgany reserve (edge)" },
        { point: "Polianytsia community (peak)" },
        { point: "Chorna Tysa river" },
        { point: "Yasinya" }
      ],
      daysBreakdown: [
        { date: "March 4", route: "Yaremche → Gorgany ridge", notes: "Start from Yaremche. A long, steady elevation gain through forest (+1121 m) onto the ridge. Pace: 15:28 min/km." },
        { date: "March 5", route: "Rest camp on the Gorgany ridge", notes: "Rest day before descending into the Zelena village valley." },
        { date: "March 6", route: "Gorgany ridge → Zelena village → Stanymyr ridge", notes: "Descent into the Zelena village valley with the fastest split of the trip — 7:51 min/km! Resupply and a steep climb onto the Stanymyr ridge. Overall pace: 33:26 min/km (long stop)." },
        { date: "March 7", route: "Stanymyr ridge → Maksymets village → Bystrytsia village → edge of the Gorgany reserve", notes: "The longest and most demanding day (28.32 km, 39,382 steps, 2018 kcal). Transit through Maksymets and Bystrytsia villages, reaching the edge of the Gorgany reserve. Pace: 13:52 min/km." },
        { date: "March 8", route: "Rest camp near the edge of the Gorgany reserve", notes: "Rest day and resupply before the high-mountain push." },
        { date: "March 9", route: "Crossing the ridges of Polianytsia community → peak 1692 m", notes: "A high-mountain push day with the biggest specific elevation gain (+1213 m), reaching the highest point of the route (1692 m). Pace: 18:10 min/km — the terrain demanded maximum effort." },
        { date: "March 10", route: "Rest camp at the highest point of the route", notes: "Final rest day before the final descent to Yasinya." },
        { date: "March 11", route: "Descent to the Chorna Tysa river → Yasinya (finish)", notes: "Descent from the high mountains to the Chorna Tysa river and an easy valley finish transit to Yasinya. The highest average moving speed of the trip: 4.6 km/h. Split: 9:02 min/km." }
      ]
    },
    "trip-2026-6": {
      season: "August 29 – September 4, 2026",
      title: "Seven-Day Traverse of Gorgany & Beskids: Yaremche — Perehinske — Slavske",
      region: "Gorgany — Skolivski Beskids",
      difficultyLabel: "Extreme (166.2 km)",
      route: "Yaremche — Pasichna — Stanymyr ridge — Perehinske — Mt. Popadya — Mt. Grofa (1728 m) — Vyshkivskyi Gorgan — Torun pass — Slavske",
      poi: ["Yaremche", "Pasichna", "Stanymyr ridge", "Mt. Kateryna", "Perehinske", "Mt. Petros Gorgan", "Mt. Popadya", "Mt. Grofa (1728 m)", "Vyshkivskyi Gorgan", "Torun pass", "Slavske"],
      shortDesc: "A 7-day extreme traverse covering 166.2 km from Yaremche through Gorgany (Stanymyr ridge, Mt. Grofa) and Skolivski Beskids to Slavske, with 8175 m of total elevation gain.",
      elevationProfile: [
        { point: "Yaremche (start)" },
        { point: "Pasichna — Syniachka — Shuvarenka" },
        { point: "Stanymyr ridge — Mt. Kateryna" },
        { point: "Polonyna Borevka — Perehinske" },
        { point: "Mt. Petros Gorgan — Mt. Popadya" },
        { point: "Mt. Parenky — Mt. Grofa (summit)" },
        { point: "Vyshkivskyi Gorgan — Mt. Magura" },
        { point: "Torun pass — Mt. Vysokyi Verkh" },
        { point: "Slavske (finish)" }
      ],
      daysBreakdown: [
        { date: "August 29", route: "Yaremche → Syniachka → Shuvarenka → Pasichna", notes: "Start from Yaremche. Moving time 4:33:37, pace 14:22 min/km. Steps 26,936, calories 1357 kcal." },
        { date: "August 30", route: "Pasichna → Zelena → Stanymyr ridge → Mt. Kateryna", notes: "Moving time 4:16:59, pace 14:24 min/km. Steps 25,652, calories 1271 kcal." },
        { date: "August 31", route: "Mt. Kateryna → Polonyna Borevka → Rizarnia → Perehinske", notes: "Longest day of the route (34.3 km, 46,654 steps). Moving time 7:22:25, pace 12:54 min/km. Calories 2445 kcal." },
        { date: "September 1", route: "Perehinske → Mt. Petros Gorgan → Koretvyna → Mt. Popadya → Mt. Mala Popadya", notes: "A high-mountain push day with the biggest specific elevation gain. Moving time 4:35:44, pace 19:05 min/km. Steps 7444, calories 1030 kcal." },
        { date: "September 2", route: "Mt. Mala Popadya → Mt. Parenky → Mt. Grofa → Polonyna Solotvynka", notes: "Highest point of the entire route (1728 m). Moving time 5:36:02, pace 16:43 min/km. Steps 31,526, calories 1433 kcal." },
        { date: "September 3", route: "Polonyna Solotvynka → Mt. Yarova Kychera → Vyshkivskyi Gorgan → Mt. Magura", notes: "Moving time 5:25:35, pace 13:33 min/km. Steps 33,720, calories 1713 kcal." },
        { date: "September 4 (Finish)", route: "Mt. Magura → Torun pass → Mt. Shchovb → Mt. Obnoha → Mt. Chorna Rypa → Mt. Vysokyi Verkh → Slavske", notes: "Final and longest day (36.42 km). Moving time 7:09:09, pace 11:47 min/km. Steps 47,816, calories 2596 kcal." }
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
