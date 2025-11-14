
import { useState, useEffect } from "react";
import { challengeData, type DayContent } from "@/data/challengeData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Check, 
  Lock, 
  Flame, 
  Droplet, 
  Award, 
  Share2, 
  ChefHat, 
  Dumbbell, 
  Lightbulb,
  X,
  Settings,
  Sparkles,
  Star,
  Target,
  TrendingDown,
  Heart
} from "lucide-react";

interface ChallengeState {
  completedDays: number[];
  notes: { [key: number]: string };
  isUnlocked: boolean;
}

export default function Home() {
  const { toast } = useToast();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [challengeState, setChallengeState] = useState<ChallengeState>({
    completedDays: [],
    notes: {},
    isUnlocked: true // Desbloqueado por padrão após compra
  });
  const [showCongrats, setShowCongrats] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [rewardDay, setRewardDay] = useState(0);
  const [dayNote, setDayNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("challengeState");
    if (saved) {
      setChallengeState(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("challengeState", JSON.stringify(challengeState));
  }, [challengeState]);

  useEffect(() => {
    if (selectedDay !== null) {
      setDayNote(challengeState.notes[selectedDay] || "");
    }
  }, [selectedDay, challengeState.notes]);

  const progress = (challengeState.completedDays.length / 30) * 100;

  const isDayCompleted = (day: number) => {
    return challengeState.completedDays.includes(day);
  };

  const toggleDayCompletion = (day: number) => {
    const wasCompleted = isDayCompleted(day);
    
    setChallengeState(prev => {
      const isCompleted = prev.completedDays.includes(day);
      const newCompleted = isCompleted
        ? prev.completedDays.filter(d => d !== day)
        : [...prev.completedDays, day].sort((a, b) => a - b);

      if (!isCompleted && newCompleted.length === 30) {
        setTimeout(() => setShowCongrats(true), 300);
      }

      // Sistema de recompensas a cada 3 dias
      if (!isCompleted && newCompleted.length % 3 === 0 && newCompleted.length < 30) {
        setTimeout(() => {
          setRewardDay(newCompleted.length);
          setShowReward(true);
        }, 300);
      }

      return { ...prev, completedDays: newCompleted };
    });

    toast({
      title: wasCompleted ? "Dia desmarcado" : "Dia concluído",
      description: wasCompleted 
        ? `Dia ${day} foi desmarcado` 
        : `Parabéns por completar o Dia ${day}`,
    });

    // Redirecionar para o próximo dia após completar
    if (!wasCompleted && day < 30) {
      setTimeout(() => {
        setSelectedDay(null);
        setTimeout(() => {
          setSelectedDay(day + 1);
        }, 200);
      }, 1500);
    } else if (!wasCompleted && day === 30) {
      setTimeout(() => {
        setSelectedDay(null);
      }, 1500);
    }
  };

  const saveNote = () => {
    if (selectedDay !== null) {
      setChallengeState(prev => ({
        ...prev,
        notes: { ...prev.notes, [selectedDay]: dayNote }
      }));
      toast({
        title: "Nota salva",
        description: "Suas anotações foram salvas com sucesso",
      });
    }
  };

  const handleShare = () => {
    const completed = challengeState.completedDays.length;
    const text = `Completei ${completed} dias do Desafio Verão 30D! #DesafioVerao30D`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toast({
        title: "Copiado",
        description: "Texto copiado para área de transferência. Cole nas redes sociais",
      });
    }
  };

  const resetChallenge = () => {
    if (confirm("Tem certeza que deseja resetar todo o progresso?")) {
      setChallengeState({
        completedDays: [],
        notes: {},
        isUnlocked: true
      });
      setShowReset(false);
      toast({
        title: "Desafio resetado",
        description: "Todo o progresso foi apagado. Boa sorte no novo desafio",
      });
    }
  };

  const getRewardBenefits = (days: number) => {
    const weightLoss = ((days / 30) * 8).toFixed(1);
    const benefits = [];

    if (days >= 3) {
      benefits.push(`Perda de peso estimada: -${((days / 30) * 1.5).toFixed(1)}kg a -${((days / 30) * 2).toFixed(1)}kg`);
      benefits.push("Metabolismo mais acelerado");
    }
    
    if (days >= 6) {
      benefits.push("Mais energia e disposição");
      benefits.push("Melhor qualidade do sono");
    }
    
    if (days >= 9) {
      benefits.push("Redução de inchaço e retenção de líquidos");
      benefits.push("Melhora na digestão");
    }
    
    if (days >= 12) {
      benefits.push("Aumento da massa muscular magra");
      benefits.push("Pele mais hidratada e saudável");
    }
    
    if (days >= 15) {
      benefits.push("Redução de medidas visível");
      benefits.push("Mais resistência física");
    }
    
    if (days >= 18) {
      benefits.push("Melhora no condicionamento cardiovascular");
      benefits.push("Hábitos saudáveis consolidados");
    }
    
    if (days >= 21) {
      benefits.push("Transformação corporal notável");
      benefits.push("Autoestima elevada");
    }
    
    if (days >= 24) {
      benefits.push("Corpo mais definido e tonificado");
      benefits.push("Resultados duradouros");
    }
    
    if (days >= 27) {
      benefits.push("Objetivo quase alcançado!");
      benefits.push("Mudança de estilo de vida completa");
    }

    return benefits;
  };

  const getRewardMotivation = (days: number) => {
    if (days === 3) return "Você está no caminho certo! Os primeiros 3 dias são os mais difíceis e você conseguiu!";
    if (days === 6) return "Incrível! Você já está no segundo marco. Seu corpo está começando a responder!";
    if (days === 9) return "Uau! 9 dias de dedicação total. As mudanças já são visíveis!";
    if (days === 12) return "Você completou 12 dias! Está na metade do caminho para transformar seu corpo!";
    if (days === 15) return "Metade do desafio concluída! Você é imparável!";
    if (days === 18) return "18 dias de pura determinação! Seu corpo está te agradecendo!";
    if (days === 21) return "3 semanas completas! Os hábitos saudáveis agora fazem parte de você!";
    if (days === 24) return "24 dias! A reta final chegou e você está arrasando!";
    if (days === 27) return "27 dias! Faltam apenas 3 dias para a vitória total!";
    return "Continue assim! Cada dia é uma conquista!";
  };

  const selectedDayData = selectedDay ? challengeData.find(d => d.day === selectedDay) : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Thank You */}
      <div className="bg-gradient-to-br from-primary via-accent to-primary/80 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-4">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Parabéns pela sua Compra! 🎉
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90">
            Você acabou de dar o primeiro passo rumo ao corpo dos seus sonhos
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Target className="w-6 h-6" />
              O Que Você Vai Conquistar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-success/20 rounded-full p-2 mt-1">
                  <TrendingDown className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Perda de Peso Real</h3>
                  <p className="text-sm text-white/80">Elimine até 8kg em 30 dias com método comprovado</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 rounded-full p-2 mt-1">
                  <Dumbbell className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Corpo Definido</h3>
                  <p className="text-sm text-white/80">Ganhe massa magra e defina seus músculos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-2 mt-1">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Saúde e Energia</h3>
                  <p className="text-sm text-white/80">Melhore sua disposição e qualidade de vida</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            </div>
            <p className="text-sm text-white/90">Mais de 10.000 pessoas já transformaram seus corpos</p>
          </div>
        </div>
      </div>

      {/* Fixed Progress Bar */}
      <div className="sticky top-0 z-40 bg-card border-b border-card-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2" data-testid="text-progress-title">
              <Flame className="w-5 h-5 text-accent" />
              Seu Progresso no Desafio
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowReset(!showReset)}
                data-testid="button-settings-toggle"
              >
                <Settings className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
                data-testid="button-share-progress"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Compartilhar</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Progress value={progress} className="h-3" data-testid="progress-bar" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground" data-testid="text-progress-days">
                {challengeState.completedDays.length} / 30 dias completos
              </span>
              <span className="font-semibold text-primary" data-testid="text-progress-percentage">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Dialog */}
      {showReset && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-testid="modal-reset">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Resetar Desafio</CardTitle>
              <CardDescription>
                Esta ação irá apagar todo o seu progresso, incluindo dias concluídos e anotações.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3">
              <Button variant="outline" onClick={() => setShowReset(false)} className="flex-1" data-testid="button-cancel-reset">
                Cancelar
              </Button>
              <Button variant="destructive" onClick={resetChallenge} className="flex-1" data-testid="button-confirm-reset">
                Resetar Tudo
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Motivation Card */}
        <Card className="mb-8 border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              Você Está no Caminho Certo!
            </CardTitle>
            <CardDescription className="text-base">
              Siga o plano dia a dia e veja resultados incríveis acontecendo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <ChefHat className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">30</div>
                <div className="text-sm text-muted-foreground">Receitas Exclusivas</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <Dumbbell className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">30</div>
                <div className="text-sm text-muted-foreground">Treinos Progressivos</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <Lightbulb className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">30</div>
                <div className="text-sm text-muted-foreground">Dicas de Especialistas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Day Grid */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Seus 30 Dias de Transformação</h2>
          <p className="text-muted-foreground mb-6">Clique em cada dia para acessar receitas, treinos e dicas exclusivas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {challengeData.map((day) => {
            const completed = isDayCompleted(day.day);

            return (
              <Card
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`
                  relative overflow-hidden transition-all duration-200 cursor-pointer hover-elevate
                  ${completed ? 'border-2 border-success' : ''}
                `}
                data-testid={`card-day-${day.day}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center text-center min-h-[100px]">
                    <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-day-number-${day.day}`}>
                      {day.day}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Dia {day.day}
                    </div>
                  </div>
                  
                  {completed && (
                    <div className="absolute top-2 right-2 bg-success rounded-full p-1" data-testid={`icon-completed-${day.day}`}>
                      <Check className="w-4 h-4 text-success-foreground" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Day Detail Modal */}
      <Dialog open={selectedDay !== null} onOpenChange={(open) => !open && setSelectedDay(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="modal-day-detail">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1" data-testid={`badge-day-${selectedDay}`}>
                Dia {selectedDay}
              </Badge>
              {selectedDay && isDayCompleted(selectedDay) && (
                <Badge className="bg-success text-success-foreground gap-1" data-testid={`badge-completed-${selectedDay}`}>
                  <Check className="w-3 h-3" />
                  Concluído
                </Badge>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedDayData && (
            <div className="space-y-6 pt-4">
              {/* Tips */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">5 Dicas do Dia</h3>
                </div>
                <ul className="space-y-2 pl-7">
                  {selectedDayData.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2" data-testid={`text-tip-${selectedDay}-${i}`}>
                      <span className="text-accent font-bold mt-1 flex-shrink-0">{i + 1}.</span>
                      <span className="text-muted-foreground leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Exercises */}
              <div className="space-y-3 bg-success/5 rounded-lg p-4 border border-success/20">
                <div className="flex items-center gap-2 text-success">
                  <Target className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">6 Exercícios Práticos</h3>
                </div>
                <ul className="space-y-2">
                  {selectedDayData.practicalExercises.map((exercise, i) => (
                    <li key={i} className="flex items-start gap-2" data-testid={`practical-exercise-${selectedDay}-${i}`}>
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-success" />
                      <span className="text-muted-foreground text-sm">{exercise}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recipe */}
              <div className="space-y-3 bg-card/50 rounded-lg p-4 border border-card-border">
                <div className="flex items-center gap-2 text-primary">
                  <ChefHat className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Receita: {selectedDayData.recipe.title}</h3>
                </div>
                
                <div className="flex gap-4 text-sm">
                  <Badge variant="outline" data-testid={`recipe-servings-${selectedDay}`}>
                    {selectedDayData.recipe.servings}
                  </Badge>
                  <Badge variant="outline" data-testid={`recipe-time-${selectedDay}`}>
                    {selectedDayData.recipe.prepTime}
                  </Badge>
                  <Badge variant="outline" data-testid={`recipe-calories-${selectedDay}`}>
                    {selectedDayData.recipe.calories}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-sm">Ingredientes:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {selectedDayData.recipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-2" data-testid={`ingredient-${selectedDay}-${i}`}>
                        <Droplet className="w-3 h-3 mt-1 flex-shrink-0 text-primary" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-sm">Modo de Preparo:</h4>
                  <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                    {selectedDayData.recipe.preparation.map((step, i) => (
                      <li key={i} data-testid={`preparation-${selectedDay}-${i}`}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                {selectedDayData.recipe.tips && (
                  <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-accent">Dica: </span>
                      {selectedDayData.recipe.tips}
                    </p>
                  </div>
                )}
              </div>

              {/* Workout */}
              <div className="space-y-3 bg-accent/5 rounded-lg p-4 border border-accent/20">
                <div className="flex items-center gap-2 text-accent">
                  <Dumbbell className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Treino: {selectedDayData.workout.title}</h3>
                </div>
                
                <div className="flex gap-4 text-sm">
                  <Badge variant="outline" data-testid={`workout-duration-${selectedDay}`}>
                    {selectedDayData.workout.duration}
                  </Badge>
                  <Badge variant="outline" data-testid={`workout-level-${selectedDay}`}>
                    {selectedDayData.workout.level}
                  </Badge>
                </div>
                
                <ul className="space-y-2 text-sm">
                  {selectedDayData.workout.exercises.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2" data-testid={`exercise-${selectedDay}-${i}`}>
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="font-medium text-sm">Suas Anotações</label>
                <Textarea
                  placeholder="Escreva aqui suas observações sobre o dia..."
                  value={dayNote}
                  onChange={(e) => setDayNote(e.target.value)}
                  onBlur={saveNote}
                  className="min-h-[80px] resize-none"
                  data-testid={`textarea-notes-${selectedDay}`}
                />
              </div>

              {/* Complete Button */}
              <Button
                onClick={() => selectedDay && toggleDayCompletion(selectedDay)}
                variant={isDayCompleted(selectedDay!) ? "secondary" : "default"}
                className={`w-full gap-2 ${!isDayCompleted(selectedDay!) ? 'bg-success' : ''}`}
                size="lg"
                data-testid={`button-toggle-complete-${selectedDay}`}
              >
                {isDayCompleted(selectedDay!) ? (
                  <>
                    <X className="w-5 h-5" />
                    Desmarcar como Feito
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Marcar como Feito
                  </>
                )}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Reward Modal - A cada 3 dias */}
      <Dialog open={showReward} onOpenChange={setShowReward}>
        <DialogContent className="sm:max-w-lg text-center" data-testid="modal-reward">
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="relative">
              <Award className="w-20 h-20 text-accent animate-bounce" />
              <Heart className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-pulse" />
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl">Parabéns! 🎉</DialogTitle>
              <DialogDescription className="text-lg pt-2">
                Você completou {rewardDay} dias do desafio!
              </DialogDescription>
            </DialogHeader>
            
            <div className="w-full bg-gradient-to-br from-success/10 to-accent/10 rounded-lg p-4 border border-success/20">
              <h3 className="font-semibold text-lg mb-3 flex items-center justify-center gap-2">
                <TrendingDown className="w-5 h-5 text-success" />
                Benefícios Já Conquistados
              </h3>
              <ul className="space-y-2 text-left text-sm">
                {getRewardBenefits(rewardDay).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-success" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 w-full">
              <p className="text-sm font-medium text-primary">
                {getRewardMotivation(rewardDay)}
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              Continue assim! Você está cada vez mais perto do corpo dos seus sonhos.
            </div>
            
            <div className="flex gap-3 w-full">
              <Button
                onClick={handleShare}
                variant="outline"
                className="flex-1 gap-2"
                data-testid="button-share-reward"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
              <Button
                onClick={() => setShowReward(false)}
                className="flex-1 bg-accent hover:bg-accent/90"
                data-testid="button-continue-reward"
              >
                Continuar Desafio
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Congratulations Modal */}
      <Dialog open={showCongrats} onOpenChange={setShowCongrats}>
        <DialogContent className="sm:max-w-md text-center" data-testid="modal-congratulations">
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="relative">
              <Award className="w-24 h-24 text-accent animate-pulse" />
              <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-bounce" />
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl">Parabéns!</DialogTitle>
              <DialogDescription className="text-lg pt-2">
                Você completou todos os 30 dias do desafio!
              </DialogDescription>
            </DialogHeader>
            
            <p className="text-muted-foreground">
              Sua dedicação e esforço foram incríveis. Continue mantendo os hábitos saudáveis conquistados!
            </p>
            
            <div className="flex gap-3 w-full">
              <Button
                onClick={handleShare}
                variant="outline"
                className="flex-1 gap-2"
                data-testid="button-share-achievement"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
              <Button
                onClick={() => setShowCongrats(false)}
                className="flex-1"
                data-testid="button-close-congrats"
              >
                Fechar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
