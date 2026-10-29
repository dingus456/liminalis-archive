const uiTranslations = {
    ru: {
        title: "▲ АРХИВ ЛИМИНАЛИС // v3.01.6",
        status: "СТАТУС: СОЕДИНЕНИЕ ЗАЩИЩЕНО",
        warning: "ВНИМАНИЕ: Данный архив содержит конфиденциальную информацию о пространствах Фористуры. Использовать строго для выживания гражданских лиц.",
        searchLabel: "> СИСТЕМА ПОИСКА:",
        searchPlaceholder: "при поиске вводите ID или наименование",
        categoryLabel: "КАТЕГОРИЯ:",
        catAll: "ВСЕ ДАННЫЕ",
        catMainLevels: "ОСНОВНЫЕ ЛИМИНАЛИ (lim_num)",
        catOtherLevels: "ОСТАЛЬНЫЕ ЛИМИНАЛИ (lim_num)",
        catEntities: "Организмы (org_kin_spec)",
        catObjects: "Явления (phen_num)",
        descTitle: "Описание:",
        tipsTitle: "Советы:",
        noResults: "[ОШИБКА: ИНФОРМАЦИЯ НЕ НАЙДЕНА (404)]",
        footer: "Собственность НЗФА (Национальное исследование Запредельного и Фористуральная Администрация) © 2001-2026. Проходим сквозь слои реальности.",
        // Новые переводы для внутреннего квадратика:
        characteristic: "[ХАРАКТЕРИСТИКА]",
        behavior: "[СТАТУС ПОВЕДЕНИЯ]",
        archiveStatus: "[АРХИВ НЗФА]",
        archiveAvailable: "ДОСТУПЕН"
    },
    en: {
        title: "▲ THE LIMINALIS ARCHIVE // v3.01.6",
        status: "STATUS: ENCRYPTED CONNECTION",
        warning: "WARNING: This archive contains classified information regarding the Foristurality. Use strictly for civilian survival protocols.",
        searchLabel: "> SEARCH SYSTEM:",
        searchPlaceholder: "while searching please type an ID or the name",
        categoryLabel: "CATEGORY:",
        catAll: "ALL DATA",
        catMainLevels: "THE MAIN LIMINALITIES (lim_num)",
        catOtherLevels: "THE OTHER LIMINALITIES (lim_num)",
        catEntities: "ORGANISMS (org_kin_spec)",
        catObjects: "PHENOMENA (phen_num)",
        descTitle: "Description:",
        tipsTitle: "Tips:",
        noResults: "[ERROR: DATA NOT FOUND (404)]",
        footer: "Property of NBFA (National exploring of something Beyond and Foristuality Administration) © 2001-2026. Going through the layers of Reality",
        characteristic: "[CHARACTERISTICS]",
        behavior: "[BEHAVIOR STATUS]",
        archiveStatus: "[NBFA ARCHIVE]",
        archiveAvailable: "AVAILABLE"
    }
};


