import { ShieldCheck, Volume2, Clock, Cigarette, Dog, Trash2, Car, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const rules = [
  { icon: <Clock className="h-5 w-5" />, title: "Check-in e Check-out", desc: "Check-in a partir das 15h e check-out até as 11h. Horários diferentes podem ser combinados com antecedência." },
  { icon: <Volume2 className="h-5 w-5" />, title: "Silêncio", desc: "Respeite o horário de silêncio das 22h às 8h. Sons altos incomodam vizinhos e outros hóspedes." },
  { icon: <Users className="h-5 w-5" />, title: "Número de Hóspedes", desc: "Respeite o número máximo de hóspedes informado na reserva. Visitantes extras devem ser comunicados." },
  { icon: <Cigarette className="h-5 w-5" />, title: "Proibido Fumar", desc: "Não é permitido fumar dentro do imóvel. Utilize as áreas externas e descarte bitucas adequadamente." },
  { icon: <Dog className="h-5 w-5" />, title: "Animais de Estimação", desc: "Consulte antes de trazer pets. Quando permitidos, mantenha a limpeza e cuide para não incomodar vizinhos." },
  { icon: <Trash2 className="h-5 w-5" />, title: "Lixo e Limpeza", desc: "Separe o lixo reciclável do orgânico. Deixe o imóvel organizado ao sair. Sacos de lixo estão disponíveis na cozinha." },
  { icon: <Car className="h-5 w-5" />, title: "Estacionamento", desc: "Utilize apenas as vagas designadas para o imóvel. Não bloqueie a entrada de outros moradores." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Segurança", desc: "Mantenha portas e janelas trancadas ao sair. Em caso de emergência, ligue para o número informado no check-in." },
];

const RegrasPage = () => (
  <PageLayout>
    <PageHero
      title="Regras da Casa"
      subtitle="Para garantir uma estadia agradável para todos, pedimos que sigam estas orientações"
    />
    <section className="py-12">
      <div className="container max-w-3xl">
        <div className="space-y-4">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-primary mt-0.5 shrink-0">{rule.icon}</div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{rule.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default RegrasPage;
