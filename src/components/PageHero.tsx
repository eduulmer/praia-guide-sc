import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, children }: PageHeroProps) => (
  <section className="bg-sand-gradient py-16 md:py-20">
    <div className="container text-center">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default PageHero;
