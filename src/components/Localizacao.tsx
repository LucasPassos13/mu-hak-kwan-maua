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
                  Academia Hapkido Mu Hak Kwan - Mauá
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
                      Rua Agenor Freire de Moraes, 138 - Jardim Zaira, Maua - SP, 09.320-620
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
                      Terça e Quinta: 08h às 09:30h e 18:00h as 19:30h<br />
                      Sábado: 08:30 às 10h
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
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => window.open('https://wa.me/5511XXXXXXXXX?text=Olá, gostaria de agendar uma aula experimental de Hapkido', '_blank')}
                >
                  Agende uma Aula Experimental
                </Button>
              </div>
            </div>
            
            <div className="h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <iframe
                title="Localização da Academia"
                src="https://maps.google.com/maps?q=Rua%20Agenor%20Freire%20de%20Moraes%2C%20138%20Mau%C3%A1%20SP%2009320-620&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;