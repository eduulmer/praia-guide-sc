import { Home, Users, DoorOpen, ParkingCircle, Wifi, MapPin, Phone, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

// Importe as imagens aqui (você vai buscar as fotos depois)
// import apto01 from "@/assets/hospedagem-apto-01.jpg";
// import apto02 from "@/assets/hospedagem-apto-02.jpg";
// import apto03 from "@/assets/hospedagem-apto-03.jpg";

type Hospedagem = {
  codigo: string;
  nome: string;
  desc: string;
  imagem: string; // Nome da imagem que você vai buscar

  quartos: number;
  banheiros: number;
  ocupacao: number;
  garagem: number;

  precoDiaria: string;
  precoLimpeza: string;

  destaque: string[];
  amenities: string[];
  
  whatsapp?: string;
  telefone?: string;
  endereco: string;
};

function chipClass() {
  return "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-semibold text-foreground";
}

const hospedagens: Hospedagem[] = [
  {
    codigo: "166-001",
    nome: "Apto 01 - Frente ao Mar",
    desc: "Perfeito para casais ou pequenos grupos. Localizado frente ao mar da Praia da Camboa com vista deslumbrante e acesso direto à praia.",
    imagem: "hospedagem-apto-01.jpg",

    quartos: 1,
    banheiros: 1,
    ocupacao: 4,
    garagem: 1,

    precoDiaria: "R$ 450 a R$ 550",
    precoLimpeza: "R$ 250",

    destaque: ["Ar Condicionado", "Frente para o Mar", "Internet", "Litoral", "Quintal"],
    amenities: [
      "Churrasqueira",
      "2 Televisores",
      "Geladeira",
      "Fogão 4 bocas",
      "Micro-ondas",
      "Airfryer",
      "Chaleira elétrica",
      "Cafeteira",
      "Liquidificador",
      "Wi-fi",
      "Câmeras de segurança",
    ],

    whatsapp: "(48) 3262-9282",
    telefone: "(48) 3262-9282",
    endereco: "Rua Luiz Alexandrino Silva, 894 - Apto 01 - Camboa da Armação",
  },
  {
    codigo: "166-002",
    nome: "Apto 02 - Premium (2 Banheiros)",
    desc: "Nossa opção mais completa! 2 dormitórios com 2 banheiros. Ideal para famílias. Churrasqueira exclusiva e conforto premium frente ao mar.",
    imagem: "hospedagem-apto-02.jpg",

    quartos: 2,
    banheiros: 2,
    ocupacao: 4,
    garagem: 1,

    precoDiaria: "R$ 500 a R$ 750",
    precoLimpeza: "R$ 250",

    destaque: ["Ar Condicionado", "Frente para o Mar", "Internet", "Lavabo", "Churrasqueira"],
    amenities: [
      "Churrasqueira a carvão",
      "2 Televisores",
      "Geladeira duplex",
      "Fogão 4 bocas + Forno elétrico",
      "Micro-ondas",
      "Airfryer",
      "Chaleira elétrica",
      "Batedeira",
      "Centrífuga de suco",
      "Liquidificador",
      "Processador de alimentos",
      "Wi-fi",
      "Câmeras de segurança",
    ],

    whatsapp: "(48) 3262-9282",
    telefone: "(48) 3262-9282",
    endereco: "Rua Luiz Alexandrino Silva, 894 - Apto 02 - Camboa da Armação",
  },
  {
    codigo: "166-003",
    nome: "Apto 03 - Conforto",
    desc: "2 dormitórios aconchegantes, perfeito para famílias que querem espaço e conforto. Localização privilegiada frente ao mar.",
    imagem: "hospedagem-apto-03.jpg",

    quartos: 2,
    banheiros: 1,
    ocupacao: 4,
    garagem: 1,

    precoDiaria: "R$ 400 a R$ 550",
    precoLimpeza: "R$ 250",

    destaque: ["Ar Condicionado", "Frente para o Mar", "Internet", "Litoral"],
    amenities: [
      "Wi-fi",
      "Televisore na sala",
      "Geladeira duplex",
      "Fogão 4 bocas + Forno",
      "Liquidificador",
      "Airfryer",
      "Espremedor de frutas",
      "Sanduicheira",
      "Ferro de passar roupas",
      "Ar-condicionado na sala",
      "Câmeras de segurança externa",
    ],

    whatsapp: "(48) 3262-9282",
    telefone: "(48) 3262-9282",
    endereco: "Rua Luiz Alexandrino Silva, 894 - Apto 03 - Camboa da Armação",
  },
];

const HospedagensPage = () => (
  <PageLayout>
    <PageHero
      title="Hospedagens"
      subtitle="Três opções confortáveis frente ao mar em Governador Celso Ramos"
    />

    <section className="py-12">
      <div className="container">
        <div className="space-y-8">
          {hospedagens.map((h, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-6 bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Imagem */}
              <div className="h-64 md:h-auto overflow-hidden">
                <img
                  src={`/src/assets/${h.imagem}`}
                  alt={h.nome}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        Código {h.codigo}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {h.nome}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {h.desc}
                  </p>

                  {/* Specs principais */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className={chipClass()}>
                      <DoorOpen className="h-3.5 w-3.5 opacity-80" />
                      {h.quartos} Quarto(s)
                    </div>
                    <div className={chipClass()}>
                      <Users className="h-3.5 w-3.5 opacity-80" />
                      Até {h.ocupacao} pessoa(s)
                    </div>
                    <div className={chipClass()}>
                      <Home className="h-3.5 w-3.5 opacity-80" />
                      {h.banheiros} Banheiro(s)
                    </div>
                    <div className={chipClass()}>
                      <ParkingCircle className="h-3.5 w-3.5 opacity-80" />
                      {h.garagem} Vaga
                    </div>
                  </div>

                  {/* Preço */}
                  <div className="mb-4 p-3 bg-muted/30 rounded-lg border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Diária</div>
                    <div className="font-semibold text-foreground">{h.precoDiaria}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Taxa de limpeza: {h.precoLimpeza}
                    </div>
                  </div>

                  {/* Destaques */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">
                      Destaques:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {h.destaque.map((d) => (
                        <span key={d} className={chipClass()}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">
                      Amenidades:
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {h.amenities.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span>•</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contato */}
                <div className="border-t border-border pt-4 flex gap-2">
                  {h.whatsapp && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=55${h.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-primary hover:bg-muted transition-colors"
                      aria-label={`Contatar via WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  )}
                  {h.telefone && (
                    <a
                      href={`tel:${h.telefone}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-primary hover:bg-muted transition-colors"
                      aria-label={`Ligar para ${h.telefone}`}
                    >
                      <Phone className="h-4 w-4" />
                      Ligar
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info extra */}
        <div className="mt-12 bg-muted/30 border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3">Informações importantes</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>
              • <strong>Mínimo de diárias:</strong> 10 dias (5 dias no Carnaval)
            </li>
            <li>
              • <strong>Localização:</strong> Todas as unidades ficam frente ao mar da Praia da
              Camboa da Armação, em Governador Celso Ramos
            </li>
            <li>
              • <strong>Regras:</strong> Não é permitido fumar, animais de estimação ou festas
            </li>
            <li>
              • <strong>Obs:</strong> As hospedagens não incluem roupas de cama, mesa, banho,
              guarda-sol ou cadeiras de praia
            </li>
            <li>
              • <strong>Contato:</strong> Consulte disponibilidade diretamente com a equipe da{" "}
              <a
                href="https://admiranda.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Admir Miranda
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default HospedagensPage;
