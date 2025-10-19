import logoHapkido from "@/assets/logo.png";
import logoTakeda from "@/assets/logo_takeda.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Banner de Inscrições Abertas */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 px-6 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                INSCRIÇÕES ABERTAS
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Venha fazer parte da nossa família Hapkido!
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src={logoTakeda} 
                alt="International Hapki Do Federation Logo" 
                className="w-20 h-20"
              />
              <img 
                src={logoHapkido} 
                alt="International Hapki Do Federation Logo" 
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Hapkido - Mu Hak Kwan</h3>
            <p className="text-secondary-foreground/70 mb-6">
              Kiosanin Joel Borges - Hapkido tradicional em Mauá
            </p>
            <div className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Mu Hak Kwan. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;