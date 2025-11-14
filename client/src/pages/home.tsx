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
  Sparkles,
  X,
  Settings
} from "lucide-react";

interface ChallengeState {
  completedDays: number[];
  notes: { [key: number]: string };
  isUnlocked: boolean;
}

export default function Home() {
  const { toast } = useToast();
  const [showHero, setShowHero] = useState(true);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [challengeState, setChallengeState] = useState<ChallengeState>({
    completedDays: [],
    notes: {},
    isUnlocked: false
  });
  const [showCongrats, setShowCongrats] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showReset, setShowReset] = useState(false);
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
  const FREE_DAYS = 10;

  const isDayUnlocked = (day: number) => {
    return day <= FREE_DAYS || challengeState.isUnlocked;
  };

  const isDayCompleted = (day: number) => {
    return challengeState.completedDays.includes(day);
  };

  const toggleDayCompletion = (day: number) => {
    setChallengeState(prev => {
      const isCompleted = prev.completedDays.includes(day);
      const newCompleted = isCompleted
        ? prev.completedDays.filter(d => d !== day)
        : [...prev.completedDays, day].sort((a, b) => a - b);

      if (!isCompleted && newCompleted.length === 30) {
        setTimeout(() => setShowCongrats(true), 300);
      }

      return { ...prev, completedDays: newCompleted };
    });

    toast({
      title: isDayCompleted(day) ? "Dia desmarcado" : "Dia concluído",
      description: isDayCompleted(day) 
        ? `Dia ${day} foi desmarcado` 
        : `Parabéns por completar o Dia ${day}`,
    });
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

  const unlockAllDays = () => {
    setChallengeState(prev => ({ ...prev, isUnlocked: true }));
    setShowPayment(false);
    toast({
      title: "Todos os dias desbloqueados",
      description: "Agora você tem acesso completo ao desafio de 30 dias",
    });
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
        isUnlocked: false
      });
      setShowReset(false);
      toast({
        title: "Desafio resetado",
        description: "Todo o progresso foi apagado. Boa sorte no novo desafio",
      });
    }
  };

  const selectedDayData = selectedDay ? challengeData.find(d => d.day === selectedDay) : null;

  if (showHero) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
          <Sparkles className="w-16 h-16 text-white mb-6 animate-pulse" data-testid="icon-sparkles" />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" data-testid="text-hero-title">
            Emagreça Até o Verão
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 backdrop-blur-sm" data-testid="badge-challenge-days">
              <Flame className="w-4 h-4 mr-2" />
              Desafio de 30 Dias
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed drop-shadow" data-testid="text-hero-subtitle">
            Receitas saudáveis, treinos eficientes e desafios diários para secar até o verão
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => setShowHero(false)}
              className="bg-white text-primary rounded-full shadow-xl"
              data-testid="button-enter-challenge"
            >
              <Award className="w-5 h-5 mr-2" />
              Entrar no Desafio
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center text-white/80 mt-8">
            <div className="flex items-center gap-2" data-testid="feature-recipes">
              <ChefHat className="w-5 h-5" />
              <span className="text-sm">Receitas Diárias</span>
            </div>
            <div className="flex items-center gap-2" data-testid="feature-workouts">
              <Dumbbell className="w-5 h-5" />
              <span className="text-sm">Treinos Personalizados</span>
            </div>
            <div className="flex items-center gap-2" data-testid="feature-tips">
              <Lightbulb className="w-5 h-5" />
              <span className="text-sm">Dicas Especializadas</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Progress Bar */}
      <div className="sticky top-0 z-40 bg-card border-b border-card-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2" data-testid="text-progress-title">
              <Flame className="w-5 h-5 text-accent" />
              Seu Progresso
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
        {/* Unlock Section */}
        {!challengeState.isUnlocked && (
          <Card className="mb-8 border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5" data-testid="card-unlock-section">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lock className="w-6 h-6 text-accent" />
                Desbloqueie Todos os 30 Dias
              </CardTitle>
              <CardDescription className="text-base">
                Acesse o desafio completo com todas as receitas, treinos e dicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">30 dias de receitas saudáveis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Treinos progressivos personalizados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Dicas diárias de nutricionistas</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2" data-testid="text-price">
                    R$ 29,90
                  </div>
                  <Button
                    size="lg"
                    onClick={unlockAllDays}
                    className="bg-accent gap-2 rounded-full"
                    data-testid="button-unlock-all"
                  >
                    <Sparkles className="w-5 h-5" />
                    Acessar Agora
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Day Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {challengeData.map((day) => {
            const unlocked = isDayUnlocked(day.day);
            const completed = isDayCompleted(day.day);

            return (
              <Card
                key={day.day}
                onClick={() => unlocked && setSelectedDay(day.day)}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-200
                  ${unlocked ? 'hover-elevate' : 'opacity-60'}
                  ${completed ? 'border-2 border-success' : ''}
                `}
                data-testid={`card-day-${day.day}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center text-center min-h-[100px]">
                    {!unlocked ? (
                      <>
                        <Lock className="w-8 h-8 text-locked mb-2" data-testid={`icon-locked-${day.day}`} />
                        <span className="text-sm text-muted-foreground">Bloqueado</span>
                      </>
                    ) : (
                      <>
                        <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-day-number-${day.day}`}>
                          {day.day}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Dia {day.day}
                        </div>
                      </>
                    )}
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
              {/* Tip */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Dica do Dia</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-7" data-testid={`text-tip-${selectedDay}`}>
                  {selectedDayData.tip}
                </p>
              </div>

              {/* Recipe */}
              <div className="space-y-3 bg-card/50 rounded-lg p-4 border border-card-border">
                <div className="flex items-center gap-2 text-primary">
                  <ChefHat className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Receita: {selectedDayData.recipe.title}</h3>
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
                  <h4 className="font-medium mb-2 text-sm">Preparo:</h4>
                  <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                    {selectedDayData.recipe.preparation.map((step, i) => (
                      <li key={i} data-testid={`preparation-${selectedDay}-${i}`}>{step}</li>
                    ))}
                  </ol>
                </div>
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
