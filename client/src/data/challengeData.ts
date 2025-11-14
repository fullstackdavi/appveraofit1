
export interface DayContent {
  day: number;
  tips: string[];
  practicalExercises: string[];
  recipe: {
    title: string;
    ingredients: string[];
    preparation: string[];
  };
  workout: {
    title: string;
    exercises: string[];
    duration: string;
    level: string;
  };
}

export const challengeData: DayContent[] = [
  {
    day: 1,
    tips: [
      "Comece o dia bebendo um copo de água morna com limão. Isso ajuda a acelerar o metabolismo!",
      "Prepare suas refeições com antecedência para evitar escolhas impulsivas",
      "Durma pelo menos 7-8 horas por noite para recuperação adequada",
      "Evite pular refeições - isso desacelera seu metabolismo",
      "Mantenha um diário alimentar para acompanhar seu progresso"
    ],
    practicalExercises: [
      "Beba 500ml de água ao acordar",
      "Faça 10 respirações profundas antes do café da manhã",
      "Tire uma foto do seu corpo para acompanhar a evolução",
      "Defina sua meta de peso para os 30 dias",
      "Prepare um plano de compras saudáveis",
      "Organize sua cozinha removendo alimentos processados"
    ],
    recipe: {
      title: "Smoothie Verde Energizante",
      ingredients: ["1 banana", "1 xícara de espinafre", "200ml de água de coco", "1 colher de chia"],
      preparation: ["Bata todos os ingredientes no liquidificador", "Adicione gelo se preferir", "Sirva imediatamente para preservar nutrientes"]
    },
    workout: {
      title: "Caminhada Leve",
      exercises: ["Aquecimento: 5 min de alongamento", "Caminhada em ritmo moderado: 20 min", "Respiração profunda: 5 min"],
      duration: "30 minutos",
      level: "Iniciante"
    }
  },
  {
    day: 2,
    tips: [
      "Evite açúcar refinado hoje. Substitua por frutas frescas quando sentir vontade de doce",
      "Mastigue devagar - pelo menos 20 vezes cada garfada",
      "Beba água antes de cada refeição para aumentar a saciedade",
      "Não coma assistindo TV ou mexendo no celular",
      "Inclua proteína em todas as refeições"
    ],
    practicalExercises: [
      "Substitua o açúcar do café por adoçante natural",
      "Prepare porções menores no prato",
      "Faça uma lista de lanches saudáveis",
      "Meça suas porções com a mão (palma = proteína)",
      "Experimente mastigar cada garfada 30 vezes",
      "Beba um copo d'água a cada 2 horas"
    ],
    recipe: {
      title: "Omelete de Vegetais",
      ingredients: ["2 ovos", "1/2 tomate picado", "1/4 cebola", "Espinafre fresco"],
      preparation: ["Bata os ovos levemente", "Adicione os vegetais picados", "Cozinhe em fogo baixo até firmar"]
    },
    workout: {
      title: "Treino de Força Básico",
      exercises: ["20 agachamentos", "15 flexões (pode ser de joelhos)", "30 segundos de prancha"],
      duration: "25 minutos",
      level: "Iniciante"
    }
  },
  {
    day: 3,
    tips: [
      "Mastigue devagar! Comer com calma ajuda na digestão e aumenta a saciedade",
      "Adicione mais vegetais coloridos ao seu prato",
      "Evite alimentos processados e enlatados",
      "Faça pequenos lanches saudáveis entre refeições",
      "Hidrate-se constantemente ao longo do dia"
    ],
    practicalExercises: [
      "Coloque o garfo no prato entre as garfadas",
      "Faça uma pausa de 5 minutos no meio da refeição",
      "Prepare 3 lanches saudáveis para o dia",
      "Corte vegetais e deixe prontos na geladeira",
      "Configure alarmes para lembrar de beber água",
      "Anote tudo que comer hoje"
    ],
    recipe: {
      title: "Salada de Quinoa",
      ingredients: ["1 xícara de quinoa cozida", "Tomate cereja", "Pepino", "Azeite e limão"],
      preparation: ["Cozinhe a quinoa conforme embalagem", "Misture com vegetais frescos", "Tempere com azeite, limão e sal"]
    },
    workout: {
      title: "Cardio Intervalado",
      exercises: ["2 min corrida leve", "1 min corrida intensa", "Repetir 5x"],
      duration: "20 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 4,
    tips: [
      "Durma pelo menos 7 horas hoje. O sono adequado é essencial para perda de peso",
      "Evite cafeína após as 16h",
      "Crie uma rotina relaxante antes de dormir",
      "Mantenha o quarto escuro e fresco",
      "Desligue aparelhos eletrônicos 1 hora antes de dormir"
    ],
    practicalExercises: [
      "Defina um horário fixo para dormir",
      "Tome um banho morno antes de deitar",
      "Faça alongamentos leves à noite",
      "Escreva 3 gratidões do dia",
      "Prepare o ambiente: escuro, silencioso e fresco",
      "Evite telas 30 minutos antes de dormir"
    ],
    recipe: {
      title: "Frango Grelhado com Legumes",
      ingredients: ["150g peito de frango", "Brócolis", "Cenoura", "Temperos naturais"],
      preparation: ["Tempere o frango com alho e limão", "Grelhe por 6-8 minutos cada lado", "Cozinhe os legumes no vapor"]
    },
    workout: {
      title: "Yoga Flow",
      exercises: ["Saudação ao sol: 5 repetições", "Posturas de equilíbrio", "Relaxamento final"],
      duration: "30 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 5,
    tips: [
      "Beba 2 litros de água distribuídos ao longo do dia. Mantenha uma garrafinha sempre por perto!",
      "A água ajuda na digestão e elimina toxinas",
      "Substitua bebidas açucaradas por água com limão",
      "Beba água gelada para acelerar metabolismo",
      "Use aplicativos para lembrar de se hidratar"
    ],
    practicalExercises: [
      "Carregue uma garrafa de 500ml e encha 4 vezes",
      "Beba 1 copo ao acordar",
      "Beba 1 copo antes de cada refeição",
      "Adicione rodelas de limão ou hortelã na água",
      "Configure 8 alarmes para beber água",
      "Marque sua garrafa com horários"
    ],
    recipe: {
      title: "Bowl de Iogurte com Frutas",
      ingredients: ["200ml iogurte natural", "Morangos", "Granola integral", "Mel"],
      preparation: ["Coloque o iogurte no bowl", "Adicione frutas frescas picadas", "Finalize com granola e um fio de mel"]
    },
    workout: {
      title: "HIIT Iniciante",
      exercises: ["30s polichinelos", "30s descanso", "30s mountain climbers", "Repetir 6x"],
      duration: "15 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 6,
    tips: [
      "Elimine refrigerantes hoje. Substitua por água com gás e rodelas de limão",
      "Evite sucos industrializados - são cheios de açúcar",
      "Prefira frutas inteiras ao invés de sucos",
      "Chás naturais são ótimas opções sem calorias",
      "Água de coco é melhor que isotônicos"
    ],
    practicalExercises: [
      "Jogue fora todos os refrigerantes de casa",
      "Compre água com gás e limões",
      "Prepare chá gelado sem açúcar",
      "Experimente 3 tipos diferentes de chá",
      "Faça água saborizada com frutas",
      "Substitua 1 refrigerante por água hoje"
    ],
    recipe: {
      title: "Sopa Detox",
      ingredients: ["Couve", "Abobrinha", "Cebola", "Alho e gengibre"],
      preparation: ["Refogue alho, cebola e gengibre", "Adicione vegetais e água", "Cozinhe por 20 min e bata no liquidificador"]
    },
    workout: {
      title: "Caminhada Rápida",
      exercises: ["Aquecimento: 5 min leve", "Caminhada rápida: 25 min", "Alongamento: 5 min"],
      duration: "35 minutos",
      level: "Iniciante"
    }
  },
  {
    day: 7,
    tips: [
      "Dia de descanso ativo! Faça alongamentos suaves e descanse o corpo",
      "Recuperação é tão importante quanto treino",
      "Faça uma massagem ou automassagem",
      "Tome um banho relaxante",
      "Reflita sobre a primeira semana"
    ],
    practicalExercises: [
      "Faça 15 minutos de alongamento completo",
      "Use uma bola de tênis para massagem nos pés",
      "Tome banho com água morna",
      "Medite por 10 minutos",
      "Anote suas conquistas da semana",
      "Planeje a próxima semana"
    ],
    recipe: {
      title: "Salmão com Aspargos",
      ingredients: ["150g salmão", "Aspargos frescos", "Limão", "Azeite"],
      preparation: ["Tempere o salmão com limão", "Asse em forno 180°C por 15 min", "Grelhe os aspargos com azeite"]
    },
    workout: {
      title: "Alongamento Profundo",
      exercises: ["Alongamento de pernas", "Torções suaves", "Respiração consciente"],
      duration: "20 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 8,
    tips: [
      "Inclua proteína em todas as refeições. Isso mantém a saciedade por mais tempo",
      "Proteínas ajudam na construção muscular",
      "Varie as fontes: frango, peixe, ovos, leguminosas",
      "Consuma proteína logo após o treino",
      "Calcule 1,6-2g de proteína por kg de peso"
    ],
    practicalExercises: [
      "Adicione ovos no café da manhã",
      "Inclua frango ou peixe no almoço",
      "Lanches: iogurte grego ou castanhas",
      "Prepare shakes proteicos",
      "Calcule sua necessidade proteica diária",
      "Faça uma lista de fontes de proteína"
    ],
    recipe: {
      title: "Wrap de Peru",
      ingredients: ["Tortilha integral", "Peito de peru", "Alface", "Tomate"],
      preparation: ["Aqueça a tortilha levemente", "Monte com peru e vegetais", "Enrole e corte ao meio"]
    },
    workout: {
      title: "Circuito Full Body",
      exercises: ["15 agachamentos", "10 flexões", "20 abdominais", "Repetir 3x"],
      duration: "25 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 9,
    tips: [
      "Reduza o sal! Use ervas frescas para dar sabor às suas refeições",
      "Sal em excesso causa retenção de líquidos",
      "Experimente: alho, cebola, pimenta, ervas",
      "Evite alimentos processados (muito sódio)",
      "Leia rótulos - atenção ao sódio oculto"
    ],
    practicalExercises: [
      "Retire o saleiro da mesa",
      "Compre ervas frescas: manjericão, orégano, alecrim",
      "Tempere com limão ao invés de sal",
      "Faça um mix de temperos naturais",
      "Evite temperos prontos industrializados",
      "Experimente 3 receitas com menos sal"
    ],
    recipe: {
      title: "Berinjela Grelhada",
      ingredients: ["1 berinjela", "Azeite", "Alho", "Manjericão"],
      preparation: ["Corte a berinjela em fatias", "Pincele com azeite e alho", "Grelhe até dourar"]
    },
    workout: {
      title: "Treino de Core",
      exercises: ["30s prancha", "15 russian twists", "20 bicicleta no ar", "Repetir 4x"],
      duration: "20 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 10,
    tips: [
      "Coma devagar e sem distrações. Desligue TV e celular durante as refeições",
      "Comer devagar ajuda a perceber a saciedade",
      "Foque nos sabores e texturas",
      "Faça refeições em família quando possível",
      "Evite comer de pé ou andando"
    ],
    practicalExercises: [
      "Desligue TV e celular nas refeições",
      "Sente-se à mesa para todas refeições",
      "Coloque menos comida no prato inicialmente",
      "Mastigue cada garfada 25-30 vezes",
      "Faça pausas entre as garfadas",
      "Use pratos menores"
    ],
    recipe: {
      title: "Tapioca Light",
      ingredients: ["3 colheres de goma de tapioca", "Queijo branco", "Tomate", "Orégano"],
      preparation: ["Hidrate a tapioca em frigideira quente", "Recheie com queijo e tomate", "Dobre e sirva quentinha"]
    },
    workout: {
      title: "Dança Fitness",
      exercises: ["Aquecimento com música", "Coreografia simples por 20 min", "Desaceleração gradual"],
      duration: "30 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 11,
    tips: [
      "Evite comer 3 horas antes de dormir. Deixe o corpo digerir adequadamente",
      "Digestão noturna atrapalha o sono",
      "Se sentir fome, opte por chá ou água",
      "Jante mais cedo sempre que possível",
      "Evite carboidratos pesados à noite"
    ],
    practicalExercises: [
      "Defina horário limite para última refeição",
      "Jante até 19h quando possível",
      "Prepare lanches leves se necessário",
      "Escove os dentes após o jantar",
      "Beba chá de camomila à noite",
      "Evite visitar a cozinha após jantar"
    ],
    recipe: {
      title: "Caldo Verde Light",
      ingredients: ["Couve", "Batata", "Cebola", "Caldo de legumes"],
      preparation: ["Cozinhe batata e cebola", "Adicione couve fatiada", "Tempere e sirva quente"]
    },
    workout: {
      title: "Pilates Iniciante",
      exercises: ["The Hundred", "Roll Up", "Single Leg Stretch"],
      duration: "25 minutos",
      level: "Iniciante"
    }
  },
  {
    day: 12,
    tips: [
      "Troque pão branco por integral. Fibras são suas aliadas!",
      "Fibras aumentam saciedade",
      "Ajudam no funcionamento intestinal",
      "Estabilizam níveis de açúcar no sangue",
      "Procure pães com grãos e sementes"
    ],
    practicalExercises: [
      "Substitua todo pão branco por integral",
      "Leia rótulos: escolha pães com mais de 3g fibras",
      "Experimente pão de centeio ou multigrãos",
      "Adicione sementes ao pão",
      "Teste receitas caseiras de pão integral",
      "Congele fatias para durar mais"
    ],
    recipe: {
      title: "Panqueca de Aveia",
      ingredients: ["3 col aveia", "1 ovo", "1/2 banana", "Canela"],
      preparation: ["Bata tudo no liquidificador", "Despeje em frigideira antiaderente", "Vire quando borbulhar"]
    },
    workout: {
      title: "Corrida Intervalada",
      exercises: ["5 min aquecimento", "1 min sprint + 2 min leve (5x)", "5 min desaquecimento"],
      duration: "30 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 13,
    tips: [
      "Planeje suas refeições com antecedência. Isso evita escolhas impulsivas",
      "Meal prep economiza tempo e dinheiro",
      "Cozinhe em maior quantidade nos fins de semana",
      "Tenha sempre opções saudáveis prontas",
      "Liste compras baseado no cardápio semanal"
    ],
    practicalExercises: [
      "Faça um cardápio para a semana",
      "Liste ingredientes necessários",
      "Separe 2h no domingo para cozinhar",
      "Congele porções individuais",
      "Prepare lanches da semana",
      "Organize potes na geladeira"
    ],
    recipe: {
      title: "Atum com Grão de Bico",
      ingredients: ["1 lata atum", "Grão de bico", "Tomate", "Cebola roxa"],
      preparation: ["Misture todos ingredientes", "Tempere com limão e azeite", "Sirva gelado"]
    },
    workout: {
      title: "Treino de Pernas",
      exercises: ["20 agachamentos", "15 lunges cada perna", "20 elevações de panturrilha"],
      duration: "25 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 14,
    tips: [
      "Metade do desafio completo! Comemore com uma refeição especial saudável",
      "Avalie seu progresso até aqui",
      "Tire novas fotos para comparar",
      "Ajuste metas se necessário",
      "Compartilhe sua conquista"
    ],
    practicalExercises: [
      "Tire fotos de progresso",
      "Meça peso e medidas",
      "Anote mudanças que notou",
      "Celebre sem exageros alimentares",
      "Defina metas para próximos 15 dias",
      "Compartilhe nas redes sociais"
    ],
    recipe: {
      title: "Bowl de Salmão Poke",
      ingredients: ["Salmão fresco", "Arroz integral", "Abacate", "Edamame"],
      preparation: ["Cozinhe arroz integral", "Corte salmão em cubos", "Monte o bowl com todos ingredientes"]
    },
    workout: {
      title: "Celebração Ativa",
      exercises: ["Sua atividade favorita por 30 minutos", "Dança, caminhada, bike - você escolhe!"],
      duration: "30 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 15,
    tips: [
      "Aumente o consumo de vegetais verde-escuros. São repletos de nutrientes!",
      "Ricos em ferro, cálcio e vitaminas",
      "Baixíssimas calorias, alto valor nutricional",
      "Couve, espinafre, brócolis, rúcula",
      "Consuma crus ou levemente cozidos"
    ],
    practicalExercises: [
      "Adicione folhas em todas refeições",
      "Faça suco verde pela manhã",
      "Experimente 3 vegetais novos esta semana",
      "Compre verduras frescas 2x na semana",
      "Refogue espinafre com alho",
      "Adicione couve ao feijão"
    ],
    recipe: {
      title: "Risoto de Espinafre",
      ingredients: ["Arroz arbóreo", "Espinafre", "Cebola", "Caldo de legumes"],
      preparation: ["Refogue cebola", "Adicione arroz e vá acrescentando caldo", "Finalize com espinafre"]
    },
    workout: {
      title: "Total Body Workout",
      exercises: ["Burpees: 10 repetições", "Agachamento com salto: 15x", "Prancha lateral: 30s cada lado"],
      duration: "30 minutos",
      level: "Avançado"
    }
  },
  {
    day: 16,
    tips: [
      "Evite alimentos processados. Escolha comida de verdade!",
      "Processados têm conservantes e sódio",
      "Prefira alimentos in natura",
      "Leia rótulos: menos de 5 ingredientes",
      "Cozinhe mais em casa"
    ],
    practicalExercises: [
      "Limpe a despensa de ultraprocessados",
      "Faça molhos caseiros",
      "Prepare temperos naturais",
      "Troque salgadinhos por frutas e castanhas",
      "Cozinhe pelo menos 2 refeições caseiras",
      "Evite fast food esta semana"
    ],
    recipe: {
      title: "Espaguete de Abobrinha",
      ingredients: ["2 abobrinhas", "Molho de tomate caseiro", "Manjericão", "Alho"],
      preparation: ["Corte abobrinha em espirais", "Refogue rapidamente", "Adicione molho caseiro"]
    },
    workout: {
      title: "Cardio Dance",
      exercises: ["Aquecimento: 5 min", "Dança aeróbica: 25 min", "Alongamento: 5 min"],
      duration: "35 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 17,
    tips: [
      "Adicione sementes à sua dieta: chia, linhaça, gergelim. São superalimentos!",
      "Ricas em ômega-3 e fibras",
      "Ajudam na saciedade",
      "Melhoram função intestinal",
      "Fáceis de adicionar em receitas"
    ],
    practicalExercises: [
      "Adicione 1 colher de chia no iogurte",
      "Polvilhe linhaça na salada",
      "Faça pudim de chia",
      "Adicione sementes em pães caseiros",
      "Experimente pasta de gergelim (tahine)",
      "Compre mix de sementes"
    ],
    recipe: {
      title: "Pudim de Chia",
      ingredients: ["3 col chia", "200ml leite vegetal", "1/2 colher cacau", "Mel"],
      preparation: ["Misture chia e leite", "Deixe na geladeira por 4h", "Sirva com frutas"]
    },
    workout: {
      title: "Treino Funcional",
      exercises: ["Agachamento sumô: 15x", "Prancha com toque no ombro: 20x", "Ponte: 20x"],
      duration: "25 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 18,
    tips: [
      "Mantenha lanches saudáveis sempre à mão: frutas, castanhas, iogurte",
      "Evita comer besteiras quando bate fome",
      "Porções individuais facilitam controle",
      "Tenha sempre na bolsa e no carro",
      "Prepare no início da semana"
    ],
    practicalExercises: [
      "Prepare 5 potes de frutas picadas",
      "Separe porções de 30g de castanhas",
      "Tenha sempre 1 fruta na bolsa",
      "Faça barrinhas caseiras",
      "Congele iogurte em potinhos",
      "Monte kits de emergência"
    ],
    recipe: {
      title: "Mix de Castanhas",
      ingredients: ["Amêndoas", "Castanha do Pará", "Nozes", "Damascos secos"],
      preparation: ["Misture porções iguais", "Armazene em pote hermético", "Consuma 1 porção pequena por dia"]
    },
    workout: {
      title: "Caminhada na Natureza",
      exercises: ["Escolha um parque ou trilha", "Caminhe por 40 minutos", "Aproveite o contato com natureza"],
      duration: "40 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 19,
    tips: [
      "Beba chá verde. Ele acelera o metabolismo e é rico em antioxidantes!",
      "Tome 2-3 xícaras por dia",
      "Prefira sem açúcar",
      "Evite após 18h (tem cafeína)",
      "Pode ser gelado ou quente"
    ],
    practicalExercises: [
      "Substitua café por chá verde",
      "Faça chá gelado para o dia",
      "Experimente diferentes tipos de chá verde",
      "Adicione limão ao chá (potencializa)",
      "Tome 1 xícara antes do treino",
      "Prepare chá em garrafa térmica"
    ],
    recipe: {
      title: "Peito de Frango com Curry",
      ingredients: ["Frango", "Curry", "Leite de coco light", "Vegetais"],
      preparation: ["Refogue frango em cubos", "Adicione curry e leite de coco", "Cozinhe vegetais juntos"]
    },
    workout: {
      title: "HIIT Avançado",
      exercises: ["40s burpees + 20s descanso", "40s mountain climbers + 20s descanso", "Repetir 8x"],
      duration: "20 minutos",
      level: "Avançado"
    }
  },
  {
    day: 20,
    tips: [
      "Controle as porções. Use pratos menores para evitar exageros",
      "Técnica do prato: 1/2 vegetais, 1/4 proteína, 1/4 carboidrato",
      "Sirva-se uma vez só",
      "Espere 20 min antes de repetir",
      "Use a mão como medida"
    ],
    practicalExercises: [
      "Use pratos de sobremesa",
      "Meça porções com a mão",
      "Sirva na cozinha, não na mesa",
      "Guarde sobras antes de comer",
      "Use potes menores",
      "Fotografe o prato antes de comer"
    ],
    recipe: {
      title: "Buddha Bowl",
      ingredients: ["Quinoa", "Grão de bico assado", "Abóbora", "Espinafre"],
      preparation: ["Asse a abóbora e grão de bico", "Cozinhe quinoa", "Monte bowl com todos ingredientes"]
    },
    workout: {
      title: "Yoga Vinyasa",
      exercises: ["Flow de saudações", "Posturas de força", "Meditação final"],
      duration: "35 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 21,
    tips: [
      "Três semanas! Você está incrível. Continue focado nos seus objetivos",
      "Os hábitos já estão se formando",
      "Mantenha a consistência",
      "Não desista agora",
      "Visualize seu objetivo final"
    ],
    practicalExercises: [
      "Revise fotos de antes e progresso",
      "Anote 5 mudanças positivas",
      "Recompense-se (não com comida)",
      "Atualize suas metas",
      "Inspire alguém compartilhando",
      "Planeje os últimos 9 dias"
    ],
    recipe: {
      title: "Wrap de Salmão",
      ingredients: ["Tortilha integral", "Salmão defumado", "Cream cheese light", "Rúcula"],
      preparation: ["Espalhe cream cheese na tortilha", "Adicione salmão e rúcula", "Enrole firmemente"]
    },
    workout: {
      title: "Treino Completo",
      exercises: ["Parte superior: flexões e tríceps", "Core: pranchas variadas", "Inferior: agachamentos e lunges"],
      duration: "40 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 22,
    tips: [
      "Varie as cores no prato! Quanto mais colorido, mais nutritivo",
      "Cada cor tem nutrientes diferentes",
      "Verde: ferro e fibras",
      "Vermelho: licopeno e vitamina C",
      "Laranja: betacaroteno"
    ],
    practicalExercises: [
      "Inclua 5 cores diferentes hoje",
      "Faça salada arco-íris",
      "Fotografe pratos coloridos",
      "Experimente 2 vegetais novos",
      "Visite feira de orgânicos",
      "Monte prato Instagram worthy"
    ],
    recipe: {
      title: "Salada Arco-Íris",
      ingredients: ["Alface roxa", "Cenoura", "Beterraba", "Tomate amarelo", "Repolho roxo"],
      preparation: ["Corte todos vegetais", "Misture em bowl grande", "Tempere com azeite, limão e mostarda"]
    },
    workout: {
      title: "Circuito Cardio",
      exercises: ["Polichinelos: 1 min", "Corrida estacionária: 1 min", "Pular corda: 1 min", "Repetir 5x"],
      duration: "25 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 23,
    tips: [
      "Reduza cafeína após 16h. Isso melhora a qualidade do sono",
      "Cafeína fica no organismo por 6-8h",
      "Atrapalha sono profundo",
      "Substitua por descafeinado",
      "Ou chás sem cafeína"
    ],
    practicalExercises: [
      "Último café até 15h",
      "Troque por chá de ervas à tarde",
      "Experimente café descafeinado",
      "Faça água saborizada",
      "Evite chocolate à noite (tem cafeína)",
      "Monitore qualidade do sono"
    ],
    recipe: {
      title: "Omelete de Claras",
      ingredients: ["3 claras", "Cogumelos", "Tomate", "Manjericão"],
      preparation: ["Bata as claras levemente", "Adicione vegetais picados", "Cozinhe em fogo baixo"]
    },
    workout: {
      title: "Treino de Abdômen",
      exercises: ["Crunch: 20x", "Prancha: 45s", "Bicicleta: 30x", "Repetir 3x"],
      duration: "20 minutos",
      level: "Iniciante"
    }
  },
  {
    day: 24,
    tips: [
      "Mastigue chiclete sem açúcar quando sentir vontade de beliscar",
      "Ajuda a controlar ansiedade",
      "Reduz vontade de comer",
      "Refresca o hálito",
      "Escolha sabores mentolados"
    ],
    practicalExercises: [
      "Tenha chicletes sempre à mão",
      "Use quando bater vontade de doce",
      "Mastigue após refeições",
      "Combine com água gelada",
      "Evite chicletes com açúcar",
      "Limite a 3-4 unidades por dia"
    ],
    recipe: {
      title: "Tofu Grelhado",
      ingredients: ["200g tofu", "Shoyu", "Gergelim", "Gengibre"],
      preparation: ["Corte tofu em cubos", "Marine com shoyu e gengibre", "Grelhe até dourar"]
    },
    workout: {
      title: "Mobilidade e Flexibilidade",
      exercises: ["Rotações articulares", "Alongamento dinâmico", "Yoga restaurativa"],
      duration: "30 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 25,
    tips: [
      "Só 5 dias para o fim! Mantenha a determinação e foco total",
      "Agora não é hora de desistir",
      "Você já chegou tão longe",
      "Os resultados estão aparecendo",
      "Termine com chave de ouro"
    ],
    practicalExercises: [
      "Visualize o dia 30 completo",
      "Intensifique treinos esta semana",
      "Seja 100% na alimentação",
      "Durma muito bem estes dias",
      "Hidrate-se ao máximo",
      "Prepare celebração saudável"
    ],
    recipe: {
      title: "Smoothie de Proteína",
      ingredients: ["1 scoop whey", "Banana", "Aveia", "Leite de amêndoas"],
      preparation: ["Bata tudo no liquidificador", "Adicione gelo", "Sirva imediatamente"]
    },
    workout: {
      title: "Desafio 25",
      exercises: ["25 agachamentos", "25 flexões", "25 abdominais", "25 polichinelos"],
      duration: "15 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 26,
    tips: [
      "Hidrate-se! Às vezes confundimos sede com fome",
      "Beba água ao sentir fome",
      "Espere 15 minutos",
      "Se ainda tiver fome, coma",
      "Mantenha água sempre perto"
    ],
    practicalExercises: [
      "Beba água antes de lanches",
      "Carregue garrafa o dia todo",
      "Configure alarmes de hidratação",
      "Adicione limão ou frutas na água",
      "Meta: 3 litros hoje",
      "Monitore cor da urina"
    ],
    recipe: {
      title: "Ceviche de Peixe",
      ingredients: ["Tilápia fresca", "Limão", "Cebola roxa", "Coentro"],
      preparation: ["Corte peixe em cubos pequenos", "Marine em limão por 10 min", "Adicione cebola e coentro"]
    },
    workout: {
      title: "Corrida Progressiva",
      exercises: ["10 min ritmo leve", "10 min ritmo moderado", "10 min ritmo forte"],
      duration: "30 minutos",
      level: "Intermediário"
    }
  },
  {
    day: 27,
    tips: [
      "Evite álcool na reta final. Mantenha o foco nos resultados!",
      "Álcool tem calorias vazias",
      "Desidrata o corpo",
      "Atrapalha recuperação muscular",
      "Prejudica o sono"
    ],
    practicalExercises: [
      "Recuse bebidas socialmente com educação",
      "Substitua por água com gás e limão",
      "Explique que está em desafio",
      "Evite ambientes com álcool",
      "Foque em 3 dias para terminar",
      "Visualize resultado final"
    ],
    recipe: {
      title: "Frittata de Vegetais",
      ingredients: ["4 ovos", "Abobrinha", "Pimentão", "Queijo parmesão"],
      preparation: ["Bata ovos com queijo", "Adicione vegetais refogados", "Asse em forno por 15 min"]
    },
    workout: {
      title: "Treino Intervalado de Alta Intensidade",
      exercises: ["30s esforço máximo", "30s descanso", "Varie exercícios a cada rodada", "10 rodadas"],
      duration: "20 minutos",
      level: "Avançado"
    }
  },
  {
    day: 28,
    tips: [
      "Quase lá! Visualize seu objetivo alcançado. Você consegue!",
      "Faltam apenas 2 dias",
      "Mantenha intensidade máxima",
      "Não relaxe agora",
      "O melhor está por vir"
    ],
    practicalExercises: [
      "Medite visualizando sucesso",
      "Anote 10 conquistas até aqui",
      "Intensifique treinos finais",
      "Alimentação impecável hoje",
      "Durma 8h para recuperar",
      "Prepare roupa para foto final"
    ],
    recipe: {
      title: "Bowl Mexicano",
      ingredients: ["Feijão preto", "Arroz integral", "Abacate", "Salsa fresca"],
      preparation: ["Cozinhe feijão e arroz", "Monte bowl", "Finalize com abacate e salsa"]
    },
    workout: {
      title: "Full Body Challenge",
      exercises: ["Burpees: 15x", "Agachamento pistol: 10x cada", "Flexão diamante: 15x", "Repetir 3x"],
      duration: "35 minutos",
      level: "Avançado"
    }
  },
  {
    day: 29,
    tips: [
      "Último dia antes da vitória! Dê seu melhor hoje",
      "Amanhã é a celebração",
      "Finalize com excelência",
      "Orgulhe-se do caminho",
      "Você é um vencedor"
    ],
    practicalExercises: [
      "Treino com máxima intensidade",
      "Alimentação perfeita",
      "Beba 3L de água",
      "Durma 8h+ hoje",
      "Prepare celebração de amanhã",
      "Agradeça sua dedicação"
    ],
    recipe: {
      title: "Camarão na Moranga",
      ingredients: ["Camarão", "Abóbora moranga", "Leite de coco", "Temperos"],
      preparation: ["Cozinhe moranga no vapor", "Refogue camarão", "Misture com leite de coco e sirva na moranga"]
    },
    workout: {
      title: "Treino Final Épico",
      exercises: ["Combine seus exercícios favoritos", "Intensidade máxima", "Celebre cada movimento!"],
      duration: "45 minutos",
      level: "Todos os níveis"
    }
  },
  {
    day: 30,
    tips: [
      "PARABÉNS! Você completou o desafio! Continue com os hábitos saudáveis",
      "Você provou que é capaz",
      "Mantenha os hábitos conquistados",
      "Estabeleça novos objetivos",
      "Inspire outras pessoas"
    ],
    practicalExercises: [
      "Tire fotos finais de progresso",
      "Compare com fotos do dia 1",
      "Meça peso e medidas finais",
      "Calcule resultados totais",
      "Compartilhe sua história",
      "Planeje próximos 30 dias"
    ],
    recipe: {
      title: "Refeição Celebration",
      ingredients: ["Escolha sua proteína favorita", "Vegetais coloridos", "Carboidrato integral", "Temperos especiais"],
      preparation: ["Prepare com carinho", "Capriche na apresentação", "Celebre sua conquista!"]
    },
    workout: {
      title: "Atividade Celebratória",
      exercises: ["Escolha sua atividade preferida", "Divirta-se por 30-60 minutos", "Você merece!"],
      duration: "30-60 minutos",
      level: "Todos os níveis"
    }
  }
];
