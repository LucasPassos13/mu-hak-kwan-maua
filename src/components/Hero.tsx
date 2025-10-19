import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.png";
import logoHapkido from "@/assets/logo.png";
import logoTakeda from "@/assets/logo_takeda.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="absolute top-6 left-6 z-20 animate-fade-in">
        <img 
          src={logoTakeda} 
          alt="Takeda Centro de Treinamento de Lutas Logo" 
          className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
        />
      </div>
      
      <div className="absolute top-6 right-6 z-20 animate-fade-in">
        <img 
          src={logoHapkido} 
          alt="International Hapki Do Federation Logo" 
          className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            HAPKIDO
          </h1>
          <div className="text-2xl md:text-4xl text-white mb-4 font-light">
            Estilo Mu Hak Kwan
          </div>
          <div className="text-xl md:text-2xl text-accent mb-8 font-semibold">
            Kiosanin Joel Borges
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Descubra a arte marcial coreana que combina técnicas de defesa pessoal, 
            filosofia e disciplina em Mauá
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://wa.me/5511XXXXXXXXX?text=Olá, gostaria de agendar uma aula experimental de Hapkido', '_blank')}
            >
              Agende uma Aula Experimental
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold text-lg px-8 py-6 backdrop-blur-sm"
              onClick={() => scrollToSection('location')}
            >
              Visite Nossa Academia
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