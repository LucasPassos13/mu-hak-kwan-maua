import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hapkido.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            MU HAK KWAN
          </h1>
          <div className="text-2xl md:text-4xl text-white mb-4 font-light">
            Academia de Hapkido
          </div>
          <div className="text-xl md:text-2xl text-accent mb-8 font-semibold">
            Liderada pelo Kiosanin Joel
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Descubra a arte marcial coreana que combina técnicas de defesa pessoal, 
            filosofia e disciplina em Mauá
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('location')}
            >
              Visite Nossa Academia
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold text-lg px-8 py-6 backdrop-blur-sm"
              onClick={() => scrollToSection('historia')}
            >
              Conheça o Hapkido
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;