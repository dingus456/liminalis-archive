// Переводы элементов интерфейса сайта
const uiTranslations = {
    ru: {
        title: "▲ АРХИВ ЛИМИНАЛИС // v3.01.6",
        status: "СТАТУС: СОЕДИНЕНИЕ ЗАЩИЩЕНО",
        warning: "ВНИМАНИЕ: Данный архив содержит конфиденциальную информацию о пространствах Фористуры. Использовать строго для выживания гражданских лиц.",
        searchLabel: "> СИСТЕМА ПОИСКА:",
        searchPlaceholder: "при поиске вводите ID или наименование",
        categoryLabel: "КАТЕГОРИЯ:",
        catAll: "ВСЕ ДАННЫЕ",
        catLevels: "ЛИМИНАЛИ (lim_num)",
        catEntities: "Организмы (org_kin_spec)",
        catObjects: "Явления (phen_num)",
        descTitle: "Описание:",
        tipsTitle: "Советы:",
        noResults: "[ОШИБКА: ИНФОРМАЦИЯ НЕ НАЙДЕНА (404)]",
        footer: "Собственность НЗФА (Национальное исследование Запредельного и Фористуральная Администрация © 2001-2026. Проходим сквозь слои реальности."
    },
    en: {
        title: "▲ THE LIMINALIS ARCHIVE // v3.01.6",
        status: "STATUS: ENCRYPTED CONNECTION",
        warning: "WARNING: This archive contains classified information regarding the Foristurality. Use strictly for civilian survival protocols.",
        searchLabel: "> SEARCH SYSTEM:",
        searchPlaceholder: "while searching please type an ID or the name",
        categoryLabel: "CATEGORY:",
        catAll: "ALL DATA",
        catLevels: "LIMILALITIES (lim_num)",
        catEntities: "ORGANISMS (org_kin_spec)",
        catObjects: "PHENOMENA (phen_num)",
        descTitle: "Description:",
        tipsTitle: "Tips:",
        noResults: "[ERROR: DATA NOT FOUND (404)]",
        footer: "Property of NBFA (National exploring of something Beyond and Foristuality Administration) © 2001-2026. Going through the layers of Reality"
    }
};

