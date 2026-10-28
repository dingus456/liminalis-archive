// something something ahhh no
const backroomsDatabase = [
    {
        id: "LIM_001",
        type: "liminality",
        title: "JANUS",
        hazard: "CLASS 1",
        hazardClass: "HOLLOW",
        description: "massive complex that is described as a retail-outlet with yellow wallpaper, tiled ceilings and old moist carpets with pale-brown coloring.",
        tips: "Stay together. Don't get lost. Follow the signs"
    },
    {
        id: "ORG_KIN4_SPECB-15",
        type: "organism",
        title: "HOMO DESPERANS",
        hazard: "CLASS VARIABLE",
        hazardClass: "AGRESSIVE",
        description: "humanoid creatures that seem to not have skin, hair or even fingernails. quite unstable, mostly show animalistic behavior"
    },
    {
        id: "PHEN_0001",
        type: "object",
        title: "SPONTANIOUS DOOR GENERATION",
        hazard: "CLASS VARIABLE",
        hazardClass: "UNSTABLE",
        description: "sometimes you can find doors placed in the random places of the Liminalities, that have different signs on them. these doors can lead to a high list of Liminalities and are the reason why something after Janus was found.",
        tips: "Look at the sign."
    }
];

function displayDatabase(items) {
    const container = document.getElementById('archiveContainer');
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = '<p class="no-results">[ERROR 404: NOTHING FOUND]</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = `archive-card ${item.type}`;
        card.innerHTML = `
            <div class="card-header">
                <span class="item-id">${item.id}</span>
                <span class="hazard-badge ${item.hazardClass}">${item.hazard}</span>
            </div>
            <h3 class="item-title">${item.title}</h3>
            <p class="item-desc"><strong>BRR:</strong> ${item.description}</p>
            <div class="item-tips"><strong>BRR:</strong> ${item.tips}</div>
        `;
        container.appendChild(card);
    });
}

function searchArchive() {
    const query = document.getElementById('terminalInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;

    const filtered = backroomsDatabase.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(query) || 
                              item.description.toLowerCase().includes(query) || 
                              item.id.toLowerCase().includes(query);
        
        const matchesFilter = typeFilter === 'all' || item.type === typeFilter;

        return matchesSearch && matchesFilter;
    });

    displayDatabase(filtered);
}

window.onload = () => {
    displayDatabase(backroomsDatabase);
};
