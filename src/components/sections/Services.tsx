import { Hand, Eye, Sparkles, Zap } from "lucide-react";

export const serviceCategories = [
  {
    icon: Hand,
    title: "Περιποίηση Άκρων",
    subtitle: "Manicure & Pedicure",
    items: [
      { name: "Απλό Μανικιούρ", duration: "30΄", price: "15€" },
      { name: "Ημιμόνιμο Μανικιούρ", duration: "60΄", price: "25€" },
      { name: "Build-up / Gel Επέκταση", duration: "90΄", price: "40€" },
      { name: "Spa Πεντικιούρ", duration: "60΄", price: "30€" },
      { name: "Ημιμόνιμο Πεντικιούρ", duration: "75΄", price: "35€" },
    ],
  },
  {
    icon: Eye,
    title: "Βλέμμα",
    subtitle: "Brows & Lashes",
    items: [
      { name: "Brow Lamination", duration: "45΄", price: "30€" },
      { name: "Σχηματισμός & Βαφή Φρυδιών", duration: "30΄", price: "15€" },
      { name: "Lash Lift & Tint", duration: "60΄", price: "45€" },
      { name: "Επέκταση Βλεφαρίδων", duration: "120΄", price: "60€" },
    ],
  },
  {
    icon: Sparkles,
    title: "Αισθητική & Ευεξία",
    subtitle: "Wellness & Body",
    items: [
      { name: "EMS Συνεδρία", duration: "25΄", price: "35€" },
      { name: "Cryosauna", duration: "3΄", price: "30€" },
      { name: "Solarium (10 λεπτά)", duration: "10΄", price: "12€" },
      { name: "Πακέτο 10 EMS", duration: "—", price: "300€" },
    ],
  },
  {
    icon: Zap,
    title: "Αποτρίχωση",
    subtitle: "Laser & Waxing",
    items: [
      { name: "Laser Πρόσωπο (πλήρες)", duration: "30΄", price: "40€" },
      { name: "Laser Μασχάλες", duration: "15΄", price: "25€" },
      { name: "Laser Bikini Πλήρες", duration: "30΄", price: "50€" },
      { name: "Laser Πόδια Πλήρη", duration: "60΄", price: "80€" },
      { name: "Waxing Full Body", duration: "75΄", price: "55€" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-gradient-luxe">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="divider-ornament text-xs tracking-[0.4em] uppercase mb-5">
            Τιμοκατάλογος
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-balance">
            Υπηρεσίες <em className="text-gradient-rose not-italic">σχεδιασμένες</em> για εσάς
          </h2>
          <p className="mt-6 text-foreground/65 leading-relaxed">
            Ένα ολοκληρωμένο spa menu από επιλεγμένες υπηρεσίες, με χρήση των πιο
            premium προϊόντων και τεχνολογίας.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-soft hover-lift border border-border/40"
              >
                <div className="flex items-start gap-5 pb-6 border-b border-border/60">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-rose flex items-center justify-center text-white shadow-rose">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                      {cat.title}
                    </h3>
                    <p className="text-xs tracking-[0.3em] uppercase text-[var(--rose-gold-deep)] mt-1">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {cat.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-baseline gap-3 group"
                    >
                      <span className="text-foreground/85">{it.name}</span>
                      <span className="flex-1 border-b border-dotted border-border/80 translate-y-[-4px]" />
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {it.duration}
                      </span>
                      <span className="font-serif text-lg text-[var(--rose-gold-deep)] tabular-nums min-w-[3.5rem] text-right">
                        {it.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}