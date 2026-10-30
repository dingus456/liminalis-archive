// plz start work
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
        archiveAvailable: "ДОСТУПЕН",
        catForum: "ПРОТОКОЛЫ СВЯЗИ",
        catSatillites: "СПУТНИКИ (lim_num-let)"
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
        archiveAvailable: "AVAILABLE",
        catForum: "COMMUNICATION LOGS",
        catSatellite: "SATELLITES (lim_num-let)"
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
                hazardClass: "Пустой"
            },
            en: {
                title: "JANUS",
                description: "A complex space, somewhat reminiscent of a retail store. The interior of Janus consists of yellow wallpaper patterned with various designs, damp, fabric-covered carpeting in shades of brown, and a tiled ceiling with pipes and wires running across it. Fluorescent lights are mounted on the ceiling, emitting a loud, incessant hum. Occasionally, electrical outlets—apparently of American design—can be found on the walls. Sometimes, various objects appear here; these are items from Earth, though they may be duplicated or distorted. Beyond physical objects, one can also hear sounds with no discernible source—ranging from a faint hum or the chaotic playing of a wind instrument to warped, distorted versions of actual musical pieces.",
                tips: "If you have entered Janus in a party, it is recommended to stay together in order to not get lost. If you see copies of the emergency exit signs - follow them.",
                hazardClass: "Hollow"
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
                hazardClass: "Нелинейная геометрия"
            },
            en: {
                title: "ETERNITAS",
                description: "A complex consisting of concrete corridors with very little light. The illumination comes from dim, ceiling-mounted lamps fueled by kerosene; as the fuel burns away, the lamps eventually go out. Unlike Janus, this liminality features non-Euclidean geometry, and its overall structure is far more primitive, composed solely of corridors and staircases. Occasionally, one may encounter leather doors, which lead either to small, cramped chambers or simply to a wall. At times, windows can also be found—revealing nothing but more walls.",
                tips: "If you have ended up here, it is recommended that you find an exit immediately and use it. This will be no easy task, given the constantly burning-out lights and the non-Euclidean geometry; therefore, you should be aware of a few specific signs indicating that an exit is nearby. If you notice holes and pipes beginning to appear in the corridors of Eternitas, you are heading toward an exit—it should be close by.",
                hazardClass: "Non-linear geometry"
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
                description: "Вевоис очень похож на Этернитас, но у этих двух есть одно ключевое отличие. В отличии от Эетернитаса, Вевоис имеет эвклидову геометрию, из-за чего ориентироваться по нему гораздо проще, чем по Этернитасу. Кроме того, тут также присутствует люминесцентные лампы длиной в 3 метра у стен, которые издают тихий гул. Сверху полно труб, по которым идут разные газообразные вещества: от кислорода до амиака. Двери здесь состоят из металла и ведут в другие коридоры, которые, иногда, могут иметь трубы на стенах, перед которыми всегда будут решётки и балки из металла. Из-за них эти коридоры становятся меньше чем обычные коридоры. Также, в отличии от Януса и Этернитаса, здесь присутствуют коренные жители, коими являются виды Caecus Contrahens и Mus Aeger. Слепцов можно заметить в узких местах, иногда скользящих по пространству Вевоиса. Крысы держатся в стайках и живут в щелях, которых можно найти в стенах. Они здесь являются падальщиками и едят остатки, найденные в пределах Лиминали. Слепцы охотятся на крыс и проходящих мимо людей, нападая в узких коридорах, вентиляциях. По-мимо всего сказанного ранее, здесь присутствует мелкое количество воды, образованной ввиде луж в результате возможных химических реакций.",
                tips: "Если вы оказались в Вевоисе, то рекомендуется избегать узких и тёмных мест, в которых могут обитать «Серости». Следуйте за светом и редкими табличками. Если вы пойдёте за ними, то рано или поздно вы дойдёте до лифта с шестью кнопками этажей.",
                hazardClass: "Высокая температура, агрессивная окружающая среда"
            },
            en: {
                title: "VEJOVIS",
                description: "Vejovis bears a strong resemblance to Ethernitas, yet there is one key difference between the two. Unlike Ethernitas, Vejovis follows Euclidean geometry, making it significantly easier to navigate. The space is illuminated by 3-meter-long fluorescent lights on the walls that emit a faint, constant hum. Overhead, a network of pipes carries various gaseous substances—ranging from oxygen to ammonia. Metal doors lead into other corridors, some of which feature pipes along the walls, shielded by metal grilles and support beams; these obstructions make such corridors narrower than the standard ones. Furthermore, unlike Janus or Ethernitas, Vejovis is home to indigenous species: Caecus Contrahens and Mus Aeger. The «Dullers» can be spotted in narrow passages, occasionally gliding through the space. The rats gather in small packs and inhabit crevices within the walls; they act as scavengers, feeding on remnants found throughout Liminality. The «Dullers» hunt both the rats and any humans passing through, launching attacks in cramped corridors and ventilation shafts. Additionally, small amounts of water can be found here, appearing as puddles—the byproduct of various chemical reactions.",
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
    hazardClass: "Нелинейная геометрия, психологическое влияние и опасные Организмы"
},
en: {
    title: "MENDACIUS",
    description: "To any wanderer, the architecture of Mendacius might initially appear to be the very epitome of beauty. The floor is made of polished, dark-toned wood and covered by a carpet that stretches on for millions of miles. Overhead hang chandeliers—candelabra-style fixtures with candles that never burn out. Occasionally, doors appear, leading into grand ballrooms filled with people. And yet… it all feels artificial. You would be right to think so; in reality, this Liminality consists of nothing more than simple corridors and rooms, constructed entirely from cold, gray concrete. There are no chandeliers on the ceiling—instead, Mendacius is illuminated by a light source that remains unseen. The doors and the carpet are entirely absent. The architecture is defined by narrow corridors that can stretch on for great distances, occasionally branching off into other hallways or opening into vast, intermediate spaces—the very areas that appear as «ballrooms». These spaces are filled with mannequins, which, within the illusion, serve as the «people» mentioned earlier. Amidst all this, however, there is something truly real: a specific type of entity unique to this Liminal space, known as Opifex Imitator. These beings are exact replicas of ordinary humans, with one crucial distinction: they lack a face entirely, the area being replaced by a smooth, unbroken layer of skin. They navigate via echolocation and have no need for sustenance. Upon encountering a human, they may offer a drink or invite the individual to the «Boss’s Office» to undergo «Qualification» (see Phen_0004). The image provided is the one that most closely resembles the interior of the illusion.",
    tips: "Go on, if you can. There is no way back.",
    hazardClass: "Non-linear geometry, psychological impact and hostile Organisms"
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
    hazardClass: "Безжизненный."
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
id: "LIM_0008",
type: "liminalityO",
hazard: "CLASS 3EG",
image: "images/AHEn-C2EHE.webp",
translations: {
ru: {
    title: "AHEn-C2EHE: «Покинутая больница»",
    description: "AHEn-C2EHE является первой Лиминалью, которая была открыта с помощью дверей (см. Phen_0001). Эта Лиминаль выглядит как заброшенное здание медицинского предназначения, которое практически пустое, отчего и приметивное. Здесь, подобно Этернитасу, присутствует неэвклидова геометрия, поэтому навигация здесь крайне затруднена. Здесь, как и в уже ранее-упомянутом Этернитасе, присутствуют окна и лестницы, однако тут отсутствуют двери. Вместо них, здесь находятся дверные проёмы, которые ведут в комнаты площадью 50 метров. В таких комнатах есть койки и тумбочки, в которых ничего нет. Здесь также полно дыр, ведущих на нижние этажи. Эти дыры порой бывают очень большими по неизвестным причинам. Также в этой Лиминали отсутствует освещение ввиде ламп. Вместо них, здесь предполагается наличие Солнца, лучи которого проходят через щели и дыры. Некоторые странники находили здесь шприцы. Они здесь содержат кровь, мочу и иногда опасные химические вещества в жидкой форме.",
    tips: "Если вы сюда попали через дверь, то советуется попытаться найти другую дверь (дверь с любым другим знаком кроме Плюса). НЕ подпирайте и не вкалывайте себе ничего с пола. Смотрите под ноги.",
    hazardClass: "Хрупкие стены, полно ям, безжизненно. Символ двери: «+»"
},
en: {
    title: "AHEn-C2EHE: «Forsaken hospital»",
    description: "AHEn-C2EHE is the first Liminality to be opened using doors (see Phen_0001). This Liminal looks like an abandoned medical building, which is practically empty, which is why it is remarkable. Here, like Eternitas, there is non-Euclidean geometry, making navigation extremely difficult. Here, as in the previously mentioned Eternitas, there are windows and stairs, but there are no doors. Instead, there are doorways that lead to rooms with an area of ​​50 meters. In such rooms there are beds and bedside tables with nothing in them. There are also a lot of holes leading to the lower floors. These holes are sometimes very large for unknown reasons. Also in this Liminal there is no lighting in the form of lamps. Instead, the presence of the Sun is assumed here, the rays of which pass through the cracks and holes. Some travelers have found syringes here. They contain blood, urine and sometimes dangerous chemicals in liquid form.",
    tips: "If you got here through a door, it is advised to try to find another door (a door with any other sign other than Plus). DO NOT prop or inject yourself with anything from the floor. Watch your step.",
    hazardClass: "Fragile walls, a lot of pits, lifeless. Door symbol: «+»"
    }
  }
},
       {
id: "LIM_0009",
type: "liminalityO",
hazard: "CLASS 5PG",
image: "images/TheEnd.jpg",
translations: {
ru: {
    title: "LEN-C5PGHGP: «Финальная Точка»",
    description: "Архитектура LEN-C5PGHGP, также известного как «Конец» или «Финальная точка» состоит из разукрашенных в разные цвета стен, серых ковров и плиточных потолков. Изредка можно найти подобие табличек на потолке, в которых написно «The End» или «The End is Near». Комнаты LEN-C5PGHGP также имеют достаточно большое количество деревянных полок, на которых расположены, как покажется вам сначала, книги разных писателей. Но как только вы попытаетесь прочитать одну такую книгу, вы ничего не увидите, поскольку в страницах отсутствует текст. Изредка на территории «Конца» можно найти столики с компьютерными терминалами времён девяностых. Большая часть из таких компьютеров отключены от розеток, но некоторые были включены. На обоях включенных компьютеров был красный фон, а также полно шаров и текст «Присойденяйтесь к нам!». Через эти терминалы НЗФА и получила информацию о данной Лиминали. Кроме терминалов, полок и табличек, здесь также присутствуют две аномалии, а именно Неэвклидова геометрия, которая здесь очень активна, а также один другой феномен, именуемый «Генерацией Матрицы». Когда странник находится в LEN-C5PGHGP слишком долго, он начнёт видеть «Реальный мир», в который он якобы попал. Всё здесь будет выглядить так реально, что странник забудет о том что ещё пять минут назад был в пределах Фористуры, и начнёт думать, что он уже дома, на Земле. На деле-же, это не так, и на самом деле странник видит лишь иллюзию. Иллюзию, которую опровергнуть можно только через смартфоны, фотоаппараты. В конечном итоге, рано или поздно, странник, который «вернулся домой», начнёт сходить с ума, но только в том случае, если он узнает, что это всё - фальшь.",
    tips: "Как-то пытаться выбраться отсюда будет бессмысленно. Это невозможно.",
    hazardClass: "Нелинейная геометрия, психологическое влияние, безжизненно. Символ двери: «EXIT»"
},
en: {
    title: "LEN-C5PGHGP: «The Final Point»",
    description: "The architecture of LEN-C5PGHGP, also known as «The End» or «The Final Point» consists of multicolored walls, gray carpeting, and tiled ceilings. Occasionally, one may come across signs on the ceiling bearing phrases such as «The End» or «The End is Near». LEN-C5PGHGP also features numerous wooden shelves stocked with what appear to be books by various authors; however, upon closer inspection, the pages are entirely devoid of text. Scattered throughout «The End» are small tables equipped with computer terminals dating back to the 1990s. While most are unplugged, some remain powered on—their screens displaying a red background filled with floating spheres and the message: «Join us!» It was through these terminals that the NBFA obtained information regarding this specific Liminality. In addition to the terminals, shelves, and signs, the space exhibits two distinct anomalies: highly active non-Euclidean geometry and a phenomenon referred to as «Matrix Generation.» When a wanderer remains in LEN-C5PGHGP for too long, they begin to perceive the «real world»: the place they believe they have returned to. Everything appears so authentic that the wanderer forgets they were within the Foristure just moments prior, becoming convinced they are back home on Earth. In reality, however, this is merely an illusion—one that can only be debunked through the use of smartphones or cameras. Ultimately—sooner or later—a wanderer who has «returned home» will begin to lose his mind, but only if he discovers that it is all a sham.",
    tips: "You can't exit this Liminality. It's impossible.",
    hazardClass: "Non-linear, psychological impact, lifeless. Door symbol: «EXIT»"
    }
  }
},
{
    id: "LIM_0010",
    type: "liminalityO",
    hazard: "CLASS 0",
    image: "images/PEn-C0EGHn.jpg",
    translations: {
    ru: {
        title: "PEN-C0EGHn: «Транквиллитас»",
        description: "PEn-C0EGHn представляет собой пустой, бесконечный комплекс, состоящий из чисто-белых, блестящих бассейных плиток. Плитки эти находятся на всех поверхностях, будто пол или стена. Архитектура здесь своеобразная и довольно хаотичная: Например, одна комната может иметь лестницу на потолке, другая заполнена колоннами. На стенах нередко можно увидеть окна, из которых видно чистое, синее небо, на котором не видно солнца или луны. Из этих окон исходит свет, единственный свет во всей Лиминали. На полу также можно часто найти воду. Эта вода имеет бирюзовый цвет и является кристально чистой. Некоторые исследования показали, что в воде есть соль, которая признана безопасной в употреблении. Иногда можно найти и ямы в полу, заполненные водой. Эти ямы могут иметь разные габориты, формы и глубину. Но везде одна черта: никаких заборчиков, а также такая-же кристально-чистая вода.",
        tips: "Если вы не хотите здесь оставаться, то вы можете попробовать сделать ноуклип. Это единственный известный выход отсюда на данный момент. Он ведёт на Янус.",
        hazardClass: "Безжизненно. Символ двери: «〰»"
    },
    en: {
        title: "PEN-C0EGHn: «Tranquillitas»",
        description: "PEn-C0EGHn is an empty, endless complex of pure white, shiny pool tiles. These tiles are found on all surfaces, like the floor or wall. The architecture here is peculiar and quite chaotic: For example, one room may have a staircase on the ceiling, another is filled with columns. You can often see windows on the walls, from which you can see a clear, blue sky, in which the sun or moon is not visible. From these windows comes light, the only light in all of this Liminality. Water can also often be found on the floor. This water has a turquoise color and is crystal clear. Some studies have shown that there is salt in the water, which is considered safe to consume. Sometimes you can find holes in the floor filled with water. These pits can have different sizes, shapes and depths. But there is one feature everywhere: no fences, and the same crystal clear water.",
        tips: "If you don’t want to stay here, you could try to noclip. It’s the only known way out of here at the moment. It leads to Janus.",
        hazardClass: "Lifeless. Door symbol: «〰»"
        }
    }
},
    {
    id: "LIM_0011",
    type: "liminalityO",
    hazard: "CLASS 2P",
    image: "images/FEn-C2PHSP.jpg",
    translations: {
    ru: {
        title: "FEn-C2PHSP: «Аллея»",
        description: "FEn-C2PHSP состоит из длинного коридора, который извивается по мере продвижения. По бокам коридора находится декор, сильно напоминающий советские здания времён Никиты Хрущёва. Этот декор имеет множество окон и имеет одну дверь на каждые 25 метров. Входить в двери строго запрещено из-за внутренней аномалии, которая заставляет людей испытывать сильное желание войти ещё глубже в эту местность. За окнами находится розовый свет, который как раз составляет большую часть интерьера того, что находится за дверьми. В коридоре также присутствует искусственный снег, который не тает. Иногда в нём появляются ямки, и в них видно пол с шахматным узором. Этот пол считается очень скользким, поэтому наступать на него не рекомендуется. Потолок обклеен обоями, напоминающими светлое, дневное небо с облаками. Каждые 10 метров здесь стоят фонари и скамейки, у которых с двух сторон имеются такие-же искуственные кусты зелёного цвета, посаженные в горшки. Фонари постоянно горят и не издают никаких звуков. Здесь также играет спокойная музыка, источник которой не был найден. Предполагается, что источником этого звука может быть то, что находится за дверью в каждом из декоративных входов в места с розовым светом, однако доказать это нельзя, поскольку из этих мест ещё никто не возвращался.",
        tips: "Игнорируйте двери по бокам коридора. Не пытайтесь сделать ноуклип в попытке выхода из FEn-C2PHSP; это приведёт сильным травмам и имеет высокий риск смерти. Вместо этого, если вам не хочется тут оставаться, то просто идите вперёд. Рано или поздно, вы дойдёте до конца и увидете металлическую дверь. Войдя в неё, вы попадёте в Вевоис",
        hazardClass: "Психологические эффекты. Символ двери: «❄»"
    },
    en: {
        title: "FEn-C2PHSP: «The Alleyway»",
        description: "FEn-C2PHSP consists of a long corridor that winds as it progresses. The sides of the corridor feature decor strongly reminiscent of Soviet-era buildings from the time of Nikita Khrushchev. This decor includes numerous windows, with one door appearing every 25 meters. Entering these doors is strictly prohibited due to an internal anomaly that compels individuals to venture even deeper into the area. Beyond the windows lies a pink light, which also fills much of the interior space behind the doors. The corridor is covered in artificial snow that does not melt. Occasionally, gaps appear in the snow, revealing a checkered floor underneath; this surface is extremely slippery, and stepping on it is not advised. The ceiling is covered in wallpaper depicting a bright, daytime sky with clouds. Every 10 meters, there are lampposts and benches, flanked by potted artificial green bushes. The lampposts remain constantly lit and emit no sound. A calm, ambient music also plays, though its source has never been identified. It is hypothesized that the sound may originate from the spaces behind the doors—the areas bathed in pink light—but this cannot be proven, as no one who has entered these spaces has ever returned.",
        tips: "Ignore the doors along the sides of the corridor. Do not attempt to noclip your way out of FEn-C2PHSP; doing so will result in severe injuries and carries a high risk of death. Instead, if you do not wish to remain here, simply keep moving forward. Sooner or later, you will reach the end and see a metal door. Passing through it will take you to Vejovis.",
        hazardClass: "Psychological effects. Door symbol: «❄»"
        }
    }
},
        {
    id: "LIM_0001-A",
    type: "satellite",
    hazard: "CLASS 3E",
    image: "images/JANUS-A.webp",
    translations: {
    ru: {
        title: "ЯНУС-А",
        description: "Янус-А почти-что ничем не отличается от основной Лиминали архитектурно. Этот Спутник, однако, имеет лишь одно отличие: он выглядит потрёпанным и большая часть света там практически не работает. Там есть совсем небольшой гул, который всё равно можно не всегда услышать. Обои порой бывают ободраны, обнажая деревянные, как будто картонные стены. Музыка здесь искажена ещё сильнее: порой её нельзя отличить от простого шума, который исходит от телевизора. Здесь отсутствуют искажённые объекты, которые присутствуют на Янусе (основной Лиминали). Также тут есть несколько видов живых организмов. В список местных обитателей входят представители рода Aspergillus, Отчаявшиеся, а также Homo Desperans и Electrofagus mimicus. Электрофаги здесь имеют очень низкую популяцию из-за критически-низкого количества освещения. Из-за этого, оставшиеся Электрофаги отчаянно пытаются выжить и воюют за самое близкое место к лампе. Если человек или какой-либо другой живой организм попытается вытащить Электрофага, то он ударит током это существо через волосинки. Один такой удар составляет примерно 120 вольт. Отчаявшиеся, обычно, бродят здесь по-одиночке и, из-за голода, при встрече с другим живым организмом, пытаются его съесть, однако это не всегда удаётся им.",
        tips: "Игнорируйте двери по бокам коридора. Не пытайтесь сделать ноуклип в попытке выхода из FEn-C2PHSP; это приведёт сильным травмам и имеет высокий риск смерти. Вместо этого, если вам не хочется тут оставаться, то просто идите вперёд. Рано или поздно, вы дойдёте до конца и увидете металлическую дверь. Войдя в неё, вы попадёте в Вевоис",
        hazardClass: "Агрессивная окружающая среда"
    },
    en: {
        title: "JANUS-A",
        description: "Janus-A is almost identical to the main Liminality in architecture. This satellite, however, has one key difference: it appears worn-down, and most of the lighting is effectively non-functional. There is a faint, persistent hum—though it is not always audible. In places, the wallpaper is torn away, revealing walls made of wood that resembles cardboard. The music here is even more distorted; at times, it is indistinguishable from the static noise emitted by a television. Unlike the primary Janus (the main Liminality), this version lacks distorted objects. It is also home to several types of living organisms. Local inhabitants include members of the genus *Aspergillus*, the Desperate, as well as *Homo desperans* and *Electrofagus mimicus*. The *Electrofagus* population here is very small due to the critically low levels of light; consequently, the remaining individuals struggle desperately to survive, competing for the spots closest to the lamps. If a human or any other living organism attempts to remove an *Electrofagus*, it will deliver an electric shock through its hair-like filaments—a jolt of approximately 120 volts. The Desperate typically wander alone; driven by hunger, they will attempt to consume any other living organism they encounter, though they do not always succeed.",
        tips: "Ignore the doors along the sides of the corridor. Do not attempt to noclip your way out of FEn-C2PHSP; doing so will result in severe injuries and carries a high risk of death. Instead, if you do not wish to remain here, simply keep moving forward. Sooner or later, you will reach the end and see a metal door. Passing through it will take you to Vejovis.",
        hazardClass: "Hostile enviorment"
        }
    }
},
    {
    id: "ORG_KIN4_SPECB-6",
    type: "entity",
    hazard: "CLASS 5",
    image: "images/Duller.jpg",
    translations: {
    ru: {
    title: "CAECUS CONTRAHENS (Слепцы)",
    description: "Также именуемые странниками как «Серости», Слепцы являются агрессивным видом, строение тела которых сильно схоже с человеческим. У них отсутствуют пальцы ног и рук, как и сами ладони с пятками, а также глаза. Вместо глаз, у Слепцов присутствует слой кожи. У них ещё есть рот, заполненный примерно пятидесятью зубами (25 на верх и низ). Кожа у них имеет серый оттенок, отчего Слепцы и получили кличку «Серости». Их основным способом перемещения является скольжение по стенам. Скользят они довольно быстро, из-за чего убежать от них очень трудно. Ещё они ориентируются по эхолокации и запаху, поскольку у них ещё есть и нос, через который они дышат. Они вдыхают кислород или углекислый газ. Внутри, они уничтожают углекислый газ, выдыхая кислород. Неизвестно точно, как это происходит. Слепцы являются и плотоядными хищниками, которые охотятся в одиночку. В основном, они охотятся на Крыс, Электрофагов, а также на заблудших странников. Гораздо более редкой пищей для них яявляются Натюрморты и эволюционировавшие виды домашних животных в пределах Фористуры. Пьют они воду, хотя и довольно редко. Они также почти-что не выделяют пота.",
    tips: "Если вы встретили Отчаявшегося и вы находитесь в одной комнате, то советуется немедленно покинуть комнату, при этом не издавать много шума. При погони рекомендуется скрыться, но вы можете также попробовать вступить в бой.",
    hazardClass: "Агрессивный"

    },
    en: {
    title: "CAECUS CONTRAHENS (The Blindmen)",
    description: "Also referred to by wanderers as «The Dullers», Blinds are an aggressive species with a body structure very similar to that of a human. They lack fingers and toes, as well as the palms and heels themselves, as well as eyes. Instead of eyes, Blinds have a layer of skin. They also have a mouth filled with about fifty teeth (25 top and bottom). Their skin has a gray tint, which is why the Blind People received the nickname “Grayness”. Their main method of movement is sliding along walls. They glide quite quickly, making it very difficult to escape from them. They also navigate by echolocation and smell, since they also have a nose through which they breathe. They inhale oxygen or carbon dioxide. Inside, they destroy carbon dioxide by exhaling oxygen. It is not known exactly how this happens. Blinds are also carnivorous predators that hunt alone. They mainly hunt Rats, Electrophages, and lost wanderers. Much rarer food for them are Still Lifes and evolved species of domestic animals within the Foristura. They drink water, although quite rarely. They also hardly produce any sweat.",
    tips: "If you have met a Desperate one and you are in the same room as him, it is recommended to quickly leave that room and to not make a lot of noise. If he's chasing you, then it's recommended to hide, however, you can also try fighting him.",
    hazardClass: "Aggressive"

    }
  }
},
{
    id: "ORG_KIN4_SPECB-15",
    type: "entity",
    hazard: "CLASS VARIABLE",
    image: "images/wretch.webp",
    translations: {
    ru: {
    title: "HOMO DESPERANS (Отчаявшиеся)",
    description: "Гуманоидные существа, у которых может быть отсутствие кусков кожи, волос или даже ногти. Их можно описать как живых мертвецов, которые живы в пределах Фористуры. Их поведение нестабильно и варьируется от простого бродяжничества до поведения низкоинтеллектуального хищника.",
    tips: "Если вы встретили Отчаявшегося и вы находитесь в одной комнате, то советуется немедленно покинуть комнату, при этом не издавать много шума. При погони рекомендуется скрыться, но вы можете также попробовать вступить в бой.",
    hazardClass: "Нестабилен"

    },
    en: {
    title: "HOMO DESPERANS (The Desperate)",
    description: "Humanoid beings that may lack patches of skin, hair, or even fingernails. They can be described as the living dead—creatures that remain animate within the confines of Foristurality. Their behavior is unstable, ranging from aimless wandering to the actions of a low-intelligence predator.",
    tips: "If you have met a Desperate one and you are in the same room as him, it is recommended to quickly leave that room and to not make a lot of noise. If he's chasing you, then it's recommended to hide, however, you can also try fighting him.",
    hazardClass: "Unstable"

    }
  }
},
    {
    id: "ORG_KIN4_SPECB-24",
    type: "entity",
    hazard: "CLASS 2",
    image: "images/DeathRat.webp",
    translations: {
    ru: {
    title: "MUS AEGER (Крысы)",
    description: "Эти крысы ничем не отличаются от обычных крыс, которых можно найти на Земле. Однако, здесь они питаются ИСКЛЮЧИТЕЛЬНО падалью и страдают от очень высокой смертности из-за их мест обитания (Которыми являются Вевойс и Дит). Они своими зубами грызут норы в стенах.",
    tips: "Если вы заметили одну такую стайку крыс, то можете на них посмотреть; Они не агрессивны в сторону странников (за исключением тех случаев, если они больны). Не ешьте их.",
    hazardClass: "Безопасны"

    },
    en: {
    title: "MUS AEGER (Rats)",
    description: "These rats are no different from ordinary rats that can be found on Earth. However, here they feed EXCLUSIVELY on carrion and suffer a very high mortality rate due to their habitats (Which are Vejovis and Dis). They chew holes in the walls with their teeth.",
    tips: "If you notice one such flock of rats, you can look at them; They are not aggressive towards wanderers (unless they are sick). Don't eat them.",
    hazardClass: "Safe"

    }
  }
},
{
id: "Phen_0001",
type: "phenomena",
hazard: "CLASS VARIABLE",
image: "images/DoorRandomBKR.jpg",
translations: {
ru: {
    title: "СЛУЧАЙНЫЕ СТВОРКИ",
    description: "Спонтанная пространственная аномалия, которая выражается в случайном появлении дверей разного вида, материала и предназначения. Это явление, в основном, происходит когда в неэвклидовых Лиминалях (подобных Этернитасу или Диту) перестраивается ландшафт, но в более редких случаях это можно встретить и в эвклидовых Лиминалях в гораздо более мелком объёме. Двери в это время могут появиться где угодно: они могут быть запечатаны в стене, парить посреди комнаты или коридора, или быть наполовину запечатанной в полу. На каждой такой двери есть табличка с символами. Обычно, символика на табличках является сильно искажённой, но некоторые двери имеют более менее понятные символы, вроде ∆ (дельта), Ⅰ (римская однёрка) и т.п. Эти двери ведут в «Остальные» Лиминали: части Фористуры, которые не являются изученными до конца, или вовсе неизвестны (список открытых «Остальных» Лиминалей см. категорию «Остальные Лиминали (lim_num))».",
    tips: "Всегда смотрите на таблички, не входите сразу в дверь. Даже в самых экстренных случаях.",
    hazardClass: "Пространственная аномалия, непредсказуемая."
},
en: {
    title: "RANDOM GATEWAYS",
    description: "A spontaneous spatial anomaly, which is expressed in the random appearance of doors of different types, materials and purposes. This phenomenon mainly occurs when non-Euclidean Liminals (like Eternitas or Dis) undergo landscape restructuring, but in more rare cases it can also be found in Euclidean Liminals in a much smaller volume. Doors at this time can appear anywhere: they can be sealed in a wall, floating in the middle of a room or corridor, or half-sealed in the floor. Each door has a sign with symbols. Usually, the symbolism on the tablets is very distorted, but some doors have more or less understandable symbols, like ∆ (delta), Ⅰ (Roman one-liner), etc. These doors lead to the «Other» Liminalities: parts of Foristura that are not fully explored, or are completely unknown (for a list of acknowledged «Other» Liminalities, see the «Other Liminalities (lim_num)» category)",
    tips: "Always look at the signs and don't walk straight into the door. Even in the most emergency cases.",
    hazardClass: "Spacial anomaly, unpredictable."
    }
  },    
    
}];
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
    if (filter && filter.options) {
        for (let i = 0; i < filter.options.length; i++) {
            const opt = filter.options[i];
            if (opt.value === 'all') opt.text = ui.catAll;
            if (opt.value === 'liminalityM') opt.text = ui.catMainLevels;
            if (opt.value === 'liminalityO') opt.text = ui.catOtherLevels;
            if (opt.value === 'entity') opt.text = ui.catEntities;
            if (opt.value === 'object') opt.text = ui.catObjects;
            if (opt.value === 'forum') opt.text = ui.catForum;
            if (opt.value === 'satellite') opt.text = ui.catSatellite;
        }
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
        const defaultLabel = currentLanguage === 'ru' ? '[ХАРАКТЕРИСТИКА]' : '[CHARACTERISTIC]';
        const geometryLabel = item.type === 'entity' ? ui.behavior : (data.characteristic ? data.characteristic : defaultLabel);

        const rawHazardClass = data.hazardClass ? data.hazardClass : (currentLanguage === 'ru' ? '[НЕТ ДАННЫХ]' : '[NO DATA]');
        
        const safeCssClass = item.hazard ? item.hazard.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase() : 'unstable';

        card.innerHTML = `
            <div class="card-header">
                <span class="item-id">${item.id}</span>
                <span class="hazard-badge ${safeCssClass}">${item.hazard}</span>
            </div>
            <h3 class="item-title">${data.title}</h3>
            ${imageHtml}
            
            <div class="inner-stats-box">
                <div><strong>${geometryLabel}:</strong> ${rawHazardClass}</div>
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
    const giscusBox = document.getElementById('giscusContainer');
    if (!searchInput || !filterSelect || !giscusBox) return;

    const query = searchInput.value.toLowerCase();
    const typeFilter = filterSelect.value;

    // ЕСЛИ ВЫБРАН ФОРУМ:
    if (typeFilter === 'forum') {
        displayDatabase([]); // Прячем карточки уровней
        giscusBox.style.display = 'block'; // Показываем блок форума
        
        // Если Giscus еще не загружен — загружаем его внутрь giscusContainer
        if (giscusBox.innerHTML === '') {
            giscusBox.innerHTML = `
             <script src="https://giscus.app/client.js"
            data-repo="dingus456/liminalis-archive"
            data-repo-id="R_kgDOVa8v0Q"
            data-category="General"
            data-category-id="DIC_kwDOVa8v0c4DJ_Wf"
            data-mapping="url"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="dingus456/liminalis-archive/style.css"
            data-lang="ru"
            crossorigin="anonymous"
            async>
        </script>
            `;
        }
        return;
    }

    // ЕСЛИ ВЫБРАНО ЧТО-ТО ДРУГОЕ: прячем форум и ищем уровни
    giscusBox.style.display = 'none';

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
