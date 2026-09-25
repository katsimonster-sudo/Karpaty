import os, json, re, requests, sys

# Global Mountain News & World Hiking Routes Database / Parser
GLOBAL_ROUTES_DB = [
    {
        "id": "world-tmb-mont-blanc",
        "title_ua": "Tour du Mont Blanc (Франція, Італія, Швейцарія)",
        "title_en": "Tour du Mont Blanc (France, Italy, Switzerland)",
        "region_ua": "Альпи (Європа)",
        "region_en": "Alps (Europe)",
        "distanceKm": 170,
        "elevationGainM": 10000,
        "durationDays": 11,
        "image_url": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80",
        "shortDesc_ua": "Один із найвеличніших пішохідних треків світу навколо масиву Монблан. 170 км через 3 країни з видом на альпійські льодовики та вершини.",
        "shortDesc_en": "One of the world's most iconic long-distance trekking routes around the Mont Blanc massif. 170 km across 3 countries with stunning alpine glacier views.",
        "carpathian_comparison_ua": "💡 Порівняння з Карпатами: Якщо ви пройшли автономний траверс Ґорґан (166 км), фізично ви повністю готові до Монблану!",
        "carpathian_comparison_en": "💡 Carpathian comparison: If you completed the Gorgany Traverse (166 km), you are physically 100% ready for Mont Blanc!"
    },
    {
        "id": "world-patagonia-w-trek",
        "title_ua": "W-Trek у Патагонії (Чилі)",
        "title_en": "W-Trek in Patagonia (Chile)",
        "region_ua": "Патагонія, Торрес-дель-Пайне",
        "region_en": "Patagonia, Torres del Paine",
        "distanceKm": 80,
        "elevationGainM": 3000,
        "durationDays": 5,
        "image_url": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
        "shortDesc_ua": "Легендарний маршрут у Південній Америці повз гранітні вежі Торрес, Французьку долину та сині крижані велетні льодовика Грей.",
        "shortDesc_en": "Legendary South American route passing the granite towers of Torres, the French Valley, and the blue ice walls of Glacier Grey.",
        "carpathian_comparison_ua": "💡 Погода на W-Trek славиться карпатськими вітрами,помноженими на 2 — готуйте надійний мембранний шар!",
        "carpathian_comparison_en": "💡 Weather on W-Trek features Carpathian-style winds multiplied by 2 — prepare a reliable hardshell membrane layer!"
    },
    {
        "id": "world-annapurna-circuit",
        "title_ua": "Annapurna Circuit (Непал, Гімалаї)",
        "title_en": "Annapurna Circuit (Nepal, Himalayas)",
        "region_ua": "Гімалаї (Непал)",
        "region_en": "Himalayas (Nepal)",
        "distanceKm": 160,
        "elevationGainM": 5416,
        "durationDays": 14,
        "image_url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        "shortDesc_ua": "Класичний гімалайський трек через перевал Торонг-Ла (5 416 м) від субтропічних долин до високогірних пустель Мустангу.",
        "shortDesc_en": "Classic Himalayan trek crossing Thorong La Pass (5,416m) from subtropical valleys to the high-altitude deserts of Mustang.",
        "carpathian_comparison_ua": "💡 Акліматизація тут вирішує все — сходження на Чорногору дає чудовий базовий напрацювання витривалості.",
        "carpathian_comparison_en": "💡 Acclimatization is key here — hiking Chornohora provides great foundational endurance for high altitudes."
    }
]

def generate_bilingual_post(item):
    title_ua = item["title_ua"]
    title_en = item["title_en"]
    region_ua = item["region_ua"]
    region_en = item["region_en"]
    dist = item["distanceKm"]
    elev = item["elevationGainM"]
    days = item["durationDays"]
    desc_ua = item["shortDesc_ua"]
    desc_en = item["shortDesc_en"]
    comp_ua = item["carpathian_comparison_ua"]
    comp_en = item["carpathian_comparison_en"]
    route_id = item["id"]

    caption = f"""🌐 СВІТОВІ МАРШРУТИ / WORLD TRAILS 🏔️

🇺🇦 {title_ua}
📍 Регіон: {region_ua}
👟 Відстань: {dist} км | 📈 Набір: +{elev} м | ⛺ Тривалість: {days} дн.

🌿 {desc_ua}

{comp_ua}

📲 📸 Більше деталей, огляди та треки дивіться на сайті:
👉 dozhity.space/trips.html

---

🇬🇧 {title_en}
📍 Region: {region_en}
👟 Distance: {dist} km | 📈 Elevation: +{elev} m | ⛺ Duration: {days} days

🌿 {desc_en}

{comp_en}

📲 📸 Read full guide, trail maps & gear breakdown on our site:
👉 dozhity.space/en/trips.html

#dozhity_space #worldtrails #hiking #mountains #carpathians #trekking #outdooradventure #hikeukraine #montblanc #patagonia #himalayas"""

    return caption

def save_global_news_dataset():
    posts = []
    for idx, r in enumerate(GLOBAL_ROUTES_DB, 1):
        posts.append({
            "num": idx,
            "id": r["id"],
            "title_ua": r["title_ua"],
            "title_en": r["title_en"],
            "image_url": r["image_url"],
            "link_ua": f"https://dozhity.space/trips.html",
            "link_en": f"https://dozhity.space/en/trips.html",
            "bilingual_caption": generate_bilingual_post(r)
        })
    
    out_file = r"C:\Users\katsimon.vv\.gemini\antigravity-ide\brain\689b2720-1e9e-4255-aff0-45d09d0462ee\scratch\global_bilingual_posts.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)
    
    print(f"Generated {len(posts)} bilingual global mountain posts -> {out_file}")

if __name__ == "__main__":
    save_global_news_dataset()
