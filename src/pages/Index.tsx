import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Mandamentos from "@/components/Mandamentos";
import Graduacoes from "@/components/Graduacoes";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Historia />
      <Mandamentos />
      <Graduacoes />
      <Localizacao />
      <Footer />
    </div>
  );
};

export default Index;
