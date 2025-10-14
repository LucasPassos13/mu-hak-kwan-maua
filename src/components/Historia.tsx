import symbolImage from "@/assets/hapkido-symbol.jpg";

const Historia = () => {
  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            História do Hapkido
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-foreground/80 animate-fade-in">
              <p>
                O Hapkido é uma arte marcial coreana moderna que combina técnicas de defesa pessoal, 
                chutes, socos, quedas, projeções e controles articulares. Desenvolvido no século XX, 
                o Hapkido representa a harmonia entre corpo, mente e espírito.
              </p>
              <p>
                A palavra <span className="font-semibold text-primary">Hapkido</span> significa 
                "o caminho da coordenação de energia". <span className="font-semibold">Hap</span> (coordenação, união), 
                <span className="font-semibold"> Ki</span> (energia vital) e <span className="font-semibold">Do</span> (caminho, arte).
              </p>
              <p>
                Fundado pelo Grão-Mestre Choi Yong-Sul após estudar artes marciais no Japão, 
                o Hapkido se desenvolveu na Coreia incorporando elementos da cultura e filosofia coreanas, 
                tornando-se uma das artes marciais mais completas e eficazes do mundo.
              </p>
              <p className="text-primary font-semibold">
                A escola Mu Hak Kwan mantém viva essa tradição, ensinando não apenas técnicas de combate, 
                mas também valores fundamentais de respeito, disciplina e autocontrole.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src={symbolImage} 
                alt="Símbolo do Hapkido" 
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;