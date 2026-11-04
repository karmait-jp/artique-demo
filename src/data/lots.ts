// Curated from data/met-objects.json. Museum objects are CC0; market details are illustrative.
export type Lang = 'fr' | 'en' | 'ja';
export type Localized = Record<Lang, string>;
export type SaleId = 'A' | 'B' | 'C' | 'D';
export interface Sale { id: SaleId; title: Localized; intro: Localized; offsetDays: number }
export interface Lot {
  id: string; saleId: SaleId; index: number; metId: number; image: string;
  title: Localized; attribution: Localized; description: Localized; condition: Localized;
  provenance: Localized; medium: Localized; date: Localized; dimensions: string;
  artistDeathYear: number | null; estimateLow: number; estimateHigh: number;
  sellerType: 'private' | 'pro'; shipping: { france: number; eu: number; world: number };
  objectURL: string; creditLine: string;
}

export const sales: Sale[] = [
  {
    "id": "A",
    "title": {
      "fr": "Art japonais : d’Edo à Meiji",
      "en": "Japanese Art: Edo to Meiji",
      "ja": "日本美術：江戸から明治"
    },
    "intro": {
      "fr": "L’estampe, la céramique et les arts du petit objet composent ce regard sur le Japon d’Edo à Meiji. Les paysages de Hiroshige et de Hokusai dialoguent avec les surfaces des porcelaines et des laques. Chaque pièce invite à observer le lien entre technique et usage. Les estimations et les états sont proposés à titre illustratif.",
      "en": "Prints, ceramics and small objects shape this view of Japan from Edo to Meiji. Landscapes by Hiroshige and Hokusai enter into dialogue with porcelain and lacquer surfaces. Each piece invites attention to the relationship between technique and use. Estimates and condition reports are illustrative.",
      "ja": "版画、陶磁器、小さな工芸品を通して、江戸から明治の日本を紹介します。広重や北斎の風景に、磁器や漆の表情を取り合わせました。技法と用途の関係に目を向けてご覧ください。見積と状態報告はデモ用の設定です。"
    },
    "offsetDays": 2
  },
  {
    "id": "B",
    "title": {
      "fr": "Art asiatique : Chine, Corée et au-delà",
      "en": "Asian Art: China, Korea and Beyond",
      "ja": "アジア美術：中国・朝鮮とその周辺"
    },
    "intro": {
      "fr": "La circulation des formes et des savoir-faire guide cette sélection asiatique. Le céladon de Goryeo côtoie les porcelaines chinoises, le jade et les arts de l’écrit. Des œuvres d’Iznik et d’Asie du Sud-Est élargissent ce parcours. Le catalogue privilégie des attributions mesurées et des descriptions précises.",
      "en": "The movement of forms and techniques guides this Asian selection. Goryeo celadon sits alongside Chinese porcelain, jade and the arts of writing. Works from Iznik and Southeast Asia extend the journey. The catalogue favours measured attributions and precise descriptions.",
      "ja": "造形と技法の交流を軸に、アジアの作品を選びました。高麗青磁、中国磁器、玉器、書の文化を紹介します。イズニクや東南アジアの作品が視野を広げます。帰属を慎重に示し、明瞭な記述を心がけたカタログです。"
    },
    "offsetDays": 5
  },
  {
    "id": "C",
    "title": {
      "fr": "Les débuts de la photographie au Japon",
      "en": "Early Photography of Japan",
      "ja": "日本の初期写真"
    },
    "intro": {
      "fr": "Portraits et vues de lieux composent un regard sur le Japon de la seconde moitié du XIXe siècle. Les tirages à l’albumine témoignent de la diffusion rapide d’un nouveau médium. Un ambrotype rappelle la dimension intime du portrait photographique. Toutes les images retenues représentent le Japon ou ses habitants.",
      "en": "Portraits and views form a picture of Japan in the second half of the 19th century. Albumen prints trace the rapid spread of a new medium. An ambrotype recalls the intimate scale of the photographic portrait. All selected images depict Japan or its people.",
      "ja": "19世紀後半の日本を、肖像と風景写真からたどります。鶏卵紙の作品は、新しい表現媒体の急速な広がりを伝えます。アンブロタイプからは写真肖像の親密な性格がうかがえます。日本または日本の人々を写した作品を選んでいます。"
    },
    "offsetDays": 7
  },
  {
    "id": "D",
    "title": {
      "fr": "Design et objets",
      "en": "Design & Objects",
      "ja": "デザインと工芸品"
    },
    "intro": {
      "fr": "Boîtes, vêtements et objets décoratifs partagent ici une attention à la matière. Les laques japonaises rencontrent le japonisme britannique et les textiles de l’ère Meiji. Un paravent rappelle le rôle des images dans l’aménagement de l’espace. La sélection explore les frontières souples entre beaux-arts, arts décoratifs et usage quotidien.",
      "en": "Boxes, garments and decorative objects share an attention to materials. Japanese lacquer meets British Japonisme and Meiji-period textiles. A folding screen recalls the role of images in shaping an interior. The selection explores the fluid boundaries between art, decoration and daily use.",
      "ja": "箱、衣服、装飾品を、素材へのまなざしで結びました。日本の漆工に、英国のジャポニスムと明治の染織を取り合わせています。屏風は、空間を形づくる絵画の役割を示します。美術、装飾、日々の用途の間にある緩やかな関係を紹介します。"
    },
    "offsetDays": 9
  }
];

