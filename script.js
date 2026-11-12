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
        catEntities: "ОРГАНИЗМЫ (org_kin_spec)",
        catObjects: "ЯВЛЕНИЯ (phen_num)",
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
        catSatellite: "СПУТНИКИ (lim_num-let)",
        glossaryBtn: "[СПРАВКА / ГЛОССАРИЙ]",
        glossaryTitle: "▲ ТЕХНИЧЕСКИЙ ГЛОССАРИЙ НЗФА // СПРАВОЧНЫЙ МАТЕРИАЛ",
        glossaryData: `
            <div class="archive-card mechanical">
                <h3 class="item-title" style="color: #39ff14; border-bottom: 1px dashed #39ff14; padding-bottom: 5px;">1. ПРОСТРАНСТВЕННЫЙ ШОВ (Spatial Seam)</h3>
                <p class="item-desc" style="margin-top: 10px;">Физический феномен наложения двух и более бесконечных неэвклидовых Лиминалей. Поскольку пространства Фористуры не имеют чётких внешних границ, их пересечение происходит изнутри — путём 'истончения' локальной структуры (например, когда бетонные коридоры плавно замещаются обоями Януса). Зоны швов крайне нестабильны.</p>
            </div>
            <div class="archive-card mechanical" style="margin-top: 20px;">
                <h3 class="item-title" style="color: #39ff14; border-bottom: 1px dashed #39ff14; padding-bottom: 5px;">2. ЛИМИНАЛЬ-СПУТНИК (Satellite Liminality)</h3>
                <p class="item-desc" style="margin-top: 10px;">Ограниченное или полуразрушенное подпространство, запертое внутри 'гравитационного ядра' крупного Основного уровня. Спутники движутся по аномальным замкнутым орбитам, из-за чего точки перехода (сближения орбит) открываются и исчезают строго циклически, подчиняясь внутреннему 'дню' родительской Лиминали.</p>
            </div>
            <div class="archive-card mechanical" style="margin-top: 20px;">
                <h3 class="item-title" style="color: #39ff14; border-bottom: 1px dashed #39ff14; padding-bottom: 5px;">3. НЕЭВКЛИДОВА ГЕОМЕТРИЯ (Non-Euclidean Topology)</h3>
                <p class="item-desc" style="margin-top: 10px;">Критическое искажение трёхмерного пространства, при котором прямые линии могут замыкаться в кольца, углы комнат не равны 90 градусам, а движение вперёд по прямому коридору способно вернуть субъекта в точку старта. Навигация без специализированных приборов НЗФА категорически не рекомендуется.</p>
            </div>
        `
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
        catSatellite: "SATELLITES (lim_num-let)",
          glossaryBtn: "[NBFA GLOSSARY]",
        glossaryTitle: "▲ NBFA TECHNICAL GLOSSARY // REFERENCE MATERIAL",
        glossaryData: `
            <div class="archive-card mechanical">
                <h3 class="item-title" style="color: #39ff14; border-bottom: 1px dashed #39ff14; padding-bottom: 5px;">1. SPATIAL SEAM</h3>
                <p class="item-desc" style="margin-top: 10px;">A physical phenomenon where two or more infinite non-Euclidean Liminalities overlap. Since the spaces of Foristurality lack definitive outer boundaries, their collision occurs from within—via the 'thinning' of the local environment (e.g., when concrete walls gradually warp into Janus wallpaper). Seam zones are highly volatile.</p>
            </div>
            <div class="archive-card mechanical" style="margin-top: 20px;">
                <h3 class="item-title" style="color: #39ff14; border-bottom: 1px dashed #39ff14; padding-bottom: 5px;">2. SATELLITE LIMINALITY</h3>
                <p class="item-desc" style="margin-top: 10px;">A bounded or dilapidated subspace locked within the 'gravitational core' of a massive Main Level. Satellites move along anomalous closed orbits, causing transition vectors (orbital approaches) to open and collapse cyclically, guided by the internal 'day' of the parent Liminality.</p>
            </div>
            <div class="archive-card mechanical" style="margin-top: 20px;">
                <h3 class="item-title" style="color: #39ff14; border-bottom: 1px dashed #39ff14; padding-bottom: 5px;">3. NON-EUCLIDEAN TOPOLOGY</h3>
                <p class="item-desc" style="margin-top: 10px;">A critical distortion of three-dimensional space where straight lines can loop into rings, room corners do not equal 90 degrees, and moving straight down a hallway can return a subject to their starting position. Navigation without specialized NBFA instruments is strictly prohibited.</p>
            </div>
    `
    }
};


