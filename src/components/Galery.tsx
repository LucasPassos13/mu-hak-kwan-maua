import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importe suas imagens aqui - exemplo:
import gallery1 from "@/assets/1.jpeg";
import gallery2 from "@/assets/2.jpeg";
import gallery3 from "@/assets/3.jpeg";
import gallery5 from "@/assets/5.jpeg";

// Dados de exemplo - substitua com suas próprias imagens
const fotosGaleria = [
  {
    id: 1,
    src: gallery1,
    alt: "",
    titulo: ""
  },
  {
    id: 2,
    src: gallery2,
    alt: "",
    titulo: ""
  },
  {
    id: 3,
    src: gallery3,
    alt: "",
    titulo: ""
  },
  {
    id: 5,
    src: gallery5,
    alt: "",
    titulo: ""
  }
];

const Galery = () => {
  const [fotoAtual, setFotoAtual] = useState(0);

  const fotoAnterior = () => {
    setFotoAtual((atual) => (atual === 0 ? fotosGaleria.length - 1 : atual - 1));
  };

  const proximaFoto = () => {
    setFotoAtual((atual) => (atual === fotosGaleria.length - 1 ? 0 : atual + 1));
  };

  const irParaFoto = (index: number) => {
    setFotoAtual(index);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Nossa Galeria
          </h2>
          
          <div className="relative bg-card border border-border rounded-lg p-6 shadow-lg">
            {/* Carrossel Principal */}
            <div className="relative rounded-lg mb-6">
              <div className="aspect-video w-full max-h-96">
                {fotosGaleria.map((foto, index) => (
                  <div
                    key={foto.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === fotoAtual ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img 
                      src={foto.src} 
                      alt={foto.alt} 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
              
              {/* Botões de Navegação */}
              <button
                onClick={fotoAnterior}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={proximaFoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicador de Posição */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm text-foreground z-10">
                {fotoAtual + 1} / {fotosGaleria.length}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="grid-cols-3">
              {fotosGaleria.map((foto, index) => (
                <button
                  key={foto.id}
                  onClick={() => irParaFoto(index)}
                  className={`relative h-16 aspect-video rounded-md overflow-hidden transition-all  ${
                    index === fotoAtual
                      ? "ring-2 ring-primary scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Ver ${foto.titulo}`}
                >
                  <img 
                    src={foto.src} 
                    alt={foto.alt} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Legenda */}
            <div className="text-center mt-6 p-4 bg-muted rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {fotosGaleria[fotoAtual].titulo}
              </h3>
              <p className="text-foreground/70">
                {fotosGaleria[fotoAtual].alt}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Confira os momentos marcantes do nosso dojang, treinos, 
              graduações e eventos especiais da família Hapkido Mu Hak Kwan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galery;