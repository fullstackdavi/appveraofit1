export interface DayContent {
  day: number;
  tip: string;
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
    tip: "Comece o dia bebendo um copo de água morna com limão. Isso ajuda a acelerar o metabolismo!",
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
    tip: "Evite açúcar refinado hoje. Substitua por frutas frescas quando sentir vontade de doce.",
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
    tip: "Mastigue devagar! Comer com calma ajuda na digestão e aumenta a saciedade.",
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
    tip: "Durma pelo menos 7 horas hoje. O sono adequado é essencial para perda de peso.",
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
    tip: "Beba 2 litros de água distribuídos ao longo do dia. Mantenha uma garrafinha sempre por perto!",
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
    tip: "Elimine refrigerantes hoje. Substitua por água com gás e rodelas de limão.",
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
    tip: "Dia de descanso ativo! Faça alongamentos suaves e descanse o corpo.",
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
    tip: "Inclua proteína em todas as refeições. Isso mantém a saciedade por mais tempo.",
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
    tip: "Reduza o sal! Use ervas frescas para dar sabor às suas refeições.",
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
    tip: "Coma devagar e sem distrações. Desligue TV e celular durante as refeições.",
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
    tip: "Evite comer 3 horas antes de dormir. Deixe o corpo digerir adequadamente.",
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
    tip: "Troque pão branco por integral. Fibras são suas aliadas!",
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
    tip: "Planeje suas refeições com antecedência. Isso evita escolhas impulsivas.",
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
    tip: "Metade do desafio completo! Comemore com uma refeição especial saudável.",
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
    tip: "Aumente o consumo de vegetais verde-escuros. São repletos de nutrientes!",
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
    tip: "Evite alimentos processados. Escolha comida de verdade!",
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
    tip: "Adicione sementes à sua dieta: chia, linhaça, gergelim. São superalimentos!",
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
    tip: "Mantenha lanches saudáveis sempre à mão: frutas, castanhas, iogurte.",
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
    tip: "Beba chá verde. Ele acelera o metabolismo e é rico em antioxidantes!",
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
    tip: "Controle as porções. Use pratos menores para evitar exageros.",
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
    tip: "Três semanas! Você está incrível. Continue focado nos seus objetivos.",
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
    tip: "Varie as cores no prato! Quanto mais colorido, mais nutritivo.",
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
    tip: "Reduza cafeína após 16h. Isso melhora a qualidade do sono.",
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
    tip: "Mastigue chiclete sem açúcar quando sentir vontade de beliscar.",
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
    tip: "Só 5 dias para o fim! Mantenha a determinação e foco total.",
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
    tip: "Hidrate-se! Às vezes confundimos sede com fome.",
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
    tip: "Evite álcool na reta final. Mantenha o foco nos resultados!",
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
    tip: "Quase lá! Visualize seu objetivo alcançado. Você consegue!",
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
    tip: "Último dia antes da vitória! Dê seu melhor hoje.",
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
    tip: "PARABÉNS! Você completou o desafio! Continue com os hábitos saudáveis.",
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