const backroomsDatabase = [
    {
        id: "LIM_0001",
        type: "liminalityM",
        hazard: "CLASS 1-EG",
        image: "images/Level0.jpg", 
        translations: {
            ru: {
                title: "ЯНУС",
                description: "комплексное пространство, чем-то напоминающее розничный магазин. Интерьер Януса состоит из жёлтых обоев, рисунки которых состоят из разных узоров, коричневого, мокрого ковра, состоящего из ткани, и плиточных потолков, сверху которых проходят трубы и провода. На потолке присутствуют люминесцентные лампы, издающий громкий гул, который никогда не прекращается. Изредка на стенах можно найти розетки, по всей видимости, американского происхождения. Иногда здесь находят разные объекты, которые являются частями интерьера из Земли, но, иногда, дублированные, или искажённые. Кроме физических объектов, можно услышать и звуки, у которых отсутствует видимый источник. Эти звуки варьируются от тихого гула или хаотичной игре на духовом инструменте, до искажённых копий реальных музыкальных произведений.",
                tips: "Если вы оказались здесь в группе, то советуется не расходиться и всегда держаться вместе, ведь здесь очень просто заблудиться. Если вы встретите копии табличек экстренного выхода - следуйте за ними.",
                hazardClass: "Одинокий"
            },
            en: {
                title: "JANUS",
                description: "A complex space, somewhat reminiscent of a retail store. The interior of Janus consists of yellow wallpaper patterned with various designs, damp, fabric-covered carpeting in shades of brown, and a tiled ceiling with pipes and wires running across it. Fluorescent lights are mounted on the ceiling, emitting a loud, incessant hum. Occasionally, electrical outlets—apparently of American design—can be found on the walls. Sometimes, various objects appear here; these are items from Earth, though they may be duplicated or distorted. Beyond physical objects, one can also hear sounds with no discernible source—ranging from a faint hum or the chaotic playing of a wind instrument to warped, distorted versions of actual musical pieces.",
                tips: "If you have entered Janus in a party, it is recommended to stay together in order to not get lost. If you see copies of the emergency exit signs - follow them.",
                hazardClass: "hollow"
            }
        }
    },
    {
        id: "LIM_0002",
        type: "liminalityM",
        hazard: "CLASS 4-G",
        image: "images/Agnosophobia.webp", 
        translations: {
            ru: {
                title: "ЭТЕРНИТАС",
                description: "Комплекс состоящий из бетонных коридоров, в которых есть малое количество света. Свет исходит от тусклых ламп на потолке и работающие от керосина, который сгорает и тем самым выключает лампу. В отличии от Януса, здесь присутствует неэвклидова геометрия, а сама структура является гораздо более примитивной, состоя лишь из коридоров и лестниц. Иногда можно найти кожаные двери, за которыми находятся либо мелкие коморки, либо стена. Иногда можно найти и окна, за которыми находятся всё те-же стены.",
                tips: "Если вы сюда попали, то рекомендуется немедленно найти выход и использовать его. Это будет непростой задачей из-за постоянно сгорающих ламп и неэвклидовой геометрии, и поэтому вам нужно знать несколько отдельных черт, показывающих, что рядом выход. Если вы заметили, что в коридорах Этернитаса начали появляться дыры и трубы, то вы идёте к выходу. Он уже будет неподалёку.",
                hazardClass: "нелинейная геометрия"
            },
            en: {
                title: "ETERNITAS",
                description: "A complex consisting of concrete corridors with very little light. The illumination comes from dim, ceiling-mounted lamps fueled by kerosene; as the fuel burns away, the lamps eventually go out. Unlike Janus, this liminality features non-Euclidean geometry, and its overall structure is far more primitive, composed solely of corridors and staircases. Occasionally, one may encounter leather doors, which lead either to small, cramped chambers or simply to a wall. At times, windows can also be found—revealing nothing but more walls.",
                tips: "If you have ended up here, it is recommended that you find an exit immediately and use it. This will be no easy task, given the constantly burning-out lights and the non-Euclidean geometry; therefore, you should be aware of a few specific signs indicating that an exit is nearby. If you notice holes and pipes beginning to appear in the corridors of Eternitas, you are heading toward an exit—it should be close by.",
                hazardClass: "non-linear geometry"
            }
        }
    },
    {
        id: "LIM_0003",
        type: "liminalityM",
        hazard: "CLASS 3-E",
        image: "images/Vevosis.jpg", 
        translations: {
            ru: {
                title: "ВЕВОИС",
                description: "Вевоис очень похож на Этернитас, но у этих двух есть одно ключевое отличие. В отличии от Эетернитаса, Вевоис имеет эвклидову геометрию, из-за чего ориентироваться по нему гораздо проще, чем по Этернитасу. Кроме того, тут также присутствует люминесцентные лампы длиной в 3 метра, которые издают тихий гул. Сверху полно труб, по которым идут разные газообразные вещества: от кислорода до амиака. Двери здесь состоят из металла и ведут в другие коридоры, которые, иногда, могут иметь трубы на стенах, перед которыми всегда будут решётки и балки из металла. Из-за них эти коридоры становятся меньше чем обычные коридоры. Также, в отличии от Януса и Этернитаса, здесь присутствуют коренные жители, коими являются виды Caecus Contrahens и Mus Aeger. Слепцов можно заметить в узких местах, иногда скользящих по пространству Вевоиса. Крысы держатся в стайках и живут в щелях, которых можно найти в стенах. Они здесь являются падальщиками и едят остатки, найденные в пределах Лиминали. Слепцы охотятся на крыс и проходящих мимо людей, нападая в узких коридорах, вентиляциях. По-мимо всего сказанного ранее, здесь присутствует мелкое количество воды, образованной ввиде луж в результате возможных химических реакций.",
                tips: "Если вы оказались в Вевоисе, то рекомендуется избегать узких и тёмных мест, в которых могут обитать «Серости». Следуйте за светом и редкими табличками. Если вы пойдёте за ними, то рано или поздно вы дойдёте до лифта с шестью кнопками этажей.",
                hazardClass: "Высокая температура, агрессивная окружающая среда"
            },
            en: {
                title: "VEJOVIS",
                description: "Vejovis bears a strong resemblance to Ethernitas, yet there is one key difference between the two. Unlike Ethernitas, Vejovis follows Euclidean geometry, making it significantly easier to navigate. The space is illuminated by 3-meter-long fluorescent lights that emit a faint, constant hum. Overhead, a network of pipes carries various gaseous substances—ranging from oxygen to ammonia. Metal doors lead into other corridors, some of which feature pipes along the walls, shielded by metal grilles and support beams; these obstructions make such corridors narrower than the standard ones. Furthermore, unlike Janus or Ethernitas, Vejovis is home to indigenous species: Caecus Contrahens and Mus Aeger. The «Dullers» can be spotted in narrow passages, occasionally gliding through the space. The rats gather in small packs and inhabit crevices within the walls; they act as scavengers, feeding on remnants found throughout Liminality. The «Dullers» hunt both the rats and any humans passing through, launching attacks in cramped corridors and ventilation shafts. Additionally, small amounts of water can be found here, appearing as puddles—the byproduct of various chemical reactions.",
                tips: "If you find yourself in Vejovis, it is recommended that you avoid narrow, dark places where the «Dullers» might dwell. Follow the light and the occasional sign. If you follow them, you will eventually reach an elevator with six floor buttons.",
                hazardClass: "High temperature, hostile enviorment"
            }
        }
    },
    {
        id: "LIM_0004",
        type: "liminalityM",
        hazard: "CLASS 5-EG",
image: "images/Dith.jpg",
translations: {
ru: {
    title: "ДИТ",
    description: "Дит мало чем отличается от Вевоиса внешне, но он имеет свои отличия. Отличия заключаются в геометрии, воздухе, декоре и населении. Геометрия здесь аналогичная Этернитасу, т.е она является неэвклидовой. В воздухе преобладает углекислый газ, из-за чего дышать становится трудно. Углекислый газ преобладает здесь из-за окружения, а именно машин, печей, генераторов и т.п. Здесь, эти строения видели много газа, поглощая азот, которого уже практически нет. Это говорит о скором прекращении работоспособности данных строений, что поможет нормализовать среду обитания и сделать её пригодной для человека. Эту Лиминаль населяют Caecus Contrahens, Eremita Infrastructurae и Electrofagus mimicus. Слепцов можно заметить в узких местах, иногда скользящих по пространству Вевоиса. Крысы держатся в стайках и живут в щелях, которых можно найти в стенах. Они здесь являются падальщиками и едят остатки, найденные в пределах Лиминали. Слепцы охотятся на крыс и проходящих мимо людей, нападая в узких коридорах, вентиляциях. По-мимо всего сказанного ранее, здесь присутствует мелкое количество воды, образованной ввиде луж в результате возможных химических реакций.",
    tips: "Ищите таблички выхода. Это единственное, что можно посоветовать вам, попав сюда.",
    hazardClass: "Высокая температура, нелинейная геометрия и агрессивная окружающая среда"
},
en: {
    title: "DIS",
    description: "Outwardly, Dis does not differ much from Vejovis, yet it possesses its own distinct characteristics. These differences lie in its geometry, atmospheric composition, decor, and inhabitants. The geometry here is similar to that of Eternitas that is, it is non-Euclidean. The air is dominated by carbon dioxide, making it difficult to breathe. This high concentration of carbon dioxide is a result of the surrounding environment—specifically the presence of machines, furnaces, generators, and similar structures. These installations emit vast quantities of gas while consuming nitrogen, which has already been almost entirely depleted. This suggests that these structures will soon cease to function, which in turn will help normalize the environment and render it habitable for humans. This Liminality is inhabited by Caecus Contrahens, Eremita Infrastructurae, and Electrofagus mimicus. The Caecus Contrahens (Blindmen/Dullers) fulfill a role much like the one they play in Vejovis; here, however, they feed on Electrofagi—creatures frequently found clinging to the walls. The «Dullers» (as the Caecus Contrahens are sometimes called) ruthlessly tear them from the surfaces—ignoring electric shocks and resistance—and devour them, occasionally leaving scraps behind. The Eremita Infrastructurae (Hermits of the Infrastructure) hang from the ceiling, killing organisms that pass beneath them by crushing them under their own weight. The Electrofagues are the only entities here that do not consume animal matter; instead, they engage in a process akin to photosynthesis—though, unlike plants that draw energy from the sun, these creatures derive their energy from lamps and machinery.",
    tips: "Find the emergency exit signs. That's the only advice that can be given to those who enter here.",
    hazardClass: "High temperature, non-linear, hostile enviorment"
}
}
},
{
id: "LIM_0005",
type: "liminalityM",
hazard: "CLASS 0-EG",
image: "images/Therminus.jpg",
translations: {
ru: {
    title: "КОНСУС",
    description: "В отличии от предыдущих Лиминалей, которые были лабиринтами с декором реальных мест, Консус является попыткой воссоздать офисное здание. Периметр здания равен примерно 160 метров, имеется пять (5) этажей. Пятый этаж, самый вверхний, выглядит самым похожим на офисное здание, и по продвижению вниз интерьер будет сильно искажаться до первого этажа. Первый этаж выглядит как простой набор комнат, разбросанный в хаотичном порядке. Почти все комнаты этажа пустые, однако в одной комнате присутствует фонтан и тёмный, прямоугольный проход, который является выходом отсюда. В почти каждой комнате Консуса присутствуют окна, из которых исходит яркий свет тёплого оттенка. Стены каждого этажа окрашены в белый цвет и состоят из бетона. Ковёр имеет разный цвет, в зависимости от этажа. Например, на пятом этаже присутствует серый ковёр, на четвёртом он становится бежевым, на третьем - зелёный, на втором - синий, а на первом - смесь серого и синего. Потолок везде состоит из плиток, идентичных плиткам Януса. На потолке в хаотичном порядке расположены отключенные люминесцентные лампы, иногда датчики пожара. Иногда можно встретить и кулеры с водой. Вода, найденная в Консусе, имеет вкус обычной воды, перемешанной с миндалём, и признана безопасной для употребления. В одной из комнат четвёртого этажа можно встретить принтер, а также там есть комната неподалёку, которая забита бумагой. На бумаге отсутствуют какие-либо изображения, но их можно сделать, если в принтер налить чернил. На втором этаже присутствует обильное количество табличек STOP, однако они поддались здесь такому-же искажению, как если бы они были бы на Янусе. Кроме них, на втором этаже есть и хаотично расположенные двери, провода, розовый бумбокс из ранних двухтысячных годов, а также в одной из комнат можно найти зеркала. Ходят слухи, что под ковром первого этажа находится «Подвал»: место, состоящее из кирпичей, у которого в дефиците есть керосиновые лампы, подобные тем, что можно найти в Этернитасе, но только там они горят вечно. Говорят также о том, что там можно встретить единственный экземпляр подвида Caecus Contrahens, который гораздо опаснее родительского вида.",
    tips: "Вы впринципе можете остаться здесь жить, но если вам хочется отсюда выйти, то попробуйте найти дыру в потолке или войдите в тёмный проём на первом этаже.",
    hazardClass: "Обитаемый",
    },
    en: {
    title: "CONSUS",
    description: "Unlike the previous Liminalities, which were mazes styled after real places, Consus is an attempt to recreate an office building. The building's perimeter is approximately 160 meters, featuring five (5) floors. The fifth and highest floor looks the most like a normal office, but moving downward, the interior becomes heavily distorted until the first floor, which is a chaotic array of empty rooms. Almost all rooms are bare, but one room features a fountain and a dark, rectangular passage serving as the exit. Windows emitting bright, warm light are present in nearly every room. The walls are white concrete, and the carpet color changes by floor: grey on the 5th, beige on the 4th, green on the 3rd, blue on the 2nd, and a mix of grey and blue on the 1st. The tiled ceiling features deactivated fluorescent lights and fire detectors. Water coolers are scattered around; the water tastes like ordinary water mixed with almonds and is safe to drink. A printer sits on the 4th floor, and a nearby room is packed with blank paper. The 2nd floor contains distorted 'STOP' signs, misplaced doors, wires, a pink early-2000s boombox, and mirrors. Rumor has it that beneath the 1st-floor carpet lies 'The Basement'—a brick labyrinth with eternal kerosene lamps and a highly dangerous subspecies of Caecus Contrahens.",
    tips: "You can technically stay here and live, but if you wish to leave, try to find a hole in the ceiling or enter the dark rectangular opening on the first floor.",
    hazardClass: "Habitable"
    }
}
},
{
id: "LIM_0006",
type: "liminalityM",
hazard: "CLASS 3-EGP",
image: "images/Falacia.jpg",
translations: {
ru: {
    title: "МЕНДАЦИУС",
    description: "Архитектура Мендациуса изначально покажется любому страннику просто эталоном красоты. Пол состоит из блестящего дерева тёмного оттенка. На полу ковёр, который стелится на миллионы миль. Сверху люстры в виде канделябров с никогда неугасающими свечами. Иногда появляются двери. Они ведут в величественные бальные залы, заполненные людьми. Да только вот… Это чувствуется фальшиво. И вы будете правы, ведь на самом деле эта Лиминаль состоит из очень простых коридоров и комнат, полностью состоящих из одного серого, холодного бетона. На потолке отсутствуют люстры. Вместо них, в Медациусе присутствует освещение без видимого источника. Двери и ковёр полностью отсутствуют. Архитектура состоит из узких коридоров, которые могут очень долго идти вперёд, и иногда иметь проходы либо в другие коридоры, либо-же в огромные пространства промеж коридоров, которые, собственно, и являются «бальными залами». В этих пространствах полно манекенов, которые в иллюзии выполняют роль тех самых «людей», про которых говорилось раннее. Но среди всего этого есть что-то действительно реальное, а именно особый вид Организмов, эксклюзивный для этой Лиминали. Этим видом является Opifex Imitator. Они являются точной копией обычного человека, но с ключевым отличием: полным отсутствием лица и заменой его на слой гладкой кожи. Они ориентируются по эхолокации и не нуждаются в книге. При контакте с человеком они предложат ему выпить или пойти в «Офис Босса», где происходит «Квалификация» (см. Phen_0004). На фото изображена фотография, которая является самой похожей на интерьер иллюзии.",
    tips: "Идите дальше, если можете. Уже нет пути назад.",
    hazardClass: "нелинейная геометрия, психологическое влияние и опасные Организмы"
},
en: {
    title: "MENDACIUS",
    description: "To any wanderer, the architecture of Mendacius might initially appear to be the very epitome of beauty. The floor is made of polished, dark-toned wood and covered by a carpet that stretches on for millions of miles. Overhead hang chandeliers—candelabra-style fixtures with candles that never burn out. Occasionally, doors appear, leading into grand ballrooms filled with people. And yet… it all feels artificial. You would be right to think so; in reality, this Liminality consists of nothing more than simple corridors and rooms, constructed entirely from cold, gray concrete. There are no chandeliers on the ceiling—instead, Mendacius is illuminated by a light source that remains unseen. The doors and the carpet are entirely absent. The architecture is defined by narrow corridors that can stretch on for great distances, occasionally branching off into other hallways or opening into vast, intermediate spaces—the very areas that appear as «ballrooms». These spaces are filled with mannequins, which, within the illusion, serve as the «people» mentioned earlier. Amidst all this, however, there is something truly real: a specific type of entity unique to this Liminal space, known as Opifex Imitator. These beings are exact replicas of ordinary humans, with one crucial distinction: they lack a face entirely, the area being replaced by a smooth, unbroken layer of skin. They navigate via echolocation and have no need for sustenance. Upon encountering a human, they may offer a drink or invite the individual to the «Boss’s Office» to undergo «Qualification» (see Phen_0004). The image provided is the one that most closely resembles the interior of the illusion.",
    tips: "Go on, if you can. There is no way back.",
    hazardClass: "non-linear geometry, psychological impact and hostile Organisms"
}
}
},
{
id: "LIM_0007",
type: "liminalityM",
hazard: "CLASS 0",
image: "images/Scotos.jpg",
translations: {
ru: {
    title: "СКОТОС",
    description: "Скотос почти-что идентичен Мендациусу, но имеет лишь четыре отличия. Во-первых, здесь отсутствует психологическое воздействие, и Лиминаль выглядит именно так, как она и выглядит на самом деле. Во-вторых, здесь полностью отсутствует освещение. В-третьих, здесь нет жизни и манекенов. И в-четвёртых, здесь есть эвклидова геометрия. Эта Лиминаль является последней в Основном Списке Лиминалей.",
    tips: "Уже нечего делать.",
    hazardClass: "Безжизненный"
},
en: {
    title: "SCOTOS",
    description: "Scotos is almost identical to Mendacius, however, he has some differences. At first, there is no psychological impact. This means that the Liminality looks just like how it actually looks without the illusion. Second of all, there is no light at all. At third, there is nothing alive out here. Not even the mannequins are here. And at fourth, there is also linear geometry. This Liminality is the last on The Main Liminalities list.",
    tips: "You can't do anything at this point.",
    hazardClass: "Lifeless."
}
}
},
{
id: "ORG_KIN4_SPECB-15",
type: "entity",
hazard: "CLASS VARIABLE",
hazardClass: "unstable",
image: "images/hound.png",
translations: {
ru: {
title: "HOMO DESPERANS (Отчаявшиеся)",
description: "Гуманоидные существа, у которых может быть отсутствие кусков кожи, волос или даже ногти. Их можно описать как живых мертвецов, которые живы в пределах Фористуры. Их поведение нестабильно и варьируется от простого бродяжничества до поведения низкоинтеллектуального хищника.",
tips: "Если вы встретили Отчаявшегося и вы находитесь в одной комнате, то советуется немедленно покинуть комнату, при этом не издавать много шума. При погони рекомендуется скрыться, но вы можете также попробовать вступить в бой."
},
en: {
title: "HOMO DESPERANS (The Desperate)",
description: "Humanoid beings that may lack patches of skin, hair, or even fingernails. They can be described as the living dead—creatures that remain animate within the confines of Foristurality. Their behavior is unstable, ranging from aimless wandering to the actions of a low-intelligence predator.",
tips: "If you have met a Desperate one and you are in the same room as him, it is recommended to quickly leave that room and to not make a lot of noise. If he's chasing you, then it's recommended to hide, however, you can also try fighting him."
}
}
}
];
let currentLanguage = 'ru';
function changeLanguage(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const targetedBtn = document.getElementById(`lang-${lang}`);
    if (targetedBtn) targetedBtn.classList.add('active');

    const ui = uiTranslations[lang];
    document.getElementById('ui-title').innerText = ui.title;
    document.getElementById('ui-status').innerText = ui.status;
    document.getElementById('ui-warning').innerText = ui.warning;
    document.getElementById('ui-search-label').innerText = ui.searchLabel;
    document.getElementById('ui-search-input').placeholder = ui.searchPlaceholder;
    document.getElementById('ui-category-label').innerText = ui.categoryLabel;

    const filter = document.getElementById('typeFilter');
    if (filter && filter.options && filter.options.length >= 5) {
        filter.options[0].text = ui.catAll;
        filter.options[1].text = ui.catMainLevels;
        filter.options[2].text = ui.catOtherLevels;
        filter.options[3].text = ui.catEntities;
        filter.options[4].text = ui.catObjects;
    }

    const footerText = document.getElementById('ui-footer');
    if (footerText) footerText.innerText = ui.footer;

    searchArchive();
}

