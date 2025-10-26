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
    // SEÇÕES DE CONTEÚDO (CONTEÚDO COMPLETO AQUI)
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
    '1.4.5': { 'PT': 'Melhoria da composição corporal: Aumento da proporção músculo/gordura', 'EN': 'Improved body composition: Increased muscle/fat ratio' },
    '1.4.6': { 'PT': 'Regulação hormonal: Melhoria da sensibilidade à insulina e outros hormônios', 'EN': 'Hormonal regulation: Improved insulin sensitivity and other hormones' },
    '1.4.7': { 'PT': 'Controle do apetite: Regulação natural da fome e saciedade', 'EN': 'Appetite control: Natural regulation of hunger and satiety' },

    '1.5': { 'PT': '1.5 Melhoria Postural Abrangente', 'EN': '1.5 Comprehensive Postural Improvement' },
    '1.5.1': { 'PT': 'Fortalecimento da musculatura das costas: Desenvolvimento dos músculos paravertebrais', 'EN': 'Back muscle strengthening: Development of paravertebral muscles' },
    '1.5.2': { 'PT': 'Correção de desvios posturais: Alinhamento da coluna vertebral', 'EN': 'Correction of postural deviations: Spinal alignment' },
    '1.5.3': { 'PT': 'Redução de dores lombares: Alívio de tensões na região lombar', 'EN': 'Reduced lower back pain: Relief from lumbar tension' },
    '1.5.4': { 'PT': 'Melhoria da postura cervical: Correção da posição da cabeça e pescoço', 'EN': 'Improved cervical posture: Correction of head and neck position' },
    '1.5.5': { 'PT': 'Fortalecimento dos músculos profundos: Desenvolvimento da musculatura estabilizadora', 'EN': 'Strengthening deep muscles: Development of stabilizing musculature' },
    '1.5.6': { 'PT': 'Consciência corporal: Maior percepção da posição do corpo no espaço', 'EN': 'Body awareness: Greater perception of body position in space' },
    '1.5.7': { 'PT': 'Prevenção de lesões: Redução do risco de problemas posturais futuros', 'EN': 'Injury prevention: Reduced risk of future postural problems' },

    // SEÇÃO 2: BENEFÍCIOS MENTAIS E NEUROLÓGICOS
    '2.0': { 'PT': '2. BENEFÍCIOS MENTAIS E NEUROLÓGICOS', 'EN': '2. MENTAL AND NEUROLOGICAL BENEFITS' },
    '2.1': { 'PT': '2.1 Redução Abrangente do Estresse', 'EN': '2.1 Comprehensive Stress Reduction' },
    '2.1.1': { 'PT': 'Diminuição do cortisol: Redução significativa dos níveis do hormônio do estresse', 'EN': 'Decreased cortisol: Significant reduction in stress hormone levels' },
    '2.1.2': { 'PT': 'Liberação de endorfinas: Produção natural de substâncias que promovem bem-estar', 'EN': 'Endorphin release: Natural production of substances that promote well-being' },
    '2.1.3': { 'PT': 'Efeito meditativo: Concentração na atividade que promove relaxamento mental', 'EN': 'Meditative effect: Concentration on activity that promotes mental relaxation' },
    '2.1.4': { 'PT': 'Conexão com a natureza: Benefícios psicológicos do contato com o ambiente externo', 'EN': 'Connection with nature: Psychological benefits of contact with the external environment' },
    '2.1.5': { 'PT': 'Quebra da rotina: Mudança de ambiente que alivia tensões do cotidiano', 'EN': 'Routine break: Change of environment that alleviates daily tensions' },
    '2.1.6': { 'PT': 'Tempo pessoal: Momentos de introspecção e reflexão durante o trajeto', 'EN': 'Personal time: Moments of introspection and reflection during the journey' },
    '2.1.7': { 'PT': 'Redução da ansiedade: Diminuição dos níveis de ansiedade e preocupação', 'EN': 'Reduced anxiety: Decrease in anxiety and worry levels' },

    '2.2': { 'PT': '2.2 Otimização da Qualidade do Sono', 'EN': '2.2 Sleep Quality Optimization' },
    '2.2.1': { 'PT': 'Regulação circadiana: Sincronização do relógio biológico através da exposição à luz natural', 'EN': 'Circadian regulation: Synchronization of the biological clock through natural light exposure' },
    '2.2.2': { 'PT': 'Fadiga física saudável: Cansaço natural que facilita o adormecer', 'EN': 'Healthy physical fatigue: Natural tiredness that facilitates falling asleep' },
    '2.2.3': { 'PT': 'Redução da insônia: Melhoria significativa na capacidade de iniciar o sono', 'EN': 'Reduced insomnia: Significant improvement in the ability to initiate sleep' },
    '2.2.4': { 'PT': 'Sono mais profundo: Aumento das fases de sono reparador', 'EN': 'Deeper sleep: Increase in restorative sleep phases' },
    '2.2.5': { 'PT': 'Redução de despertares noturnos: Sono mais contínuo e reparador', 'EN': 'Reduced nighttime awakenings: More continuous and restorative sleep' },
    '2.2.6': { 'PT': 'Melhoria da arquitetura do sono: Otimização dos ciclos de sono REM e não-REM', 'EN': 'Improved sleep architecture: Optimization of REM and non-REM sleep cycles' },
    '2.2.7': { 'PT': 'Recuperação mais eficiente: Melhor restauração física e mental durante o descanso', 'EN': 'More efficient recovery: Better physical and mental restoration during rest' },

    '2.3': { 'PT': '2.3 Aumento da Energia e Vitalidade', 'EN': '2.3 Increased Energy and Vitality' },
    '2.3.1': { 'PT': 'Melhoria da capacidade energética: Aumento da energia disponível para atividades diárias', 'EN': 'Improved energy capacity: Increased energy available for daily activities' },
    '2.3.2': { 'PT': 'Combate à fadiga crônica: Redução da sensação de cansaço constante', 'EN': 'Combating chronic fatigue: Reduced sensation of constant tiredness' },
    '2.3.3': { 'PT': 'Melhoria do humor: Elevação do estado de ânimo e disposição geral', 'EN': 'Improved mood: Elevation of mood and general disposition' },
    '2.3.4': { 'PT': 'Aumento da motivação: Maior disposição para enfrentar desafios diários', 'EN': 'Increased motivation: Greater willingness to face daily challenges' },
    '2.3.5': { 'PT': 'Redução da letargia: Diminuição da sensação de preguiça e apatia', 'EN': 'Reduced lethargy: Decreased feeling of laziness and apathy' },
    '2.3.6': { 'PT': 'Melhoria da produtividade: Maior eficiência nas atividades profissionais e pessoais', 'EN': 'Improved productivity: Greater efficiency in professional and personal activities' },
    '2.3.7': { 'PT': 'Vitalidade prolongada: Manutenção da energia ao longo do dia', 'EN': 'Prolonged vitality: Maintenance of energy throughout the day' },

    '2.4': { 'PT': '2.4 Aprimoramento Cognitivo', 'EN': '2.4 Cognitive Enhancement' },
    '2.4.1': { 'PT': 'Melhoria da concentração: Aumento da capacidade de foco e atenção', 'EN': 'Improved concentration: Increased ability to focus and pay attention' },
    '2.4.2': { 'PT': 'Estimulação da neuroplasticidade: Promoção da formação de novas conexões neurais', 'EN': 'Stimulation of neuroplasticity: Promotion of new neural connections' },
    '2.4.3': { 'PT': 'Melhoria da memória: Fortalecimento tanto da memória de curto quanto de longo prazo', 'EN': 'Improved memory: Strengthening of both short-term and long-term memory' },
    '2.4.4': { 'PT': 'Aumento da criatividade: Estímulo do pensamento criativo e inovador', 'EN': 'Increased creativity: Stimulation of creative and innovative thinking' },
    '2.4.5': { 'PT': 'Melhoria da tomada de decisões: Aprimoramento da capacidade de julgamento', 'EN': 'Improved decision-making: Enhancement of judgment capacity' },
    '2.4.6': { 'PT': 'Redução do declínio cognitivo: Prevenção de problemas cognitivos relacionados à idade', 'EN': 'Reduced cognitive decline: Prevention of age-related cognitive problems' },
    '2.4.7': { 'PT': 'Melhoria da função executiva: Aprimoramento do planejamento e organização mental', 'EN': 'Improved executive function: Enhancement of mental planning and organization' },

    '2.5': { 'PT': '2.5 Bem-estar Psicológico e Emocional', 'EN': '2.5 Psychological and Emotional Well-being' },
    '2.5.1': { 'PT': 'Sensação de liberdade: Autonomia e independência na mobilidade', 'EN': 'Feeling of freedom: Autonomy and independence in mobility' },
    '2.5.2': { 'PT': 'Aumento da autoestima: Melhoria da percepção sobre si mesmo', 'EN': 'Increased self-esteem: Improvement in self-perception' },
    '2.5.3': { 'PT': 'Redução da depressão: Efeito antidepressivo natural do exercício', 'EN': 'Reduced depression: Natural antidepressant effect of exercise' },
    '2.5.4': { 'PT': 'Melhoria da regulação emocional: Maior capacidade de lidar com emoções', 'EN': 'Improved emotional regulation: Greater ability to cope with emotions' },
    '2.5.5': { 'PT': 'Sensação de conquista: Satisfação pessoal ao atingir objetivos de mobilidade', 'EN': 'Feeling of achievement: Personal satisfaction upon reaching mobility goals' },
    '2.5.6': { 'PT': 'Conexão social: Oportunidades de interação e relacionamento', 'EN': 'Social connection: Opportunities for interaction and relationships' },
    '2.5.7': { 'PT': 'Mindfulness natural: Estado de atenção plena durante o uso', 'EN': 'Natural mindfulness: State of full attention during use' },

    // SEÇÃO 3: BENEFÍCIOS PRÁTICOS E ECONÔMICOS
    '3.0': { 'PT': '3. BENEFÍCIOS PRÁTICOS E ECONÔMICOS', 'EN': '3. PRACTICAL AND ECONOMIC BENEFITS' },
    '3.1': { 'PT': '3.1 Economia Financeira Substancial', 'EN': '3.1 Substantial Financial Savings' },
    '3.1.1': { 'PT': 'Redução de custos de combustível: Economia mensal significativa em gasolina ou etanol', 'EN': 'Reduced fuel costs: Significant monthly savings on gasoline or ethanol' },
    '3.1.2': { 'PT': 'Diminuição de gastos com manutenção automotiva: Redução de custos com revisões, pneus e peças', 'EN': 'Reduced automotive maintenance costs: Lower costs for inspections, tires, and parts' },
    '3.1.3': { 'PT': 'Economia em transporte público: Menor dependência de ônibus, metrô e aplicativos', 'EN': 'Public transport savings: Less dependence on buses, subways, and apps' },
    '3.1.4': { 'PT': 'Redução de multas de trânsito: Menor exposição a infrações de trânsito', 'EN': 'Reduced traffic fines: Less exposure to traffic violations' },
    '3.1.5': { 'PT': 'Economia em estacionamento: Redução ou eliminação de gastos com estacionamento', 'EN': 'Parking savings: Reduction or elimination of parking expenses' },
    '3.1.6': { 'PT': 'Menor depreciação veicular: Preservação do valor do veículo com menor uso', 'EN': 'Lower vehicle depreciation: Preservation of vehicle value with less use' },
    '3.1.7': { 'PT': 'Redução de seguros: Possibilidade de reduzir coberturas de seguro automotivo', 'EN': 'Insurance reduction: Possibility of reducing automotive insurance coverage' },
    '3.1.8': { 'PT': 'Economia em pedágios: Evitar custos de pedágios urbanos', 'EN': 'Toll savings: Avoiding urban toll costs' },
    '3.1.9': { 'PT': 'Redução de custos médicos: Menor gasto com saúde devido ao estilo de vida mais ativo', 'EN': 'Reduced medical costs: Lower health expenses due to a more active lifestyle' },

    '3.2': { 'PT': '3.2 Facilidade e Conveniência de Estacionamento', 'EN': '3.2 Parking Ease and Convenience' },
    '3.2.1': { 'PT': 'Estacionamento gratuito: Maioria dos locais oferece vagas gratuitas para bicicletas', 'EN': 'Free parking: Most places offer free spaces for bicycles' },
    '3.2.2': { 'PT': 'Menor espaço necessário: Ocupação mínima de espaço urbano', 'EN': 'Less space needed: Minimal occupation of urban space' },
    '3.2.3': { 'PT': 'Acesso a áreas restritas: Possibilidade de estacionar em locais vedados a veículos', 'EN': 'Access to restricted areas: Possibility of parking in places closed to vehicles' },
    '3.2.4': { 'PT': 'Estacionamento próximo ao destino: Maior proximidade ao local de destino', 'EN': 'Parking close to destination: Greater proximity to the destination' },
    '3.2.5': { 'PT': 'Segurança no estacionamento: Menor risco de furtos comparado a veículos', 'EN': 'Parking security: Lower risk of theft compared to vehicles' },
    '3.2.6': { 'PT': 'Flexibilidade de horários: Sem restrições de horário para estacionamento', 'EN': 'Flexible hours: No time restrictions for parking' },
    '3.2.7': { 'PT': 'Estacionamento em casa: Facilidade de guardar em residências', 'EN': 'Parking at home: Ease of storage in residences' },
    '3.2.8': { 'PT': 'Bicicletários corporativos: Crescente disponibilidade em empresas', 'EN': 'Corporate bike racks: Increasing availability in companies' },

    '3.3': { 'PT': '3.3 Flexibilidade Máxima de Rotas', 'EN': '3.3 Maximum Route Flexibility' },
    '3.3.1': { 'PT': 'Acesso a ciclovias exclusivas: Utilização de infraestrutura dedicada', 'EN': 'Access to exclusive cycle paths: Use of dedicated infrastructure' },
    '3.3.2': { 'PT': 'Trajetos alternativos: Possibilidade de rotas não disponíveis para veículos', 'EN': 'Alternative routes: Possibility of routes not available for vehicles' },
    '3.3.3': { 'PT': 'Navegação em áreas congestionadas: Capacidade de atravessar trânsito parado', 'EN': 'Navigation in congested areas: Ability to cross stopped traffic' },
    '3.3.4': { 'PT': 'Acesso a parques e áreas verdes: Utilização de espaços recreativos como rota', 'EN': 'Access to parks and green areas: Use of recreational spaces as a route' },
    '3.3.5': { 'PT': 'Rotas mais diretas: Possibilidade de trajetos em linha reta', 'EN': 'More direct routes: Possibility of straight-line paths' },
    '3.3.6': { 'PT': 'Flexibilidade de horários: Independência de horários de transporte público', 'EN': 'Flexible hours: Independence from public transport schedules' },
    '3.3.7': { 'PT': 'Adaptação a condições de trânsito: Capacidade de mudar rotas instantaneamente', 'EN': 'Adaptation to traffic conditions: Ability to instantly change routes' },
    '3.3.8': { 'PT': 'Exploração urbana: Descoberta de novos caminhos e locais', 'EN': 'Urban exploration: Discovery of new paths and locations' },

    '3.4': { 'PT': '3.4 Otimização Temporal Significativa', 'EN': '3.4 Significant Time Optimization' },
    '3.4.1': { 'PT': 'Redução do tempo em congestionamentos: Evitar engarrafamentos urbanos', 'EN': 'Reduced time in traffic jams: Avoiding urban gridlock' },
    '3.4.2': { 'PT': 'Trajetos mais eficientes: Rotas otimizadas para bicicletas', 'EN': 'More efficient routes: Optimized routes for bicycles' },
    '3.4.3': { 'PT': 'Previsibilidade no tempo de deslocamento: Maior controle sobre o tempo de viagem', 'EN': 'Predictability in travel time: Greater control over travel time' },
    '3.4.4': { 'PT': 'Eliminação de tempo de espera: Sem dependência de horários de transporte público', 'EN': 'Elimination of waiting time: No dependence on public transport schedules' },
    '3.4.5': { 'PT': 'Multitarefa durante o trajeto: Possibilidade de exercitar-se enquanto se desloca', 'EN': 'Multitasking during the journey: Possibility of exercising while commuting' },
    '3.4.6': { 'PT': 'Redução do tempo de estacionamento: Processo mais rápido de estacionar', 'EN': 'Reduced parking time: Faster parking process' },
    '3.4.7': { 'PT': 'Flexibilidade de partida: Liberdade para sair a qualquer momento', 'EN': 'Flexible departure: Freedom to leave at any time' },
    '3.4.8': { 'PT': 'Tempo de qualidade: Transformação do tempo de deslocamento em momento prazeroso', 'EN': 'Quality time: Transformation of commuting time into a pleasurable moment' },

    '3.5': { 'PT': '3.5 Integração Multimodal Avançada', 'EN': '3.5 Advanced Multimodal Integration' },
    '3.5.1': { 'PT': 'Combinação com transporte público: Facilidade de transporte em trens e ônibus', 'EN': 'Combination with public transport: Ease of transport on trains and buses' },
    '3.5.2': { 'PT': 'Solução para "primeira e última milha": Complemento perfeito ao transporte público', 'EN': 'First and last mile solution: Perfect complement to public transport' },
    '3.5.3': { 'PT': 'Integração com aplicativos: Conexão com sistemas de navegação e transporte', 'EN': 'Integration with apps: Connection with navigation and transport systems' },
    '3.5.4': { 'PT': 'Flexibilidade modal: Possibilidade de combinar diferentes meios de transporte', 'EN': 'Modal flexibility: Possibility of combining different means of transport' },
    '3.5.5': { 'PT': 'Redução da dependência automotiva: Diminuição da necessidade de veículo próprio', 'EN': 'Reduced automotive dependence: Decreased need for a private vehicle' },
    '3.5.6': { 'PT': 'Acesso a diferentes modais: Facilidade de transição entre diferentes transportes', 'EN': 'Access to different modes: Ease of transition between different transport options' },
    '3.5.7': { 'PT': 'Otimização de viagens longas: Complemento eficiente para viagens intermunicipais', 'EN': 'Optimization of long trips: Efficient complement for intercity travel' },

    // SEÇÃO 4: BENEFÍCIOS SOCIAIS E COMUNITÁRIOS
    '4.0': { 'PT': '4. BENEFÍCIOS SOCIAIS E COMUNITÁRIOS', 'EN': '4. SOCIAL AND COMMUNITY BENEFITS' },
    '4.1': { 'PT': '4.1 Networking e Construção de Relacionamentos', 'EN': '4.1 Networking and Relationship Building' },
    '4.1.1': { 'PT': 'Comunidades ciclísticas: Participação em grupos organizados de ciclistas', 'EN': 'Cycling communities: Participation in organized groups of cyclists' },
    '4.1.2': { 'PT': 'Eventos e encontros: Participação em passeios, competições e eventos sociais', 'EN': 'Events and gatherings: Participation in rides, competitions, and social events' },
    '4.1.3': { 'PT': 'Networking profissional: Oportunidades de conhecer pessoas de diferentes áreas', 'EN': 'Professional networking: Opportunities to meet people from different areas' },
    '4.1.4': { 'PT': 'Relacionamentos duradouros: Formação de amizades baseadas em interesses comuns', 'EN': 'Lasting relationships: Forming friendships based on common interests' },
    '4.1.5': { 'PT': 'Mentoria e aprendizado: Troca de experiências com ciclistas mais experientes', 'EN': 'Mentorship and learning: Exchange of experiences with more experienced cyclists' },
    '4.1.6': { 'PT': 'Diversidade social: Interação com pessoas de diferentes classes sociais e idades', 'EN': 'Social diversity: Interaction with people from different social classes and ages' },
    '4.1.7': { 'PT': 'Conexões internacionais: Participação em comunidades globais de ciclistas', 'EN': 'International connections: Participation in global cycling communities' },

    '4.2': { 'PT': '4.2 Fortalecimento do Tecido Social', 'EN': '4.2 Strengthening the Social Fabric' },
    '4.2.1': { 'PT': 'Senso de comunidade: Fortalecimento dos laços comunitários locais', 'EN': 'Sense of community: Strengthening local community ties' },
    '4.2.2': { 'PT': 'Engajamento cívico: Maior participação em questões urbanas e de mobilidade', 'EN': 'Civic engagement: Greater participation in urban and mobility issues' },
    '4.2.3': { 'PT': 'Solidariedade entre ciclistas: Cultura de ajuda mútua e cooperação', 'EN': 'Solidarity among cyclists: Culture of mutual help and cooperation' },
    '4.2.4': { 'PT': 'Ativismo urbano: Participação em movimentos por melhores condições de mobilidade', 'EN': 'Urban activism: Participation in movements for better mobility conditions' },
    '4.2.5': { 'PT': 'Educação comunitária: Compartilhamento de conhecimentos sobre mobilidade sustentável', 'EN': 'Community education: Sharing knowledge about sustainable mobility' },
    '4.2.6': { 'PT': 'Inclusão de minorias: Democratização do acesso à mobilidade urbana', 'EN': 'Inclusion of minorities: Democratization of access to urban mobility' },
    '4.2.7': { 'PT': 'Revitalização de bairros: Contribuição para o desenvolvimento de comunidades locais', 'EN': 'Neighborhood revitalization: Contribution to the development of local communities' },

    '4.3': { 'PT': '4.3 Impacto no Ambiente Corporativo', 'EN': '4.3 Impact on the Corporate Environment' },
    '4.3.1': { 'PT': 'Melhoria do clima organizacional: Funcionários mais dispostos e saudáveis', 'EN': 'Improved organizational climate: More willing and healthy employees' },
    '4.3.2': { 'PT': 'Redução do absenteísmo: Menor número de faltas por questões de saúde', 'EN': 'Reduced absenteeism: Fewer absences due to health issues' },
    '4.3.3': { 'PT': 'Aumento da produtividade: Funcionários mais energizados e focados', 'EN': 'Increased productivity: More energized and focused employees' },
    '4.3.4': { 'PT': 'Fortalecimento de equipes: Atividades conjuntas que promovem união', 'EN': 'Team strengthening: Joint activities that promote unity' },
    '4.3.5': { 'PT': 'Imagem corporativa: Melhoria da reputação da empresa em sustentabilidade', 'EN': 'Corporate image: Improved company reputation in sustainability' },
    '4.3.6': { 'PT': 'Redução de custos: Menor necessidade de vagas de estacionamento', 'EN': 'Reduced costs: Lower need for parking spaces' },
    '4.3.7': { 'PT': 'Atração de talentos: Diferencial competitivo na atração de profissionais', 'EN': 'Talent attraction: Competitive differential in attracting professionals' },
    '4.3.8': { 'PT': 'Programas de bem-estar: Integração com iniciativas de saúde corporativa', 'EN': 'Wellness programs: Integration with corporate health initiatives' },

    '4.4': { 'PT': '4.4 Inclusão Social Ampliada', 'EN': '4.4 Expanded Social Inclusion' },
    '4.4.1': { 'PT': 'Democratização da mobilidade: Acesso à mobilidade independente da renda', 'EN': 'Democratization of mobility: Access to mobility regardless of income' },
    '4.4.2': { 'PT': 'Inclusão de pessoas com limitações: Adaptação para diferentes necessidades físicas', 'EN': 'Inclusion of people with limitations: Adaptation for different physical needs' },
    '4.4.3': { 'PT': 'Redução de barreiras socioeconômicas: Mobilidade acessível para diferentes classes sociais', 'EN': 'Reduced socioeconomic barriers: Accessible mobility for different social classes' },
    '4.4.4': { 'PT': 'Empoderamento feminino: Maior autonomia e segurança para mulheres', 'EN': 'Female empowerment: Greater autonomy and safety for women' },
    '4.4.5': { 'PT': 'Inclusão de idosos: Mobilidade assistida para pessoas da terceira idade', 'EN': 'Inclusion of the elderly: Assisted mobility for seniors' },
    '4.4.6': { 'PT': 'Acessibilidade urbana: Melhoria do acesso a diferentes áreas da cidade', 'EN': 'Urban accessibility: Improved access to different areas of the city' },
    '4.4.7': { 'PT': 'Oportunidades de emprego: Criação de novos postos de trabalho no setor', 'EN': 'Employment opportunities: Creation of new jobs in the sector' },

    // SEÇÃO 5: BENEFÍCIOS AMBIENTAIS E SUSTENTABILIDADE
    '5.0': { 'PT': '5. BENEFÍCIOS AMBIENTAIS E SUSTENTABILIDADE', 'EN': '5. ENVIRONMENTAL AND SUSTAINABILITY BENEFITS' },
    '5.1': { 'PT': '5.1 Redução Significativa da Pegada de Carbono', 'EN': '5.1 Significant Carbon Footprint Reduction' },
    '5.1.1': { 'PT': 'Emissões zero durante o uso: Transporte completamente limpo durante a operação', 'EN': 'Zero emissions during use: Completely clean transport during operation' },
    '5.1.2': { 'PT': 'Redução das emissões de CO₂: Contribuição significativa para metas climáticas', 'EN': 'Reduction of CO₂ emissions: Significant contribution to climate goals' },
    '5.1.3': { 'PT': 'Compensação de emissões: Cada e-bike substitui múltiplas viagens de carro', 'EN': 'Emissions offset: Each e-bike replaces multiple car trips' },
    '5.1.4': { 'PT': 'Impacto cumulativo: Efeito multiplicador quando adotado em escala', 'EN': 'Cumulative impact: Multiplier effect when adopted at scale' },
    '5.1.5': { 'PT': 'Pegada de carbono do ciclo de vida: Impacto ambiental muito menor que veículos convencionais', 'EN': 'Lifecycle carbon footprint: Much smaller environmental impact than conventional vehicles' },
    '5.1.6': { 'PT': 'Contribuição para metas climáticas: Alinhamento com objetivos de redução de emissões', 'EN': 'Contribution to climate goals: Alignment with emission reduction objectives' },
    '5.1.7': { 'PT': 'Qualidade do ar urbano: Melhoria significativa da qualidade do ar nas cidades', 'EN': 'Urban air quality: Significant improvement in air quality in cities' },

    '5.2': { 'PT': '5.2 Redução da Poluição Sonora', 'EN': '5.2 Noise Pollution Reduction' },
    '5.2.1': { 'PT': 'Transporte silencioso: Operação praticamente sem ruído', 'EN': 'Silent transport: Operation practically without noise' },
    '5.2.2': { 'PT': 'Melhoria da qualidade de vida urbana: Redução do estresse acústico', 'EN': 'Improved urban quality of life: Reduced acoustic stress' },
    '5.2.3': { 'PT': 'Preservação da fauna urbana: Menor impacto na vida selvagem urbana', 'EN': 'Preservation of urban fauna: Less impact on urban wildlife' },
    '5.2.4': { 'PT': 'Ambientes mais tranquilos: Contribuição para cidades mais silenciosas', 'EN': 'Quieter environments: Contribution to quieter cities' },
    '5.2.5': { 'PT': 'Redução da poluição sonora noturna: Menor impacto durante períodos de descanso', 'EN': 'Reduced nocturnal noise pollution: Less impact during rest periods' },
    '5.2.6': { 'PT': 'Melhoria da saúde auditiva: Redução da exposição a ruídos excessivos', 'EN': 'Improved auditory health: Reduced exposure to excessive noise' },
    '5.2.7': { 'PT': 'Preservação de áreas sensíveis: Menor impacto em hospitais, escolas e residências', 'EN': 'Preservation of sensitive areas: Less impact on hospitals, schools, and residences' },

    '5.3': { 'PT': '5.3 Contribuição para Cidades Mais Sustentáveis', 'EN': '5.3 Contribution to More Sustainable Cities' },
    '5.3.1': { 'PT': 'Redução da pressão sobre infraestrutura viária: Menor necessidade de expansão rodoviária', 'EN': 'Reduced pressure on road infrastructure: Less need for road expansion' },
    '5.3.2': { 'PT': 'Promoção de espaços verdes: Incentivo ao desenvolvimento de áreas verdes urbanas', 'EN': 'Promotion of green spaces: Encouragement for the development of urban green areas' },
    '5.3.3': { 'PT': 'Melhoria da qualidade urbana: Contribuição para cidades mais habitáveis', 'EN': 'Improved urban quality: Contribution to more livable cities' },
    '5.3.4': { 'PT': 'Redução do efeito ilha de calor: Menor geração de calor urbano', 'EN': 'Reduced heat island effect: Less urban heat generation' },
    '5.3.5': { 'PT': 'Preservação de recursos naturais: Menor consumo de combustíveis fósseis', 'EN': 'Natural resource preservation: Lower consumption of fossil fuels' },
    '5.3.6': { 'PT': 'Desenvolvimento urbano sustentável: Modelo de crescimento urbano responsável', 'EN': 'Sustainable urban development: Responsible urban growth model' },
    '5.3.7': { 'PT': 'Biodiversidade urbana: Menor impacto na fauna e flora urbanas', 'EN': 'Urban biodiversity: Less impact on urban fauna and flora' },

    '5.4': { 'PT': '5.4 Liderança em Sustentabilidade', 'EN': '5.4 Sustainability Leadership' },
    '5.4.1': { 'PT': 'Exemplo de comportamento sustentável: Modelo para outros cidadãos', 'EN': 'Example of sustainable behavior: Model for other citizens' },
    '5.4.2': { 'PT': 'Educação ambiental prática: Conscientização através do exemplo', 'EN': 'Practical environmental education: Awareness through example' },
    '5.4.3': { 'PT': 'Influência social: Inspiração para mudanças comportamentais', 'EN': 'Social influence: Inspiration for behavioral changes' },
    '5.4.4': { 'PT': 'Responsabilidade ambiental: Demonstração de compromisso com o meio ambiente', 'EN': 'Environmental responsibility: Demonstration of commitment to the environment' },
    '5.4.5': { 'PT': 'Inovação sustentável: Adoção de tecnologias limpas', 'EN': 'Sustainable innovation: Adoption of clean technologies' },
    '5.4.6': { 'PT': 'Cultura de sustentabilidade: Promoção de valores ambientais', 'EN': 'Culture of sustainability: Promotion of environmental values' },
    '5.4.7': { 'PT': 'Legado para futuras gerações: Contribuição para um futuro mais sustentável', 'EN': 'Legacy for future generations: Contribution to a more sustainable future' },

    // SEÇÃO 6: BENEFÍCIOS TECNOLÓGICOS E INOVAÇÃO
    '6.0': { 'PT': '6. BENEFÍCIOS TECNOLÓGICOS E INOVAÇÃO', 'EN': '6. TECHNOLOGICAL BENEFITS AND INNOVATION' },
    '6.1': { 'PT': '6.1 Conectividade e Integração Digital', 'EN': '6.1 Connectivity and Digital Integration' },
    '6.1.1': { 'PT': 'Aplicativos de navegação: GPS especializado para ciclistas', 'EN': 'Navigation apps: GPS specialized for cyclists' },
    '6.1.2': { 'PT': 'Monitoramento de performance: Acompanhamento de métricas de saúde e performance', 'EN': 'Performance monitoring: Tracking health and performance metrics' },
    '6.1.3': { 'PT': 'Conectividade IoT: Integração com dispositivos inteligentes', 'EN': 'IoT connectivity: Integration with smart devices' },
    '6.1.4': { 'PT': 'Sistemas de segurança: Alertas e rastreamento em tempo real', 'EN': 'Security systems: Real-time alerts and tracking' },
    '6.1.5': { 'PT': 'Manutenção preditiva: Monitoramento do estado da bicicleta', 'EN': 'Predictive maintenance: Monitoring the bicycle\'s condition' },
    '6.1.6': { 'PT': 'Integração com smart cities: Conexão com sistemas urbanos inteligentes', 'EN': 'Integration with smart cities: Connection with intelligent urban systems' },
    '6.1.7': { 'PT': 'Personalização da experiência: Adaptação às preferências individuais', 'EN': 'Experience personalization: Adaptation to individual preferences' },

    '6.2': { 'PT': '6.2 Monitoramento de Saúde Avançado', 'EN': '6.2 Advanced Health Monitoring' },
    '6.2.1': { 'PT': 'Frequência cardíaca em tempo real: Monitoramento contínuo durante o exercício', 'EN': 'Real-time heart rate: Continuous monitoring during exercise' },
    '6.2.2': { 'PT': 'Análise de performance: Métricas detalhadas de desempenho físico', 'EN': 'Performance analysis: Detailed physical performance metrics' },
    '6.2.3': { 'PT': 'Histórico de atividades: Acompanhamento de progresso ao longo do tempo', 'EN': 'Activity history: Tracking progress over time' },
    '6.2.4': { 'PT': 'Alertas de saúde: Notificações sobre limites de esforço', 'EN': 'Health alerts: Notifications about effort limits' },
    '6.2.5': { 'PT': 'Integração com wearables: Conexão com dispositivos de monitoramento', 'EN': 'Integration with wearables: Connection with monitoring devices' },
    '6.2.6': { 'PT': 'Análise de sono: Correlação entre atividade física e qualidade do sono', 'EN': 'Sleep analysis: Correlation between physical activity and sleep quality' },
    '6.2.7': { 'PT': 'Metas personalizadas: Objetivos adaptados ao perfil individual', 'EN': 'Personalized goals: Objectives adapted to the individual profile' },

    '6.3': { 'PT': '6.3 Navegação Inteligente e Otimizada', 'EN': '6.3 Intelligent and Optimized Navigation' },
    '6.3.1': { 'PT': 'Rotas otimizadas: Cálculo de trajetos mais eficientes para bicicletas', 'EN': 'Optimized routes: Calculation of more efficient paths for bicycles' },
    '6.3.2': { 'PT': 'Informações de trânsito: Dados em tempo real sobre condições de tráfego', 'EN': 'Traffic information: Real-time data on traffic conditions' },
    '6.3.3': { 'PT': 'Pontos de interesse: Localização de bicicletários, oficinas e pontos de recarga', 'EN': 'Points of interest: Location of bike racks, workshops, and charging stations' },
    '6.3.4': { 'PT': 'Condições climáticas: Informações meteorológicas para planejamento', 'EN': 'Weather conditions: Meteorological information for planning' },
    '6.3.5': { 'PT': 'Segurança de rotas: Avaliação de segurança de diferentes trajetos', 'EN': 'Route safety: Evaluation of safety of different routes' },
    '6.3.6': { 'PT': 'Comunidade colaborativa: Compartilhamento de informações entre usuários', 'EN': 'Collaborative community: Sharing information among users' },
    '6.3.7': { 'PT': 'Realidade aumentada: Navegação com sobreposição de informações', 'EN': 'Augmented reality: Navigation with information overlay' },

    // SEÇÃO 7: BENEFÍCIOS ECONÔMICOS SETORIAIS
    '7.0': { 'PT': '7. BENEFÍCIOS ECONÔMICOS SETORIAIS', 'EN': '7. SECTORAL ECONOMIC BENEFITS' },
    '7.1': { 'PT': '7.1 Desenvolvimento da Indústria Nacional', 'EN': '7.1 National Industry Development' },
    '7.1.1': { 'PT': 'Criação de empregos: Geração de postos de trabalho em manufatura e serviços', 'EN': 'Job creation: Generation of jobs in manufacturing and services' },
    '7.1.2': { 'PT': 'Desenvolvimento tecnológico: Inovação em baterias, motores e componentes', 'EN': 'Technological development: Innovation in batteries, motors, and components' },
    '7.1.3': { 'PT': 'Cadeia produtiva: Fortalecimento de fornecedores e prestadores de serviços', 'EN': 'Production chain: Strengthening suppliers and service providers' },
    '7.1.4': { 'PT': 'Exportação: Potencial de exportação de produtos e tecnologia', 'EN': 'Export potential: Potential for exporting products and technology' },
    '7.1.5': { 'PT': 'Investimento em P&D: Desenvolvimento de pesquisa e desenvolvimento nacional', 'EN': 'Investment in R&D: Development of national research and development' },
    '7.1.6': { 'PT': 'Qualificação profissional: Formação de mão de obra especializada', 'EN': 'Professional qualification: Training of specialized labor' },
    '7.1.7': { 'PT': 'Competitividade industrial: Posicionamento do Brasil no mercado global', 'EN': 'Industrial competitiveness: Positioning Brazil in the global market' },

    '7.2': { 'PT': '7.2 Novos Modelos de Negócio', 'EN': '7.2 New Business Models' },
    '7.2.1': { 'PT': 'Bike-sharing elétrico: Sistemas de compartilhamento de bicicletas', 'EN': 'Electric bike-sharing: Bicycle sharing systems' },
    '7.2.2': { 'PT': 'Delivery sustentável: Logística urbana com menor impacto ambiental', 'EN': 'Sustainable delivery: Urban logistics with less environmental impact' },
    '7.2.3': { 'PT': 'Turismo ecológico: Desenvolvimento do turismo sustentável', 'EN': 'Ecological tourism: Development of sustainable tourism' },
    '7.2.4': { 'PT': 'Serviços especializados: Manutenção, customização e consultoria', 'EN': 'Specialized services: Maintenance, customization, and consulting' },
    '7.2.5': { 'PT': 'Seguros específicos: Produtos de seguro adaptados para e-bikes', 'EN': 'Specific insurance: Insurance products adapted for e-bikes' },
    '7.2.6': { 'PT': 'Financiamento: Linhas de crédito especializadas', 'EN': 'Financing: Specialized credit lines' },
    '7.2.7': { 'PT': 'Leasing corporativo: Aluguel de frotas para empresas', 'EN': 'Corporate leasing: Fleet rental for companies' },

    '7.3': { 'PT': '7.3 Impacto no Mercado Imobiliário', 'EN': '7.3 Impact on the Real Estate Market' },
    '7.3.1': { 'PT': 'Valorização de imóveis: Aumento do valor em áreas com boa infraestrutura ciclística', 'EN': 'Property valuation: Increased value in areas with good cycling infrastructure' },
    '7.3.2': { 'PT': 'Desenvolvimento urbano: Crescimento de bairros bike-friendly', 'EN': 'Urban development: Growth of bike-friendly neighborhoods' },
    '7.3.3': { 'PT': 'Novos empreendimentos: Projetos imobiliários com foco em mobilidade sustentável', 'EN': 'New developments: Real estate projects focused on sustainable mobility' },
    '7.3.4': { 'PT': 'Infraestrutura residencial: Bicicletários e estações de recarga em edifícios', 'EN': 'Residential infrastructure: Bike racks and charging stations in buildings' },
    '7.3.5': { 'PT': 'Planejamento urbano: Influência no desenvolvimento de novos bairros', 'EN': 'Urban planning: Influence on the development of new neighborhoods' },
    '7.3.6': { 'PT': 'Gentrificação verde: Transformação de áreas urbanas através da mobilidade sustentável', 'EN': 'Green gentrification: Transformation of urban areas through sustainable mobility' },
    '7.3.7': { 'PT': 'Investimentos em infraestrutura: Atração de investimentos em ciclovias e equipamentos', 'EN': 'Infrastructure investments: Attraction of investments in cycle paths and equipment' },

    // SEÇÃO 8: FATORES CRÍTICOS PARA ADOÇÃO EM ESCALA NACIONAL
    '8.0': { 'PT': '8. FATORES CRÍTICOS PARA ADOÇÃO EM ESCALA NACIONAL', 'EN': '8. CRITICAL FACTORS FOR NATIONAL SCALED ADOPTION' },
    '8.1': { 'PT': '8.1 Infraestrutura Ciclística Abrangente', 'EN': '8.1 Comprehensive Cycling Infrastructure' },
    '8.1.1': { 'PT': 'Rede integrada de ciclovias: Conexão entre diferentes regiões urbanas', 'EN': 'Integrated network of cycle paths: Connection between different urban regions' },
    '8.1.2': { 'PT': 'Segurança viária: Proteção adequada para ciclistas', 'EN': 'Road safety: Adequate protection for cyclists' },
    '8.1.3': { 'PT': 'Sinalização específica: Placas e sinais adaptados para bicicletas', 'EN': 'Specific signage: Signs adapted for bicycles' },
    '8.1.4': { 'PT': 'Iluminação adequada: Segurança para uso noturno', 'EN': 'Adequate lighting: Safety for night use' },
    '8.1.5': { 'PT': 'Manutenção regular: Conservação da infraestrutura existente', 'EN': 'Regular maintenance: Conservation of existing infrastructure' },
    '8.1.6': { 'PT': 'Integração com transporte público: Conexões eficientes entre modais', 'EN': 'Integration with public transport: Efficient connections between modes' },
    '8.1.7': { 'PT': 'Bicicletários seguros: Locais protegidos para estacionamento', 'EN': 'Secure bike racks: Protected locations for parking' },
    '8.1.8': { 'PT': 'Estações de recarga: Pontos de carregamento distribuídos pela cidade', 'EN': 'Charging stations: Charging points distributed throughout the city' },

    '8.2': { 'PT': '8.2 Políticas Públicas Integradas', 'EN': '8.2 Integrated Public Policies' },
    '8.2.1': { 'PT': 'Incentivos fiscais: Redução de impostos para aquisição', 'EN': 'Tax incentives: Reduction of taxes for acquisition' },
    '8.2.2': { 'PT': 'Subsídios governamentais: Programas de apoio à compra', 'EN': 'Government subsidies: Purchase support programs' },
    '8.2.3': { 'PT': 'Regulamentação favorável: Leis que facilitam o uso de e-bikes', 'EN': 'Favorable regulation: Laws that facilitate the use of e-bikes' },
    '8.2.4': { 'PT': 'Planejamento urbano: Inclusão da mobilidade ciclística no planejamento', 'EN': 'Urban planning: Inclusion of cycling mobility in planning' },
    '8.2.5': { 'PT': 'Educação no trânsito: Programas de conscientização para motoristas e ciclistas', 'EN': 'Traffic education: Awareness programs for drivers and cyclists' },
    '8.2.6': { 'PT': 'Parcerias público-privadas: Colaboração para desenvolvimento da infraestrutura', 'EN': 'Public-private partnerships: Collaboration for infrastructure development' },
    '8.2.7': { 'PT': 'Metas de mobilidade: Objetivos claros de redução de emissões', 'EN': 'Mobility goals: Clear objectives for emission reduction' },
    '8.2.8': { 'PT': 'Monitoramento e avaliação: Acompanhamento da efetividade das políticas', 'EN': 'Monitoring and evaluation: Tracking policy effectiveness' },

    '8.3': { 'PT': '8.3 Fatores Socioculturais', 'EN': '8.3 Sociocultural Factors' },
    '8.3.1': { 'PT': 'Mudança de mentalidade: Aceitação da bicicleta como meio de transporte legítimo', 'EN': 'Change of mindset: Acceptance of the bicycle as a legitimate means of transport' },
    '8.3.2': { 'PT': 'Educação ambiental: Conscientização sobre benefícios ambientais', 'EN': 'Environmental education: Awareness of environmental benefits' },
    '8.3.3': { 'PT': 'Influência de formadores de opinião: Apoio de personalidades e líderes', 'EN': 'Influence of opinion leaders: Support from personalities and leaders' },
    '8.3.4': { 'PT': 'Campanhas de conscientização: Programas de educação pública', 'EN': 'Awareness campaigns: Public education programs' },
    '8.3.5': { 'PT': 'Demonstração de benefícios: Evidências concretas das vantagens', 'EN': 'Demonstration of benefits: Concrete evidence of advantages' },
    '8.3.6': { 'PT': 'Superação de preconceitos: Quebra de estereótipos sobre ciclismo urbano', 'EN': 'Overcoming prejudices: Breaking stereotypes about urban cycling' },
    '8.3.7': { 'PT': 'Cultura de segurança: Desenvolvimento de comportamentos seguros no trânsito', 'EN': 'Culture of safety: Development of safe behaviors in traffic' },

    '8.4': { 'PT': '8.4 Aspectos Econômicos e Financeiros', 'EN': '8.4 Economic and Financial Aspects' },
    '8.4.1': { 'PT': 'Acessibilidade financeira: Preços compatíveis com a renda da população', 'EN': 'Financial accessibility: Prices compatible with population income' },
    '8.4.2': { 'PT': 'Linhas de financiamento: Crédito facilitado para aquisição', 'EN': 'Financing lines: Facilitated credit for acquisition' },
    '8.4.3': { 'PT': 'Custo-benefício demonstrado: Evidências claras de economia', 'EN': 'Demonstrated cost-benefit: Clear evidence of savings' },
    '8.4.4': { 'PT': 'Retorno sobre investimento: Cálculo do payback para usuários', 'EN': 'Return on investment: Payback calculation for users' },
    '8.4.5': { 'PT': 'Incentivos corporativos: Programas empresariais de incentivo', 'EN': 'Corporate incentives: Business incentive programs' },
    '8.4.6': { 'PT': 'Parcerias comerciais: Acordos com empresas para facilitar acesso', 'EN': 'Commercial partnerships: Agreements with companies to facilitate access' },
    '8.4.7': { 'PT': 'Mercado de usados: Desenvolvimento de mercado secundário', 'EN': 'Used market: Development of a secondary market' },

    // SEÇÃO 9: CASOS DE SUCESSO INTERNACIONAIS DETALHADOS
    '9.0': { 'PT': '9. CASOS DE SUCESSO INTERNACIONAIS DETALHADOS', 'EN': '9. DETAILED INTERNATIONAL SUCCESS CASES' },
    '9.1': { 'PT': '9.1 Modelo Holandês - Integração Total', 'EN': '9.1 Dutch Model - Total Integration' },
    '9.1.1': { 'PT': 'Infraestrutura exemplar: Mais de 35.000 km de ciclovias', 'EN': 'Exemplary infrastructure: More than 35,000 km of cycle paths' },
    '9.1.2': { 'PT': 'Cultura ciclística: 27% de todas as viagens são feitas de bicicleta', 'EN': 'Cycling culture: 27% of all trips are made by bicycle' },
    '9.1.3': { 'PT': 'Integração multimodal: Conexão perfeita com transporte público', 'EN': 'Multimodal integration: Perfect connection with public transport' },
    '9.1.4': { 'PT': 'Estacionamentos massivos: Grandes bicicletários em estações de trem', 'EN': 'Massive parking: Large bicycle parking facilities at train stations' },
    '9.1.5': { 'PT': 'Políticas de longo prazo: Investimento consistente por décadas', 'EN': 'Long-term policies: Consistent investment for decades' },
    '9.1.6': { 'PT': 'Educação desde cedo: Ensino de ciclismo nas escolas', 'EN': 'Education from an early age: Teaching cycling in schools' },
    '9.1.7': { 'PT': 'Tecnologia avançada: Semáforos inteligentes para ciclistas', 'EN': 'Advanced technology: Smart traffic lights for cyclists' },
    '9.1.8': { 'PT': 'Resultados mensuráveis: Redução significativa de emissões e acidentes', 'EN': 'Measurable results: Significant reduction in emissions and accidents' },

    '9.2': { 'PT': '9.2 Experiência Dinamarquesa - Copenhague', 'EN': '9.2 Danish Experience - Copenhagen' },
    '9.2.1': { 'PT': 'Objetivo ambicioso: Meta de ser carbono neutro até 2025', 'EN': 'Ambitious goal: Target to be carbon neutral by 2025' },
    '9.2.2': { 'PT': 'Investimento maciço: €150 milhões em infraestrutura ciclística', 'EN': 'Massive investment: €150 million in cycling infrastructure' },
    '9.2.3': { 'PT': 'Superhighways: Rodovias para bicicletas conectando subúrbios', 'EN': 'Superhighways: Bicycle highways connecting suburbs' },
    '9.2.4': { 'PT': 'Tecnologia inteligente: Semáforos sincronizados para ciclistas', 'EN': 'Smart technology: Synchronized traffic lights for cyclists' },
    '9.2.5': { 'PT': 'Monitoramento avançado: Contadores de tráfego de bicicletas', 'EN': 'Advanced monitoring: Bicycle traffic counters' },
    '9.2.6': { 'PT': 'Bike-sharing: Sistema público de compartilhamento', 'EN': 'Bike-sharing: Public sharing system' },
    '9.2.7': { 'PT': 'Resultados impressionantes: 62% dos habitantes usam bicicleta diariamente', 'EN': 'Impressive results: 62% of inhabitants use bicycles daily' },
    '9.2.8': { 'PT': 'Benefícios econômicos: €230 milhões anuais em benefícios de saúde', 'EN': 'Economic benefits: €230 million annually in health benefits' },

    '9.3': { 'PT': '9.3 Modelo Alemão - Incentivos Robustos', 'EN': '9.3 German Model - Robust Incentives' },
    '9.3.1': { 'PT': 'Subsídios governamentais: Até €2.500 de incentivo por e-bike', 'EN': 'Government subsidies: Up to €2,500 incentive per e-bike' },
    '9.3.2': { 'PT': 'Programas corporativos: Bike leasing para funcionários', 'EN': 'Corporate programs: Bike leasing for employees' },
    '9.3.3': { 'PT': 'Infraestrutura em expansão: Investimento de €1,46 bilhão em ciclovias', 'EN': 'Expanding infrastructure: Investment of €1.46 billion in cycle paths' },
    '9.3.4': { 'PT': 'Regulamentação clara: Leis específicas para e-bikes', 'EN': 'Clear regulation: Specific laws for e-bikes' },
    '9.3.5': { 'PT': 'Integração com transporte: E-bikes permitidas em trens', 'EN': 'Integration with transport: E-bikes allowed on trains' },
    '9.3.6': { 'PT': 'Crescimento exponencial: Vendas de e-bikes cresceram 43% em 2020', 'EN': 'Exponential growth: E-bike sales grew 43% in 2020' },
    '9.3.7': { 'PT': 'Impacto ambiental: Redução de 16,2 milhões de toneladas de CO₂', 'EN': 'Environmental impact: Reduction of 16.2 million tons of CO₂' },
    '9.3.8': { 'PT': 'Benefícios econômicos: €16 bilhões em benefícios anuais', 'EN': 'Economic benefits: €16 billion in annual benefits' },

    '9.4': { 'PT': '9.4 Experiência Norte-Americana', 'EN': '9.4 North American Experience' },
    '9.4.1': { 'PT': 'Portland, Oregon: 385 milhas de infraestrutura ciclística', 'EN': 'Portland, Oregon: 385 miles of cycling infrastructure' },
    '9.4.2': { 'PT': 'San Francisco: Programa de bike-share com 7.000 bicicletas', 'EN': 'San Francisco: Bike-share program with 7,000 bicycles' },
    '9.4.3': { 'PT': 'Nova York: Citi Bike com mais de 20.000 bicicletas', 'EN': 'New York: Citi Bike with over 20,000 bicycles' },
    '9.4.4': { 'PT': 'Incentivos fiscais: Créditos tributários para compra de e-bikes', 'EN': 'Tax incentives: Tax credits for e-bike purchase' },
    '9.4.5': { 'PT': 'Programas corporativos: Empresas oferecendo e-bikes para funcionários', 'EN': 'Corporate programs: Companies offering e-bikes to employees' },
    '9.4.6': { 'PT': 'Crescimento do mercado: Vendas de e-bikes cresceram 145% em 2020', 'EN': 'Market growth: E-bike sales grew 145% in 2020' },
    '9.4.7': { 'PT': 'Impacto na saúde: Redução de $50 bilhões em custos de saúde', 'EN': 'Health impact: Reduction of $50 billion in healthcare costs' },
    '9.4.8': { 'PT': 'Benefícios ambientais: Redução de 24 milhões de toneladas de CO₂', 'EN': 'Environmental benefits: Reduction of 24 million tons of CO₂' },

    '9.5': { 'PT': '9.5 Casos Emergentes - Ásia', 'EN': '9.5 Emerging Cases - Asia' },
    '9.5.1': { 'PT': 'China: Maior mercado mundial com 25 milhões de e-bikes vendidas anualmente', 'EN': 'China: World\'s largest market with 25 million e-bikes sold annually' },
    '9.5.2': { 'PT': 'Japão: Integração com transporte público e estacionamentos inteligentes', 'EN': 'Japan: Integration with public transport and smart parking' },
    '9.5.3': { 'PT': 'Singapura: Sistema de bike-sharing inteligente com 15.000 bicicletas', 'EN': 'Singapore: Smart bike-sharing system with 15,000 bicycles' },
    '9.5.4': { 'PT': 'Coreia do Sul: Investimento de $1,4 bilhão em infraestrutura', 'EN': 'South Korea: $1.4 billion investment in infrastructure' },
    '9.5.5': { 'PT': 'Taiwan: Líder em manufatura de e-bikes de alta qualidade', 'EN': 'Taiwan: Leader in manufacturing high-quality e-bikes' },
    '9.5.6': { 'PT': 'Tailândia: Programas de turismo sustentável com e-bikes', 'EN': 'Thailand: Sustainable tourism programs with e-bikes' },
    '9.5.7': { 'PT': 'Indonésia: Iniciativas de mobilidade urbana sustentável', 'EN': 'Indonesia: Sustainable urban mobility initiatives' },

    // SEÇÃO 10: POTENCIAL TRANSFORMADOR NO BRASIL
    '10.0': { 'PT': '10. POTENCIAL TRANSFORMADOR NO BRASIL', 'EN': '10. TRANSFORMATIVE POTENTIAL IN BRAZIL' },
    '10.1': { 'PT': '10.1 Características Favoráveis do Mercado Brasileiro', 'EN': '10.1 Favorable Characteristics of the Brazilian Market' },
    '10.1.1': { 'PT': 'População urbana massiva: 85% da população vive em áreas urbanas', 'EN': 'Massive urban population: 85% of the population lives in urban areas' },
    '10.1.2': { 'PT': 'Necessidade urgente de mobilidade: Crise de mobilidade urbana nas grandes cidades', 'EN': 'Urgent need for mobility: Urban mobility crisis in large cities' },
    '10.1.3': { 'PT': 'Clima favorável: Condições climáticas adequadas para uso durante todo o ano', 'EN': 'Favorable climate: Adequate weather conditions for year-round use' },
    '10.1.4': { 'PT': 'Consciência ambiental crescente: Aumento da preocupação com sustentabilidade', 'EN': 'Growing environmental awareness: Increased concern for sustainability' },
    '10.1.5': { 'PT': 'Mercado interno robusto: 215 milhões de habitantes como mercado potencial', 'EN': 'Robust internal market: 215 million inhabitants as potential market' },
    '10.1.6': { 'PT': 'Diversidade geográfica: Diferentes tipos de terreno e necessidades', 'EN': 'Geographic diversity: Different types of terrain and needs' },
    '10.1.7': { 'PT': 'Economia em crescimento: Potencial de investimento e desenvolvimento', 'EN': 'Growing economy: Potential for investment and development' },
    '10.1.8': { 'PT': 'Inovação tecnológica: Capacidade de desenvolvimento de soluções locais', 'EN': 'Technological innovation: Capacity for local solutions development' },

    '10.2': { 'PT': '10.2 Oportunidades de Mercado Específicas', 'EN': '10.2 Specific Market Opportunities' },
    '10.2.1': { 'PT': 'Delivery urbano: Revolução na logística de última milha', 'EN': 'Urban delivery: Revolution in last-mile logistics' },
    '10.2.2': { 'PT': 'Turismo ecológico: Desenvolvimento de rotas turísticas sustentáveis', 'EN': 'Ecological tourism: Development of sustainable tourist routes' },
    '10.2.3': { 'PT': 'Transporte corporativo: Programas empresariais de mobilidade', 'EN': 'Corporate transport: Business mobility programs' },
    '10.2.4': { 'PT': 'Integração com apps: Conexão com sistemas de navegação e transporte', 'EN': 'Integration with apps: Connection with navigation and transport systems' },
    '10.2.5': { 'PT': 'Mercado de retrofit: Conversão de bicicletas convencionais', 'EN': 'Retrofit market: Conversion of conventional bicycles' },
    '10.2.6': { 'PT': 'Serviços especializados: Manutenção, seguro e financiamento', 'EN': 'Specialized services: Maintenance, insurance, and financing' },
    '10.2.7': { 'PT': 'Exportação: Potencial de exportação para América Latina', 'EN': 'Export potential: Potential for export to Latin America' },
    '10.2.8': { 'PT': 'Inovação em baterias: Desenvolvimento de tecnologia nacional', 'EN': 'Innovation in batteries: Development of national technology' }
}; 

