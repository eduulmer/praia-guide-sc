import { Shell } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <Shell className="h-5 w-5" />
          Guia do Hóspede
        </div>
        <p className="text-sm opacity-70">
          Governador Celso Ramos, SC — Seu guia completo na região
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
