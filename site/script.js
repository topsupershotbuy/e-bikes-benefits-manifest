// O CONTEÚDO COMPLETO DO MANIFESTO (CORRIGIDO PARA ESTRUTURA PT/EN)
const CONTENT_DATA = {
    // TÍTULOS ESTÁTICOS E LABELS
    'title': { 'PT': "MANIFESTO DE BENEFÍCIOS DO CICLISMO URBANO", 'EN': "URBAN CYCLING BENEFITS MANIFESTO" },
    'abstract': { 
        'PT': "Este manifesto consolida as vantagens inquestionáveis da mobilidade elétrica e alternativa nas cidades, servindo como alerta sobre o comparativo com transportes de carburação e fornecendo base para o posicionamento social e a inclusão de tecnologias limpas.", 
        'EN': "This manifesto consolidates the unquestionable advantages of electric and alternative mobility in cities, serving as an alert on the comparison with carburetion transports and providing a basis for social positioning and the inclusion of clean technologies."
    },
    'label-color': { 'PT': "Modo de Cores:", 'EN': "Color Mode:" },
    'signature-title': { 'PT': "Assinado Por:", 'EN': "Signed By:" },

    // ------------------------------------------------
    // SEÇÕES DE CONTEÚDO (CONTEÚDO COMPLETO AQUI - OMITIDO PARA BREVIDADE, MAS DEVE CONTER O TEXTO COMPLETO)
    // ------------------------------------------------
    '1.0': { 'PT': '1. BENEFÍCIOS FÍSICOS E FISIOLÓGICOS', 'EN': '1. PHYSICAL AND PHYSIOLOGICAL BENEFITS' },
    '1.1': { 'PT': '1.1 Condicionamento Cardiovascular Avançado', 'EN': '1.1 Advanced Cardiovascular Conditioning' },
    '1.1.1': { 'PT': 'Melhoria da capacidade cardiorrespiratória: Exercício aeróbico consistente que fortalece o coração e melhora a circulação sanguínea', 'EN': 'Improved cardiorespiratory capacity: Consistent aerobic exercise that strengthens the heart and improves blood circulation' },
    '1.1.2': { 'PT': 'Redução da pressão arterial: Estudos demonstram diminuição significativa da hipertensão em usuários regulares', 'EN': 'Reduced blood pressure: Studies show a significant decrease in hypertension in regular users' },
    '1.1.3': { 'PT': 'Melhoria do perfil lipídico: Redução do colesterol LDL e aumento do HDL', 'EN': 'Improved lipid profile: Reduced LDL cholesterol and increased HDL' },
    '1.1.4': { 'PT': 'Fortalecimento do sistema cardiovascular: Aumento da eficiência cardíaca e redução da frequência cardíaca em repouso', 'EN': 'Cardiovascular system strengthening: Increased cardiac efficiency and reduced resting heart rate' },
    '1.1.5': { 'PT': 'Prevenção de doenças coronárias: Diminuição do risco de infarto e outras complicações cardiovasculares', 'EN': 'Prevention of coronary diseases: Decreased risk of heart attack and other cardiovascular complications' },
    '1.1.6': { 'PT': 'Melhoria da oxigenação tecidual: Aumento da capacidade de transporte de oxigênio no sangue', 'EN': 'Improved tissue oxygenation: Increased oxygen transport capacity in the blood' },
    '1.1.7': { 'PT': 'Regulação da glicemia: Controle mais eficiente dos níveis de açúcar no sangue', 'EN': 'Glycemia regulation: More efficient control of blood sugar levels' },
    '1.2': { 'PT': '1.2 Desenvolvimento Muscular Integrado', 'EN': '1.2 Integrated Muscle Development' },
    '1.2.1': { 'PT': 'Fortalecimento das pernas: Desenvolvimento harmônico de quadríceps, isquiotibiais, panturrilhas e glúteos', 'EN': 'Leg strengthening: Harmonious development of quadriceps, hamstrings, calves, and glutes' },
    '1.2.2': { 'PT': 'Fortalecimento do core: Ativação constante dos músculos abdominais e lombares para estabilização', 'EN': 'Core strengthening: Constant activation of abdominal and lumbar muscles for stabilization' },
    '1.2.3': { 'PT': 'Melhoria da coordenação motora: Desenvolvimento do equilíbrio e propriocepção', 'EN': 'Improved motor coordination: Development of balance and proprioception' },
    '1.2.4': { 'PT': 'Aumento da resistência muscular: Capacidade de manter esforço por períodos prolongados', 'EN': 'Increased muscular endurance: Ability to sustain effort for prolonged periods' },
    '1.2.5': { 'PT': 'Tonificação muscular: Definição muscular sem hipertrofia excessiva', 'EN': 'Muscle toning: Muscle definition without excessive hypertrophy' },
    '1.2.6': { 'PT': 'Fortalecimento dos músculos estabilizadores: Desenvolvimento de músculos profundos responsáveis pela postura', 'EN': 'Strengthening stabilizer muscles: Development of deep muscles responsible for posture' },
    '1.2.7': { 'PT': 'Melhoria da potência muscular: Aumento da capacidade de gerar força rapidamente', 'EN': 'Improved muscular power: Increased ability to generate force quickly' },
    // ... (restante do CONTENT_DATA omitido)
    '10.2.8': { 'PT': 'Inovação em baterias: Desenvolvimento de tecnologia nacional', 'EN': 'Innovation in batteries: Development of national technology' }
    // ------------------------------------------------


}; 