const backroomsDatabase = [
    {
        id: "LIM_0001",
        type: "liminalityM",
        hazard: "CLASS 0",
        image: "images/Level0.jpg", 
        translations: {
            ru: {
                title: "ЯНУС",
                description: "Янус представляет из себя лабиринт из комнат, строение которых можно было бы встретить в торговых центрах или розничных магазинах. В каждой комнате этой Лиминали присутствует одна черта: жёлтые обои с хаотичными узорами, которые порой меняются вне поля зрения, мокрый, коричневый ковёр, который сильно пахнет, а также плиточные потолки, за которыми находятся трубы. Это самая первая Лиминаль, которая была открыта, и из-за неё появились НЗФА, которые изучают Фористуру (см. Глоссарь). Кроме стен, ковров и потолков, здесь можно найти и всякие элементы декора, вроде мебели или розеток. Розетки здесьочень похожи на розетки американского производства, а также считаются нерабочими. Мебель, которая может быть здесь найдена, выглядит так, как будто её совсем недавно взяли из мебельного магазина, однако в ней есть что-то, что чувствуется неестественным, вроде частого дублирования определённых частей, или-же габариты, которые не соответствуют реальной мебели. Кроме них, здесь иногда можно найти столбы, арки, таблички. Арки и столбы здесь появляются довольно редко, и встретить их можно, в основном, в больших пространствах. Таблички появляются в тёмных уголках, и являются следствием феномена 0002 (см. Phen_0002). Иногда здесь можно найти и двери, которые имеют дополнительные ручки. Такие двери открываются только через ту ручку, что находится по середине двери. В пределах Януса ещё можно увидеть ямы. Ямы эти находятся в полу и имеют квадратную форму, с размерами в 3 на 3 метра в длину и ширину. На самом деле, нам неизвестно, куда ведут эти ямы, но все, кто туда падали, не возвращались, а любая связь с ними прерывалась. Точный размер Януса неизвестен, однако предполагается, что он в 3 раза больше земли (в районе 590-600 миллионов кв. миль). Здесь присутствует эвклидова геометрия, но из-за большого размера и однотипности комнат всё равно здесь просто заблудиться. Кроме того, здесь есть очень много щума: обычно, он исходит от флюресцентных ламп, которые хаотично разбросаны по потолку Лиминали. Эти лампы издают достаточно громкий гул, который может свести с ума новичков. Изредка можно услышать и искажённую музыку, которая играет из колонок на Янусе. Эти музыка может быть абсолютно любой: от бесмысленной какафонии до тихой, оркестровой симфонии, искажённой в пределах Фористуры.",
                tips: "Если вы оказались здесь в группе, то советуется не расходиться и всегда держаться вместе, ведь здесь очень просто заблудиться. Если вы встретите копии табличек экстренного выхода - следуйте за ними. Они часто находятся около Пространственных Швов (см. Глоссарий), связывающих Янус и Этернитас. Но кроме них, здесь ещё есть два способа выхода. Если вы зайдёте слишком глубоко во тьму, то будет вероятность, что проходя через тёмные коридоры Януса, вы окажитесь в его Спутнике Янус-А (см. Янус-А к. Спутники). Как альтернативу, вы можете попытаться сделать ноуклип в стену. Это приведёт к тому, что вы окажитесь на спутнике Янус-Б (см. Янус-Б в к. Спутники).",
                hazardClass: "Безжизненный."
            },
            en: {
                title: "JANUS",
                description: "Janus is a maze of rooms, the structure of which could be found in shopping centers or retail stores. Each room of this Liminal has one feature: yellow wallpaper with chaotic patterns that sometimes change out of sight, wet, brown carpet that smells strongly, and tiled ceilings with pipes behind them. This is the very first Liminality to be discovered, and because of it, the NBFA appeared who study the Foristure (see Glossary). In addition to walls, carpets and ceilings, here you can also find all sorts of decorative elements, such as furniture or sockets. The outlets here are very similar to American made outlets and are also considered non-functional. The furniture that can be found here looks like it was recently taken from a furniture store, but there is something about it that feels unnatural, such as the frequent duplication of certain parts, or dimensions that do not correspond to the real furniture. In addition to them, you can sometimes find pillars, arches, and signs here. Arches and pillars appear quite rarely here, and they can be found mainly in large spaces. The signs appear in dark corners, and are a consequence of the 0002 phenomenon (see Phen_0002). Sometimes you can find doors here that have additional handles. Such doors can only be opened through the handle located in the middle of the door. Within Janus you can still see pits. These pits are located in the floor and have a square shape, with dimensions of 3 by 3 meters in length and width. In fact, we do not know where these pits lead, but everyone who fell there did not return, and any communication with them was interrupted. The exact size of Janus is unknown, but it is estimated to be 3 times the size of Earth (in the region of 590-600 million square miles). There is Euclidean geometry here, but due to the large size and uniformity of the rooms, it’s still easy to get lost here. In addition, there is a lot of noise here: it usually comes from the fluorescent lamps that are randomly scattered across Liminal's ceiling. These lamps produce quite a loud hum that can drive beginners crazy. Occasionally, distorted music can also be heard playing from the speakers on Janus. This music can be absolutely anything: from a meaningless cacaphony to a quiet, orchestral symphony, distorted within the Foristure.",
                tips: "If you find yourself in a group here, it is advised not to disperse and always stick together, because it is very easy to get lost here. If you come across copies of emergency exit signs, follow them. They are often found near the Spatial Seams (see Glossary) connecting Janus and Eternitas. But besides them, there are still two ways out. If you go too deep into the darkness, there is a chance that while passing through the dark corridors of Janus, you will find yourself in its Satellite Janus-A (see Janus-A to. Satellites). Alternatively, you can try making a noclip into the wall. This will lead to you ending up on the Janus-B satellite (see Janus-B to. Satellites).",
                hazardClass: "Lifeless."
            }
        }
    },
          {
    id: "LIM_0001-A",
    type: "satellite",
    hazard: "CLASS 1-E",
    image: "images/Janus-A.webp",
    translations: {
    ru: {
        title: "ЯНУС-А",
        description: "Янус-А почти-что ничем не отличается от основной Лиминали архитектурно. Этот Спутник, однако, имеет лишь одно отличие: он выглядит потрёпанным и большая часть света там практически не работает. Там есть совсем небольшой гул, который всё равно можно не всегда услышать. Обои порой бывают ободраны, обнажая деревянные, как будто картонные стены. Музыка здесь искажена ещё сильнее: порой её нельзя отличить от простого шума, который исходит от телевизора. Здесь отсутствуют искажённые объекты, которые присутствуют на Янусе (основной Лиминали). Также тут есть несколько видов живых организмов. В список местных обитателей входят представители рода Aspergillus, Отчаявшиеся, а также Homo Desperans и Electrofagus mimicus. Электрофаги здесь имеют очень низкую популяцию из-за критически-низкого количества освещения. Из-за этого, оставшиеся Электрофаги отчаянно пытаются выжить и воюют за самое близкое место к лампе. Если человек или какой-либо другой живой организм попытается вытащить Электрофага, то он ударит током это существо через волосинки. Один такой удар составляет примерно 120 вольт. Отчаявшиеся, обычно, бродят здесь по-одиночке и, из-за голода, при встрече с другим живым организмом, пытаются его съесть, однако это не всегда удаётся им.",
        tips: "Постарайтесь избегать контакта с Организмами, особенно с Электрофагами. Тут есть два(2) основных выхода: металлическая дверь и место с большим количеством света. Первое ведёит к мосту длинной в 80 км, по болкам которого будет стекло. Второй-же возвращает вас в основную часть Януса.",
        hazardClass: "Агрессивная окружающая среда"
    },
    en: {
        title: "JANUS-A",
        description: "Janus-A is almost identical to the main Liminality in architecture. This satellite, however, has one key difference: it appears worn-down, and most of the lighting is effectively non-functional. There is a faint, persistent hum—though it is not always audible. In places, the wallpaper is torn away, revealing walls made of wood that resembles cardboard. The music here is even more distorted; at times, it is indistinguishable from the static noise emitted by a television. Unlike the primary Janus (the main Liminality), this version lacks distorted objects. It is also home to several types of living organisms. Local inhabitants include members of the genus *Aspergillus*, the Desperate, as well as *Homo desperans* and *Electrofagus mimicus*. The *Electrofagus* population here is very small due to the critically low levels of light; consequently, the remaining individuals struggle desperately to survive, competing for the spots closest to the lamps. If a human or any other living organism attempts to remove an *Electrofagus*, it will deliver an electric shock through its hair-like filaments—a jolt of approximately 120 volts. The Desperate typically wander alone; driven by hunger, they will attempt to consume any other living organism they encounter, though they do not always succeed.",
        tips: "Try to avoid contact with Organisms, especially Electrophages. There are two (2) main exits here: a metal door and an area with a great deal of light. The first leads to an 80 km-long bridge, flanked on both sides by glass. The second takes you back to the main section of Janus.",
        hazardClass: "Hostile enviorment"
        }
    }
},
         {
    id: "LIM_0001-B",
    type: "satellite",
    hazard: "CLASS 0",
    image: "images/Janus-B.jpg",
    translations: {
    ru: {
        title: "ЯНУС-Б",
        description: "Янус-Б представляет собой довольно небольшую структуру, которая сильно напоминает подсобные помещения торговых точек. Здесь есть белые стены, обклеенные штукатуркой, коричневый, сухой ковёр, а также такие-же потолки с такими-же гудящими лампами, как и на основной Лиминали. Размер данного спутника определяется в 120000 кв. миль, что делает его очень мелким по-сравнению с Янусом или Янусом-А. Здесь отсутствует какая-либо мебель или двери. На одной части Януса-Б есть открытый проход, который должен был вести к мосту между Янусом-А и Янусом-Б. Однако, сейчас там ничего не видно и есть проход в Этернитас.",
        tips: "Вы можете вернуться обратно в Янус через металлическую дверь. Также вы можете воспользоваться Выходом в Этернитас.",
        hazardClass: "Безжизненный."
    },
    en: {
        title: "JANUS-B",
        description: "Janus-B is a rather small structure that strongly resembles the back rooms of retail outlets. There are white walls covered with plaster, a brown, dry carpet, as well as the same ceilings with the same humming lamps as on the main Liminali. The size of this satellite is determined to be 120,000 square meters. miles, which makes it very small compared to Janus or Janus-A. There is no furniture or doors here. On one part of Janus-B there is an open passage that would lead to a bridge between Janus-A and Janus-B. However, now nothing is visible there and there is a passage to Eternitas.",
        tips: "You can return to Janus trough a metal door. You can also use the exit to Eternitas",
        hazardClass: "Lifeless."
        }
    }
},
    {
        id: "LIM_0002",
        type: "liminalityM",
        hazard: "CLASS 3-G",
        image: "images/Agnosophobia.webp", 
        translations: {
            ru: {
                title: "ЭТЕРНИТАС",
                description: "Этернитас несильно отличается от Януса в плане ландшафта, однако тут есть отличия в интерьере, а также в том факте, что здесь присутствует неэвклидова геометрия (см. Глоссарий). В интерьере присутствуют бетонные стены, большая часть у которых покрашена в синий, а верхняя (оставшаяся), покрашена в чистый белый цвет. Пол серый и выглядит грязным. Потолок является таким-же, как и верхняя часть стены. На потолке можно найти керосиновые лампы, которые постоянно сгорают, из-за чего эта Лиминаль погружается во тьму. Но, что важно знать. это не вечно. Во время изменения ландшафта из-за неэвклидовой геометрии, лампы обязательно восстанавиваются и имеют полный запас керосина, который-же в свою очередь начинает сразу сгорать. Также, в отличии от Януса, здесь присутствуют лестницы и нормальные двери, но отсутствует мебель, гудение ламп, а также искажённая музыка. Лестницы ведут либо вверх, либо вниз. Эти-же лестницы могут упираться и в стену из-за нестабильности Лиминали. Двери находятся по бокам коридоров, и то редко. За дверьми всегда будет стена, которая будет либо стеной другого коридора, либо-же стеной, состоящей из красного кирпича, склееного и неразрушимого. Если зайти здесь слишком далеко, то рано или поздно, вы заметите, как Этернитас пересекается с другими Лиминалями, вроде Януса или Вевоиса (см. Вевоис в к. Основные Лиминали). С помощью этих Пространственных швов, кстати, можно попасть в другие лиминали.",
                tips: "Если вы сюда попали, то вы можете начать искать Пространственные швы, которые могут привести вас в другие Лиминали. В списке таких Лиминалей есть Янус, Янус-А и Янус-Б, Вевоис, Дит, Консус-А, Консус-Б и Консус-В, а также Мендациус (там швы видны только вне иллюзии)(см. всё сказанное рание в категориях «Основные Лиминали» и «Спутники».)",
                hazardClass: "Нелинейная геометрия"
            },
            en: {
                title: "ETERNITAS",
                description: "Eternitas is not very different from Janus in terms of landscape, but there are differences in the interior, as well as the fact that there is non-Euclidean geometry (see Glossary). The interior contains concrete walls, most of which are painted blue, and the top (remaining) is painted pure white. The floor is gray and looks dirty. The ceiling is the same as the top of the wall. Kerosene lamps can be found on the ceiling, which constantly burn out, causing this Liminal to plunge into darkness. But what is important to know. it doesn't last forever. When the landscape changes due to non-Euclidean geometry, the lamps are necessarily restored and have a full supply of kerosene, which in turn begins to burn out immediately. Also, unlike Janus, there are stairs and normal doors, but there is no furniture, humming lamps, or distorted music. Stairs lead either up or down. These same stairs can also run into a wall due to the instability of this Liminality. Doors are located on the sides of corridors, and even then rarely. Behind the doors there will always be a wall, which will either be the wall of another corridor, or a wall consisting of red brick, glued and indestructible. If you go too far here, sooner or later you will notice how Eternitas intersects with other Liminalities, like Janus or Vejovis (see Vejovis in The Main Liminalities). With the help of these Spatial seams, by the way, you can get into other liminalities.",
                tips: "If you have ended up here, you can start searching for the Spacial Seams, that can lead you to the other Liminalities. The list of these Liminalities includes Janus, Janus-A and Janus-B, Vejovis, Dis, Consus-A, Consus-B and Consus-C, and also Mendacius (the seams in there are only visible without the illusion). (see all said before in categories «The Main Liminalities» & «Satellites».",
                hazardClass: "Non-linear geometry"
            }
        }
    },
              {
    id: "LIM_0002-A",
    type: "satellite",
    hazard: "CLASS 0",
    image: "images/Eternitas-A.webp",
    translations: {
    ru: {
        title: "ЭТЕРНИТАС-А",
        description: "Этернитас-А относится к категории Спутников только потому, что он находится на территории его основной Лиминали. Сам же этот «Осколок» выглядит как самый обычный двухэтажный американский дом с бежевыми обоями, деревнным полом, потолком, на котором горят лампы. Тут есть окна и дверь наружу. За ними находятся стены Этернитаса. На первом этаже есть прихожая, гостиная, ванная, кухня и, так-называемая, «Пустая комната». В прихожей присутствует искажённая мебель, к которой тут относится вешалка и полки снизу. Там-же есть и дверь в стену. В гостиной есть стол, тумбы с прямоэкранным телевизором, по обоим сторонам которого расположены колонки. Под столом расположен ковёр. В гостиной также есть лестница на второй этаж, на котором есть только спальня и туалет. Кухня достаточно мелкая, но в ней есть еда, которая, на удивление, способна регенерироваться. По словам дегустаторов, еда ощущается на вкус как бетон. Ванная занимает мало места. Как и туалет. Спальня имеет большую кровать, тумбочку и шкаф. В шкафу весит одежда. Главная особенность этого осколка - полная изоляция. В этом осколке может быть только один человек, и этот-же человек может оставаться здесь на столько, насколько он захочет.",
        tips: "Отсюда нет известного способа выхода.",
        hazardClass: "Пустой"
    },
    en: {
        title: "ETERNITAS-A",
        description: "Eternitas-A is classified as a «Satellite» solely because it is located within the territory of its primary Liminality. This «Fragment» itself resembles an ordinary, two-story American-style house, featuring beige wallpaper, wooden flooring, and ceilings equipped with electric lights. It includes windows and an exterior door; beyond them lie the walls of Eternitas. The ground floor contains an entryway, a living room, a bathroom, a kitchen, and a so-called «Empty Room.» The entryway features distorted furniture, including a coat rack and shelving units at the base; there is also a door set directly into the wall. The living room is furnished with a table and stands holding a flat-screen television, flanked by speakers. A rug lies beneath the table. A staircase leads from the living room to the second floor, which consists only of a bedroom and a toilet. The kitchen is quite small, yet it contains food that—surprisingly—is capable of regenerating. According to those who have sampled it, the food tastes like concrete. Both the bathroom and the toilet occupy very little space. The bedroom contains a large bed, a nightstand, and a wardrobe, inside of which clothes are hanging. The defining characteristic of this Fragment is its complete isolation: it can accommodate only one person at a time, and that individual may remain there for as long as they wish.",
        tips: "You can't leave.",
        hazardClass: "Hollow"
        }
    }
},
    {
        id: "LIM_0003",
        type: "liminalityM",
        hazard: "CLASS 2-E",
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
        hazard: "CLASS 4-EG",
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
hazard: "CLASS 0",
image: "images/Therminus.jpg",
translations: {
ru: {
    title: "КОНСУС",
    description: "В отличии от предыдущих Лиминалей, которые были лабиринтами с декором реальных мест, Консус является попыткой воссоздать офисное здание. Периметр здания равен примерно 160 метров, имеется пять (5) этажей. Пятый этаж, самый вверхний, выглядит самым похожим на офисное здание, и по продвижению вниз интерьер будет сильно искажаться до первого этажа. Первый этаж выглядит как простой набор комнат, разбросанный в хаотичном порядке. Почти все комнаты этажа пустые, однако в одной комнате присутствует фонтан и тёмный, прямоугольный проход, который является выходом отсюда. В почти каждой комнате Консуса присутствуют окна, из которых исходит яркий свет тёплого оттенка. Стены каждого этажа окрашены в белый цвет и состоят из бетона. Ковёр имеет разный цвет, в зависимости от этажа. Например, на пятом этаже присутствует серый ковёр, на четвёртом он становится бежевым, на третьем - зелёный, на втором - синий, а на первом - смесь серого и синего. Потолок везде состоит из плиток, идентичных плиткам Януса. На потолке в хаотичном порядке расположены отключенные люминесцентные лампы, иногда датчики пожара. Иногда можно встретить и кулеры с водой. Вода, найденная в Консусе, имеет вкус обычной воды, перемешанной с миндалём, и признана безопасной для употребления. В одной из комнат четвёртого этажа можно встретить принтер, а также там есть комната неподалёку, которая забита бумагой. На бумаге отсутствуют какие-либо изображения, но их можно сделать, если в принтер налить чернил. На втором этаже присутствует обильное количество табличек STOP, однако они поддались здесь такому-же искажению, как если бы они были бы на Янусе. Кроме них, на втором этаже есть и хаотично расположенные двери, провода, розовый бумбокс из ранних двухтысячных годов, а также в одной из комнат можно найти зеркала.",
    tips: "Вы впринципе можете остаться здесь жить, но если вам хочется отсюда выйти, то попробуйте найти дыру в потолке или войдите в тёмный проём на первом этаже. Он ведёт в Мендациус. Однако есть и другие выходы, как например, выход в Консус-А на четвёртом этаже, или выход в Консус-Б, который находится над потолком. Или-же Консус-В, который находится внизу.",
    hazardClass: "Обитаемый",
    },
    en: {
    title: "CONSUS",
    description: "Unlike the previous Liminalities, which were mazes styled after real places, Consus is an attempt to recreate an office building. The building's perimeter is approximately 160 meters, featuring five (5) floors. The fifth and highest floor looks the most like a normal office, but moving downward, the interior becomes heavily distorted until the first floor, which is a chaotic array of empty rooms. Almost all rooms are bare, but one room features a fountain and a dark, rectangular passage serving as the exit. Windows emitting bright, warm light are present in nearly every room. The walls are white concrete, and the carpet color changes by floor: grey on the 5th, beige on the 4th, green on the 3rd, blue on the 2nd, and a mix of grey and blue on the 1st. The tiled ceiling features deactivated fluorescent lights and fire detectors. Water coolers are scattered around; the water tastes like ordinary water mixed with almonds and is safe to drink. A printer sits on the 4th floor, and a nearby room is packed with blank paper. The 2nd floor contains distorted 'STOP' signs, misplaced doors, wires, a pink early-2000s boombox, and mirrors.",
    tips: "You can technically stay here and live, but if you wish to leave, try to find a hole in the ceiling or enter the dark rectangular opening on the first floor. It leads to Mendacius. However, you can use the alternative exits, such as an exit to Consus-A on the fourth floor, or an exit to Consus-B that is beyond the ceiling. Or Consus-C below.",
    hazardClass: "Habitable"
    }
}
},
          {
    id: "LIM_0005-A",
    type: "satellite",
    hazard: "CLASS 0",
    image: "images/Consus-A.jpg",
    translations: {
    ru: {
        title: "КОНСУС-А",
        description: "Консус-А это довольно мелкий ресторан, который является столовой для офиса, коим является сам Консус. Площадь Консуса-А равна примерно 50 метрам в длину и 20 метрам в ширину, что делает это место довольно мелким. Здесь полно столов и сидушек, рядом с которыми всегда будут картины. Картины эти меняются каждый час, испаряясь и появляясь снова. Освещение здесь имеет желтоватый оттенок, а также издаёт тихий гул. Здесь также присутствует пища, которой является желеобразная субстанция полупрозрачного, белого цвета. На вкус эта масса напоминает то, что вы больше всего любите из пищи, что является довольно интересным. Желе регенерируется вместе с картинами. Вы также можете заметить дверь с табличкой выхода. Эта дверь ведёт в Пространственный шов Этернитаса. Кроме столиков, сидушек, картин и двери, тут ещё есть касса и кухня, у которой никого нет. Сама кухня полностью пуста, однако на ней отмечены красными линиями места, где должны находиться плиты, фритюрницы, духовки и т.п.",
        tips: "Вы можете войти в проход без двери, из которого вы вошли сюда. Вы войдёте обратно в основную часть Консуса, на четвёртый этаж. Войдя в дверь с табличкой выхода, вы попадёте в Этернитас. И помните. Если вы собираетесь уходить отсюда, то возьмите как можно больше желе.",
        hazardClass: "Обитаемый"
    },
    en: {
        title: "CONSUS-A",
        description: "Consus-A is a rather small restaurant that serves as a canteen for the office—the office of Consus itself. Consus-A measures approximately 50 meters in length and 20 meters in width, making it a fairly compact space. It is filled with tables and chairs, always accompanied by paintings. These paintings change every hour, vanishing and then reappearing. The lighting has a yellowish hue and emits a faint, low hum. Food is also available here: a translucent, white, gelatinous substance. Interestingly, this mass tastes exactly like your favorite food. The jelly regenerates along with the paintings. You may also notice a door marked with an «EXIT» sign; this door leads to the Eternitas Spatial Seam. In addition to the tables, chairs, paintings, and the door, there is a checkout counter and a kitchen—though the latter is completely deserted. The kitchen itself is entirely empty, yet red lines are marked on the surfaces to indicate where stoves, deep fryers, ovens, and similar equipment ought to be.",
        tips: "You can head back through the doorless passageway you arrived from; this will take you back into the main section of Consus, on the fourth floor. If you go through the door marked with an exit sign, you will reach Eternitas. And remember: if you’re planning on leaving, take as much jelly as you can.",
        hazardClass: "Habitable"
        }
    }
},
            {
    id: "LIM_0005-B",
    type: "satellite",
    hazard: "CLASS 0",
    image: "images/Consus-B.jpg",
    translations: {
    ru: {
        title: "КОНСУС-Б",
        description: "Консус-Б имеет пространство, забитое полками, на которых лежат папки. В папках тут находятся разные бумаги, в которых нельзя прочитать то, что написано. Здесь отсутствуют стены. Здесь есть плиточный пол и бетонный потолок, на котором изредка появляются синие лампы. Эти лампы появляются в очень мелком объёме и иногда могут моргать.",
        tips: "Отсюда нельзя выйти. Смысл твоего нахождения здесь отсутствует.",
        hazardClass: "Безжизненный."
    },
    en: {
        title: "CONSUS-B",
        description: "Consus-B features a space packed with shelves, upon which folders rest. Inside these folders are various documents, though the text written on them is illegible. There are no walls here. The space has a tiled floor and a concrete ceiling, from which blue lamps occasionally emerge. These lamps are quite small and may, at times, flicker.",
        tips: "You can't leave this place. There is no point for you to be here.",
        hazardClass: "Lifeless."
        }
    }
},
                {
    id: "LIM_0005-C",
    type: "satellite",
    hazard: "CLASS 5-EP",
    image: "images/Consus-C.jpg",
    translations: {
    ru: {
        title: "КОНСУС-В",
        description: "Консус-В отдалённо напоминает первый этаж своей основной Лиминали, однако он почти полностью разрушен. Тут отсутствует свет полностью. На полу можно найти мусор в больших количествах, который может включать в себя разные вещи: от протухшей еды до использованных презервативов. Кроме того, это место имеет площадь в 50 миллионов кв. миль, что больше основного Консуса примерно в 81 миллиард раз. Стены состоят из грязного бетона, как и пол с потолком. Стены изрисованы разными граффити, а иногда имеет разные записки от уже умерших странников на разных языках. Постепенно, бродя по этим коридорам и комнатам, вы начнёте сходить с ума, и постепенно мутировать. Мутация эта будет долгой и мучительной, и в конечном итоге приведёт к тому, что вы «Отчаятесь» из-за антисанитарии, отсутствия выхода, еды и воды, а также мерзлоты (температура на Консус-В равна -30℃). (см. Phen_0006 для более подробного описания процесса).",
        tips: "Вам уже нечего делать.",
        hazardClass: "Безнадёжный."
    },
    en: {
        title: "CONSUS-C",
        description: "Consus-C bears a distant resemblance to the first floor of its primary Liminality, yet it lies almost entirely in ruins. There is a complete absence of light. The floor is strewn with vast quantities of refuse, ranging from spoiled food to used condoms. Furthermore, this space spans 50 million square miles—roughly 81 billion times the size of the original Consus. The walls, floor, and ceiling are all constructed of grimy concrete. The walls are covered in graffiti and, occasionally, notes left in various languages ​​by wanderers who have since perished. As you roam these corridors and chambers, you will gradually lose your sanity and begin to mutate. This mutation is a prolonged and agonizing process, ultimately culminating in a state of utter «despair»: brought on by the unsanitary conditions, the lack of any exit, the absence of food and water, and the freezing cold (temperatures on Consus-C hover at -30°C). (See Phen_0006 for a more detailed description of this process.)",
        tips: "You can't do anything at this point.",
        hazardClass: "Hopeless."
        }
    }
},
{
id: "LIM_0006",
type: "liminalityM",
hazard: "CLASS 2-EGP",
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
hazard: "CLASS 2-EG",
image: "images/AHEn-C2EHE.webp",
translations: {
ru: {
    title: "AHEn-C2EHE: «Покинутая больница»",
    description: "AHEn-C2EHE является первой Лиминалью, которая была открыта с помощью дверей (см. Phen_0001). Эта Лиминаль выглядит как заброшенное здание медицинского предназначения, которое практически пустое, отчего и приметивное. Здесь, подобно Этернитасу, присутствует неэвклидова геометрия, поэтому навигация здесь крайне затруднена. Здесь, как и в уже ранее-упомянутом Этернитасе, присутствуют окна и лестницы, однако тут отсутствуют двери. Вместо них, здесь находятся дверные проёмы, которые ведут в комнаты площадью 50 метров. В таких комнатах есть койки и тумбочки, в которых ничего нет. Здесь также полно дыр, ведущих на нижние этажи. Эти дыры порой бывают очень большими по неизвестным причинам. Также в этой Лиминали отсутствует освещение ввиде ламп. Вместо них, здесь предполагается наличие Солнца, лучи которого проходят через щели и дыры. Некоторые странники находили здесь шприцы. Они здесь содержат кровь, мочу и иногда опасные химические вещества в жидкой форме.",
    tips: "Если вы сюда попали через дверь, то советуется попытаться найти другую дверь (дверь с любым другим знаком кроме Плюса). НЕ подпирайте и не вкалывайте себе ничего с пола. Смотрите под ноги.",
    hazardClass: "Хрупкие стены, полно ям, безжизненно. Символ двери: «+»"
},
en: {
    title: "AHEn-C2EHE: «The Forsaken hospital»",
    description: "AHEn-C2EHE is the first Liminality to be opened using doors (see Phen_0001). This Liminal looks like an abandoned medical building, which is practically empty, which is why it is remarkable. Here, like Eternitas, there is non-Euclidean geometry, making navigation extremely difficult. Here, as in the previously mentioned Eternitas, there are windows and stairs, but there are no doors. Instead, there are doorways that lead to rooms with an area of ​​50 meters. In such rooms there are beds and bedside tables with nothing in them. There are also a lot of holes leading to the lower floors. These holes are sometimes very large for unknown reasons. Also in this Liminal there is no lighting in the form of lamps. Instead, the presence of the Sun is assumed here, the rays of which pass through the cracks and holes. Some travelers have found syringes here. They contain blood, urine and sometimes dangerous chemicals in liquid form.",
    tips: "If you got here through a door, it is advised to try to find another door (a door with any other sign other than Plus). DO NOT prop or inject yourself with anything from the floor. Watch your step.",
    hazardClass: "Fragile walls, a lot of pits, lifeless. Door symbol: «+»"
    }
  }
},
       {
id: "LIM_0009",
type: "liminalityO",
hazard: "CLASS 5-PG",
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
    hazard: "CLASS 2-P",
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
    id: "LIM_0012",
    type: "liminalityO",
    hazard: "CLASS 2-P",
    image: "images/PHS-C2PHEP.jpg",
    translations: {
    ru: {
        title: "PHS-C2PHEP: «Диссоциация»",
        description: "PHS-C2PHEP представляет из себя маленький, уютный домик, выполненный в милом стиле. Стены дома покрашены либо в белый, либо в ярко-розовый цвет, обвешаны игрушками и всякими другими аксессуарами, связанными с японской поп-культурой. В доме есть 2 этажа. На первом находится кухня, туалет и гостиная. Все эти комнаты выполнены в милом стиле, имеют много плакатов и игрушек. Посуда на кухне стеклянная и имеет белый цвет. Она идеально чиста, как и вся эта Лиминаль. Второй этаж имеет две спальни, а также ещё один туалет. Одна спальня большая и вход в неё находится с краю. Другая поменьше и находится по середине этажа. В туалетах работают все системы, идёт вода и можно стирать вещи. В гостинной много сидушек… То, что было описано ранее, это то, что пытается воссоздать мозг, находясь здесь. Каждый попавший сюда странник ловит диссоциацию, как-будто после сильной психологической травмы. На деле-же дом архитектурно идентичен иллюзии, но он заброшен. Тут нет света, игрушек, плакатов. Вместо этого тут выбиты стёкла, разбросаны бутылки алкоголя, а в большой спальне можно найти кровь неизвестного происхождения. Но, неважно, находишься ли ты в диссоциации или нет, есть одна иллюзия, которая никогда не уходит. Некоторые странники зовут её «Мистер Кит»: высокий, тощий гуманоид чёрного цвета, иногда испарающийся в пространстве. Эта иллюзия будет постоянно ходить сзади вас. Не подпускайте близко. Не смотря на то, что это иллюзия, последствия при контакте будут очень даже реальны. Вы уйдёте в ещё более сильную диссоциацию, получите травму так и физическую, так и ментальную. И так будет снова и снова, пока от тебя ни останется ничего, кроме глубоких ран, синяков и большого объёма крови.",
        tips: "Попытайтесь выйти из дома. Может быть, вы куда-нибудь попадёте",
        hazardClass: "Психологические эффекты, безжизненно. Символ двери: «୨୧»"
    },
    en: {
        title: "PHS-C2PHEP: «Dissocialization»",
        description: "PHS-C2PHEP is a small, cozy house designed in a «cute» aesthetic. Its walls—painted either white or bright pink—are adorned with toys and various accessories linked to Japanese pop culture. The house consists of two floors: the ground floor contains a kitchen, a restroom, and a living room, all decorated in that same cute style and filled with posters and toys. The kitchenware, made of white glass, is spotlessly clean—much like everything else in this Liminality. The second floor houses two bedrooms and another restroom; one bedroom is large and located at the edge of the floor, while the smaller one is situated in the center. The plumbing in the restrooms is fully functional—water runs, and it is even possible to do laundry. The living room is furnished with plenty of seating... However, what has been described so far is merely a construct of the mind—an attempt by the brain to make sense of its surroundings. Every wanderer who arrives here experiences a profound sense of dissociation, akin to the state following severe psychological trauma. In reality, the house is architecturally identical to the illusion, but it is abandoned. There are no lights, toys, or posters; instead, the windows are shattered, empty alcohol bottles lie scattered about, and in the larger bedroom, one can find traces of blood of unknown origin. Yet, regardless of whether or not you are experiencing dissociation, one particular illusion remains constant. Some wanderers call it «Mr. Kit.»: A tall, black, skinny humanoid figure that sometimes disappears in space. This entity will constantly follow right behind you—do not let it get too close. Even though it is an illusion, the consequences of physical contact are all too real: you will fall into an even deeper state of dissociation and suffer both physical and mental trauma. And this will happen again and again, until nothing is left of you but deep wounds, bruises, and a large amount of blood.",
        tips: "Try exiting the house. Maybe, you will get somewhere.",
        hazardClass: "Psychological effects, lifeless. Door symbol: «୨୧»"
        }
    }
},
          {
    id: "LIM_0013",
    type: "liminalityO",
    hazard: "CLASS 4-GP",
    image: "images/IMs-c0RryjoHn.jpg",
    translations: {
    ru: {
        title: "IMs-C0rryjoHn: «Воскресенье»",
        description: "Эта Лиминаль представляет собой Почти-что бесконечное скопление комнат, в которых изобРажены разные ситуации, изОбражённые в виде СТранИчек комикса. Стены в каждой коМнатЕ являются голубыми, имеют сиНие плинтусы, а также у них не видно потолка. Некоторые комнаты могут иметь другие оттенки стен, например, жёлтые или красные. В почти каждой такой комнате присутствуют картонные фигуры подобия персонажей Джима Дэвиса из комиксов о коте Гарфилде, которые изображают разные ситуации. Комнаты менЯются вне взора, и если ты хоть на секунду отвернёшься, то комната смениться. Некоторые комнаты изображают очень странные, порой абсурДные, до Жути сюрреалистичные ситуации. При этОм всём, тут присутствует абсолютная тишина, где Нельзя услышать даже свой собственный топот или дыхание, даже если ты попытаешься вслушаться. На фото изображён экземпляр одной редкой комнаты.",
        tips: "Если вас сводят с ума эти комнаты, в которых отсутствует какая-либо частица жизни, то попытайтесь открыть какие-нибудь двери в комнатах. Они все ведут в FEn-C2PHSP",
        hazardClass: "Психологические эффекты, безжизненно. Символ двери: «☕︎»"
    },
    en: {
        title: "IMs-C0rryjoHn: «Sunday»",
        description: "This Liminality consists of a near-Infinite collection of rooMS, each depicting variOus scenaRios pResented in the stYle of comic book panels. The walls in every room are light blue with dark blue baseboards, and the ceilings are nowhere to be seen. Some rooms may feature walls in different shades, such as yellow or red. Almost every room contains cardboard cutouts resembling characters from Jim Davis’s *Garfield* comics, arranged to depict variOus situatioNs. The rooms shift whenever they are out of sight; if you look away for even a second, the room will change. Some of these spaces depict highly bizarre, occasionally absurd, and unsettlingly surreal scenarios. Throughout it all, there is an absolute silence—so profound that you cannot hear your own footsteps or even your own breathing, no matter how hard you strain to listen. The photograph shows an example of one such rare room.",
        tips: "If these rooms are driving you crazy, in which any particle of life is missing, then try to open some doors in the rooms. They all lead to FEn-C2PHSP",
        hazardClass: "Psychological effects, lifeless. Door symbol: «☕︎»"
        }
    }
},
        {
    id: "LIM_0014",
    type: "liminalityO",
    hazard: "CLASS N/A",
    image: "images/NoPhotoNormalLiminalis.png",
    translations: {
    ru: {
        title: "UEn-C5HA: «Замешемаптеримышления»",
        description: "Каждый, кто заходил в границы UEn-C5HA начинал стремительно терять память, терять осознанность, терять себя. Можем ли мы винить себя в собственной любопытности? Порой это так хочется сделать, но так трудно. А есть ли оно вообще?",
        tips: "Что можно сделать в помощь, если человек потеряет себя? Возможно ли оно всё? Что это? Я...",
        hazardClass: "При попадении в Лиминаль появляется тяжёлая деменция. Символ двери: «ε»"
    },
    en: {
        title: "UEn-C5HA: «Postaweneconfusion»",
        description: "Anyone who entered the boundaries of UEn-C5HA began to rapidly lose their memory, their awareness, and their very self. Can we blame ourselves for our own curiosity? Sometimes one truly wants to, yet it is so difficult. And does such a thing as «blame» even exist at all?",
        tips: "What can be done to help if a person loses themselves? Is any of this even possible? What is it? I...",
        hazardClass: "Anyone entering this Liminality gets severe dementia. Door symbol: «ε»"
        }
    }
},
    {
    id: "LIM_0015",
    type: "liminalityO",
    hazard: "CLASS 3-EP",
    image: "images/Party that never Was =).jpg",
    translations: {
    ru: {
        title: "FUN-C3HEP: «Вечеринка, Которой не Было.»",
        description: "FUN-C3HEP, также известный как «Вечеринка, Которой не Было» или просто «Веселье» - это комплекс, состоящий из комнат для вечеринок. Стены большинства таких комнат имеют разные цвета, а иногда могут иметь цвет, который может быть виден только через гаджеты (такие цвета являются серыми для человеческого глаза). Пол таких комнат состоит из плиток, а иногда имеет ламинат, имеющий древесный узор. На потолке висят лампы, которые никогда не угасают, и вечно сияют, освещая пространство FUN-C3HEP. Здесь можно найти и мебель с декором, как например, столы и стулья, украшенные для какого-то праздника, шары, гирлянды и тп. Здесь можно найти и двери. Они все имеют белый цвет и ведут либо в коридоры, либо в другие комнаты. При этом всём, здесь отсутствует какой-либо шум: тут нет ни шума ламп, ни праздничной музыки. Даже если вы попытаетесь лопнуть шарик, то вы всё равно ничего не услышите. Но, в один момент, уходя в глубины FUN-C3HEP, вы начнёте замечать странных манекенов, одетых в бежевую одежду, и на голове которых есть картонные пакеты, с жёстко-нарисованной красным маркером улыбкой. Эти манекены собираются в кучи, и являются безопасными, пока вы на них смотрите, и они-же издают единственный шум во всей этой Лиминали: тихий, искажённый смех. Как только вы перестанете смотреть на них, манекены сменят позицию и окажутся ближе к вам. Точно неизвестно, что происходит с теми, кто не смотрел на них слишком долго.",
        tips: "Не пытайтесь заходить слишком глубоко. При встрече с аномальными манекенами рекомендуется покинуть место, не прерывая зрительного контакта. Здесь есть три выхода. Если вы спуститесь через люк в полу, то вы окажитесь в пределах UEn-C5HA, однако из-за свойств данной Лиминали данный выход не советуется. Вторым-же выходом является дверь «Запасного выхода». Войдя в неё, вы войдёте в просторы Вевоиса. Третий выход - ноуклип. Сделав его, вы войдёте в COm-C0HN.",
        hazardClass: "Агрессивная окружающая среда, Психологическое воздействие. Символ двери: «=)»"
    },
    en: {
        title: "FUN-C3HEP: «The Party That Never Was»",
        description: "FUN-C3HEP, also known as «The Party That Never Was» or simply «The Fun», is a complex consisting of various party rooms. The walls in most of these rooms are brightly colored; some even feature hues visible only through electronic devices—appearing as shades of gray to the naked eye. The floors are covered in either tiles or wood-patterned laminate. The ceilings are lined with lamps that never dim, casting a perpetual glow over the entire FUN-C3HEP space. The area is furnished with tables and chairs—all decorated for a celebration—along with balloons, garlands, and similar festive items. There are also doors, all painted white, which lead either into corridors or into other rooms. Despite the festive setting, the space is completely silent; there is no hum from the lights, nor is there any party music. Even if you were to pop a balloon, you would hear absolutely nothing. However, as you venture deeper into FUN-C3HEP, you may begin to encounter strange mannequins dressed in beige clothing. Each one wears a cardboard bag over its head, featuring a crude, red-marker-drawn smile. These mannequins tend to gather in clusters; they remain harmless as long as you keep your eyes on them. They are also the only source of sound in this Liminality: a faint, distorted laughter. The moment you look away, the mannequins will shift their positions, appearing closer to you than before. It is not entirely clear what happens to those who fail to keep their gaze fixed upon them for too long.",
        tips: "Do not attempt to venture too deep. If you encounter anomalous mannequins, it is recommended that you leave the area without breaking eye contact. There are three exits here. Descending through the floor hatch will take you into UEn-C5HA; however, due to the properties of this Liminal, this exit is not advised. A second exit is the «Emergency Exit» door; passing through it will lead you into the expanse of Vejovis. The third exit is a noclip. Performing one will take you into COm-C0HN.",
        hazardClass: "Hostile enviorment, Psychological impact. Door symbol: «=)»"
        }
    }
},
    {
    id: "LIM_0015-A",
    type: "satellite",
    hazard: "CLASS 0",
    image: "images/The REAL FUN =))).webp",
    translations: {
    ru: {
        title: "FUN-C3HEP-A: «РЕАЛЬНОЕ веселье»",
        description: "FUN-C3HEP-A является разрушенной копией своей основной Лиминали. Стены здесь серые, а цвет виден только через камеру или гаджеты, плитки что на потолке, что на полу - монотонны. Большинство ламп, найденных здесь, являются разбитыми и нерабочими. Некоторые лампы работают, но это встретить можно крайне редко. На потолке висят шары, внутри которых грязная вода. Лужы этой воды, кстати, иногда можно увидеть на полу и столах со стульями, немалая часть которых тоже считается сломанной. Размер данного спутника считается неопределённым, но предполагается, что он гораздо меньше основного FUN-C3HEP. Тут даже отсутствуют манекены, найденные в основной Лиминали, как и выход. Информация об этом спутнике дошла до НЗФА только потому что была низкая связь и пару доказательств существования. Сейчас ведутся исследования.",
        tips: "Ты ничего не сможешь сделать. В конце концов, люк не зря считается ловушкой.",
        hazardClass: "Безнадёжный."
    },
    en: {
        title: "FUN-C3HEP-A: «REAL fun»",
        description: "FUN-C3HEP-A is a ruined copy of its primary Liminality. The walls here are gray—with color visible only through a camera or other electronic devices—and the tiles on both the ceiling and the floor are monotonous. Most of the lamps found here are broken and non-functional; it is extremely rare to encounter one that still works. Spheres containing dirty water hang from the ceiling. Puddles of this water can occasionally be found on the floor, as well as on tables and chairs—many of which are also broken. The size of this satellite is indeterminate, though it is presumed to be significantly smaller than the original FUN-C3HEP. Notably, the mannequins present in the primary Liminal space are absent here, and there is no visible exit. The NBFA only learned of this satellite due to a weak, intermittent connection and a few pieces of evidence confirming its existence. Research is currently underway.",
        tips: "You can't do anything at this point. The trapdoor really is a trap door, after all.",
        hazardClass: "Hopeless."
        }
    }
},
    {
    id: "LIM_0016",
    type: "liminalityO",
    hazard: "CLASS 0",
    image: "images/COm-C0HN.jpg",
    translations: {
    ru: {
        title: "COm-C0HN: «Растяжка»",
        description: "COm-C0HN представляет из себя комплкс из коридоров, которые постелены красными, бархатными коврами, а также оснащены пластиковыми, белыми стенами, и отражающими потолками. Каждые 10 метров будут мелкие лампы, которые находятся на потолке. Они издают тихий гул, и иногда моргают. Слева и справа находятся двери, ведущие в обширные комнаты с бежевыми стенами и коврами, а также плиточными потолками с люминесцентными лампами, которые издают тихий гулл. На каждом терминале присутствует браузер, а также доступная сеть, у которой есть пароль. Пароль этот, на данный момент, является неизвестным. В браузере нет доступных сайтов, а вместо этого есть странные символы на синем фоне и куча грустных смайликов «=(». В таких комнатах есть много компьютерных терминалов, бумаги, а также ручек, в которых нет чернил. Кроме них, здесь также находят и манекенов, идентичных тем, что есть на Мендациусе. Были ещё и рапорты о том, что были принтеры, в которых была паразитическая краска (см. Org_Kin1_SpecB-1), но никаких доказательств этому нет. Площадь этой Лиминали оценивается в 14 на 60 км², что делает COm-C0HN довольно небольшим. Если зайти в самые глубины данной лиминали, то вы попадёте в недостроенную часть, где модно найти милькающие лампы, деревянные балки, а также стены и потолочные плитки. Здесь отсутствуют манекены и терминалы.",
        tips: "Чтобы отсюда выйти, вы можете попробовать найти выходы с табличкой выхода, или сделать ноуклип. Двери ведут в FUN-C3HEP, а ноуклип ведёт в Этернитас.",
        hazardClass: "Безжизненный. Символ двери: «=(»"
    },
    en: {
        title: "COm-C0HN: «Streching»",
        description: "COm-C0HN consists of a complex of corridors lined with red velvet carpeting, featuring white plastic walls and reflective ceilings. Small ceiling-mounted lamps are spaced every 10 meters; they emit a faint hum and occasionally flicker. Doors on either side lead into expansive rooms with beige walls and carpeting, as well as tiled ceilings equipped with fluorescent lights that also produce a low, humming sound. Each computer terminal provides access to a web browser and a network that requires a password—a password which, at present, remains unknown. The browser displays no accessible websites; instead, it shows strange symbols against a blue background, accompanied by numerous sad emoticons: «=(». These rooms contain many computer terminals, stacks of paper, and pens devoid of ink. Also present are mannequins identical to those found in Mendacius. There have been reports of printers containing a parasitic ink (see Org_Kin1_SpecB-1), though no evidence exists to support this. The area of ​​this Liminal space is estimated at 14 by 60 km², making COm-C0HN relatively small. Venturing into the deepest parts of this space leads to an unfinished section, characterized by flickering lights, exposed wooden beams, and incomplete wall and ceiling tiling. Mannequins and computer terminals are absent in this area.",
        tips: "To leave this place, you can try to find exits marked with an «EXIT» sign, or use noclip. The doors lead to FUN-C3HEP, while noclip leads to Eternitas.",
        hazardClass: "Lifeless. Door symbol: «=(»"
        }
    }
},
     {
    id: "LIM_0017",
    type: "liminalityO",
    hazard: "CLASS 0",
    image: "images/VBFEn-C1PHP.jpeg",
    translations: {
    ru: {
        title: "VBFEn-C1PHP: «Ночной Бор»",
        description: "VBFEn-C1PHP, известный как «Ночной Бор» или «Глубинные Леса» представляет из себя плоское пространство, пол которого состоит из искусственной травы. Каждые 3-5 метров здесь стоят сосновые деревья, высотой достигающих потолка. Потолок находится на высоте 460,25 метров и состоит из материала, поглащающего 99,9% света. Из аналогичного материала состоят и стены. Площадь этой Лиминали равна примерно 8000 км². И при этом везде отсутствует свет. Кроме того, по всей Лиминали исходит странное чириканье, от которого исходит сильное эхо. Точный источник не был найден.",
        tips: "Держитесь у стен. Рано или поздно, вы найдёте щель.",
        hazardClass: "Безжизненный. Символ двери: «𖠰»"
    },
    en: {
        title: "VBFEn-C1PHP: «Nighttime Pine-Forest»",
        description: "VBFEn-C1PHP, known as «Night Pine» or «Deep Forests», is a flat expanse with a floor covered in artificial grass. Every 3–5 meters, pine trees stand, reaching all the way to the ceiling. The ceiling is located at a height of 460.25 meters and is composed of a material that absorbs 99.9% of light; the walls are made of the same substance. This Liminality covers an area of ​​approximately 8,000 km², and it is entirely devoid of light. Furthermore, a strange chirping sound, which echoes intensely, can be heard throughout Liminality. Its exact source has not been found.",
        tips: "Stick to the walls. Sooner or later, you’ll find a gap.",
        hazardClass: "Lifeless. Door symbol: «𖠰»"
        }
    }
},
       {
    id: "LIM_0018",
    type: "liminalityO",
    hazard: "CLASS 3-EP",
    image: "images/TSHarlem-C4PHP.webp",
    translations: {
    ru: {
        title: "TSHarlem-C4PHP: «СТАНЦИЯ МЕЛРАГ»",
        description: "Станция Мелраг представляет из себя вокзал, площадь которого равна 51000 м² (51 км²). По всему вокзалу можно встретить металлические балки, которые держат крышу и не дают ей упасть. За потолком вокзала находится ослепительный, белый свет. Из этого-же света состоят и стены. Рельсы, которые видны на вокзале, не имеют определённого расстояния, поскольку за пределы вокзала выйти невозможно никаким способом, кроме одного единственного. Этим способом является так-называемый «Поезд-А». Этот поезд выглядит так, как будто он был сделан в 30-ых годах, и внутри можно увидеть обои, которые идентичны обоям Януса. Освещение в вагонах Поезда-А имеет тёплый-оранжевый оттенок, а также от него-же (а именно от ламп) исходит тихий гул, параллельно играющий с радио, по которому крутят джазовую музыку 30-ых или 40-ых годов 20-ого века. Поезд приезжает каждый час, а куда уезжает - неизвестно, поскольку никто не смог получить связь, будучи в поезде. Были и рапорты от странников с пошатанной психикой, в которых говорилось, что поезд ведёт в «Весенние Холмы». Это остаётся недоказанным и по сей день. Кроме того, бродя по вокзалу, вы сможете увидеть множество странных, безликих существ, одетых в одежду моды тех-же времён, что и музыка на радио. И среди них можно встретить одно особое существо, известное как «Кондуит», «Джентельмен» или-же просто «Смотритель». Этот подвид Opifex Imitator имеет лицо, у которого присутствует вечный, широкий оскал. Они все одеты в одежду охраников, машинистов, и даже швейцаров. Этот подвид является действительно пассивным и просто наблюдает за странниками, попавшими на вокзал. Бывали и редкие случаи нахождения так-называемых Homo Melancholicus, которые выходили из вагонов, уходя в случайные точки вокзала. Они опасны тем, что могут вызвать экзистенциальный кризис, играя с разумом смотрящего на них странника. А после кризиса наступает моральное выгорание, после которого есть вероятность сделать самоубийство. К слову, именно из-за Синих Людей эта Лиминаль обладает классом 3-EP.",
        tips: "Не заходите в поезд. Не смотрите на Синих людей. Просто идите к выходу, и вы войдёте в Мендациус.",
        hazardClass: "Агрессивная окружающая среда, психологическое влияние. Символ двери: «TH𝔼 MELRꜲH §TATIꚘNN»"
    },
    en: {
        title: "TSHarlem-C4PHP: «THE MELRAH STATION»",
        description: "The Melrah Station is a train station covering an area of 51,000 m² (51 km²). Throughout the station, metal beams can be found, supporting the roof and preventing it from collapsing. A blinding white light radiates from the ceiling of the station. The walls are also composed of this light. The tracks visible within the station are indefinite, as there is no way to leave the station except through the so-called «A-Train». This train looks as if it was built in the 1930s, and the wallpaper inside is identical to that of Janus. The lighting in the cars of Train A has a warm orange hue, and a quiet hum emanates from the lamps, which also plays jazz music from the 1930s or 1940s. The train arrives every hour, but its destination is unknown, as no one was able to establish contact while on the train. There have even been reports from mentally unstable travelers claiming the train leads to «Spring Hills». This remains unproven to this day. Furthermore, as you wander the station, you'll encounter numerous strange, faceless creatures dressed in the same period fashion as the music on the radio. Among them, you might encounter one special creature known as the «Conduit», the «Gentleman», or simply the «Overseer». This subspecies of Opifex Imitator has a face with a wide, perpetual grin. They are all dressed as guards, train drivers, and even doormen. This subspecies is truly passive, simply observing travelers arriving at the station. There have also been rare instances of so-called Homo Melancholicus emerging from the train cars and wandering off to random spots around the station. They are dangerous because they can trigger an existential crisis by playing tricks on the minds of those watching them. After the crisis, moral burnout sets in, leading to the possibility of suicide. Incidentally, it is because of the Blue Men that this Liminality is classified as a 3-EP.",
        tips: "Don't get on the train. Don't look at the Blue People. Just head to the exit, and you'll enter Mendacius.",
        hazardClass: "Hostile Enviorment, psychological impact. Door symbol: «TH𝔼 MELRꜲH §TATIꚘNN»"
        }
    }
},
    {
    id: "LIM_0019",
    type: "liminalityO",
    hazard: "CLASS 5-P",
    image: "images/OSENEn-C5PHP.jpg",
    translations: {
    ru: {
        title: "OSENEn-C5PHP: «После Смены»",
        description: "OSENEn-C5PHP очень сильно похож на Консус, но в отличии от него здесь нет определённой площади, а также здесь очень темно. Этажи здесь идут вниз и вверх бесконечно, а окна почти-что отсутствуют, но всё-же иногда есть. Их можно найти в тех местах, где много объёма, и там видно бесконечную пустоту, идущую и вверх, и вниз. Обычно, такие отверстия имеют квадратную форму с площадью 80 м². За окном видно сильный ливень. Окна открыть никак нельзя, из-за чего и воду нельзя достать. Что уж говорить о самом интерьере, то он очень пустой. В некоторых комнатах отсутствуют стены, а в некоторых может быть только один стул на 180-260 метров. И при этом тут везде выключенный свет, который нельзя включить ввиду отсутствия переключателей. Иногда можно увидеть и рычаги пожарной тревоги, которые ничего не делают. Ещё есть и зелёные таблички выхода, которые загоняют странников ещё глубже в пространство OSENEn-C5PHP. Что также отличает эту Лиминаль от Консуса, так это наличие абстрактных картин, в которых отсутствует смысл, а смотря на них ещё покажется, что и душа тоже. Можно найти и винтовые лестницы, в которых можно легко навернуться из-за тьмы. Если ещё говорить про комнаты, то иногда можно встретить и комнаты, которые имеют рабочие места: столы, стулья, компьютерные терминалы, отключенные от розеток, телефоны, мусорные вёдра, забитые бумагой с бесмысленными рисунками и надписями, и настольными лампами, которые также отключены, а некоторые и вовсе побиты и сломаны. Двери здесь выглядят абсолютно естественно, что является довольно странным для Фористуры с её искажениями мебели и других объектов. И если ещё упомянуть отличия от Консуса, то к ним можно отнести один очень опасный феномен, именуемый «Кризисом Бесконечности». Это явление присутствует и в некоторых Лиминалях, связанных с эстетикой 30-ых или 40-ых годов, и там тоже присутствует данный феномен из-за Homo Melancholicus. Тут-же, странник начнёт выгорать от усталости, монотонности комнат, а также паранойи из-за тьмы. Если говорить про стадии этого явления кратко, то можно сказать так: сначала человек получит экзистенциальный кризис из-за особых мыслей, которые настигнут его за время прибывания. Позже, у странника будет паранойя, усталость и сонливость. В конце концов, спустя какое-то время, будет 3 исхода: либо-же странник умрёт от голода, обезвоживания или ещё каких-то других естественных причин, либо-же он сделает самоубийство из-за потери смысла жизни, или-же он «Отчаится» и сойдёт с ума (см. Phen_0006 для более подробного объяснения этого явления. И см. Phen_0008 для более подробной информации о Выгорании).",
        tips: "Это конец.",
        hazardClass: "Сильное психологическое влияние, ментальное выгорание, безнадёжность. Символ двери: «EXIIIT»"
    },
    en: {
        title: "OSENEn-C5PHP: «Post-Shift»",
        description: "OSENEn-C5PHP bears a striking resemblance to Consus; however, unlike the latter, it lacks a defined spatial extent and is shrouded in near-total darkness. The levels extend infinitely both upward and downward. Windows are rare, though they do occasionally appear—typically in areas with significant open volume—revealing an infinite void that stretches endlessly in both directions. These apertures are generally square, measuring 80 square meters in area, and look out onto a torrential downpour. The windows cannot be opened, making it impossible to access the water outside. The interior itself is remarkably barren; some rooms lack walls entirely, while others might contain nothing more than a single chair in a space spanning 180 to 260 meters. Throughout the environment, the lights are switched off, and there are no visible switches to turn them on. One may occasionally encounter fire alarm levers, though they serve no function. There are also green exit signs, which only serve to lure wanderers deeper into the expanse of OSENEn-C5PHP. Another feature distinguishing this Liminality from Consus is the presence of abstract paintings—works devoid of any discernible meaning, which seem to strip away one’s very soul upon observation. Spiral staircases can also be found, though the pervasive darkness makes them treacherous to navigate. Some rooms appear to be workspaces, containing desks, chairs, and computer terminals—all unplugged—along with telephones and wastebaskets overflowing with paper covered in nonsensical drawings and scribbles. There are also desk lamps, likewise disconnected from power, some of which are shattered or broken. The doors here appear entirely natural—a curious detail, given that Foristura is otherwise characterized by the distorted, warped forms of its furniture and objects. To mention further differences from Consus, one must include a highly dangerous phenomenon known as the «Infinity Crisis». This phenomenon also appears in certain Liminal spaces—specifically those evoking the aesthetics of the 1930s or 1940s—where it is likewise linked to the presence of *Homo Melancholicus*. In this context, a wanderer will begin to suffer from burnout, driven by exhaustion, the monotony of the rooms, and paranoia fueled by the surrounding darkness. Briefly, the progression of this phenomenon is as follows: the individual first experiences an existential crisis, triggered by specific, intrusive thoughts that arise during their stay. This is followed by the onset of paranoia, fatigue, and drowsiness. Ultimately, after some time, one of three outcomes occurs: the wanderer may perish from starvation, dehydration, or other natural causes; they may commit suicide, having lost all sense of purpose; or they may succumb to «Despair» and descend into madness (see Phen_0006 for a more detailed explanation of this phenomenon, and Phen_0008 for further information regarding Burnout).",
        tips: "It's the end.",
        hazardClass: "Severe psychological impact, mental burnout, hopelessness. Door symbol: «EXIIIT»"
        }
    }
},
    {
    id: "LIM_0020",
    type: "liminalityO",
    hazard: "CLASS 0",
    image: "images/NoPhotoNormalLiminalis.png",
    translations: {
    ru: {
        title: "ROEn-C0HN: «Колонны»",
        description: "ROEn-C0HN представляет из себя бесконечное пространство, у которого не видно стен. Здесь есть плиточный потолок и пол, которые выглядят чисто. каждые 5 метров вы сможете увидеть бело-синиие, тонкие колонны. Здесь есть только шум от люминесцентных ламп, который никогда не прекращается.",
        tips: "Чтобы выйти отсюда, сделайте ноуклип. Сделав его, вы попадёте в Этернитас",
        hazardClass: "Безжизненный. Символ двери: «✱»"
    },
    en: {
        title: "ROEn-C0HN: «The Pillars»",
        description: "ROEn-C0HN is an infinite space with no visible walls. Both the ceiling and the floor consist of tiles and appear clean. Every 5 meters, you can see slender white-and-blue columns. The only sound present is the incessant, never-ending hum of fluorescent lights.",
        tips: "If you want to leave this place, you can try noclipping. By doing it, you will enter Eternitas",
        hazardClass: "Lifeless. Door symbol: «✱»"
        }
    }
},
    {
    id: "LIM_0021",
    type: "liminalityO",
    hazard: "CLASS 3-EP",
    image: "images/Motion.jpg",
    translations: {
    ru: {
        title: "HSTEn-C3HEP: «Ложь»",
        description: "HSTEn-C2HEP, известный как «Ложь» - очень большое пространство площадью в 400 миллионов миль². Всё это пространство занято абсолютно одинаковыми домами, построенными в линейки с расстоянием в 30 метров. Здесь также есть холмы и деревья, а сам пол похож на траву, хоть ею и не является. Вместо неба здесь потолок, на котором есть огромная люстра, которая действует как солнце на этой Лиминали. В дома можно войти, и внутри вы увидете 3 этажа, из которых заполнены, обычно, только второй и первые этажи. На первом этаже есть гараж, в котором есть кучи полок, в которых нет никаких вещей. На первом этаже есть гостиная, на которой есть диван, стул, стол и телевизор с помехами. Иногда на месте этих телевизоров поселяются Паразиты, именуемые Cancer televisificus, которые используют телевизоры как и панцыри для своего хрупкого тела, так и как приманку, чтобы привлекать новых жертв. Эта Лиминаль уникальна тем, что на ней есть подобие дневного цикла: цикл этот здесь длится всего 6 часов: день и ночь длятся 3 часа. Днём всё спокойно, иногда можно услышать искажённую музыку, играющую где-то на фоне. Ночью-же, музыка затихает, а «Солнце» угасает. Странник, оставшийся на улице в это время, начинает испытывать сильную паранойю и слышать голоса в голове, а также были случаи галлюцинаций в виде гуманоидов, агрессивно идущих и пытающихся покалечить странника.",
        tips: "На данный момент идёт расследование в целях найти выход отсюда.",
        hazardClass: "Психологическое влияние, агрессивная окружающая среда. Символ двери: «🏠︎»"
    },
    en: {
        title: "HSTEn-C3HEP: «The Falsehood»",
        description: "HSTEn-C2HEP, known as «The Falsehood», is an expansive space covering 400 million square miles. The entire area is filled with identical houses, arranged in rows spaced 30 meters apart. The landscape features hills and trees, and the ground resembles grass—though it is not actually grass. Overhead, instead of a sky, there is a ceiling dominated by a massive chandelier that functions as the «Sun» for this Liminality. The houses can be entered; each has three floors, though typically only the first and second are occupied. The ground floor contains a garage lined with empty shelving units, as well as a living room furnished with a sofa, a chair, a table, and a television displaying static. Occasionally, these televisions are inhabited by parasites known as *Cancer televisificus*, which use the sets both as protective shells for their fragile bodies and as lures to attract new victims. This Liminality is unique in that it features a pseudo-day/night cycle: a full cycle lasts only 6 hours, with 3 hours of «day» and 3 hours of «night». During the day, everything is calm, though distorted music can sometimes be heard playing in the background. At night, the music fades, and the «Sun» dims. Wanderers caught outside during this time begin to experience intense paranoia and hear voices in their heads; there have also been reports of hallucinations involving humanoids that approach aggressively, attempting to maim the wanderer.",
        tips: "An investigation is currently underway to find a way out of here.",
        hazardClass: "Psychological impact, hostile enviorment. Door symbol: «🏠︎»"
        }
    }
},
     {
    id: "LIM_0022",
    type: "liminalityO",
    hazard: "CLASS 0",
    image: "images/MM-C0HN.jpg",
    translations: {
    ru: {
        title: "MM-C0HN: «Полис»",
        description: "MM-C0HN является попыткой воссоздать торговый центр архитектурно. Всего здесь 4 этажа, и каждый из них является полностью пустым. Первый этаж является парковкой, в которой отсутствуют какие-либо рисунки, а колонны иногда проходят сквозь потолок или стены. Здесь есть и выход, ведущий во тьму. В центре парковки находится эскалатор, ведущий на второй этаж. Второй этаж имеет блестящие, тёмные коридоры, по бокам которых закрытые магазины и зоны, сдающиеся в аренду. В центре этажа находится лавка с мороженым, которая полностью пуста. Рядом с ней есть эскалаторы, ведущие на третий и четвёртые этажи. На потолке четвёртого этажа видно отверстие, из которого исходит свет. За окном видно голубое небо. На третьем этаже все ларьки также закрыты и там отсутствует свет. На четвёртом есть 5 открытых ларьков, в которых ничего нет.",
        tips: "На данный момент идёт расследование в целях найти выход отсюда.",
        hazardClass: "Безжизненный. Символ двери: «𖦹»"
    },
    en: {
        title: "MM-C0HN: «Polis»",
        description: "MM-C0HN is an architectural recreation of a shopping mall. It consists of four floors, all of which are completely empty. The first floor is a parking garage; it features no markings, and some of the support columns pass directly through the ceiling or walls. There is also an exit that leads into darkness. In the center of the parking area, an escalator leads up to the second floor. The second floor contains sleek, dark corridors lined with closed storefronts and spaces available for lease. In the middle of this floor sits an ice cream kiosk—completely empty. Nearby, escalators lead to the third and fourth floors. On the fourth floor, there is an opening in the ceiling from which light streams in; beyond the windows, a blue sky is visible. On the third floor, all the stalls are closed and the area is unlit. On the fourth floor, there are five open stalls, all of which are entirely vacant.",
        tips: "An investigation is currently underway to find a way out of here.",
        hazardClass: "Lifeless. Door symbol: «𖦹»"
        }
    }
},
    {
    id: "這裡的主要港口有哪些？",
    type: "liminalityO",
    hazard: "無訊號",
    image: "images/NoSignalLiminalis.png",
    translations: {
    ru: {
        title: "無訊號",
        description: "RS_C5PHP это маленькая комнатка с бежевыми стенами, бетонным полом и потолком. На потолке есть одна лампа, освещающая всю комнату. У стен есть плинтусы, а также тут есть дверь. За дверью находится полностью чёрное пространство, в котором ████████████████████████████████████████████████████████████████ ",
        tips: "？脫逃能己自為認你麼什為",
        hazardClass: "𓂀"
    },
    en: {
        title: "無訊號",
        description: "RS_C5PHP is a small room with beige walls, concrete floor and ceiling. There is one lamp on the ceiling that illuminates the entire room. The walls have skirting boards and there is also a door. Behind the door there is a completely black space in which ███████████████████████ ████████████████████████",
        tips: "為什麼你認為自己能逃脫？",
        hazardClass: "𓂀"
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
            if (opt.value === 'phenomena') opt.text = ui.catObjects;
            if (opt.value === 'forum') opt.text = ui.catForum;
            if (opt.value === 'satellite') opt.text = ui.catSatellite;
        }
    }

    const footerText = document.getElementById('ui-footer');
    if (footerText) footerText.innerText = ui.footer;

    searchArchive();
    const glossaryBtnEl = document.getElementById('ui-glossary-btn');
if (glossaryBtnEl) glossaryBtnEl.innerText = ui.glossaryBtn;

const glossaryBox = document.getElementById('glossaryContainer');
if (glossaryBox && glossaryBox.style.display === 'block') {
    glossaryBox.innerHTML = `<h2 class="terminal-title" style="margin-bottom: 20px;">${ui.glossaryTitle}</h2>` + ui.glossaryData;
}
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

let glossaryActive = false;

function toggleGlossary() {
    const container = document.getElementById('archiveContainer');
    const glossaryBox = document.getElementById('glossaryContainer');
    const filterSelect = document.getElementById('typeFilter');
    const searchInput = document.getElementById('ui-search-input');
    const btn = document.getElementById('ui-glossary-btn');
    if (!container || !glossaryBox || !btn) return;

    glossaryActive = !glossaryActive;
    const ui = uiTranslations[currentLanguage];

    if (glossaryActive) {
        // Активируем режим справки
        container.style.display = 'none';
        glossaryBox.style.display = 'block';
        glossaryBox.innerHTML = `<h2 class="terminal-title" style="margin-bottom: 20px;">${ui.glossaryTitle}</h2>` + ui.glossaryData;
        btn.classList.add('active');
        
        // Отключаем на время фильтры и поиск, чтобы не мешали
        if (filterSelect) filterSelect.disabled = true;
        if (searchInput) searchInput.disabled = true;
    }  else {
        glossaryBox.style.display = 'none';
        container.style.display = 'grid'; 
        btn.classList.remove('active');
        
        if (filterSelect) {
            filterSelect.disabled = false;
            filterSelect.value = 'all'; 
        }
        if (searchInput) {
            searchInput.disabled = false;
            searchInput.value = '';    
        }
        
        searchArchive();
    }

}
