// O CONTEÚDO COMPLETO DO MANIFESTO É MANTIDO AQUI PARA TRADUÇÃO
const CONTENT_DATA = {
    // TÍTULOS ESTÁTICOS E LABELS
    'title': {
        'PT': "BENEFÍCIOS DO CICLISMO URBANO",
        'EN': "URBAN CYCLING BENEFITS"
    },
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

    // SEÇÃO 1: BENEFÍCIOS FÍSICOS E FISIOLÓGICOS
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

    '1.3': { 'PT': '1.3 Proteção Articular e Óssea', 'EN': '1.3 Joint and Bone Protection' },
    '1.3.1': { 'PT': 'Baixo impacto articular: Movimento suave que preserva cartilagens e estruturas articulares', 'EN': 'Low joint impact: Gentle movement that preserves cartilage and joint structures' },
    '1.3.2': { 'PT': 'Fortalecimento ósseo: Estímulo adequado para manutenção da densidade óssea', 'EN': 'Bone strengthening: Adequate stimulation for maintaining bone density' },
    '1.3.3': { 'PT': 'Melhoria da flexibilidade: Amplitude de movimento articular preservada e melhorada', 'EN': 'Improved flexibility: Preserved and enhanced joint range of motion' },
    '1.3.4': { 'PT': 'Redução de inflamações: Diminuição de processos inflamatórios crônicos', 'EN': 'Reduced inflammation: Decreased chronic inflammatory processes' },
    '1.3.5': { 'PT': 'Prevenção de artrose: Manutenção da saúde articular a longo prazo', 'EN': 'Osteoarthritis prevention: Long-term maintenance of joint health' },
    '1.3.6': { 'PT': 'Melhoria da mobilidade: Preservação e aumento da capacidade de movimento', 'EN': 'Improved mobility: Preservation and increase of movement capacity' },
    '1.3.7': { 'PT': 'Redução de dores articulares: Alívio de desconfortos relacionados ao sedentarismo', 'EN': 'Reduced joint pain: Relief from discomfort related to sedentary lifestyle' },

    '1.4': { 'PT': '1.4 Controle de Peso e Composição Corporal', 'EN': '1.4 Weight Control and Body Composition' },
    '1.4.1': { 'PT': 'Queima calórica eficiente: Gasto energético significativo durante o uso', 'EN': 'Efficient calorie burning: Significant energy expenditure during use' },
    '1.4.2': { 'PT': 'Aceleração do metabolismo: Aumento da taxa metabólica basal', 'EN': 'Accelerated metabolism: Increased basal metabolic rate' },
    '1.4.3': { 'PT': 'Redução da gordura corporal: Diminuição especialmente da gordura abdominal', 'EN': 'Reduced body fat: Decrease, especially in abdominal fat' },
    '1.4.4': { 'PT': 'Preservação da massa muscular: Manutenção do tecido muscular durante o emagrecimento', 'EN': 'Muscle mass preservation: Maintenance of muscle tissue during weight loss' },
    '1.4.5': 'Melhoria da composição corporal: Aumento da proporção músculo/gordura',
    '1.4.6': 'Regulação hormonal: Melhoria da sensibilidade à insulina e outros hormônios',
    '1.4.7': 'Controle do apetite: Regulação natural da fome e saciedade',

    '1.5': { 'PT': '1.5 Melhoria Postural Abrangente', 'EN': '1.5 Comprehensive Postural Improvement' },
    '1.5.1': 'Fortalecimento da musculatura das costas: Desenvolvimento dos músculos paravertebrais',
    '1.5.2': 'Correção de desvios posturais: Alinhamento da coluna vertebral',
    '1.5.3': 'Redução de dores lombares: Alívio de tensões na região lombar',
    '1.5.4': 'Melhoria da postura cervical: Correção da posição da cabeça e pescoço',
    '1.5.5': 'Fortalecimento dos músculos profundos: Desenvolvimento da musculatura estabilizadora',
    '1.5.6': 'Consciência corporal: Maior percepção da posição do corpo no espaço',
    '1.5.7': 'Prevenção de lesões: Redução do risco de problemas posturais futuros',

    // SEÇÃO 2: BENEFÍCIOS MENTAIS E NEUROLÓGICOS
    '2.0': { 'PT': '2. BENEFÍCIOS MENTAIS E NEUROLÓGICOS', 'EN': '2. MENTAL AND NEUROLOGICAL BENEFITS' },
    '2.1': { 'PT': '2.1 Redução Abrangente do Estresse', 'EN': '2.1 Comprehensive Stress Reduction' },
    '2.1.1': 'Diminuição do cortisol: Redução significativa dos níveis do hormônio do estresse',
    '2.1.2': 'Liberação de endorfinas: Produção natural de substâncias que promovem bem-estar',
    '2.1.3': 'Efeito meditativo: Concentração na atividade que promove relaxamento mental',
    '2.1.4': 'Conexão com a natureza: Benefícios psicológicos do contato com o ambiente externo',
    '2.1.5': 'Quebra da rotina: Mudança de ambiente que alivia tensões do cotidiano',
    '2.1.6': 'Tempo pessoal: Momentos de introspecção e reflexão durante o trajeto',
    '2.1.7': 'Redução da ansiedade: Diminuição dos níveis de ansiedade e preocupação',

    '2.2': { 'PT': '2.2 Otimização da Qualidade do Sono', 'EN': '2.2 Sleep Quality Optimization' },
    '2.2.1': 'Regulação circadiana: Sincronização do relógio biológico através da exposição à luz natural',
    '2.2.2': 'Fadiga física saudável: Cansaço natural que facilita o adormecer',
    '2.2.3': 'Redução da insônia: Melhoria significativa na capacidade de iniciar o sono',
    '2.2.4': 'Sono mais profundo: Aumento das fases de sono reparador',
    '2.2.5': 'Redução de despertares noturnos: Sono mais contínuo e reparador',
    '2.2.6': 'Melhoria da arquitetura do sono: Otimização dos ciclos de sono REM e não-REM',
    '2.2.7': 'Recuperação mais eficiente: Melhor restauração física e mental durante o descanso',

    '2.3': { 'PT': '2.3 Aumento da Energia e Vitalidade', 'EN': '2.3 Increased Energy and Vitality' },
    '2.3.1': 'Melhoria da capacidade energética: Aumento da energia disponível para atividades diárias',
    '2.3.2': 'Combate à fadiga crônica: Redução da sensação de cansaço constante',
    '2.3.3': 'Melhoria do humor: Elevação do estado de ânimo e disposição geral',
    '2.3.4': 'Aumento da motivação: Maior disposição para enfrentar desafios diários',
    '2.3.5': 'Redução da letargia: Diminuição da sensação de preguiça e apatia',
    '2.3.6': 'Melhoria da produtividade: Maior eficiência nas atividades profissionais e pessoais',
    '2.3.7': 'Vitalidade prolongada: Manutenção da energia ao longo do dia',

    '2.4': { 'PT': '2.4 Aprimoramento Cognitivo', 'EN': '2.4 Cognitive Enhancement' },
    '2.4.1': 'Melhoria da concentração: Aumento da capacidade de foco e atenção',
    '2.4.2': 'Estimulação da neuroplasticidade: Promoção da formação de novas conexões neurais',
    '2.4.3': 'Melhoria da memória: Fortalecimento tanto da memória de curto quanto de longo prazo',
    '2.4.4': 'Aumento da criatividade: Estímulo do pensamento criativo e inovador',
    '2.4.5': 'Melhoria da tomada de decisões: Aprimoramento da capacidade de julgamento',
    '2.4.6': 'Redução do declínio cognitivo: Prevenção de problemas cognitivos relacionados à idade',
    '2.4.7': 'Melhoria da função executiva: Aprimoramento do planejamento e organização mental',

    '2.5': { 'PT': '2.5 Bem-estar Psicológico e Emocional', 'EN': '2.5 Psychological and Emotional Well-being' },
    '2.5.1': 'Sensação de liberdade: Autonomia e independência na mobilidade',
    '2.5.2': 'Aumento da autoestima: Melhoria da percepção sobre si mesmo',
    '2.5.3': 'Redução da depressão: Efeito antidepressivo natural do exercício',
    '2.5.4': 'Melhoria da regulação emocional: Maior capacidade de lidar com emoções',
    '2.5.5': 'Sensação de conquista: Satisfação pessoal ao atingir objetivos de mobilidade',
    '2.5.6': 'Conexão social: Oportunidades de interação e relacionamento',
    '2.5.7': 'Mindfulness natural: Estado de atenção plena durante o uso',

    // SEÇÃO 3: BENEFÍCIOS PRÁTICOS E ECONÔMICOS
    '3.0': { 'PT': '3. BENEFÍCIOS PRÁTICOS E ECONÔMICOS', 'EN': '3. PRACTICAL AND ECONOMIC BENEFITS' },
    '3.1': { 'PT': '3.1 Economia Financeira Substancial', 'EN': '3.1 Substantial Financial Savings' },
    '3.1.1': 'Redução de custos de combustível: Economia mensal significativa em gasolina ou etanol',
    '3.1.2': 'Diminuição de gastos com manutenção automotiva: Redução de custos com revisões, pneus e peças',
    '3.1.3': 'Economia em transporte público: Menor dependência de ônibus, metrô e aplicativos',
    '3.1.4': 'Redução de multas de trânsito: Menor exposição a infrações de trânsito',
    '3.1.5': 'Economia em estacionamento: Redução ou eliminação de gastos com estacionamento',
    '3.1.6': 'Menor depreciação veicular: Preservação do valor do veículo com menor uso',
    '3.1.7': 'Redução de seguros: Possibilidade de reduzir coberturas de seguro automotivo',
    '3.1.8': 'Economia em pedágios: Evitar custos de pedágios urbanos',
    '3.1.9': 'Redução de custos médicos: Menor gasto com saúde devido ao estilo de vida mais ativo',

    '3.2': { 'PT': '3.2 Facilidade e Conveniência de Estacionamento', 'EN': '3.2 Parking Ease and Convenience' },
    '3.2.1': 'Estacionamento gratuito: Maioria dos locais oferece vagas gratuitas para bicicletas',
    '3.2.2': 'Menor espaço necessário: Ocupação mínima de espaço urbano',
    '3.2.3': 'Acesso a áreas restritas: Possibilidade de estacionar em locais vedados a veículos',
    '3.2.4': 'Estacionamento próximo ao destino: Maior proximidade ao local de destino',
    '3.2.5': 'Segurança no estacionamento: Menor risco de furtos comparado a veículos',
    '3.2.6': 'Flexibilidade de horários: Sem restrições de horário para estacionamento',
    '3.2.7': 'Estacionamento em casa: Facilidade de guardar em residências',
    '3.2.8': 'Bicicletários corporativos: Crescente disponibilidade em empresas',

    '3.3': { 'PT': '3.3 Flexibilidade Máxima de Rotas', 'EN': '3.3 Maximum Route Flexibility' },
    '3.3.1': 'Acesso a ciclovias exclusivas: Utilização de infraestrutura dedicada',
    '3.3.2': 'Trajetos alternativos: Possibilidade de rotas não disponíveis para veículos',
    '3.3.3': 'Navegação em áreas congestionadas: Capacidade de atravessar trânsito parado',
    '3.3.4': 'Acesso a parques e áreas verdes: Utilização de espaços recreativos como rota',
    '3.3.5': 'Rotas mais diretas: Possibilidade de trajetos em linha reta',
    '3.3.6': 'Flexibilidade de horários: Independência de horários de transporte público',
    '3.3.7': 'Adaptação a condições de trânsito: Capacidade de mudar rotas instantaneamente',
    '3.3.8': 'Exploração urbana: Descoberta de novos caminhos e locais',

    '3.4': { 'PT': '3.4 Otimização Temporal Significativa', 'EN': '3.4 Significant Time Optimization' },
    '3.4.1': 'Redução do tempo em congestionamentos: Evitar engarrafamentos urbanos',
    '3.4.2': 'Trajetos mais eficientes: Rotas otimizadas para bicicletas',
    '3.4.3': 'Previsibilidade no tempo de deslocamento: Maior controle sobre o tempo de viagem',
    '3.4.4': 'Eliminação de tempo de espera: Sem dependência de horários de transporte público',
    '3.4.5': 'Multitarefa durante o trajeto: Possibilidade de exercitar-se enquanto se desloca',
    '3.4.6': 'Redução do tempo de estacionamento: Processo mais rápido de estacionar',
    '3.4.7': 'Flexibilidade de partida: Liberdade para sair a qualquer momento',
    '3.4.8': 'Tempo de qualidade: Transformação do tempo de deslocamento em momento prazeroso',

    '3.5': { 'PT': '3.5 Integração Multimodal Avançada', 'EN': '3.5 Advanced Multimodal Integration' },
    '3.5.1': 'Combinação com transporte público: Facilidade de transporte em trens e ônibus',
    '3.5.2': 'Solução para "primeira e última milha": Complemento perfeito ao transporte público',
    '3.5.3': 'Integração com aplicativos: Conexão com sistemas de navegação e transporte',
    '3.5.4': 'Flexibilidade modal: Possibilidade de combinar diferentes meios de transporte',
    '3.5.5': 'Redução da dependência automotiva: Diminuição da necessidade de veículo próprio',
    '3.5.6': 'Acesso a diferentes modais: Facilidade de transição entre diferentes transportes',
    '3.5.7': 'Otimização de viagens longas: Complemento eficiente para viagens intermunicipais',

    // SEÇÃO 4: BENEFÍCIOS SOCIAIS E COMUNITÁRIOS
    '4.0': { 'PT': '4. BENEFÍCIOS SOCIAIS E COMUNITÁRIOS', 'EN': '4. SOCIAL AND COMMUNITY BENEFITS' },
    '4.1': { 'PT': '4.1 Networking e Construção de Relacionamentos', 'EN': '4.1 Networking and Relationship Building' },
    '4.1.1': 'Comunidades ciclísticas: Participação em grupos organizados de ciclistas',
    '4.1.2': 'Eventos e encontros: Participação em passeios, competições e eventos sociais',
    '4.1.3': 'Networking profissional: Oportunidades de conhecer pessoas de diferentes áreas',
    '4.1.4': 'Relacionamentos duradouros: Formação de amizades baseadas em interesses comuns',
    '4.1.5': 'Mentoria e aprendizado: Troca de experiências com ciclistas mais experientes',
    '4.1.6': 'Diversidade social: Interação com pessoas de diferentes classes sociais e idades',
    '4.1.7': 'Conexões internacionais: Participação em comunidades globais de ciclistas',

    '4.2': { 'PT': '4.2 Fortalecimento do Tecido Social', 'EN': '4.2 Strengthening the Social Fabric' },
    '4.2.1': 'Senso de comunidade: Fortalecimento dos laços comunitários locais',
    '4.2.2': 'Engajamento cívico: Maior participação em questões urbanas e de mobilidade',
    '4.2.3': 'Solidariedade entre ciclistas: Cultura de ajuda mútua e cooperação',
    '4.2.4': 'Ativismo urbano: Participação em movimentos por melhores condições de mobilidade',
    '4.2.5': 'Educação comunitária: Compartilhamento de conhecimentos sobre mobilidade sustentável',
    '4.2.6': 'Inclusão de minorias: Democratização do acesso à mobilidade urbana',
    '4.2.7': 'Revitalização de bairros: Contribuição para o desenvolvimento de comunidades locais',

    '4.3': { 'PT': '4.3 Impacto no Ambiente Corporativo', 'EN': '4.3 Impact on the Corporate Environment' },
    '4.3.1': 'Melhoria do clima organizacional: Funcionários mais dispostos e saudáveis',
    '4.3.2': 'Redução do absenteísmo: Menor número de faltas por questões de saúde',
    '4.3.3': 'Aumento da produtividade: Funcionários mais energizados e focados',
    '4.3.4': 'Fortalecimento de equipes: Atividades conjuntas que promovem união',
    '4.3.5': 'Imagem corporativa: Melhoria da reputação da empresa em sustentabilidade',
    '4.3.6': 'Redução de custos: Menor necessidade de vagas de estacionamento',
    '4.3.7': 'Atração de talentos: Diferencial competitivo na atração de profissionais',
    '4.3.8': 'Programas de bem-estar: Integração com iniciativas de saúde corporativa',

    '4.4': { 'PT': '4.4 Inclusão Social Ampliada', 'EN': '4.4 Expanded Social Inclusion' },
    '4.4.1': 'Democratização da mobilidade: Acesso à mobilidade independente da renda',
    '4.4.2': 'Inclusão de pessoas com limitações: Adaptação para diferentes necessidades físicas',
    '4.4.3': 'Redução de barreiras socioeconômicas: Mobilidade acessível para diferentes classes sociais',
    '4.4.4': 'Empoderamento feminino: Maior autonomia e segurança para mulheres',
    '4.4.5': 'Inclusão de idosos: Mobilidade assistida para pessoas da terceira idade',
    '4.4.6': 'Acessibilidade urbana: Melhoria do acesso a diferentes áreas da cidade',
    '4.4.7': 'Oportunidades de emprego: Criação de novos postos de trabalho no setor',

    // SEÇÃO 5: BENEFÍCIOS AMBIENTAIS E SUSTENTABILIDADE
    '5.0': { 'PT': '5. BENEFÍCIOS AMBIENTAIS E SUSTENTABILIDADE', 'EN': '5. ENVIRONMENTAL AND SUSTAINABILITY BENEFITS' },
    '5.1': { 'PT': '5.1 Redução Significativa da Pegada de Carbono', 'EN': '5.1 Significant Carbon Footprint Reduction' },
    '5.1.1': 'Emissões zero durante o uso: Transporte completamente limpo durante a operação',
    '5.1.2': 'Redução das emissões de CO₂: Contribuição significativa para metas climáticas',
    '5.1.3': 'Compensação de emissões: Cada e-bike substitui múltiplas viagens de carro',
    '5.1.4': 'Impacto cumulativo: Efeito multiplicador quando adotado em escala',
    '5.1.5': 'Pegada de carbono do ciclo de vida: Impacto ambiental muito menor que veículos convencionais',
    '5.1.6': 'Contribuição para metas climáticas: Alinhamento com objetivos de redução de emissões',
    '5.1.7': 'Qualidade do ar urbano: Melhoria significativa da qualidade do ar nas cidades',

    '5.2': { 'PT': '5.2 Redução da Poluição Sonora', 'EN': '5.2 Noise Pollution Reduction' },
    '5.2.1': 'Transporte silencioso: Operação praticamente sem ruído',
    '5.2.2': 'Melhoria da qualidade de vida urbana: Redução do estresse acústico',
    '5.2.3': 'Preservação da fauna urbana: Menor impacto na vida selvagem urbana',
    '5.2.4': 'Ambientes mais tranquilos: Contribuição para cidades mais silenciosas',
    '5.2.5': 'Redução da poluição sonora noturna: Menor impacto durante períodos de descanso',
    '5.2.6': 'Melhoria da saúde auditiva: Redução da exposição a ruídos excessivos',
    '5.2.7': 'Preservação de áreas sensíveis: Menor impacto em hospitais, escolas e residências',

    '5.3': { 'PT': '5.3 Contribuição para Cidades Mais Sustentáveis', 'EN': '5.3 Contribution to More Sustainable Cities' },
    '5.3.1': 'Redução da pressão sobre infraestrutura viária: Menor necessidade de expansão rodoviária',
    '5.3.2': 'Promoção de espaços verdes: Incentivo ao desenvolvimento de áreas verdes urbanas',
    '5.3.3': 'Melhoria da qualidade urbana: Contribuição para cidades mais habitáveis',
    '5.3.4': 'Redução do efeito ilha de calor: Menor geração de calor urbano',
    '5.3.5': 'Preservação de recursos naturais: Menor consumo de combustíveis fósseis',
    '5.3.6': 'Desenvolvimento urbano sustentável: Modelo de crescimento urbano responsável',
    '5.3.7': 'Biodiversidade urbana: Menor impacto na fauna e flora urbanas',

    '5.4': { 'PT': '5.4 Liderança em Sustentabilidade', 'EN': '5.4 Sustainability Leadership' },
    '5.4.1': 'Exemplo de comportamento sustentável: Modelo para outros cidadãos',
    '5.4.2': 'Educação ambiental prática: Conscientização através do exemplo',
    '5.4.3': 'Influência social: Inspiração para mudanças comportamentais',
    '5.4.4': 'Responsabilidade ambiental: Demonstração de compromisso com o meio ambiente',
    '5.4.5': 'Inovação sustentável: Adoção de tecnologias limpas',
    '5.4.6': 'Cultura de sustentabilidade: Promoção de valores ambientais',
    '5.4.7': 'Legado para futuras gerações: Contribuição para um futuro mais sustentável',

    // SEÇÃO 6: BENEFÍCIOS TECNOLÓGICOS E INOVAÇÃO
    '6.0': { 'PT': '6. BENEFÍCIOS TECNOLÓGICOS E INOVAÇÃO', 'EN': '6. TECHNOLOGICAL BENEFITS AND INNOVATION' },
    '6.1': { 'PT': '6.1 Conectividade e Integração Digital', 'EN': '6.1 Connectivity and Digital Integration' },
    '6.1.1': 'Aplicativos de navegação: GPS especializado para ciclistas',
    '6.1.2': 'Monitoramento de performance: Acompanhamento de métricas de saúde e performance',
    '6.1.3': 'Conectividade IoT: Integração com dispositivos inteligentes',
    '6.1.4': 'Sistemas de segurança: Alertas e rastreamento em tempo real',
    '6.1.5': 'Manutenção preditiva: Monitoramento do estado da bicicleta',
    '6.1.6': 'Integração com smart cities: Conexão com sistemas urbanos inteligentes',
    '6.1.7': 'Personalização da experiência: Adaptação às preferências individuais',

    '6.2': { 'PT': '6.2 Monitoramento de Saúde Avançado', 'EN': '6.2 Advanced Health Monitoring' },
    '6.2.1': 'Frequência cardíaca em tempo real: Monitoramento contínuo durante o exercício',
    '6.2.2': 'Análise de performance: Métricas detalhadas de desempenho físico',
    '6.2.3': 'Histórico de atividades: Acompanhamento de progresso ao longo do tempo',
    '6.2.4': 'Alertas de saúde: Notificações sobre limites de esforço',
    '6.2.5': 'Integração com wearables: Conexão com dispositivos de monitoramento',
    '6.2.6': 'Análise de sono: Correlação entre atividade física e qualidade do sono',
    '6.2.7': 'Metas personalizadas: Objetivos adaptados ao perfil individual',

    '6.3': { 'PT': '6.3 Navegação Inteligente e Otimizada', 'EN': '6.3 Intelligent and Optimized Navigation' },
    '6.3.1': 'Rotas otimizadas: Cálculo de trajetos mais eficientes para bicicletas',
    '6.3.2': 'Informações de trânsito: Dados em tempo real sobre condições de tráfego',
    '6.3.3': 'Pontos de interesse: Localização de bicicletários, oficinas e pontos de recarga',
    '6.3.4': 'Condições climáticas: Informações meteorológicas para planejamento',
    '6.3.5': 'Segurança de rotas: Avaliação de segurança de diferentes trajetos',
    '6.3.6': 'Comunidade colaborativa: Compartilhamento de informações entre usuários',
    '6.3.7': 'Realidade aumentada: Navegação com sobreposição de informações',

    // SEÇÃO 7: BENEFÍCIOS ECONÔMICOS SETORIAIS
    '7.0': { 'PT': '7. BENEFÍCIOS ECONÔMICOS SETORIAIS', 'EN': '7. SECTORAL ECONOMIC BENEFITS' },
    '7.1': { 'PT': '7.1 Desenvolvimento da Indústria Nacional', 'EN': '7.1 National Industry Development' },
    '7.1.1': 'Criação de empregos: Geração de postos de trabalho em manufatura e serviços',
    '7.1.2': 'Desenvolvimento tecnológico: Inovação em baterias, motores e componentes',
    '7.1.3': 'Cadeia produtiva: Fortalecimento de fornecedores e prestadores de serviços',
    '7.1.4': 'Exportação: Potencial de exportação de produtos e tecnologia',
    '7.1.5': 'Investimento em P&D: Desenvolvimento de pesquisa e desenvolvimento nacional',
    '7.1.6': 'Qualificação profissional: Formação de mão de obra especializada',
    '7.1.7': 'Competitividade industrial: Posicionamento do Brasil no mercado global',

    '7.2': { 'PT': '7.2 Novos Modelos de Negócio', 'EN': '7.2 New Business Models' },
    '7.2.1': 'Bike-sharing elétrico: Sistemas de compartilhamento de bicicletas',
    '7.2.2': 'Delivery sustentável: Logística urbana com menor impacto ambiental',
    '7.2.3': 'Turismo ecológico: Desenvolvimento do turismo sustentável',
    '7.2.4': 'Serviços especializados: Manutenção, customização e consultoria',
    '7.2.5': 'Seguros específicos: Produtos de seguro adaptados para e-bikes',
    '7.2.6': 'Financiamento: Linhas de crédito especializadas',
    '7.2.7': 'Leasing corporativo: Aluguel de frotas para empresas',

    '7.3': { 'PT': '7.3 Impacto no Mercado Imobiliário', 'EN': '7.3 Impact on the Real Estate Market' },
    '7.3.1': 'Valorização de imóveis: Aumento do valor em áreas com boa infraestrutura ciclística',
    '7.3.2': 'Desenvolvimento urbano: Crescimento de bairros bike-friendly',
    '7.3.3': 'Novos empreendimentos: Projetos imobiliários com foco em mobilidade sustentável',
    '7.3.4': 'Infraestrutura residencial: Bicicletários e estações de recarga em edifícios',
    '7.3.5': 'Planejamento urbano: Influência no desenvolvimento de novos bairros',
    '7.3.6': 'Gentrificação verde: Transformação de áreas urbanas através da mobilidade sustentável',
    '7.3.7': 'Investimentos em infraestrutura: Atração de investimentos em ciclovias e equipamentos',

    // SEÇÃO 8: FATORES CRÍTICOS PARA ADOÇÃO EM ESCALA NACIONAL
    '8.0': { 'PT': '8. FATORES CRÍTICOS PARA ADOÇÃO EM ESCALA NACIONAL', 'EN': '8. CRITICAL FACTORS FOR NATIONAL SCALED ADOPTION' },
    '8.1': { 'PT': '8.1 Infraestrutura Ciclística Abrangente', 'EN': '8.1 Comprehensive Cycling Infrastructure' },
    '8.1.1': 'Rede integrada de ciclovias: Conexão entre diferentes regiões urbanas',
    '8.1.2': 'Segurança viária: Proteção adequada para ciclistas',
    '8.1.3': 'Sinalização específica: Placas e sinais adaptados para bicicletas',
    '8.1.4': 'Iluminação adequada: Segurança para uso noturno',
    '8.1.5': 'Manutenção regular: Conservação da infraestrutura existente',
    '8.1.6': 'Integração com transporte público: Conexões eficientes entre modais',
    '8.1.7': 'Bicicletários seguros: Locais protegidos para estacionamento',
    '8.1.8': 'Estações de recarga: Pontos de carregamento distribuídos pela cidade',

    '8.2': { 'PT': '8.2 Políticas Públicas Integradas', 'EN': '8.2 Integrated Public Policies' },
    '8.2.1': 'Incentivos fiscais: Redução de impostos para aquisição',
    '8.2.2': 'Subsídios governamentais: Programas de apoio à compra',
    '8.2.3': 'Regulamentação favorável: Leis que facilitam o uso de e-bikes',
    '8.2.4': 'Planejamento urbano: Inclusão da mobilidade ciclística no planejamento',
    '8.2.5': 'Educação no trânsito: Programas de conscientização para motoristas e ciclistas',
    '8.2.6': 'Parcerias público-privadas: Colaboração para desenvolvimento da infraestrutura',
    '8.2.7': 'Metas de mobilidade: Objetivos claros de redução de emissões',
    '8.2.8': 'Monitoramento e avaliação: Acompanhamento da efetividade das políticas',

    '8.3': { 'PT': '8.3 Fatores Socioculturais', 'EN': '8.3 Sociocultural Factors' },
    '8.3.1': 'Mudança de mentalidade: Aceitação da bicicleta como meio de transporte legítimo',
    '8.3.2': 'Educação ambiental: Conscientização sobre benefícios ambientais',
    '8.3.3': 'Influência de formadores de opinião: Apoio de personalidades e líderes',
    '8.3.4': 'Campanhas de conscientização: Programas de educação pública',
    '8.3.5': 'Demonstração de benefícios: Evidências concretas das vantagens',
    '8.3.6': 'Superação de preconceitos: Quebra de estereótipos sobre ciclismo urbano',
    '8.3.7': 'Cultura de segurança: Desenvolvimento de comportamentos seguros no trânsito',

    '8.4': { 'PT': '8.4 Aspectos Econômicos e Financeiros', 'EN': '8.4 Economic and Financial Aspects' },
    '8.4.1': 'Acessibilidade financeira: Preços compatíveis com a renda da população',
    '8.4.2': 'Linhas de financiamento: Crédito facilitado para aquisição',
    '8.4.3': 'Custo-benefício demonstrado: Evidências claras de economia',
    '8.4.4': 'Retorno sobre investimento: Cálculo do payback para usuários',
    '8.4.5': 'Incentivos corporativos: Programas empresariais de incentivo',
    '8.4.6': 'Parcerias comerciais: Acordos com empresas para facilitar acesso',
    '8.4.7': 'Mercado de usados: Desenvolvimento de mercado secundário',

    // SEÇÃO 9: CASOS DE SUCESSO INTERNACIONAIS DETALHADOS
    '9.0': { 'PT': '9. CASOS DE SUCESSO INTERNACIONAIS DETALHADOS', 'EN': '9. DETAILED INTERNATIONAL SUCCESS CASES' },
    '9.1': { 'PT': '9.1 Modelo Holandês - Integração Total', 'EN': '9.1 Dutch Model - Total Integration' },
    '9.1.1': 'Infraestrutura exemplar: Mais de 35.000 km de ciclovias',
    '9.1.2': 'Cultura ciclística: 27% de todas as viagens são feitas de bicicleta',
    '9.1.3': 'Integração multimodal: Conexão perfeita com transporte público',
    '9.1.4': 'Estacionamentos massivos: Grandes bicicletários em estações de trem',
    '9.1.5': 'Políticas de longo prazo: Investimento consistente por décadas',
    '9.1.6': 'Educação desde cedo: Ensino de ciclismo nas escolas',
    '9.1.7': 'Tecnologia avançada: Semáforos inteligentes para ciclistas',
    '9.1.8': 'Resultados mensuráveis: Redução significativa de emissões e acidentes',

    '9.2': { 'PT': '9.2 Experiência Dinamarquesa - Copenhague', 'EN': '9.2 Danish Experience - Copenhagen' },
    '9.2.1': 'Objetivo ambicioso: Meta de ser carbono neutro até 2025',
    '9.2.2': 'Investimento maciço: €150 milhões em infraestrutura ciclística',
    '9.2.3': 'Superhighways: Rodovias para bicicletas conectando subúrbios',
    '9.2.4': 'Tecnologia inteligente: Semáforos sincronizados para ciclistas',
    '9.2.5': 'Monitoramento avançado: Contadores de tráfego de bicicletas',
    '9.2.6': 'Bike-sharing: Sistema público de compartilhamento',
    '9.2.7': 'Resultados impressionantes: 62% dos habitantes usam bicicleta diariamente',
    '9.2.8': 'Benefícios econômicos: €230 milhões anuais em benefícios de saúde',

    '9.3': { 'PT': '9.3 Modelo Alemão - Incentivos Robustos', 'EN': '9.3 German Model - Robust Incentives' },
    '9.3.1': 'Subsídios governamentais: Até €2.500 de incentivo por e-bike',
    '9.3.2': 'Programas corporativos: Bike leasing para funcionários',
    '9.3.3': 'Infraestrutura em expansão: Investimento de €1,46 bilhão em ciclovias',
    '9.3.4': 'Regulamentação clara: Leis específicas para e-bikes',
    '9.3.5': 'Integração com transporte: E-bikes permitidas em trens',
    '9.3.6': 'Crescimento exponencial: Vendas de e-bikes cresceram 43% em 2020',
    '9.3.7': 'Impacto ambiental: Redução de 16,2 milhões de toneladas de CO₂',
    '9.3.8': 'Benefícios econômicos: €16 bilhões em benefícios anuais',

    '9.4': { 'PT': '9.4 Experiência Norte-Americana', 'EN': '9.4 North American Experience' },
    '9.4.1': 'Portland, Oregon: 385 milhas de infraestrutura ciclística',
    '9.4.2': 'San Francisco: Programa de bike-share com 7.000 bicicletas',
    '9.4.3': 'Nova York: Citi Bike com mais de 20.000 bicicletas',
    '9.4.4': 'Incentivos fiscais: Créditos tributários para compra de e-bikes',
    '9.4.5': 'Programas corporativos: Empresas oferecendo e-bikes para funcionários',
    '9.4.6': 'Crescimento do mercado: Vendas de e-bikes cresceram 145% em 2020',
    '9.4.7': 'Impacto na saúde: Redução de $50 bilhões em custos de saúde',
    '9.4.8': 'Benefícios ambientais: Redução de 24 milhões de toneladas de CO₂',

    '9.5': { 'PT': '9.5 Casos Emergentes - Ásia', 'EN': '9.5 Emerging Cases - Asia' },
    '9.5.1': 'China: Maior mercado mundial com 25 milhões de e-bikes vendidas anualmente',
    '9.5.2': 'Japão: Integração com transporte público e estacionamentos inteligentes',
    '9.5.3': 'Singapura: Sistema de bike-sharing inteligente com 15.000 bicicletas',
    '9.5.4': 'Coreia do Sul: Investimento de $1,4 bilhão em infraestrutura',
    '9.5.5': 'Taiwan: Líder em manufatura de e-bikes de alta qualidade',
    '9.5.6': 'Tailândia: Programas de turismo sustentável com e-bikes',
    '9.5.7': 'Indonésia: Iniciativas de mobilidade urbana sustentável',

    // SEÇÃO 10: POTENCIAL TRANSFORMADOR NO BRASIL
    '10.0': { 'PT': '10. POTENCIAL TRANSFORMADOR NO BRASIL', 'EN': '10. TRANSFORMATIVE POTENTIAL IN BRAZIL' },
    '10.1': { 'PT': '10.1 Características Favoráveis do Mercado Brasileiro', 'EN': '10.1 Favorable Characteristics of the Brazilian Market' },
    '10.1.1': 'População urbana massiva: 85% da população vive em áreas urbanas',
    '10.1.2': 'Necessidade urgente de mobilidade: Crise de mobilidade urbana nas grandes cidades',
    '10.1.3': 'Clima favorável: Condições climáticas adequadas para uso durante todo o ano',
    '10.1.4': 'Consciência ambiental crescente: Aumento da preocupação com sustentabilidade',
    '10.1.5': 'Mercado interno robusto: 215 milhões de habitantes como mercado potencial',
    '10.1.6': 'Diversidade geográfica: Diferentes tipos de terreno e necessidades',
    '10.1.7': 'Economia em crescimento: Potencial de investimento e desenvolvimento',
    '10.1.8': 'Inovação tecnológica: Capacidade de desenvolvimento de soluções locais',

    '10.2': { 'PT': '10.2 Oportunidades de Mercado Específicas', 'EN': '10.2 Specific Market Opportunities' },
    '10.2.1': 'Delivery urbano: Revolução na logística de última milha',
    '10.2.2': 'Turismo ecológico: Desenvolvimento de rotas turísticas sustentáveis',
    '10.2.3': 'Transporte corporativo: Programas empresariais de mobilidade',
    '10.2.4': 'Integração com apps: Conexão com aplicativos de transporte existentes',
    '10.2.5': 'Mercado de retrofit: Conversão de bicicletas convencionais',
    '10.2.6': 'Serviços especializados: Manutenção, seguro e financiamento',
    '10.2.7': 'Exportação: Potencial de exportação para América Latina',
    '10.2.8': 'Inovação em baterias: Desenvolvimento de tecnologia nacional'
    
}; // FIM DO OBJETO CONTENT_DATA

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
    
    // 1. Preenche o Título principal
    let htmlContent = `<h1 class="main-title-header" id="main-title">${CONTENT_DATA['title'][lang]}</h1>`;
    
    // 2. Preenche os labels dos toggles
    document.querySelector('.toggle-label[for="color-toggle"]').textContent = CONTENT_DATA['label-color'][lang];
    document.querySelector('.toggle-label[for="lang-toggle"]').textContent = CONTENT_DATA['label-lang'][lang];

    // 3. CONSTRUÇÃO DO CORPO DO MANIFESTO (ESTRUTURA COMPLETA)
    htmlContent += `<div class="topic-section">`;
    
    // Loop principal (Seções 1 a 10)
    for (let i = 1; i <= 10; i++) {
        const majorKey = `${i}.0`;
        if (CONTENT_DATA[majorKey]) {
            htmlContent += `<h2 class="main-topic">${CONTENT_DATA[majorKey][lang]}</h2>`;
            
            // Loop de Subseções (Ex: 1.1, 1.2)
            let j = 1;
            while (CONTENT_DATA[`${i}.${j}`]) {
                const subKey = `${i}.${j}`;
                htmlContent += `<h3 class="sub-topic">${CONTENT_DATA[subKey][lang]}</h3>`;
                
                // Loop de Detalhes (Ex: 1.1.1, 1.1.2)
                let k = 1;
                while (CONTENT_DATA[`${subKey}.${k}`]) {
                    const detailKey = `${subKey}.${k}`;
                    // Adiciona o parágrafo de detalhe. O texto é o valor do objeto (string).
                    htmlContent += `<p class="detail">${CONTENT_DATA[detailKey][lang]}</p>`;
                    k++;
                }
                j++;
            }
        }
    }
    
    htmlContent += `</div>`;
    
    CONTENT_CONTAINER.innerHTML = htmlContent;
}

function toggleLanguage() {
    saveState('lang-mode', getLang());
    updateContent(); // Recarrega o conteúdo no novo idioma
}


// INICIALIZAÇÃO E CARGA DE ESTADO
document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGA O TEMA DE CORES
    const savedColor = loadState('color-theme');
    if (savedColor === 'alt') {
        COLOR_TOGGLE.checked = true;
        BODY_ELEMENT.classList.add('alt-theme');
    }
    
    // 2. CARREGA O MODO DE TRADUÇÃO
    const savedLang = loadState('lang-mode');
    if (savedLang === 'EN') {
        LANG_TOGGLE.checked = true;
    }
    
    // 3. ATUALIZA O CONTEÚDO INICIAL
    updateContent();
});
