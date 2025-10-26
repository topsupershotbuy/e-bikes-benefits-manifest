/* ---------------------------------------------------------------------- */
/* ------------------- VARIÁVEIS DE CORES E FONT SMOOTHING ------------------ */
/* ---------------------------------------------------------------------- */

/* Cores Padrão (Desligado: Fundo Branco, Destaque Vermelho) */
:root {
    --bg-color-default: #ffffff; 
    --text-color-default: #000000;
    --highlight-bg-default: #e74c3c; /* Vermelho vivo do destaque */
    --highlight-text-default: #ffffff;
    --toggle-off-color: #95a5a6; /* Cor do toggle desligado */
    --toggle-on-color-color: #e74c3c; /* Cor do toggle Ligado (Vermelho) */
}

/* CORES MODO ALTERNATIVO (Ligado: ITEM 4) */
.alt-theme {
    --bg-color-default: #FFD700; /* Background: Dourado */
    --text-color-default: #6A0DAD; /* Texto Principal: Roxo */
    --highlight-bg-default: #FFC300; /* Destaque BG: Amarela */
    --highlight-text-default: #6A0DAD; /* Destaque Texto: Roxa */
    --toggle-off-color: #c9610b; /* Toggle OFF */
    --toggle-on-color: #6A0DAD; /* Toggle ON */
}

/* ---------------------------------------------------------------------- */
/* ------------------------------- BASE E ESTILO ------------------------------ */
/* ---------------------------------------------------------------------- */

body {
    font-family: 'League Gothic', Arial, sans-serif;
    background-color: var(--bg-color-default);
    color: var(--text-color-default);
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
    padding-top: 2cm;
    padding-bottom: 4cm;
    
    /* ITEM 5: CORREÇÃO DO FOCO/RESOLUÇÃO DA FONTE */
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale; 
    text-rendering: optimizeLegibility; 
}

.alt-theme {
    background-color: var(--bg-color-default);
    color: var(--text-color-default);
}

.content-container {
    max-width: calc(100% - 7cm); 
    margin-left: 4cm;
    margin-right: 3cm;
    margin-top: 0;
    margin-bottom: 0;
}

/* Estilo de Destaque */
.main-topic, .sub-topic, .detail {
    display: block; 
    padding: 8px 12px;
    margin-bottom: 12px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, color 0.3s;
    text-align: justify;
    
    background-color: var(--highlight-bg-default);
    color: var(--highlight-text-default);
}

.main-topic { font-size: 18pt; }
.sub-topic { font-size: 16.5pt; }
.detail { font-size: 15pt; }

/* ---------------------------------------------------------------------- */
/* ------------------------------- ESTILO DO TOGGLE (ITEM 2 & 3) ----------------- */
/* ---------------------------------------------------------------------- */

.fixed-controls {
    position: fixed;
    bottom: 4cm;
    left: 4cm;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 15px; 
}

.toggle-control {
    display: flex;
    align-items: center;
    gap: 10px;
}

.toggle-label {
    font-size: 14pt;
    font-weight: bold;
    color: var(--text-color-default);
    transition: color 0.3s;
    width: 100px; 
    text-align: left;
}

.toggle-input {
    display: none; 
}

.toggle-slider {
    cursor: pointer;
    width: 100px; 
    height: 30px; 
    background-color: var(--toggle-off-color);
    border-radius: 15px;
    position: relative;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.toggle-indicator {
    position: absolute;
    color: white; /* Cor do texto dentro do switch */
    font-size: 12pt;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    width: 40px;
    user-select: none; /* Impede seleção do texto */
}

.lang-slider .toggle-indicator {
    color: #ffffff;
}

.toggle-indicator.off {
    left: 5px;
    opacity: 1;
}

.toggle-indicator.on {
    right: 5px;
    opacity: 0;
}

.toggle-slider::before {
    content: '';
    position: absolute;
    width: 25px; 
    height: 25px;
    background-color: white;
    border-radius: 50%;
    left: 2px;
    transition: transform 0.3s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* ESTADO LIGADO (CHECKED) */
.toggle-input:checked + .toggle-slider {
    background-color: var(--toggle-on-color);
}

.toggle-input:checked + .toggle-slider::before {
    transform: translateX(70px); 
}

.toggle-input:checked + .toggle-slider .toggle-indicator.off {
    opacity: 0;
}

.toggle-input:checked + .toggle-slider .toggle-indicator.on {
    opacity: 1;
}

/* Cores específicas para o slider de Idioma (PT/EN) */
.lang-slider {
    background-color: #007bff; /* Azul padrão para PT (Item 3) */
}

.toggle-input:checked + .lang-slider {
    background-color: #28a745; /* Verde para EN (Item 3) */
}