const BODY_ELEMENT = document.getElementById('site-body');
const COLOR_TOGGLE = document.getElementById('color-toggle');
const LANG_SWITCH_BTN = document.getElementById('lang-switch-btn'); 
const CONTENT_CONTAINER = document.getElementById('content-container');
const LAST_CONTENT_MARKER = document.getElementById('last-content-marker');

// ELEMENTOS ADICIONAIS
const SIGNATURE_COUNT_TITLE_ELEM = document.getElementById('signature-count-title');
const SIGNATURE_COUNT_ELEM = document.getElementById('signature-count');
const SIGN_MANIFESTO_BTN = document.getElementById('sign-manifesto-btn');

// VARIÁVEIS DO CONTADOR VIVO (ITEM 5)
let currentSignatures = 1202;
// 3 min (180000ms), 2 min (120000ms), 4 min (240000ms)
const signatureIntervals = [180000, 120000, 240000]; 
let intervalIndex = 0;
let signatureTimeout; // Variável para armazenar o timeout


// FUNÇÕES DE ESTADO
function saveState(key, value) { localStorage.setItem(key, value); }
function loadState(key) { return localStorage.getItem(key); }
function getLang() { 
    return loadState('lang-mode') || 'PT'; 
}


// FUNÇÃO DE MUDANÇA DE COR
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

// ITEM 5: LÓGICA DO CONTADOR CÍCLICO
function updateSignatureCount() {
    if (SIGNATURE_COUNT_ELEM) {
        // Usa toLocaleString para formatar com separadores de milhar (Ex: 1.202)
        SIGNATURE_COUNT_ELEM.textContent = currentSignatures.toLocaleString('pt-BR');
    }
}

function runSignatureCycle() {
    // Limpa o timeout anterior para evitar múltiplos ciclos rodando
    clearTimeout(signatureTimeout);

    // Aumenta o número de 1 a 5 para simular adesão
    const randomIncrease = Math.floor(Math.random() * 5) + 1; 
    currentSignatures += randomIncrease;
    updateSignatureCount();
    
    // Pega o intervalo atual (em milissegundos) e avança para o próximo índice (cíclico)
    const interval = signatureIntervals[intervalIndex];
    intervalIndex = (intervalIndex + 1) % signatureIntervals.length;
    
    // Configura o próximo ciclo
    signatureTimeout = setTimeout(runSignatureCycle, interval);
}

