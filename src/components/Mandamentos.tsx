import { Shield, Heart, Brain, Users, Target, Award } from "lucide-react";

const mandamentos = [
  {
    icon: Shield,
    title: "Lealdade à Nação",
    description: "Ser leal ao seu país e respeitar os princípios de justiça"
  },
  {
    icon: Heart,
    title: "Respeito aos Pais",
    description: "Honrar e respeitar seus pais e mestres"
  },
  {
    icon: Users,
    title: "Harmonia entre Amigos",
    description: "Cultivar amizades verdadeiras e ser leal aos companheiros"
  },
  {
    icon: Brain,
    title: "Nunca Recuar em Combate",
    description: "Enfrentar desafios com coragem e determinação"
  },
  {
    icon: Target,
    title: "Seletividade no Uso da Força",
    description: "Usar técnicas de luta apenas quando necessário"
  },
  {
    icon: Award,
    title: "Viver com Integridade",
    description: "Manter honestidade e integridade em todas as ações"
  }
];

const Mandamentos = () => {
  return (
    <section id="mandamentos" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Mandamentos do Hapkido
          </h2>
          <p className="text-center text-xl mb-16 text-secondary-foreground/80 max-w-3xl mx-auto">
            Os princípios fundamentais que guiam todo praticante de Hapkido
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mandamentos.map((mandamento, index) => (
              <div 
                key={index}
                className="bg-background/10 backdrop-blur-sm p-8 rounded-lg hover:bg-background/20 transition-all duration-300 hover:scale-105 animate-fade-in border border-secondary-foreground/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 mx-auto">
                  <mandamento.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  {mandamento.title}
                </h3>
                <p className="text-center text-secondary-foreground/80">
                  {mandamento.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mandamentos;