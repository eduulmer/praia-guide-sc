import { Store, Car, Stethoscope, ShoppingBag, Wrench, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const partners = [
  { icon: <Car className="h-5 w-5" />, category: "Transporte", name: "Transfer GCR", desc: "Serviço de transfer do aeroporto de Florianópolis até Governador Celso Ramos. Agendamento via WhatsApp." },
  { icon: <Store className="h-5 w-5" />, category: "Mercado", name: "Mercado Gancheiro", desc: "O mercado mais completo da região. Frios, bebidas, produtos de praia e itens de necessidade." },
  { icon: <Stethoscope className="h-5 w-5" />, category: "Saúde", name: "Farmácia Central", desc: "Farmácia com plantão noturno e delivery para emergências. Localizada no centro da cidade." },
  { icon: <ShoppingBag className="h-5 w-5" />, category: "Artesanato", name: "Ateliê Costa Esmeralda", desc: "Artesanato local com peças em cerâmica, renda e souvenirs da região. Ótimo para lembranças." },
  { icon: <Sparkles className="h-5 w-5" />, category: "Bem-estar", name: "Espaço Zen Massagem", desc: "Massagens relaxantes e terapêuticas com agendamento flexível. Atendimento no imóvel disponível." },
  { icon: <Wrench className="h-5 w-5" />, category: "Manutenção", name: "Suporte 24h", desc: "Em caso de problemas no imóvel, entre em contato conosco. Temos equipe de manutenção rápida." },
];

const ParceirosPage = () => (
  <PageLayout>
    <PageHero
      title="Parceiros Locais"
      subtitle="Serviços e comércios de confiança para facilitar sua estadia"
    />
    <section className="py-12">
      <div className="container max-w-3xl">
        <div className="space-y-4">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="bg-ocean-light p-2.5 rounded-lg text-primary shrink-0">{p.icon}</div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">{p.category}</span>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ParceirosPage;
