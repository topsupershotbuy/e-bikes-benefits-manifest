// O CONTEÚDO DEVE SER MAPEADO AQUI, com PT e EN para cada bloco de texto.
const CONTENT_DATA = {
    // TÍTULOS ESTÁTICOS
    'title': {
        'PT': "BENEFÍCIOS DO CICLISMO URBANO",
        'EN': "URBAN CYCLING BENEFITS"
    },
    
    // LABELS DOS TOGGLES (que também mudam de idioma)
    'label-color': {
        'PT': "Modo de Cores:",
        'EN': "Color Mode:"
    },
    'label-lang': {
        'PT': "Tradução:",
        'EN': "Translation:"
    },

    // ------------------------------------------------
    // SEÇÕES DE CONTEÚDO (EXPANDIR A PARTIR DAQUI)
    // ------------------------------------------------

    '1.0': {
        'PT': '1. BENEFÍCIOS FÍSICOS E FISIOLÓGICOS',
        'EN': '1. PHYSICAL AND PHYSIOLOGICAL BENEFITS'
    },
    '1.1': {
        'PT': '1.1 Condicionamento Cardiovascular Avançado',
        'EN': '1.1 Advanced Cardiovascular Conditioning'
    },
    '1.1.1': {
        'PT': 'Melhoria da capacidade cardiorrespiratória: Exercício aeróbico consistente que fortalece o coração e melhora a circulação sanguínea',
        'EN': 'Improved cardiorespiratory capacity: Consistent aerobic exercise that strengthens the heart and improves blood circulation'
    },
    '1.1.2': {
        'PT': 'Redução da pressão arterial: Estudos demonstram diminuição significativa da hipertensão em usuários regulares',
        'EN': 'Reduced blood pressure: Studies show a significant decrease in hypertension in regular users'
    },
    
    '2.0': {
        'PT': '2. BENEFÍCIOS MENTAIS E NEUROLÓGICOS',
        'EN': '2. MENTAL AND NEUROLOGICAL BENEFITS'
    },
    '2.1': {
        'PT': '2.1 Redução Abrangente do Estresse',
        'EN': '2.1 Comprehensive Stress Reduction'
    },
    '2.1.1': {
        'PT': 'Diminuição do cortisol: Redução significativa dos níveis do hormônio do estresse',
        'EN': 'Decreased cortisol: Significant reduction in stress hormone levels'
    },
    
    // [ADICIONE AQUI O RESTANTE DAS SUAS SEÇÕES 1.2 ATÉ 10.2]
};

const BODY_ELEMENT = document.getElementById('site-body');
const COLOR_TOGGLE = document.getElementById('color-toggle');
const LANG_TOGGLE = document.getElementById('lang-toggle');
const CONTENT_CONTAINER = document.getElementById('content-container');

// FUNÇÕES DE ESTADO
function saveState(key, value) { localStorage.setItem(key, value); }
function loadState(key) { return localStorage.getItem(key); }
function getLang() { return LANG_TOGGLE.checked ? 'EN' : 'PT'; }


// ITEM 4: FUNÇÃO DE MUDANÇA DE COR
function toggleColorMode() {
    const isChecked = COLOR_TOGGLE.checked;
    
    if (isChecked) {
        BODY_ELEMENT.classList.add('alt-theme');
        saveState('color-theme', 'alt');
    } else {
        BODY_ELEMENT.classList.remove('alt-theme');
        saveState('color-theme', 'default');
    }
}

// ITEM 3: FUNÇÃO DE TRADUÇÃO E PREENCHIMENTO DE CONTEÚDO
function updateContent() {
    const lang = getLang();
    let htmlContent = `<h1 class="main-title-header" id="main-title">${CONTENT_DATA['title'][lang]}</h1>`;
    
    // Preenche os labels dos toggles
    document.querySelector('.toggle-label[for="color-toggle"]').textContent = CONTENT_DATA['label-color'][lang];
    document.querySelector('.toggle-label[for="lang-toggle"]').textContent = CONTENT_DATA['label-lang'][lang];

    // CONSTRUÇÃO DO CORPO DO MANIFESTO (ESTRUTURA HÍBRIDA)
    // O JS RECONSTRÓI O HTML DE ACORDO COM O IDIOMA.
    
    // Exemplo de como construir as seções:
    htmlContent += `<div class="topic-section">`;
    htmlContent += `<h2 class="main-topic">${CONTENT_DATA['1.0'][lang]}</h2>`;
    
    htmlContent += `<h3 class="sub-topic">${CONTENT_DATA['1.1'][lang]}</h3>`;
    htmlContent += `<p class="detail">${CONTENT_DATA['1.1.1'][lang]}</p>`;
    htmlContent += `<p class="detail">${CONTENT_DATA['1.1.2'][lang]}</p>`;
    // [ADICIONAR MAIS PARÁGRAFOS AQUI]

    htmlContent += `<h2 class="main-topic">${CONTENT_DATA['2.0'][lang]}</h2>`;
    htmlContent += `<h3 class="sub-topic">${CONTENT_DATA['2.1'][lang]}</h3>`;
    htmlContent += `<p class="detail">${CONTENT_DATA['2.1.1'][lang]}</p>`;
    // [ADICIONAR MAIS SEÇÕES AQUI, ATÉ 10.2]
    
    htmlContent += `</div>`;
    
    CONTENT_CONTAINER.innerHTML = htmlContent;
}

function toggleLanguage() {
    saveState('lang-mode', getLang());
    updateContent(); // Recarrega o conteúdo no novo idioma
}


// INICIALIZAÇÃO E CARGA DE ESTADO
document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGA O TEMA DE CORES (Item 4)
    const savedColor = loadState('color-theme');
    if (savedColor === 'alt') {
        COLOR_TOGGLE.checked = true;
        BODY_ELEMENT.classList.add('alt-theme');
    }
    
    // 2. CARREGA O MODO DE TRADUÇÃO (Item 3)
    const savedLang = loadState('lang-mode');
    if (savedLang === 'EN') {
        LANG_TOGGLE.checked = true;
    }
    
    // 3. ATUALIZA O CONTEÚDO INICIAL
    updateContent();
});