// База данных с поддержкой двух языков
const backroomsDatabase = [
    {
        id: "LIM_0001",
        type: "liminality",
        hazard: "CLASS 1",
        hazardClass: "hollow",
        image: "images/Level0.jpg", 
        translations: {
            ru: {
                title: "ЯНУС",
                description: "комплексное пространство, чем-то напоминающее розничный магазин. Интерьер Януса состоит из жёлтых обоев, рисунки которых состоят из разных узоров, коричневого, мокрого ковра, состоящего из ткани, и плиточных потолков, сверху которых проходят трубы и провода. На потолке присутствуют люминесцентные лампы, издающий громкий гул, который никогда не прекращается. Изредка на стенах можно найти розетки, по всей видимости, американского происхождения. Иногда здесь находят разные объекты, которые являются частями интерьера из Земли, но, иногда, дублированные, или искажённые. Кроме физических объектов, можно услышать и звуки, у которых отсутствует видимый источник. Эти звуки варьируются от тихого гула или хаотичной игре на духовом инструменте, до искажённых копий реальных музыкальных произведений.",
                tips: "Если вы оказались здесь в группе, то советуется не расходиться и всегда держаться вместе, ведь здесь очень просто заблудиться. Если вы встретите копии табличек экстренного выхода - следуйте за ними."
            },
            en: {
                title: "JANUS",
                description: "A complex space, somewhat reminiscent of a retail store. The interior of Janus consists of yellow wallpaper patterned with various designs, damp, fabric-covered carpeting in shades of brown, and a tiled ceiling with pipes and wires running across it. Fluorescent lights are mounted on the ceiling, emitting a loud, incessant hum. Occasionally, electrical outlets—apparently of American design—can be found on the walls. Sometimes, various objects appear here; these are items from Earth, though they may be duplicated or distorted. Beyond physical objects, one can also hear sounds with no discernible source—ranging from a faint hum or the chaotic playing of a wind instrument to warped, distorted versions of actual musical pieces.",
                tips: "If you have entered Janus in a party, it is recommended to stay together in order to not get lost. If you see copies of the emergency exit signs - follow them."
            }
        }
    },
     {
        id: "LIM_0002",
        type: "liminality",
        hazard: "CLASS 4-E",
        hazardClass: "non-linear",
        image: "images/Agnosophobia.webp", 
        translations: {
            ru: {
                title: "ЭТЕРНИТАС",
                description: "Комплекс состоящий из бетонных коридоров, в которых есть малое количество света. Свет исходит от тусклых ламп на потолке и работающие от керосина, который сгорает и тем самым выключает лампу. В отличии от Януса, здесь присутствует неэвклидова геометрия, а сама структура является гораздо более примитивной, состоя лишь из коридоров и лестниц. Иногда можно найти кожаные двери, за которыми находятся либо мелкие коморки, либо стена. Иногда можно найти и окна, за которыми находятся всё те-же стены.",
                tips: "Если вы сюда попали, то рекомендуется немедленно найти выход и использовать его. Это будет непростой задачей из-за постоянно сгорающих ламп и неэвклидовой геометрии, и поэтому вам нужно знать несколько отдельных черт, показывающих, что рядом выход. Если вы заметили, что в коридорах Этернитаса начали появляться дыры и трубы, то вы идёте к выходу. Он уже будет неподалёку."
            },
            en: {
                title: "ETERNITAS",
                description: "A complex consisting of concrete corridors with very little light. The illumination comes from dim, ceiling-mounted lamps fueled by kerosene; as the fuel burns away, the lamps eventually go out. Unlike Janus, this liminality features non-Euclidean geometry, and its overall structure is far more primitive, composed solely of corridors and staircases. Occasionally, one may encounter leather doors, which lead either to small, cramped chambers or simply to a wall. At times, windows can also be found—revealing nothing but more walls.",
                tips: "If you have ended up here, it is recommended that you find an exit immediately and use it. This will be no easy task, given the constantly burning-out lights and the non-Euclidean geometry; therefore, you should be aware of a few specific signs indicating that an exit is nearby. If you notice holes and pipes beginning to appear in the corridors of Eternitas, you are heading toward an exit—it should be close by."
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

// Текущий язык по умолчанию
let currentLanguage = 'ru';

// Функция смены языка страницы
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Переводим кнопки выбора языка для визуального выделения
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Переводим интерфейс
    const ui = uiTranslations[lang];
    document.getElementById('ui-title').innerText = ui.title;
    document.getElementById('ui-status').innerText = ui.status;
    document.getElementById('ui-warning').innerText = ui.warning;
    document.getElementById('ui-search-label').innerText = ui.searchLabel;
    document.getElementById('ui-search-input').placeholder = ui.searchPlaceholder;
    document.getElementById('ui-category-label').innerText = ui.categoryLabel;
    
    // Переводим выпадающий список
    const filter = document.getElementById('typeFilter');
    filter.options[0].text = ui.catAll;
    filter.options[1].text = ui.catLevels;
    filter.options[2].text = ui.catEntities;
    filter.options[3].text = ui.catObjects;

    document.getElementById('ui-footer').innerText = ui.footer;

    // Перерисовываем карточки
    searchArchive();
}

function displayDatabase(items) {
    const container = document.getElementById('archiveContainer');
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `<p class="no-results">${uiTranslations[currentLanguage].noResults}</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = `archive-card ${item.type}`;
        
        // Берем текст в зависимости от текущего языка
        const data = item.translations[currentLanguage];
        const ui = uiTranslations[currentLanguage];
        const imageHtml = item.image ? `<img src="${item.image}" class="item-image" alt="${data.title}">` : '';

        card.innerHTML = `
            <div class="card-header">
                <span class="item-id">${item.id}</span>
                <span class="hazard-badge ${item.hazardClass}">${item.hazard}</span>
            </div>
            <h3 class="item-title">${data.title}</h3>
            ${imageHtml}
            <p class="item-desc"><strong>${ui.descTitle}</strong> ${data.description}</p>
            <div class="item-tips"><strong>${ui.tipsTitle}</strong> ${data.tips}</div>
        `;
        container.appendChild(card);
    });
}

function searchArchive() {
    const query = document.getElementById('ui-search-input').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;

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

// Запуск при старте
window.onload = () => {
    changeLanguage('ru'); 
};


window.onload = () => {
    displayDatabase(backroomsDatabase);
};
