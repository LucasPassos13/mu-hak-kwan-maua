import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Localizacao = () => {
  return (
    <section id="location" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Localização
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Academia Mu Hak Kwan - Mauá
                </h3>
                <p className="text-lg text-secondary-foreground/80 mb-8">
                  Venha nos visitar e conheça nossa estrutura. Oferecemos aulas para todas as idades 
                  e níveis, do iniciante ao avançado.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-secondary-foreground/80">
                      Mauá - São Paulo<br />
                      (Endereço completo a ser informado)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-secondary-foreground/80">
                      Segunda a Sexta: 18h às 22h<br />
                      Sábado: 9h às 12h
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefone</h4>
                    <p className="text-secondary-foreground/80">
                      (11) XXXX-XXXX
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">E-mail</h4>
                    <p className="text-secondary-foreground/80">
                      contato@muhakkwan.com.br
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Agende uma Aula Experimental
                </Button>
              </div>
            </div>
            
            <div className="h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.04296458678!2d-46.461607!3d-23.667839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69f7f6c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sMau%C3%A1%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Academia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;