export const lots: Lot[] = [
  {
    "id": "A-001",
    "saleId": "A",
    "index": 0,
    "metId": 56683,
    "image": "lots/met-56683.jpg",
    "title": {
      "fr": "Gorge sous la neige",
      "en": "Snowy Gorge",
      "ja": "雪の渓谷"
    },
    "attribution": {
      "fr": "Utagawa Hiroshige (1797–1858)",
      "en": "Utagawa Hiroshige (1797–1858)",
      "ja": "歌川広重（1797–1858）"
    },
    "description": {
      "fr": "Le format vertical souligne la profondeur d’un paysage enneigé, rythmé par les masses rocheuses. Le travail de la ligne et des aplats de couleur relève de l’impression sur bois. Ce témoignage de la culture de l’estampe se prête à une lecture attentive, de près.",
      "en": "The vertical format emphasises the depth of a snowy landscape articulated by rocky masses. The interplay of line and colour reflects the woodblock printing process. This example of print culture rewards close viewing.",
      "ja": "縦長の画面に岩塊を配し、雪景色の奥行きを表した作品。 線と色面の関係に木版印刷の技法がうかがえる。近くで細部を見ることで、版画表現の豊かさを味わえる。"
    },
    "condition": {
      "fr": "Légères rousseurs et patine du papier. Petites marques en marge. Couleurs conservant une bonne lisibilité ; rapport illustratif.",
      "en": "Light foxing and paper toning. Small marks at the margins. Colours remain legible; illustrative report.",
      "ja": "軽い点状の染みと紙の変色。余白に小さな擦れ。色彩の判読性は良好。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Estampe, encre et couleurs sur papier",
      "en": "Woodblock print; ink and color on paper",
      "ja": "木版画、紙に墨・色彩"
    },
    "date": {
      "fr": "Époque Edo, XIXe siècle",
      "en": "Edo period, 19th century",
      "ja": "江戸時代、19世紀"
    },
    "dimensions": "28 3/4 x 9 1/2 in. (73 x 24.1 cm)",
    "artistDeathYear": 1858,
    "estimateLow": 2500,
    "estimateHigh": 4000,
    "sellerType": "pro",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/56683",
    "creditLine": "Gift of Francis M. Weld, 1948"
  },
  {
    "id": "A-002",
    "saleId": "A",
    "index": 1,
    "metId": 37193,
    "image": "lots/met-37193.jpg",
    "title": {
      "fr": "Village côtier en hiver",
      "en": "Seaside Village in Winter",
      "ja": "冬の海辺の村"
    },
    "attribution": {
      "fr": "Katsushika Hokusai (1760–1849)",
      "en": "Katsushika Hokusai (1760–1849)",
      "ja": "葛飾北斎（1760–1849）"
    },
    "description": {
      "fr": "Cette planche détachée du Hokusai shashin gafu observe un village du littoral en hiver. Le travail de la ligne et des aplats de couleur relève de l’impression sur bois. Ce témoignage de la culture de l’estampe se prête à une lecture attentive, de près.",
      "en": "This detached plate from Hokusai’s Album of Realistic Pictures observes a coastal village in winter. The interplay of line and colour reflects the woodblock printing process. This example of print culture rewards close viewing.",
      "ja": "『北斎写真画譜』からの一葉で、冬の海辺の村を描く。 線と色面の関係に木版印刷の技法がうかがえる。近くで細部を見ることで、版画表現の豊かさを味わえる。"
    },
    "condition": {
      "fr": "Légères rousseurs et patine du papier. Petites marques en marge. Couleurs conservant une bonne lisibilité ; rapport illustratif.",
      "en": "Light foxing and paper toning. Small marks at the margins. Colours remain legible; illustrative report.",
      "ja": "軽い点状の染みと紙の変色。余白に小さな擦れ。色彩の判読性は良好。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Feuillet détaché d’un livre xylographié, encre et couleurs sur papier",
      "en": "Detached plate from a woodblock printed book; ink and color on paper",
      "ja": "木版本の一葉、紙に墨・色彩"
    },
    "date": {
      "fr": "1814",
      "en": "1814",
      "ja": "1814年"
    },
    "dimensions": "7 31/32 x 12 1/2 in. (20.3 x 31.8 cm)",
    "artistDeathYear": 1849,
    "estimateLow": 1500,
    "estimateHigh": 2500,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/37193",
    "creditLine": "The Francis Lathrop Collection, Purchase, Frederick C. Hewitt Fund, 1911"
  },
  {
    "id": "A-003",
    "saleId": "A",
    "index": 2,
    "metId": 78617,
    "image": "lots/met-78617.jpg",
    "title": {
      "fr": "Album d’images de Hiroshige",
      "en": "Hiroshige Picture Album",
      "ja": "広重画譜"
    },
    "attribution": {
      "fr": "Utagawa Hiroshige II (1826–1869)",
      "en": "Utagawa Hiroshige II (1826–1869)",
      "ja": "二代歌川広重（1826–1869）"
    },
    "description": {
      "fr": "Cet album imprimé prolonge le langage du paysage associé à l’atelier de Hiroshige. Le travail de la ligne et des aplats de couleur relève de l’impression sur bois. Ce témoignage de la culture de l’estampe se prête à une lecture attentive, de près.",
      "en": "This printed album continues the landscape language associated with Hiroshige’s workshop. The interplay of line and colour reflects the woodblock printing process. This example of print culture rewards close viewing.",
      "ja": "広重工房に連なる風景表現を伝える木版画譜。 線と色面の関係に木版印刷の技法がうかがえる。近くで細部を見ることで、版画表現の豊かさを味わえる。"
    },
    "condition": {
      "fr": "Légères rousseurs et patine du papier. Petites marques en marge. Couleurs conservant une bonne lisibilité ; rapport illustratif.",
      "en": "Light foxing and paper toning. Small marks at the margins. Colours remain legible; illustrative report.",
      "ja": "軽い点状の染みと紙の変色。余白に小さな擦れ。色彩の判読性は良好。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Livre xylographié, encre et couleurs sur papier",
      "en": "Woodblock printed book; ink and color on paper",
      "ja": "木版本、紙に墨・色彩"
    },
    "date": {
      "fr": "1862, an 2 de Bunkyū",
      "en": "1862 (Bunkyū 2)",
      "ja": "文久2年（1862）"
    },
    "dimensions": "6 15/16 × 4 5/16 in. (17.7 × 11 cm)",
    "artistDeathYear": 1869,
    "estimateLow": 1200,
    "estimateHigh": 1800,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/78617",
    "creditLine": "Purchase, Mary and James G. Wallach Foundation Gift, 2013"
  },
  {
    "id": "A-004",
    "saleId": "A",
    "index": 3,
    "metId": 54864,
    "image": "lots/met-54864.jpg",
    "title": {
      "fr": "Deux femmes tenant les fragments d’un miroir",
      "en": "Two Ladies, Each with a Portion of a Lacquered Mirror",
      "ja": "漆塗りの鏡の一部を持つ二人の女性"
    },
    "attribution": {
      "fr": "Kitagawa Utamaro (vers 1754–1806)",
      "en": "Kitagawa Utamaro (ca. 1754–1806)",
      "ja": "喜多川歌麿（1754頃–1806）"
    },
    "description": {
      "fr": "Deux figures féminines et les fragments d’un miroir laqué composent une scène d’intimité. Le travail de la ligne et des aplats de couleur relève de l’impression sur bois. Ce témoignage de la culture de l’estampe se prête à une lecture attentive, de près.",
      "en": "Two female figures and portions of a lacquered mirror form an intimate composition. The interplay of line and colour reflects the woodblock printing process. This example of print culture rewards close viewing.",
      "ja": "二人の女性と漆塗りの鏡を題材に、親密な場面を構成している。 線と色面の関係に木版印刷の技法がうかがえる。近くで細部を見ることで、版画表現の豊かさを味わえる。"
    },
    "condition": {
      "fr": "Légères rousseurs et patine du papier. Petites marques en marge. Couleurs conservant une bonne lisibilité ; rapport illustratif.",
      "en": "Light foxing and paper toning. Small marks at the margins. Colours remain legible; illustrative report.",
      "ja": "軽い点状の染みと紙の変色。余白に小さな擦れ。色彩の判読性は良好。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Estampe, encre et couleurs sur papier",
      "en": "Woodblock print; ink and color on paper",
      "ja": "木版画、紙に墨・色彩"
    },
    "date": {
      "fr": "Années 1790",
      "en": "1790s",
      "ja": "1790年代"
    },
    "dimensions": "H. 18 5/8 in. (47.3 cm); W. 7 5/8 in. (19.4 cm)",
    "artistDeathYear": 1806,
    "estimateLow": 1800,
    "estimateHigh": 2800,
    "sellerType": "pro",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/54864",
    "creditLine": "H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929"
  },
  {
    "id": "A-005",
    "saleId": "A",
    "index": 4,
    "metId": 52251,
    "image": "lots/met-52251.jpg",
    "title": {
      "fr": "Grand bol aux médaillons floraux",
      "en": "Large Bowl with Flower Medallions",
      "ja": "花文の大鉢"
    },
    "attribution": {
      "fr": "Japon, époque Edo",
      "en": "Japan, Edo period",
      "ja": "日本、江戸時代"
    },
    "description": {
      "fr": "Des médaillons floraux en bleu de cobalt animent la couverte céladon de ce grand bol d’Arita. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "Cobalt-blue floral medallions animate the celadon glaze of this large Arita bowl. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "有田の大鉢。青磁釉の下に青い花文を配している。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine d’Arita, couverte céladon, décor bleu de cobalt et bord peint au fer",
      "en": "Porcelain with celadon glaze, cobalt-blue patterns under celadon glaze, and iron-painted rim (Hizen ware, Arita type)",
      "ja": "有田焼、磁器、青磁釉下に染付、鉄彩の口縁"
    },
    "date": {
      "fr": "Vers 1660–1680",
      "en": "ca. 1660s–80s",
      "ja": "1660–1680年代頃"
    },
    "dimensions": "H. 4 5/8 in. (11.7 cm); Diam. 12 1/2 in. (31.8 cm)",
    "artistDeathYear": null,
    "estimateLow": 1800,
    "estimateHigh": 2800,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/52251",
    "creditLine": "The Harry G. C. Packard Collection of Asian Art, Gift of Harry G. C. Packard, and Purchase, Fletcher, Rogers, Harris Brisbane Dick, and Louis V. Bell Funds, Joseph Pulitzer Bequest, and The Annenberg Fund Inc. Gift, 1975"
  },
  {
    "id": "A-006",
    "saleId": "A",
    "index": 5,
    "metId": 50328,
    "image": "lots/met-50328.jpg",
    "title": {
      "fr": "Bouteille à saké aux fleurs et graminées",
      "en": "Sake Bottle with Flowers and Grasses",
      "ja": "花草文の徳利"
    },
    "attribution": {
      "fr": "Japon, époque Edo",
      "en": "Japan, Edo period",
      "ja": "日本、江戸時代"
    },
    "description": {
      "fr": "Le décor de fleurs et de graminées accompagne le volume resserré de cette bouteille à saké. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "Flowers and grasses follow the compact volume of this porcelain sake bottle. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "花と草の染付文様が、引き締まった徳利の器形に沿って描かれている。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine d’Arita à décor de cobalt sous couverte",
      "en": "Porcelain with cobalt blue under transparent glaze (Hizen ware, Arita type)",
      "ja": "有田焼、磁器、染付"
    },
    "date": {
      "fr": "Début du XVIIIe siècle",
      "en": "early 18th century",
      "ja": "18世紀初頭"
    },
    "dimensions": "H. 6 3/8 in. (16.1 cm); Diam. 3 1/2 in. (8.9 cm); Diam. of rim 2 1/8 in. (5.4 cm); Diam. of foot 1 1/2 in. (3.8 cm)",
    "artistDeathYear": null,
    "estimateLow": 700,
    "estimateHigh": 1100,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/50328",
    "creditLine": "The Harry G. C. Packard Collection of Asian Art, Gift of Harry G. C. Packard, and Purchase, Fletcher, Rogers, Harris Brisbane Dick, and Louis V. Bell Funds, Joseph Pulitzer Bequest, and The Annenberg Fund Inc. Gift, 1975"
  },
  {
    "id": "A-007",
    "saleId": "A",
    "index": 6,
    "metId": 48822,
    "image": "lots/met-48822.jpg",
    "title": {
      "fr": "Plat Kutani aux émaux polychromes",
      "en": "Kutani Enamelled Dish",
      "ja": "九谷焼の色絵皿"
    },
    "attribution": {
      "fr": "Japon, époque Edo",
      "en": "Japan, Edo period",
      "ja": "日本、江戸時代"
    },
    "description": {
      "fr": "La palette d’émaux sur couverte affirme le caractère décoratif de ce plat de Kutani. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "Overglaze enamels give this Kutani dish its decorative character. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "上絵の色彩を生かした、装飾性のある九谷焼の皿。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine de Kutani à émaux polychromes sur couverte",
      "en": "Porcelain with polychrome overglaze enamels (Kutani ware)",
      "ja": "九谷焼、磁器、色絵"
    },
    "date": {
      "fr": "Milieu du XIXe siècle",
      "en": "mid-19th century",
      "ja": "19世紀中頃"
    },
    "dimensions": "H. 1 13/16 in. (4.6 cm); Diam. 12 5/8 in. (32.1 cm)",
    "artistDeathYear": null,
    "estimateLow": 600,
    "estimateHigh": 900,
    "sellerType": "pro",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/48822",
    "creditLine": "Edward C. Moore Collection, Bequest of Edward C. Moore, 1891"
  },
  {
    "id": "A-008",
    "saleId": "A",
    "index": 7,
    "metId": 59356,
    "image": "lots/met-59356.jpg",
    "title": {
      "fr": "Netsuke en bois, époque Edo",
      "en": "Wood Netsuke, Edo Period",
      "ja": "木彫根付、江戸時代"
    },
    "attribution": {
      "fr": "Japon, époque Edo",
      "en": "Japan, Edo period",
      "ja": "日本、江戸時代"
    },
    "description": {
      "fr": "Ce netsuke en bois appartient à la tradition des petits accessoires sculptés du vêtement japonais. Sa fonction était de retenir à la ceinture un accessoire suspendu. La sculpture doit être appréciée sous plusieurs angles, à l’échelle de la main.",
      "en": "This wood netsuke belongs to the tradition of small carved accessories worn with Japanese dress. Its function was to secure a suspended accessory at the sash. The carving is intended to be viewed from several angles, at the scale of the hand.",
      "ja": "着物に伴う小さな彫刻装身具の伝統を伝える、木彫の根付。 帯から下げる提物の留め具として使われた。手の中でさまざまな角度から見ることを前提とした彫刻である。"
    },
    "condition": {
      "fr": "Patine d’usage et légers frottements. Petites marques de manipulation. Sculpture lisible ; rapport illustratif.",
      "en": "Handling patina and light rubbing. Small handling marks. Carving remains legible; illustrative report.",
      "ja": "使用に伴う古色と軽い擦れ。小さな取り扱い痕。彫刻は明瞭。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Bois",
      "en": "Wood",
      "ja": "木"
    },
    "date": {
      "fr": "XVIIIe siècle",
      "en": "18th century",
      "ja": "18世紀"
    },
    "dimensions": "H. 1 3/4 in. (4.4 cm); W. 1 7/8 in. (4.8 cm)",
    "artistDeathYear": null,
    "estimateLow": 400,
    "estimateHigh": 600,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/59356",
    "creditLine": "Gift of Mrs. Russell Sage, 1910"
  },
  {
    "id": "A-009",
    "saleId": "A",
    "index": 8,
    "metId": 59414,
    "image": "lots/met-59414.jpg",
    "title": {
      "fr": "Netsuke en bois, XIXe siècle",
      "en": "Wood Netsuke, 19th Century",
      "ja": "木彫根付、19世紀"
    },
    "attribution": {
      "fr": "Japon, époque Edo",
      "en": "Japan, Edo period",
      "ja": "日本、江戸時代"
    },
    "description": {
      "fr": "Le sculpteur tire parti d’un petit volume de bois destiné à être porté et manipulé. Sa fonction était de retenir à la ceinture un accessoire suspendu. La sculpture doit être appréciée sous plusieurs angles, à l’échelle de la main.",
      "en": "The carver works a small volume of wood intended to be worn and handled. Its function was to secure a suspended accessory at the sash. The carving is intended to be viewed from several angles, at the scale of the hand.",
      "ja": "身に着け、手に取ることを前提とした、小さな木の量感を生かす根付。 帯から下げる提物の留め具として使われた。手の中でさまざまな角度から見ることを前提とした彫刻である。"
    },
    "condition": {
      "fr": "Patine d’usage et légers frottements. Petites marques de manipulation. Sculpture lisible ; rapport illustratif.",
      "en": "Handling patina and light rubbing. Small handling marks. Carving remains legible; illustrative report.",
      "ja": "使用に伴う古色と軽い擦れ。小さな取り扱い痕。彫刻は明瞭。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Bois",
      "en": "Wood",
      "ja": "木"
    },
    "date": {
      "fr": "XIXe siècle",
      "en": "19th century",
      "ja": "19世紀"
    },
    "dimensions": "H. 1 5/8 in. square (4.1 cm); D. 1/2 in. (1.3 cm)",
    "artistDeathYear": null,
    "estimateLow": 300,
    "estimateHigh": 500,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/59414",
    "creditLine": "Gift of Mrs. Russell Sage, 1910"
  },
  {
    "id": "A-010",
    "saleId": "A",
    "index": 9,
    "metId": 58507,
    "image": "lots/met-58507.jpg",
    "title": {
      "fr": "Inrō à décor de fils métalliques",
      "en": "Inrō with Silver Metal Thread",
      "ja": "銀線装飾の印籠"
    },
    "attribution": {
      "fr": "Japon, époque Edo",
      "en": "Japan, Edo period",
      "ja": "日本、江戸時代"
    },
    "description": {
      "fr": "L’application de fils métalliques sur un fond métallique distingue le décor de cet inrō en bois laqué. Les différentes matières créent un jeu de reflets à petite échelle. La qualité du décor s’apprécie dans le rapport entre la surface et le volume.",
      "en": "Applied silver metal thread over a metal ground distinguishes this lacquered wood inrō. The materials create shifting reflections on an intimate scale. The decoration is best appreciated in the relationship between surface and volume.",
      "ja": "金属地に銀色の金属糸を施した装飾が特徴的な、漆塗りの印籠。 小さな器面に素材の異なる光沢が生まれている。表面の装飾と立体の関係に見どころがある。"
    },
    "condition": {
      "fr": "Micro-rayures sur la laque. Légère usure des rehauts métalliques. Petits frottements aux angles ; rapport illustratif.",
      "en": "Fine scratches to the lacquer. Light wear to metallic decoration. Small rubbed areas at the corners; illustrative report.",
      "ja": "漆面に細かな擦り傷。金属装飾に軽い摩耗。角に小さな擦れ。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Bois laqué, fils de métal argenté sur fond métallique",
      "en": "Lacquered wood with silver metal thread applied over metal ground",
      "ja": "漆塗木製、金属地に銀色金属糸の装飾"
    },
    "date": {
      "fr": "XVIIIe–XIXe siècle",
      "en": "18th–19th century",
      "ja": "18–19世紀"
    },
    "dimensions": "H. 2 1/16 in. (5.3 cm); W. 2 1/4 in. (5.7 cm); D. 13/16 in. (2.1 cm)",
    "artistDeathYear": null,
    "estimateLow": 900,
    "estimateHigh": 1400,
    "sellerType": "pro",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/58507",
    "creditLine": "Edward C. Moore Collection, Bequest of Edward C. Moore, 1891"
  },
  {
    "id": "A-011",
    "saleId": "A",
    "index": 10,
    "metId": 58510,
    "image": "lots/met-58510.jpg",
    "title": {
      "fr": "Inrō dans sa monture de bronze ajouré",
      "en": "Inrō in an Openwork Bronze Holder",
      "ja": "透彫銅製の外装を備えた印籠"
    },
    "attribution": {
      "fr": "Japon, époque Edo",
      "en": "Japan, Edo period",
      "ja": "日本、江戸時代"
    },
    "description": {
      "fr": "Une monture ajourée en bronze enveloppe le corps à fond nashiji brun de cet inrō. Les différentes matières créent un jeu de reflets à petite échelle. La qualité du décor s’apprécie dans le rapport entre la surface et le volume.",
      "en": "An openwork bronze holder encloses the brown nashiji body of this inrō. The materials create shifting reflections on an intimate scale. The decoration is best appreciated in the relationship between surface and volume.",
      "ja": "褐色の梨子地を、透彫の銅製外装が包む印籠。 小さな器面に素材の異なる光沢が生まれている。表面の装飾と立体の関係に見どころがある。"
    },
    "condition": {
      "fr": "Micro-rayures sur la laque. Légère usure des rehauts métalliques. Petits frottements aux angles ; rapport illustratif.",
      "en": "Fine scratches to the lacquer. Light wear to metallic decoration. Small rubbed areas at the corners; illustrative report.",
      "ja": "漆面に細かな擦り傷。金属装飾に軽い摩耗。角に小さな擦れ。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Laque nashiji brune, monture de bronze ajouré, netsuke en métal",
      "en": "Brown nashiji in an openwork bronze holder; metal netsuke",
      "ja": "褐色梨子地、透彫銅製外装、金属製根付"
    },
    "date": {
      "fr": "XIXe siècle",
      "en": "19th century",
      "ja": "19世紀"
    },
    "dimensions": "H. 2 1/4 in. (5.7 cm); W. 1 7/8 in. (4.8 cm)",
    "artistDeathYear": null,
    "estimateLow": 800,
    "estimateHigh": 1200,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/58510",
    "creditLine": "Edward C. Moore Collection, Bequest of Edward C. Moore, 1891"
  },
  {
    "id": "A-012",
    "saleId": "A",
    "index": 11,
    "metId": 24623,
    "image": "lots/met-24623.jpg",
    "title": {
      "fr": "Tsuba en shakudō et métaux précieux",
      "en": "Shakudō Sword Guard",
      "ja": "赤銅と色金の鐔"
    },
    "attribution": {
      "fr": "Ishiguro Masayoshi (1772–après 1851)",
      "en": "Ishiguro Masayoshi (1772–after 1851)",
      "ja": "石黒政美（1772–1851以降）"
    },
    "description": {
      "fr": "Cette garde de sabre associe plusieurs alliages pour jouer sur les contrastes de patine. La fonte ou le travail du métal donne à la surface son relief et sa densité. Les variations de patine contribuent à la lecture du volume.",
      "en": "This sword guard combines several alloys to exploit contrasts in patina. Casting or metalworking gives the surface its relief and density. Variations in patina contribute to the reading of the volume.",
      "ja": "複数の色金を組み合わせ、金属の色調の対比を生かした鐔。 鋳造や金属加工による起伏と質感を備えている。古色の変化が立体の見え方に深みを与える。"
    },
    "condition": {
      "fr": "Patine de surface irrégulière. Légères marques de manipulation. Petites usures des reliefs ; rapport illustratif.",
      "en": "Uneven surface patina. Light handling marks. Minor wear to raised areas; illustrative report.",
      "ja": "表面の古色に変化。軽い取り扱い痕。突出部に小さな摩耗。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Shakudō, or, shibuichi et cuivre",
      "en": "Copper-gold alloy (shakudō), gold, copper-silver alloy (shibuichi), copper",
      "ja": "赤銅、金、四分一、銅"
    },
    "date": {
      "fr": "XIXe siècle",
      "en": "19th century",
      "ja": "19世紀"
    },
    "dimensions": "H. 2 7/8 in. (7.3 cm); W. 2 5/8 in. (6.7 cm); thickness 5/16 in. (0.8 cm); Wt. 5.4 oz. (153.1 g)",
    "artistDeathYear": null,
    "estimateLow": 1200,
    "estimateHigh": 1800,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/24623",
    "creditLine": "The Howard Mansfield Collection, Gift of Howard Mansfield, 1936"
  },
  {
    "id": "B-001",
    "saleId": "B",
    "index": 0,
    "metId": 42301,
    "image": "lots/met-42301.jpg",
    "title": {
      "fr": "Maebyeong aux grues et nuages",
      "en": "Maebyeong with Cranes and Clouds",
      "ja": "雲鶴文の梅瓶"
    },
    "attribution": {
      "fr": "Corée, dynastie Goryeo (918–1392)",
      "en": "Korea, Goryeo dynasty (918–1392)",
      "ja": "朝鮮、高麗時代（918–1392）"
    },
    "description": {
      "fr": "Des grues et des nuages incrustés se déploient sous la couverte céladon de ce maebyeong de Goryeo. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "Inlaid cranes and clouds unfold beneath the celadon glaze of this Goryeo maebyeong. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "高麗青磁の梅瓶。象嵌の雲鶴文が青磁釉の下に広がる。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Grès à décor incrusté sous couverte céladon",
      "en": "Stoneware with inlaid decoration under celadon glaze",
      "ja": "陶器、象嵌、青磁釉"
    },
    "date": {
      "fr": "Seconde moitié du XIIe siècle",
      "en": "second half 12th century",
      "ja": "12世紀後半"
    },
    "dimensions": "H. 13 3/16 in. (33.5 cm); W. 7 1/2 in. (19.1 cm)",
    "artistDeathYear": null,
    "estimateLow": 8000,
    "estimateHigh": 12000,
    "sellerType": "pro",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/42301",
    "creditLine": "Gift of Sadajiro Yamanaka, 1911"
  },
  {
    "id": "B-002",
    "saleId": "B",
    "index": 1,
    "metId": 45432,
    "image": "lots/met-45432.jpg",
    "title": {
      "fr": "Jarre-lune en porcelaine blanche",
      "en": "Porcelain Moon Jar",
      "ja": "白磁の月壺"
    },
    "attribution": {
      "fr": "Corée, dynastie Joseon (1392–1910)",
      "en": "Korea, Joseon dynasty (1392–1910)",
      "ja": "朝鮮、朝鮮王朝時代（1392–1910）"
    },
    "description": {
      "fr": "Le volume ample de cette jarre-lune repose sur la retenue d’une surface en porcelaine blanche. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "The ample volume of this moon jar relies on the restraint of its white porcelain surface. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "ふくよかな量感と白磁の控えめな表情が調和する月壺。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine",
      "en": "Porcelain",
      "ja": "磁器"
    },
    "date": {
      "fr": "Seconde moitié du XVIIIe siècle",
      "en": "second half 18th century",
      "ja": "18世紀後半"
    },
    "dimensions": "H. 15 1/4 in. (38.7 cm); Diam. 13 in. (33 cm); Diam. of rim 5 1/2 in. (14 cm); Diam. of foot 4 7/8 in. (12.4 cm)",
    "artistDeathYear": null,
    "estimateLow": 7000,
    "estimateHigh": 10000,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/45432",
    "creditLine": "The Harry G. C. Packard Collection of Asian Art, Gift of Harry G. C. Packard, and Purchase, Fletcher, Rogers, Harris Brisbane Dick, and Louis V. Bell Funds, Joseph Pulitzer Bequest, and The Annenberg Fund Inc. Gift, 1975"
  },
  {
    "id": "B-003",
    "saleId": "B",
    "index": 2,
    "metId": 76452,
    "image": "lots/met-76452.jpg",
    "title": {
      "fr": "Vase illustrant L’Histoire de la robe bleue",
      "en": "Vase with a Scene from The Story of the Blue Robe",
      "ja": "『青袍記』の場面を描く壺"
    },
    "attribution": {
      "fr": "Chine, dynastie Qing, période Shunzhi (1644–1661)",
      "en": "China, Qing dynasty, Shunzhi period (1644–61)",
      "ja": "中国、清、順治年間（1644–1661）"
    },
    "description": {
      "fr": "Une scène narrative de L’Histoire de la robe bleue se déploie sur la panse de ce vase de Jingdezhen. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "A narrative scene from The Story of the Blue Robe unfolds around this Jingdezhen vase. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "景徳鎮の壺。胴部に『青袍記』に基づく物語の場面を描く。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine de Jingdezhen, bleu de cobalt sous couverte et émaux polychromes",
      "en": "Porcelain painted with cobalt blue under and colored enamels over transparent glaze (Jingdezhen ware)",
      "ja": "景徳鎮、磁器、染付と色絵"
    },
    "date": {
      "fr": "Milieu du XVIIe siècle",
      "en": "mid-17th century",
      "ja": "17世紀中頃"
    },
    "dimensions": "H. 14 3/8 in. (36.5 cm); Diam. 5 1/2 in. (14 cm) / Diam. of rim: 5 in. (12.7 cm) / Diam. of base: 4 15/16 in. (12.5 cm)",
    "artistDeathYear": null,
    "estimateLow": 3000,
    "estimateHigh": 5000,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/76452",
    "creditLine": "Gift of David Griffin, in honor of James C. Y. Watt, 2010"
  },
  {
    "id": "B-004",
    "saleId": "B",
    "index": 3,
    "metId": 41925,
    "image": "lots/met-41925.jpg",
    "title": {
      "fr": "Livre en jade néphrite",
      "en": "Jade Book",
      "ja": "玉冊"
    },
    "attribution": {
      "fr": "Chine, dynastie Qing (1644–1911)",
      "en": "China, Qing dynasty (1644–1911)",
      "ja": "中国、清（1644–1911）"
    },
    "description": {
      "fr": "La forme du livre est ici transposée dans le jade néphrite, matériau prisé des lettrés et de la cour. La taille et le polissage mettent en valeur la densité de la pierre. L’objet associe la culture de l’écrit à un travail lapidaire de précision.",
      "en": "The form of a book is translated into nephrite jade, a material prized by scholars and the court. Carving and polishing reveal the density of the stone. The object brings the culture of writing together with precise lapidary work.",
      "ja": "文人や宮廷で珍重された軟玉を用い、書物の形式を表した玉冊。 彫刻と研磨によって石の緻密さを引き出している。書の文化と精緻な玉彫を結び付けた作品。"
    },
    "condition": {
      "fr": "Légères marques de surface. Inclusions et nuances naturelles de la pierre. Petits frottements aux bords ; rapport illustratif.",
      "en": "Light surface marks. Natural inclusions and variations in the stone. Minor edge rubbing; illustrative report.",
      "ja": "表面に軽い痕跡。石の天然の内包物と色調の変化。縁に小さな擦れ。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Jade néphrite",
      "en": "Jade (nephrite)",
      "ja": "軟玉"
    },
    "date": {
      "fr": "XVIIIe siècle",
      "en": "18th century",
      "ja": "18世紀"
    },
    "dimensions": "H. 5 9/16 in. (14.1 cm); W. 3 3/4 in. (9.5 cm); L. 1 9/16 in. (4 cm)",
    "artistDeathYear": null,
    "estimateLow": 5000,
    "estimateHigh": 8000,
    "sellerType": "pro",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/41925",
    "creditLine": "Gift of Heber R. Bishop, 1902"
  },
  {
    "id": "B-005",
    "saleId": "B",
    "index": 4,
    "metId": 42528,
    "image": "lots/met-42528.jpg",
    "title": {
      "fr": "Repose-pinceaux à inscription persane",
      "en": "Brush Rest with Persian Inscription",
      "ja": "ペルシア語銘の筆架"
    },
    "attribution": {
      "fr": "Chine, dynastie Ming, marque et époque Zhengde (1506–1521)",
      "en": "China, Ming dynasty, Zhengde mark and period (1506–21)",
      "ja": "中国、明、正徳銘・同時代（1506–1521）"
    },
    "description": {
      "fr": "Une inscription persane orne ce repose-pinceaux en porcelaine de Jingdezhen. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "A Persian inscription adorns this Jingdezhen porcelain brush rest. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "ペルシア語の銘を染付で施した景徳鎮の筆架。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine de Jingdezhen à décor de cobalt sous couverte",
      "en": "Porcelain painted with cobalt blue under transparent glaze (Jingdezhen ware)",
      "ja": "景徳鎮、磁器、染付"
    },
    "date": {
      "fr": "Début du XVIe siècle",
      "en": "early 16th century",
      "ja": "16世紀初頭"
    },
    "dimensions": "W. 8 3/4 in. (22.2 cm)",
    "artistDeathYear": null,
    "estimateLow": 2500,
    "estimateHigh": 4000,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/42528",
    "creditLine": "Rogers Fund, 1918"
  },
  {
    "id": "B-006",
    "saleId": "B",
    "index": 5,
    "metId": 934485,
    "image": "lots/met-934485.jpg",
    "title": {
      "fr": "Plat d’Iznik",
      "en": "Iznik Ceramic Dish",
      "ja": "イズニク陶器の皿"
    },
    "attribution": {
      "fr": "Turquie, production d’Iznik",
      "en": "Turkey, Iznik production",
      "ja": "トルコ、イズニク"
    },
    "description": {
      "fr": "La surface peinte et glaçurée de ce plat relève de la production ottomane d’Iznik. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "The painted and glazed surface of this dish belongs to the Ottoman ceramic tradition of Iznik. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "彩色と釉薬を生かした、オスマン朝イズニク陶器の皿。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Pâte siliceuse peinte et glaçurée",
      "en": "Stonepaste; painted and glazed",
      "ja": "フリット陶器、彩色・施釉"
    },
    "date": {
      "fr": "XVIe siècle",
      "en": "16th century",
      "ja": "16世紀"
    },
    "dimensions": "D. 1 5/8 in. (4.2 cm) / Diam. 10 13/16 in. (27.5 cm)",
    "artistDeathYear": null,
    "estimateLow": 1800,
    "estimateHigh": 2800,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/934485",
    "creditLine": "Gift of Serga Nadler, in memory of Daniel Nadler, 2026"
  },
  {
    "id": "B-007",
    "saleId": "B",
    "index": 6,
    "metId": 39599,
    "image": "lots/met-39599.jpg",
    "title": {
      "fr": "Carreau découpé à décor floral",
      "en": "Shaped Tile with Floral Decoration",
      "ja": "花文の異形タイル"
    },
    "attribution": {
      "fr": "Vietnam, XVe siècle",
      "en": "Vietnam, 15th century",
      "ja": "ベトナム、15世紀"
    },
    "description": {
      "fr": "La découpe de ce carreau et son décor floral rappellent la place de la céramique dans l’ornement architectural. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "The shaped outline and floral decoration recall the role of ceramics in architectural ornament. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "異形の輪郭と花文が、建築装飾における陶磁器の役割を伝えるタイル。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine à décor bleu sous couverte",
      "en": "Porcelain with underglaze blue decoration",
      "ja": "磁器、染付"
    },
    "date": {
      "fr": "XVe siècle",
      "en": "15th century",
      "ja": "15世紀"
    },
    "dimensions": "H. 13 in. (33 cm); W. 10 in. (25.4 cm); D. 1 3/8 in. (3.5 cm)",
    "artistDeathYear": null,
    "estimateLow": 700,
    "estimateHigh": 1100,
    "sellerType": "pro",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/39599",
    "creditLine": "Gift of Mr. and Mrs. Frederick P. Rose, 1996"
  },
  {
    "id": "B-008",
    "saleId": "B",
    "index": 7,
    "metId": 457783,
    "image": "lots/met-457783.jpg",
    "title": {
      "fr": "Deux lettres de la fin de l’époque moghole",
      "en": "Two Late Mughal Letters",
      "ja": "ムガル朝後期の書簡二通"
    },
    "attribution": {
      "fr": "Inde, époque moghole tardive",
      "en": "India, late Mughal period",
      "ja": "インド、ムガル朝後期"
    },
    "description": {
      "fr": "Ces deux lettres témoignent du soin porté à l’écriture dans le monde moghol tardif. L’encre et l’or hiérarchisent l’espace de la page. La composition se lit autant comme un document que comme un travail graphique.",
      "en": "These two letters reflect the attention paid to writing in the late Mughal world. Ink and gold establish a hierarchy across the page. The composition may be read both as a document and as a graphic work.",
      "ja": "ムガル朝後期の書字文化を伝える二通の書簡。 墨と金が紙面に秩序を与えている。資料として、また書の造形として鑑賞できる。"
    },
    "condition": {
      "fr": "Papier légèrement patiné. Marques de plis et petites rousseurs. Écriture lisible ; rapport illustratif.",
      "en": "Lightly toned paper. Fold marks and small spots of foxing. Writing remains legible; illustrative report.",
      "ja": "紙に軽い変色。折れ跡と小さな染み。文字は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Encre et or sur papier",
      "en": "Ink and gold on paper",
      "ja": "紙に墨・金"
    },
    "date": {
      "fr": "Vers 1780",
      "en": "ca. 1780",
      "ja": "1780年頃"
    },
    "dimensions": "H. 40 in (101.6 cm) / W. 16 in. (40.6 cm)",
    "artistDeathYear": null,
    "estimateLow": 900,
    "estimateHigh": 1400,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/457783",
    "creditLine": "Gift of Terence McInerney, 2012"
  },
  {
    "id": "B-009",
    "saleId": "B",
    "index": 8,
    "metId": 74426,
    "image": "lots/met-74426.jpg",
    "title": {
      "fr": "Flûte verticale aux chrysanthèmes et grues",
      "en": "Vertical Flute with Chrysanthemums and Cranes",
      "ja": "菊と鶴の文様を施した縦笛"
    },
    "attribution": {
      "fr": "Corée, dynastie Goryeo (918–1392)",
      "en": "Korea, Goryeo dynasty (918–1392)",
      "ja": "朝鮮、高麗時代（918–1392）"
    },
    "description": {
      "fr": "Chrysanthèmes, grues et nuages composent le décor incrusté de cette flûte en céladon de Goryeo. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "Chrysanthemums, cranes and clouds form the inlaid decoration of this Goryeo celadon flute. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "菊、鶴、雲の象嵌文を施した、高麗青磁の縦笛。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Grès à décor incrusté sous couverte céladon",
      "en": "Stoneware with inlaid design under celadon glaze",
      "ja": "陶器、象嵌、青磁釉"
    },
    "date": {
      "fr": "Début du XIIIe siècle",
      "en": "early 13th century",
      "ja": "13世紀初頭"
    },
    "dimensions": "L. 14 3/8 in. (36.5 cm)",
    "artistDeathYear": null,
    "estimateLow": 3500,
    "estimateHigh": 5500,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/74426",
    "creditLine": "Purchase, Friends of Asian Art Gifts, 2008"
  },
  {
    "id": "B-010",
    "saleId": "B",
    "index": 9,
    "metId": 39268,
    "image": "lots/met-39268.jpg",
    "title": {
      "fr": "Figure masculine debout, dignitaire présumé",
      "en": "Standing Male Figure, Possibly a Ruler",
      "ja": "男性立像、おそらく統治者"
    },
    "attribution": {
      "fr": "Thaïlande ou Indonésie, style khmer-srivijaya",
      "en": "Thailand or Indonesia, Khmer-Shrivijaya style",
      "ja": "タイまたはインドネシア、クメール＝シュリーヴィジャヤ様式"
    },
    "description": {
      "fr": "Cette figure masculine en bronze conserve une identification prudente, celle d’un possible dignitaire. La fonte ou le travail du métal donne à la surface son relief et sa densité. Les variations de patine contribuent à la lecture du volume.",
      "en": "This bronze male figure retains a cautious identification as a possible ruler. Casting or metalworking gives the surface its relief and density. Variations in patina contribute to the reading of the volume.",
      "ja": "青銅製の男性立像で、統治者を表す可能性が指摘されている。 鋳造や金属加工による起伏と質感を備えている。古色の変化が立体の見え方に深みを与える。"
    },
    "condition": {
      "fr": "Patine de surface irrégulière. Légères marques de manipulation. Petites usures des reliefs ; rapport illustratif.",
      "en": "Uneven surface patina. Light handling marks. Minor wear to raised areas; illustrative report.",
      "ja": "表面の古色に変化。軽い取り扱い痕。突出部に小さな摩耗。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Bronze",
      "en": "Bronze",
      "ja": "青銅"
    },
    "date": {
      "fr": "XIIe–XIIIe siècle",
      "en": "12th–13th century",
      "ja": "12–13世紀"
    },
    "dimensions": "H. 15 in. (38.1 cm)",
    "artistDeathYear": null,
    "estimateLow": 6000,
    "estimateHigh": 9000,
    "sellerType": "pro",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/39268",
    "creditLine": "Purchase, The J. H. W. Thompson Foundation Gift, 1996"
  },
  {
    "id": "C-001",
    "saleId": "C",
    "index": 0,
    "metId": 266362,
    "image": "lots/met-266362.jpg",
    "title": {
      "fr": "Vues et costumes du Japon",
      "en": "Views and Costumes of Japan",
      "ja": "日本の風景と風俗"
    },
    "attribution": {
      "fr": "Raimund von Stillfried (1839–1911)",
      "en": "Raimund von Stillfried (1839–1911)",
      "ja": "ライムント・フォン・シュティルフリート（1839–1911）"
    },
    "description": {
      "fr": "Cet ensemble de vues et de costumes associe l’enregistrement photographique à la couleur appliquée à la main. Le procédé à l’albumine produit une image aux nuances fines, caractéristique du XIXe siècle. Le tirage invite à observer le cadrage et les détails du Japon de cette époque.",
      "en": "This group of views and costumes combines the photographic record with hand-applied colour. The albumen process produces the fine tonal range characteristic of 19th-century photographs. The print invites attention to framing and to details of Japan at the time.",
      "ja": "風景と風俗を記録した写真に、手彩色を加えた作品。 鶏卵紙の技法による、19世紀写真特有の細やかな階調を備える。構図と当時の日本の細部を読み取る楽しみがある。"
    },
    "condition": {
      "fr": "Légère patine du tirage. Petites marques aux bords. Nuances encore lisibles ; rapport illustratif.",
      "en": "Light print toning. Small marks at the edges. Tonal detail remains legible; illustrative report.",
      "ja": "印画に軽い変色。縁に小さな痕跡。階調の細部は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Tirages à l’albumine rehaussés de couleurs",
      "en": "Albumen silver prints with applied color",
      "ja": "鶏卵紙、手彩色"
    },
    "date": {
      "fr": "Vers 1872",
      "en": "ca. 1872",
      "ja": "1872年頃"
    },
    "dimensions": "—",
    "artistDeathYear": 1911,
    "estimateLow": 1200,
    "estimateHigh": 1800,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/266362",
    "creditLine": "Rogers Fund, 1957, transferred from the Library"
  },
  {
    "id": "C-002",
    "saleId": "C",
    "index": 1,
    "metId": 285902,
    "image": "lots/met-285902.jpg",
    "title": {
      "fr": "Samouraï, Yokohama",
      "en": "Samurai, Yokohama",
      "ja": "横浜の侍"
    },
    "attribution": {
      "fr": "Felice Beato (1832–1909)",
      "en": "Felice Beato (1832–1909)",
      "ja": "フェリーチェ・ベアト（1832–1909）"
    },
    "description": {
      "fr": "Le portrait d’un samouraï à Yokohama appartient aux premières années de la photographie commerciale au Japon. Le procédé à l’albumine produit une image aux nuances fines, caractéristique du XIXe siècle. Le tirage invite à observer le cadrage et les détails du Japon de cette époque.",
      "en": "This portrait of a samurai in Yokohama belongs to the early years of commercial photography in Japan. The albumen process produces the fine tonal range characteristic of 19th-century photographs. The print invites attention to framing and to details of Japan at the time.",
      "ja": "横浜で撮影された侍の肖像で、日本における商業写真の初期を伝える。 鶏卵紙の技法による、19世紀写真特有の細やかな階調を備える。構図と当時の日本の細部を読み取る楽しみがある。"
    },
    "condition": {
      "fr": "Légère patine du tirage. Petites marques aux bords. Nuances encore lisibles ; rapport illustratif.",
      "en": "Light print toning. Small marks at the edges. Tonal detail remains legible; illustrative report.",
      "ja": "印画に軽い変色。縁に小さな痕跡。階調の細部は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Tirage à l’albumine d’après négatif sur verre",
      "en": "Albumen silver print from glass negative",
      "ja": "ガラスネガによる鶏卵紙"
    },
    "date": {
      "fr": "1864–1865",
      "en": "1864–65",
      "ja": "1864–1865年"
    },
    "dimensions": "Image: 17.9 x 14.6 cm (7 1/16 x 5 3/4 in.)",
    "artistDeathYear": 1909,
    "estimateLow": 400,
    "estimateHigh": 600,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/285902",
    "creditLine": "Gilman Collection, Purchase, Robert Rosenkranz Gift, 2005"
  },
  {
    "id": "C-003",
    "saleId": "C",
    "index": 2,
    "metId": 728305,
    "image": "lots/met-728305.jpg",
    "title": {
      "fr": "Temple de Kamakura, Japon",
      "en": "Temple of Kamakura, Japan",
      "ja": "鎌倉の寺院"
    },
    "attribution": {
      "fr": "John Thomson (1837–1921)",
      "en": "John Thomson (1837–1921)",
      "ja": "ジョン・トムソン（1837–1921）"
    },
    "description": {
      "fr": "Cette vue de Kamakura situe l’architecture religieuse dans son environnement. Le procédé à l’albumine produit une image aux nuances fines, caractéristique du XIXe siècle. Le tirage invite à observer le cadrage et les détails du Japon de cette époque.",
      "en": "This view of Kamakura places religious architecture in its surroundings. The albumen process produces the fine tonal range characteristic of 19th-century photographs. The print invites attention to framing and to details of Japan at the time.",
      "ja": "鎌倉の寺院建築を周辺の環境とともに捉えた写真。 鶏卵紙の技法による、19世紀写真特有の細やかな階調を備える。構図と当時の日本の細部を読み取る楽しみがある。"
    },
    "condition": {
      "fr": "Légère patine du tirage. Petites marques aux bords. Nuances encore lisibles ; rapport illustratif.",
      "en": "Light print toning. Small marks at the edges. Tonal detail remains legible; illustrative report.",
      "ja": "印画に軽い変色。縁に小さな痕跡。階調の細部は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Tirage à l’albumine d’après négatif sur verre",
      "en": "Albumen silver print from glass negative",
      "ja": "ガラスネガによる鶏卵紙"
    },
    "date": {
      "fr": "1865",
      "en": "1865",
      "ja": "1865年"
    },
    "dimensions": "22.5 × 29.5 cm (8 7/8 × 11 5/8 in.)",
    "artistDeathYear": 1921,
    "estimateLow": 350,
    "estimateHigh": 550,
    "sellerType": "pro",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/728305",
    "creditLine": "Gilman Collection, Purchase, Cynthia Hazen Polsky Gift, 2005"
  },
  {
    "id": "C-004",
    "saleId": "C",
    "index": 3,
    "metId": 728169,
    "image": "lots/met-728169.jpg",
    "title": {
      "fr": "Corps de garde du gouvernement, Yokohama",
      "en": "Government Guard House, Yokohama",
      "ja": "横浜の番所"
    },
    "attribution": {
      "fr": "John Thomson (1837–1921)",
      "en": "John Thomson (1837–1921)",
      "ja": "ジョン・トムソン（1837–1921）"
    },
    "description": {
      "fr": "Le corps de garde de Yokohama est présenté comme un élément du paysage administratif du port. Le procédé à l’albumine produit une image aux nuances fines, caractéristique du XIXe siècle. Le tirage invite à observer le cadrage et les détails du Japon de cette époque.",
      "en": "The guard house is presented as part of the administrative landscape of Yokohama’s port. The albumen process produces the fine tonal range characteristic of 19th-century photographs. The print invites attention to framing and to details of Japan at the time.",
      "ja": "港町横浜の行政的な景観の一部として番所を記録している。 鶏卵紙の技法による、19世紀写真特有の細やかな階調を備える。構図と当時の日本の細部を読み取る楽しみがある。"
    },
    "condition": {
      "fr": "Légère patine du tirage. Petites marques aux bords. Nuances encore lisibles ; rapport illustratif.",
      "en": "Light print toning. Small marks at the edges. Tonal detail remains legible; illustrative report.",
      "ja": "印画に軽い変色。縁に小さな痕跡。階調の細部は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Tirage à l’albumine d’après négatif sur verre",
      "en": "Albumen silver print from glass negative",
      "ja": "ガラスネガによる鶏卵紙"
    },
    "date": {
      "fr": "1865",
      "en": "1865",
      "ja": "1865年"
    },
    "dimensions": "22.3 × 29 cm (8 3/4 × 11 7/16 in.)",
    "artistDeathYear": 1921,
    "estimateLow": 300,
    "estimateHigh": 500,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/728169",
    "creditLine": "Gilman Collection, Purchase, Cynthia Hazen Polsky Gift, 2005"
  },
  {
    "id": "C-005",
    "saleId": "C",
    "index": 4,
    "metId": 764802,
    "image": "lots/met-764802.jpg",
    "title": {
      "fr": "Fantassins japonais, Yokohama",
      "en": "Japanese Infantry, Yokohama",
      "ja": "横浜の日本人歩兵"
    },
    "attribution": {
      "fr": "Photographe non identifié, Japon",
      "en": "Unidentified photographer, Japan",
      "ja": "撮影者不詳、日本"
    },
    "description": {
      "fr": "Ce petit tirage documente un groupe de fantassins dans le Japon du début de l’ère Meiji. Le procédé à l’albumine produit une image aux nuances fines, caractéristique du XIXe siècle. Le tirage invite à observer le cadrage et les détails du Japon de cette époque.",
      "en": "This small print documents a group of infantrymen in early Meiji Japan. The albumen process produces the fine tonal range characteristic of 19th-century photographs. The print invites attention to framing and to details of Japan at the time.",
      "ja": "明治初期の日本の歩兵を記録した、小型の写真。 鶏卵紙の技法による、19世紀写真特有の細やかな階調を備える。構図と当時の日本の細部を読み取る楽しみがある。"
    },
    "condition": {
      "fr": "Légère patine du tirage. Petites marques aux bords. Nuances encore lisibles ; rapport illustratif.",
      "en": "Light print toning. Small marks at the edges. Tonal detail remains legible; illustrative report.",
      "ja": "印画に軽い変色。縁に小さな痕跡。階調の細部は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Tirage à l’albumine",
      "en": "Albumen silver print",
      "ja": "鶏卵紙"
    },
    "date": {
      "fr": "1869",
      "en": "1869",
      "ja": "1869年"
    },
    "dimensions": "Image: 5.6 x 9.0 cm / Mount: 6.4 cm x 10.4 cm",
    "artistDeathYear": null,
    "estimateLow": 300,
    "estimateHigh": 450,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/764802",
    "creditLine": "The Horace W. Goldsmith Foundation Fund, through Joyce and Robert Menschel, 2017"
  },
  {
    "id": "C-006",
    "saleId": "C",
    "index": 5,
    "metId": 728172,
    "image": "lots/met-728172.jpg",
    "title": {
      "fr": "Maisons et ruisseau, Yokohama",
      "en": "Japanese Cottages and Creek, Yokohama",
      "ja": "横浜の家並みと小川"
    },
    "attribution": {
      "fr": "John Thomson (1837–1921)",
      "en": "John Thomson (1837–1921)",
      "ja": "ジョン・トムソン（1837–1921）"
    },
    "description": {
      "fr": "Un ruisseau organise cette vue de maisons japonaises aux abords de Yokohama. Le procédé à l’albumine produit une image aux nuances fines, caractéristique du XIXe siècle. Le tirage invite à observer le cadrage et les détails du Japon de cette époque.",
      "en": "A creek organises this view of Japanese cottages near Yokohama. The albumen process produces the fine tonal range characteristic of 19th-century photographs. The print invites attention to framing and to details of Japan at the time.",
      "ja": "小川に沿った横浜近郊の家並みを捉えた写真。 鶏卵紙の技法による、19世紀写真特有の細やかな階調を備える。構図と当時の日本の細部を読み取る楽しみがある。"
    },
    "condition": {
      "fr": "Légère patine du tirage. Petites marques aux bords. Nuances encore lisibles ; rapport illustratif.",
      "en": "Light print toning. Small marks at the edges. Tonal detail remains legible; illustrative report.",
      "ja": "印画に軽い変色。縁に小さな痕跡。階調の細部は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Tirage à l’albumine d’après négatif sur verre",
      "en": "Albumen silver print from glass negative",
      "ja": "ガラスネガによる鶏卵紙"
    },
    "date": {
      "fr": "1865",
      "en": "1865",
      "ja": "1865年"
    },
    "dimensions": "21.2 × 28.8 cm (8 3/8 × 11 5/16 in.)",
    "artistDeathYear": 1921,
    "estimateLow": 300,
    "estimateHigh": 500,
    "sellerType": "pro",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/728172",
    "creditLine": "Gilman Collection, Purchase, Cynthia Hazen Polsky Gift, 2005"
  },
  {
    "id": "C-007",
    "saleId": "C",
    "index": 6,
    "metId": 285442,
    "image": "lots/met-285442.jpg",
    "title": {
      "fr": "Portrait de Kenji Morita",
      "en": "Kenji Morita",
      "ja": "モリタ・ケンジの肖像"
    },
    "attribution": {
      "fr": "Fujita, actif dans les années 1880",
      "en": "Fujita, active in the 1880s",
      "ja": "フジタ、1880年代に活動"
    },
    "description": {
      "fr": "Cet ambrotype représente Kenji Morita dans le format intime du portrait sous étui. L’image est formée sur une plaque de verre selon le procédé de l’ambrotype. L’étui participe à la présentation et à la conservation de ce portrait unique.",
      "en": "This ambrotype depicts Kenji Morita in the intimate format of a cased portrait. The image is formed on a glass plate through the ambrotype process. Its case contributes to the presentation and preservation of this unique portrait.",
      "ja": "ケースに収められた親密な形式でモリタ・ケンジを写した、アンブロタイプ。 ガラス板に像を形成するアンブロタイプの技法による。ケースは一点物の肖像の展示と保存を兼ねている。"
    },
    "condition": {
      "fr": "Légères traces sur le verre. Usure d’usage de l’étui. Image lisible ; rapport illustratif.",
      "en": "Light marks on the glass. Handling wear to the case. Image remains legible; illustrative report.",
      "ja": "ガラスに軽い痕跡。ケースに使用に伴う摩耗。画像は判読可能。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Ambrotype",
      "en": "Ambrotype",
      "ja": "アンブロタイプ"
    },
    "date": {
      "fr": "1886",
      "en": "1886",
      "ja": "1886年"
    },
    "dimensions": "Image: 9.6 x 6.8 cm (3 3/4 x 2 11/16 in.) / Case: 1.3 x 11.1 x 8.3 cm (1/2 x 4 3/8 x 3 1/4 in.)",
    "artistDeathYear": null,
    "estimateLow": 500,
    "estimateHigh": 800,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/285442",
    "creditLine": "Funds from various donors, 2004"
  },
  {
    "id": "D-001",
    "saleId": "D",
    "index": 0,
    "metId": 55974,
    "image": "lots/met-55974.jpg",
    "title": {
      "fr": "Suzuribako à décor de livres",
      "en": "Writing Box with Books",
      "ja": "書物文様の硯箱"
    },
    "attribution": {
      "fr": "Japon, XVIIIe siècle",
      "en": "Japan, 18th century",
      "ja": "日本、18世紀"
    },
    "description": {
      "fr": "Un décor de livres associe le sujet au rôle de cette boîte destinée aux instruments d’écriture. Les différentes matières créent un jeu de reflets à petite échelle. La qualité du décor s’apprécie dans le rapport entre la surface et le volume.",
      "en": "A design of books links the subject to this box’s role as a container for writing utensils. The materials create shifting reflections on an intimate scale. The decoration is best appreciated in the relationship between surface and volume.",
      "ja": "筆記具を納める硯箱に、用途と響き合う書物の文様を施している。 小さな器面に素材の異なる光沢が生まれている。表面の装飾と立体の関係に見どころがある。"
    },
    "condition": {
      "fr": "Micro-rayures sur la laque. Légère usure des rehauts métalliques. Petits frottements aux angles ; rapport illustratif.",
      "en": "Fine scratches to the lacquer. Light wear to metallic decoration. Small rubbed areas at the corners; illustrative report.",
      "ja": "漆面に細かな擦り傷。金属装飾に軽い摩耗。角に小さな擦れ。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Laque à décors d’or et d’argent, togidashi, hiramaki-e, takamaki-e et feuilles d’or",
      "en": "Gold, silver togidashimaki-e, hiramaki-e, takamaki-e, cut-out gold foil application",
      "ja": "金銀研出蒔絵、平蒔絵、高蒔絵、切金"
    },
    "date": {
      "fr": "XVIIIe siècle",
      "en": "18th century",
      "ja": "18世紀"
    },
    "dimensions": "H. 2 in. (5.1 cm); W. 9 in. (22.9 cm); D. 8 1/2 in. (21.6 cm)",
    "artistDeathYear": null,
    "estimateLow": 2200,
    "estimateHigh": 3500,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/55974",
    "creditLine": "Bequest of Benjamin Altman, 1913"
  },
  {
    "id": "D-002",
    "saleId": "D",
    "index": 1,
    "metId": 829395,
    "image": "lots/met-829395.jpg",
    "title": {
      "fr": "Paravent aux deux danseuses",
      "en": "Screen of Two Dancers",
      "ja": "舞妓図屏風"
    },
    "attribution": {
      "fr": "Japon, époque Edo, artiste non identifié",
      "en": "Japan, Edo period, unidentified artist",
      "ja": "日本、江戸時代、作者不詳"
    },
    "description": {
      "fr": "Deux danseuses rythment ce paravent à deux feuilles, où le fond d’or participe à la composition. Le pli des panneaux permet de moduler l’espace et la perception de l’image. L’œuvre associe ainsi une fonction d’ameublement à une composition picturale.",
      "en": "Two dancers animate this two-panel screen, with gold contributing to the composition. The fold between the panels modulates space and the perception of the image. The work combines the function of a furnishing with a pictorial composition.",
      "ja": "二人の踊り手を配した二曲屏風で、金地も構成の一部を担う。 折れによって空間と画面の見え方を調節できる。調度としての役割と絵画表現を兼ね備えている。"
    },
    "condition": {
      "fr": "Légère usure des plis. Petits frottements au fond d’or. Marques ponctuelles sur le papier ; rapport illustratif.",
      "en": "Light wear at the folds. Small rubbed areas to the gold. Localised paper marks; illustrative report.",
      "ja": "折れに軽い摩耗。金地に小さな擦れ。紙面に点状の痕跡。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Paravent à deux feuilles, encre, couleurs et or sur papier",
      "en": "Two-panel folding screen; ink, color, and gold on paper",
      "ja": "二曲屏風、紙に墨・色彩・金"
    },
    "date": {
      "fr": "XVIIIe siècle",
      "en": "18th century",
      "ja": "18世紀"
    },
    "dimensions": "Image: 31 5/8 × 14 3/16 in. (80.4 × 36.1 cm) / Overall with mounting: 50 13/16 × 68 7/8 in. (129 × 175 cm)",
    "artistDeathYear": null,
    "estimateLow": 3500,
    "estimateHigh": 5500,
    "sellerType": "pro",
    "shipping": {
      "france": 65,
      "eu": 120,
      "world": 220
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/829395",
    "creditLine": "Mary and Cheney Cowles Collection, Gift of Mary and Cheney Cowles, 2019"
  },
  {
    "id": "D-003",
    "saleId": "D",
    "index": 2,
    "metId": 54303,
    "image": "lots/met-54303.jpg",
    "title": {
      "fr": "Corbeille de fleurs et store de bambou",
      "en": "Basket of Flowers with Bamboo Blind",
      "ja": "花籠と竹簾"
    },
    "attribution": {
      "fr": "Katsushika Hokusai (1760–1849)",
      "en": "Katsushika Hokusai (1760–1849)",
      "ja": "葛飾北斎（1760–1849）"
    },
    "description": {
      "fr": "Ce surimono associe une corbeille de fleurs à un store de bambou dans une composition horizontale. Le travail de la ligne et des aplats de couleur relève de l’impression sur bois. Ce témoignage de la culture de l’estampe se prête à une lecture attentive, de près.",
      "en": "This surimono pairs a basket of flowers with a bamboo blind in a horizontal composition. The interplay of line and colour reflects the woodblock printing process. This example of print culture rewards close viewing.",
      "ja": "花籠と竹簾を横長の画面に組み合わせた摺物。 線と色面の関係に木版印刷の技法がうかがえる。近くで細部を見ることで、版画表現の豊かさを味わえる。"
    },
    "condition": {
      "fr": "Légères rousseurs et patine du papier. Petites marques en marge. Couleurs conservant une bonne lisibilité ; rapport illustratif.",
      "en": "Light foxing and paper toning. Small marks at the margins. Colours remain legible; illustrative report.",
      "ja": "軽い点状の染みと紙の変色。余白に小さな擦れ。色彩の判読性は良好。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Surimono, estampe, encre et couleurs sur papier",
      "en": "Woodblock print (surimono); ink and color on paper",
      "ja": "摺物、木版画、紙に墨・色彩"
    },
    "date": {
      "fr": "Vers 1799–1810",
      "en": "ca. 1799–1810",
      "ja": "1799–1810年頃"
    },
    "dimensions": "8 1/4 x 22 1/8 in. (21 x 56.2 cm)",
    "artistDeathYear": 1849,
    "estimateLow": 1500,
    "estimateHigh": 2500,
    "sellerType": "private",
    "shipping": {
      "france": 18,
      "eu": 35,
      "world": 65
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/54303",
    "creditLine": "The Francis Lathrop Collection, Purchase, Frederick C. Hewitt Fund, 1911"
  },
  {
    "id": "D-004",
    "saleId": "D",
    "index": 3,
    "metId": 771056,
    "image": "lots/met-771056.jpg",
    "title": {
      "fr": "Vase aux oiseaux, goût japoniste",
      "en": "Vase with Aesthetic Japonisme Birds",
      "ja": "ジャポニスムの鳥文花瓶"
    },
    "attribution": {
      "fr": "Manufacture Minton, Stoke-on-Trent",
      "en": "Minton factory, Stoke-on-Trent",
      "ja": "ミントン、ストーク＝オン＝トレント"
    },
    "description": {
      "fr": "Le décor d’oiseaux de ce vase Minton témoigne de l’intérêt britannique pour les arts japonais. Le façonnage et la cuisson déterminent ensemble le caractère de la surface. L’objet témoigne d’un équilibre entre fonction, forme et décor.",
      "en": "The bird decoration of this Minton vase reflects British interest in Japanese art. Forming and firing together determine the character of the surface. The object balances function, shape and decoration.",
      "ja": "鳥文を配したミントンの花瓶で、英国における日本美術への関心を伝える。 成形と焼成が一体となり、表面の表情を生んでいる。用途、器形、装飾の関係を伝える一品。"
    },
    "condition": {
      "fr": "Usure légère de la couverte. Frottements au talon compatibles avec l’usage. Petite irrégularité de cuisson ; rapport illustratif.",
      "en": "Light glaze wear. Rubbing at the foot consistent with use. A small firing irregularity; illustrative report.",
      "ja": "釉面に軽い擦れ。高台に使用に伴う摩耗。小さな焼成上の不整。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Porcelaine phosphatique (bone china)",
      "en": "Bone china",
      "ja": "ボーンチャイナ"
    },
    "date": {
      "fr": "1879",
      "en": "1879",
      "ja": "1879年"
    },
    "dimensions": "confirmed: 8 1/2 × 5 3/4 × 4 in. (21.6 × 14.6 × 10.2 cm)",
    "artistDeathYear": null,
    "estimateLow": 600,
    "estimateHigh": 900,
    "sellerType": "private",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/771056",
    "creditLine": "Gift of Helene Fortunoff and Robert Grossman, 2017"
  },
  {
    "id": "D-005",
    "saleId": "D",
    "index": 4,
    "metId": 826007,
    "image": "lots/met-826007.jpg",
    "title": {
      "fr": "Kōbako aux trois jarres et monture dorée",
      "en": "Incense Box in the Shape of Three Overlapping Jars",
      "ja": "三つの壺形の香箱、金色金具付き"
    },
    "attribution": {
      "fr": "Japon et France ; monture associée à Barthélémy Paviet",
      "en": "Japan and France; mount associated with Barthélémy Paviet",
      "ja": "日本・フランス、金具はバルテルミー・パヴィエに関連"
    },
    "description": {
      "fr": "Trois jarres imbriquées donnent sa forme à ce kōbako japonais, associé à une monture française. Les différentes matières créent un jeu de reflets à petite échelle. La qualité du décor s’apprécie dans le rapport entre la surface et le volume.",
      "en": "Three overlapping jars give this Japanese incense box its form, paired with a French mount. The materials create shifting reflections on an intimate scale. The decoration is best appreciated in the relationship between surface and volume.",
      "ja": "重なる三つの壺をかたどる日本の香箱に、フランスの金具を組み合わせた作品。 小さな器面に素材の異なる光沢が生まれている。表面の装飾と立体の関係に見どころがある。"
    },
    "condition": {
      "fr": "Micro-rayures sur la laque. Légère usure des rehauts métalliques. Petits frottements aux angles ; rapport illustratif.",
      "en": "Fine scratches to the lacquer. Light wear to metallic decoration. Small rubbed areas at the corners; illustrative report.",
      "ja": "漆面に細かな擦り傷。金属装飾に軽い摩耗。角に小さな擦れ。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Lyon, acquis dans les années 1980 (illustratif).",
      "en": "Private collection, Lyon, acquired in the 1980s (illustrative).",
      "ja": "リヨンの個人蔵、1980年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Bois laqué, maki-e d’or et d’argent, fond d’or et monture dorée",
      "en": "Lacquered wood with gold and silver takamaki‑e, hiramaki‑e, and togidashimaki‑e on gold ground, with gilded mount",
      "ja": "漆塗木製、金銀蒔絵、金地、金色金具"
    },
    "date": {
      "fr": "Milieu du XVIIIe siècle",
      "en": "mid-18th century",
      "ja": "18世紀中頃"
    },
    "dimensions": "H. 3 3/16 in. (9.7 cm); W. 3 1/8 in. (7.9 cm); D. 1 13/16 in. (4.6 cm)",
    "artistDeathYear": null,
    "estimateLow": 2500,
    "estimateHigh": 4000,
    "sellerType": "pro",
    "shipping": {
      "france": 35,
      "eu": 65,
      "world": 120
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/826007",
    "creditLine": "Bequest of Mrs. Charles Wrightsman, 2019"
  },
  {
    "id": "D-006",
    "saleId": "D",
    "index": 5,
    "metId": 70769,
    "image": "lots/met-70769.jpg",
    "title": {
      "fr": "Robe de théâtre nō",
      "en": "Noh Robe",
      "ja": "能装束"
    },
    "attribution": {
      "fr": "Japon, ère Meiji",
      "en": "Japan, Meiji period",
      "ja": "日本、明治時代"
    },
    "description": {
      "fr": "La soie et les fils métalliques répondent aux exigences de présence scénique du costume de nō. Le tombé et la texture du tissu participent pleinement à sa lecture. Le vêtement offre un regard sur la rencontre entre technique textile et usage.",
      "en": "Silk and metallic thread answer the demands of stage presence in Noh costume. The drape and texture of the fabric are integral to its character. The garment offers a view of the relationship between textile technique and use.",
      "ja": "絹と金属糸を用い、舞台上の存在感を生み出す能装束。 生地の落ち方と質感も作品の表情を形づくる。織物の技法と用途との関係をうかがわせる衣服。"
    },
    "condition": {
      "fr": "Légers plis de conservation. Petits frottements du tissu. Quelques fils tirés ; rapport illustratif.",
      "en": "Light storage creases. Minor rubbing to the fabric. A few pulled threads; illustrative report.",
      "ja": "保管による軽い折れ。生地に小さな擦れ。一部に糸の引きつれ。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière, Paris, acquis dans les années 1990 (illustratif).",
      "en": "Private collection, Paris, acquired in the 1990s (illustrative).",
      "ja": "パリの個人蔵、1990年代に取得（デモ用）。"
    },
    "medium": {
      "fr": "Soie et fils métalliques",
      "en": "Silk, metallic thread",
      "ja": "絹、金属糸"
    },
    "date": {
      "fr": "Ère Meiji (1868–1912)",
      "en": "Meiji period (1868–1912)",
      "ja": "明治時代（1868–1912）"
    },
    "dimensions": "Overall: 65 1/2 x 57 7/8 in. (166.4 x 147 cm)",
    "artistDeathYear": null,
    "estimateLow": 1400,
    "estimateHigh": 2200,
    "sellerType": "private",
    "shipping": {
      "france": 65,
      "eu": 120,
      "world": 220
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/70769",
    "creditLine": "Gift of Stanley Love, 1984"
  },
  {
    "id": "D-007",
    "saleId": "D",
    "index": 6,
    "metId": 83924,
    "image": "lots/met-83924.jpg",
    "title": {
      "fr": "Manteau de soie, vers 1900",
      "en": "Silk Coat, circa 1900",
      "ja": "絹のコート、1900年頃"
    },
    "attribution": {
      "fr": "Iida & Co. / Takashimaya, Japon",
      "en": "Iida & Co. / Takashimaya, Japan",
      "ja": "飯田商店／高島屋、日本"
    },
    "description": {
      "fr": "Ce manteau de soie est associé à Iida & Co., maison liée à Takashimaya. Le tombé et la texture du tissu participent pleinement à sa lecture. Le vêtement offre un regard sur la rencontre entre technique textile et usage.",
      "en": "This silk coat is associated with Iida & Co., a house linked with Takashimaya. The drape and texture of the fabric are integral to its character. The garment offers a view of the relationship between textile technique and use.",
      "ja": "高島屋に関連する飯田商店の絹製コート。 生地の落ち方と質感も作品の表情を形づくる。織物の技法と用途との関係をうかがわせる衣服。"
    },
    "condition": {
      "fr": "Légers plis de conservation. Petits frottements du tissu. Quelques fils tirés ; rapport illustratif.",
      "en": "Light storage creases. Minor rubbing to the fabric. A few pulled threads; illustrative report.",
      "ja": "保管による軽い折れ。生地に小さな擦れ。一部に糸の引きつれ。デモ用の状態記述。"
    },
    "provenance": {
      "fr": "Collection particulière européenne, par descendance (illustratif).",
      "en": "European private collection, by descent (illustrative).",
      "ja": "ヨーロッパの個人蔵、相続による（デモ用）。"
    },
    "medium": {
      "fr": "Soie",
      "en": "silk",
      "ja": "絹"
    },
    "date": {
      "fr": "Vers 1900",
      "en": "ca. 1900",
      "ja": "1900年頃"
    },
    "dimensions": "—",
    "artistDeathYear": null,
    "estimateLow": 900,
    "estimateHigh": 1400,
    "sellerType": "private",
    "shipping": {
      "france": 65,
      "eu": 120,
      "world": 220
    },
    "objectURL": "https://www.metmuseum.org/art/collection/search/83924",
    "creditLine": "Gift of Joseph L. Brotherton, 1985"
  }
];

export const findLot = (id: string | undefined): Lot | undefined => lots.find(lot => lot.id === id);