function handleSignManifesto() {
    // Simula a assinatura do usuário atual
    currentSignatures += 1;
    updateSignatureCount();
    
    // AÇÃO SEQUENCIAL SUGERIDA: Foco em Engajamento
    alert("Manifesto assinado! Sua voz foi adicionada à nossa crescente comunidade."); // Feedback imediato

    // Sugestão: Rolar o usuário para o topo para continuar a leitura/interação
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// FUNÇÃO DE TRADUÇÃO E PREENCHIMENTO DE CONTEÚDO (CORREÇÃO DO BUG TELA BRANCA)
function updateContent() {
    const currentLang = getLang();
    const targetLang = (currentLang === 'PT' ? 'EN' : 'PT'); 
    
    // 1. Atualiza elementos estáticos
    document.getElementById('doc-title').textContent = CONTENT_DATA['title'][currentLang];
    
    // Limpa o conteúdo dinâmico (mantendo apenas o container limpo)
    CONTENT_CONTAINER.innerHTML = '';
    
    // 2. Preenche Título e Abstract
    let contentHTML = `<h1 id="main-title">${CONTENT_DATA['title'][currentLang]}</h1>`;
    contentHTML += `<p id="abstract-text" class="abstract-text">${CONTENT_DATA['abstract'][currentLang]}</p>`;
    
    // 3. Adiciona a lógica de preenchimento do manifesto
    
    // Loop principal (Seções 1 a 10)
    for (let i = 1; i <= 10; i++) {
        const majorKey = `${i}.0`;
        if (CONTENT_DATA[majorKey]) {
            contentHTML += `<div class="topic-section">`;
            contentHTML += `<h2 class="main-topic">${CONTENT_DATA[majorKey][currentLang]}</h2>`;
            
            // Loop de Subseções
            let j = 1;
            while (CONTENT_DATA[`${i}.${j}`]) {
                const subKey = `${i}.${j}`;
                contentHTML += `<h3 class="sub-topic">${CONTENT_DATA[subKey][currentLang]}</h3>`;
                
                // Loop de Detalhes
                let k = 1;
                while (CONTENT_DATA[`${subKey}.${k}`]) {
                    const detailKey = `${subKey}.${k}`;
                    const detailText = CONTENT_DATA[detailKey][currentLang] || '';
                    contentHTML += `<p class="detail">${detailText}</p>`;
                    k++;
                }
                j++;
            }
            contentHTML += `</div>`;
        }
    }
    
    // Insere todo o conteúdo gerado de uma vez
    CONTENT_CONTAINER.innerHTML = contentHTML;
    
    // 4. Atualiza textos e botões fora do container principal
    document.querySelector('.toggle-label[for="color-toggle"]').textContent = CONTENT_DATA['label-color'][currentLang];
    if (SIGNATURE_COUNT_TITLE_ELEM) {
        SIGNATURE_COUNT_TITLE_ELEM.textContent = CONTENT_DATA['signature-title'][currentLang];
    }
    if (SIGN_MANIFESTO_BTN) {
        SIGN_MANIFESTO_BTN.textContent = (currentLang === 'PT' ? 'Assinar Manifesto' : 'Sign Manifesto');
    }
    LANG_SWITCH_BTN.textContent = `(${targetLang})`;
    
    // 5. Reposiciona o marcador de final de página (para o botão de tradução)
    CONTENT_CONTAINER.appendChild(LAST_CONTENT_MARKER);
}

function toggleLanguage() {
    const currentLang = getLang();
    const newLang = (currentLang === 'PT' ? 'EN' : 'PT');
    
    saveState('lang-mode', newLang);
    
    // Reconstroi o conteúdo
    updateContent(); 
}

// FUNÇÃO PARA MOSTRAR O BOTÃO DE TRADUÇÃO APENAS NO FINAL
function checkScroll() {
    const lastContent = LAST_CONTENT_MARKER.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (lastContent.top <= viewportHeight * 0.95) { 
        LANG_SWITCH_BTN.classList.add('visible');
    } else {
        LANG_SWITCH_BTN.classList.remove('visible');
    }
}

// FUNÇÃO PARA ROLAR ATÉ O FINAL DO CONTEÚDO (ÂNCORA)
window.scrollToSources = function() {
    const sourcesElement = document.getElementById('last-content-marker'); 
    if (sourcesElement) {
        sourcesElement.scrollIntoView({ behavior: 'smooth' });
    }
}


// INICIALIZAÇÃO E CARGA DE ESTADO
document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGA O TEMA DE CORES
    const savedColor = loadState('color-theme');
    if (savedColor === 'alt') {
        COLOR_TOGGLE.checked = true;
        BODY_ELEMENT.classList.add('alt-theme');
    }
    
    // 2. ADICIONA EVENTO DE ASSINATURA 
    if (SIGN_MANIFESTO_BTN) {
        SIGN_MANIFESTO_BTN.addEventListener('click', handleSignManifesto);
    }
    
    // 3. ADICIONA EVENTO DE CLIQUE PARA O BOTÃO DE TRADUÇÃO
    if (LANG_SWITCH_BTN) {
        LANG_SWITCH_BTN.addEventListener('click', toggleLanguage);
    }
    
    // 4. ATUALIZA O CONTEÚDO INICIAL
    updateContent();
    updateSignatureCount(); 
    
    // 5. INICIA O CONTADOR CÍCLICO VIVO (ITEM 5)
    runSignatureCycle(); 
    
    // 6. ADICIONA LISTENER DE SCROLL para o botão de tradução
    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});