const BODY_ELEMENT = document.getElementById('site-body');
const COLOR_TOGGLE = document.getElementById('color-toggle');
const LANG_SWITCH_BTN = document.getElementById('lang-switch-btn'); 
const CONTENT_CONTAINER = document.getElementById('content-container');
const LAST_CONTENT_MARKER = document.getElementById('last-content-marker');

// ELEMENTOS ADICIONAIS
const SIGNATURE_COUNT_TITLE_ELEM = document.getElementById('signature-count-title');
const SIGNATURE_COUNT_ELEM = document.getElementById('signature-count');
const ABSTRACT_ELEM = document.getElementById('abstract-text');
const SIGN_MANIFESTO_BTN = document.getElementById('sign-manifesto-btn');

// VARIÁVEIS DO CONTADOR VIVO (ITEM 5)
let currentSignatures = 1202;
// 3 min (180000ms), 2 min (120000ms), 4 min (240000ms)
const signatureIntervals = [180000, 120000, 240000]; 
let intervalIndex = 0;


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
    // Aumenta o número de 1 a 5 para simular adesão
    const randomIncrease = Math.floor(Math.random() * 5) + 1; 
    currentSignatures += randomIncrease;
    updateSignatureCount();
    
    // Pega o intervalo atual e avança para o próximo índice (cíclico)
    const interval = signatureIntervals[intervalIndex];
    intervalIndex = (intervalIndex + 1) % signatureIntervals.length;
    
    // Configura o próximo ciclo
    setTimeout(runSignatureCycle, interval);
}

