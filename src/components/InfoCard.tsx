interface InfoCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  tag?: string;
}

const InfoCard = ({ icon, title, description, image, tag }: InfoCardProps) => (
  <div className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    {image && (
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-5">
      {tag && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          {tag}
        </span>
      )}
      <div className="flex items-start gap-3">
        {icon && <div className="text-primary mt-1 shrink-0">{icon}</div>}
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default InfoCard;