function displayDatabase(items) {
    const container = document.getElementById('archiveContainer');
    if (!container) return;
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `<p class="no-results">${uiTranslations[currentLanguage].noResults}</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = `archive-card ${item.type}`;
        
        const data = item.translations[currentLanguage];
        const ui = uiTranslations[currentLanguage];
        const imageHtml = item.image ? `<img src="${item.image}" class="item-image" alt="${data.title}">` : '';

        // ИСПРАВЛЕНО: Выбор переведенной метки геометрии/поведения
        const geometryLabel = item.type === 'entity' ? ui.behavior : data.characteristic;

        card.innerHTML = `
            <div class="card-header">
                <span class="item-id">${item.id}</span>
                <span class="hazard-badge ${data.hazardClass.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}">${item.hazard}</span>
            </div>
            <h3 class="item-title">${data.title}</h3>
            ${imageHtml}
            
            <div class="inner-stats-box">
                <div><strong>${geometryLabel}:</strong> ${item.hazardClass}</div>
                <div><strong>${ui.archiveStatus}:</strong> ${ui.archiveAvailable}</div>
            </div>

            <p class="item-desc"><strong>${ui.descTitle}</strong> ${data.description}</p>
            <div class="item-tips"><strong>${ui.tipsTitle}</strong> ${data.tips}</div>
        `;
        container.appendChild(card);
    });
}


function searchArchive() {
    const searchInput = document.getElementById('ui-search-input');
    const filterSelect = document.getElementById('typeFilter');
    if (!searchInput || !filterSelect) return;
    const query = searchInput.value.toLowerCase();
    const typeFilter = filterSelect.value;
    const filtered = backroomsDatabase.filter(item => {
    const data = item.translations[currentLanguage];
    const matchesSearch = data.title.toLowerCase().includes(query) ||
    data.description.toLowerCase().includes(query) ||
    item.id.toLowerCase().includes(query);
    const matchesFilter = typeFilter === 'all' || item.type === typeFilter;
    return matchesSearch && matchesFilter;
});
displayDatabase(filtered);
}
window.onload = () => {
    changeLanguage('ru');
};