function handleSignManifesto() {
    // Simula a assinatura do usuário atual
    currentSignatures += 1;
    updateSignatureCount();
    
    // AÇÃO SEQUENCIAL SUGERIDA: Foco em Engajamento
    alert("Manifesto assinado! Sua voz foi adicionada à nossa crescente comunidade."); // Feedback imediato

    // Sugestão 1: Levar o usuário para o topo para continuar a leitura/interação
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// FUNÇÃO DE TRADUÇÃO E PREENCHIMENTO DE CONTEÚDO (CORREÇÃO DO BUG TELA BRANCA)
function updateContent() {
    const currentLang = getLang();
    const targetLang = (currentLang === 'PT' ? 'EN' : 'PT'); 
    
    // 1. Atualiza elementos estáticos
    document.getElementById('doc-title').textContent = CONTENT_DATA['title'][currentLang];
    document.getElementById('main-title').textContent = CONTENT_DATA['title'][currentLang];
    ABSTRACT_ELEM.textContent = CONTENT_DATA['abstract'][currentLang];
    document.querySelector('.toggle-label[for="color-toggle"]').textContent = CONTENT_DATA['label-color'][currentLang];
    SIGNATURE_COUNT_TITLE_ELEM.textContent = CONTENT_DATA['signature-title'][currentLang];
    SIGN_MANIFESTO_BTN.textContent = (currentLang === 'PT' ? 'Assinar Manifesto' : 'Sign Manifesto');
    
    // 2. Atualiza o texto do botão de tradução
    LANG_SWITCH_BTN.textContent = `(${targetLang})`;
    
    // 3. CONSTRUÇÃO DO CORPO DO MANIFESTO
    let htmlContent = '';
    
    // Loop principal (Seções 1 a 10)
    for (let i = 1; i <= 10; i++) {
        const majorKey = `${i}.0`;
        if (CONTENT_DATA[majorKey]) {
            htmlContent += `<div class="topic-section">`;
            htmlContent += `<h2 class="main-topic">${CONTENT_DATA[majorKey][currentLang]}</h2>`;
            
            // Loop de Subseções
            let j = 1;
            while (CONTENT_DATA[`${i}.${j}`]) {
                const subKey = `${i}.${j}`;
                htmlContent += `<h3 class="sub-topic">${CONTENT_DATA[subKey][currentLang]}</h3>`;
                
                // Loop de Detalhes
                let k = 1;
                while (CONTENT_DATA[`${subKey}.${k}`]) {
                    const detailKey = `${subKey}.${k}`;
                    const detailText = CONTENT_DATA[detailKey][currentLang] || '';
                    htmlContent += `<p class="detail">${detailText}</p>`;
                    k++;
                }
                j++;
            }
            htmlContent += `</div>`;
        }
    }
    
    // CORREÇÃO DO BUG: Substitui o conteúdo no content-container, mantendo os elementos iniciais (h1 e abstract)
    // O h1 e o abstract já foram atualizados no DOM no passo 1.
    // O innerHTML é usado para substituir apenas a parte dinâmica do conteúdo.
    // É crucial que o index.html tenha o container de conteúdo principal vazio (sem as seções 1-10)
    
    // Encontra o último elemento estático (abstract-text) para saber onde o manifesto deve começar
    const contentToReplace = document.getElementById('main-title').nextElementSibling.nextElementSibling; // Pula Abstract e Signature
    
    // Cria um novo container temporário para o manifesto (topic-section)
    const manifestoHTML = document.createElement('div');
    manifestoHTML.innerHTML = htmlContent;

    // Remove o conteúdo antigo dinâmico (topic-section) se existir
    const existingManifesto = CONTENT_CONTAINER.querySelector('.topic-section');
    if (existingManifesto) {
        existingManifesto.remove();
    }
    
    // Insere o novo manifesto após o abstract
    ABSTRACT_ELEM.insertAdjacentElement('afterend', manifestoHTML);
    
    // Reposiciona o marcador de final de página
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

    // Se o marcador do final estiver visível (ou acima de 95% do topo da viewport)
    if (lastContent.top <= viewportHeight * 0.95) { 
        LANG_SWITCH_BTN.classList.add('visible');
    } else {
        LANG_SWITCH_BTN.classList.remove('visible');
    }
}

// FUNÇÃO PARA ROLAR ATÉ O FINAL DO CONTEÚDO (ÂNCORA)
window.scrollToSources = function() {
    const sourcesElement = document.getElementById('last-content-marker'); // Usaremos o marcador de fim como âncora
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
    
    // 3. ATUALIZA O CONTEÚDO INICIAL
    updateContent();
    updateSignatureCount(); // Define o número inicial
    
    // 4. INICIA O CONTADOR CÍCLICO VIVO (ITEM 5)
    runSignatureCycle(); // Inicia o ciclo 3-2-4 min
    
    // 5. ADICIONA LISTENER DE SCROLL para o botão de tradução
    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});
