import beltImage from "@/assets/belt-ranks.jpg";

const graduacoes = [
  {
    cor: "Branca",
    grau: "10º Gub",
    significado: "Pureza e inocência - o início da jornada"
  },
  {
    cor: "Amarela",
    grau: "9º-8º Gub",
    significado: "Terra - onde a semente do conhecimento é plantada"
  },
  {
    cor: "Verde",
    grau: "7º-6º Gub",
    significado: "Crescimento - a planta começa a crescer"
  },
  {
    cor: "Azul",
    grau: "5º-4º Gub",
    significado: "Céu - a planta cresce em direção ao céu"
  },
  {
    cor: "Vermelha",
    grau: "3º-1º Gub",
    significado: "Perigo - cautela, controle e refinamento das técnicas"
  },
  {
    cor: "Preta",
    grau: "1º Dan em diante",
    significado: "Maturidade - o oposto da brancura, mas também um novo começo"
  }
];

const Graduacoes = () => {
  return (
    <section id="graduacoes" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Sistema de Graduações
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 mb-8">
                O sistema de graduação no Hapkido é representado por faixas coloridas (Gubs) 
                para iniciantes e intermediários, e faixas pretas (Dans) para praticantes avançados. 
                Cada cor representa uma etapa no desenvolvimento do praticante.
              </p>
              
              <div className="space-y-4">
                {graduacoes.map((grad, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-4 h-16 rounded flex-shrink-0"
                        style={{ 
                          backgroundColor: grad.cor === "Branca" ? "#ffffff" :
                                         grad.cor === "Amarela" ? "#fbbf24" :
                                         grad.cor === "Verde" ? "#22c55e" :
                                         grad.cor === "Azul" ? "#3b82f6" :
                                         grad.cor === "Vermelha" ? "#ef4444" :
                                         "#000000",
                          border: grad.cor === "Branca" ? "1px solid #d1d5db" : "none"
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 text-foreground">
                          Faixa {grad.cor}
                        </h3>
                        <p className="text-sm font-semibold text-primary mb-2">
                          {grad.grau}
                        </p>
                        <p className="text-foreground/70">
                          {grad.significado}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:sticky lg:top-8">
              <img 
                src={beltImage}
                alt="Sistema de Faixas do Hapkido" 
                className="rounded-lg shadow-2xl w-full object-cover animate-fade-in"
              />
              <div className="mt-6 p-6 bg-primary/10 border-l-4 border-primary rounded">
                <p className="text-foreground/80">
                  <span className="font-bold text-primary">Importante:</span> O progresso através 
                  das graduações requer dedicação, prática constante e demonstração de 
                  habilidades técnicas e filosóficas do Hapkido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graduacoes;