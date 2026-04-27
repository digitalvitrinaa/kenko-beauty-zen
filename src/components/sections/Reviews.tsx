import { Star } from "lucide-react";

const reviews = [
  {
    name: "Μαρία Π.",
    text: "Εξαιρετικός χώρος, πεντακάθαρος και τα κορίτσια είναι επαγγελματίες! Το καλύτερο μανικιούρ που έχω κάνει στη Δράμα.",
  },
  {
    name: "Ελένη Κ.",
    text: "Υπέροχη εξυπηρέτηση, ευγενικό προσωπικό και τέλειο αποτέλεσμα στο lash lift! Θα ξανάρθω σίγουρα.",
  },
  {
    name: "Χριστίνα Δ.",
    text: "Τα EMS σε άλλο επίπεδο. Καθαρός, μοντέρνος χώρος και άνθρωποι με γνώση. Το συνιστώ ανεπιφύλακτα.",
  },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="w-5 h-5">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-36 bg-gradient-luxe">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="divider-ornament text-xs tracking-[0.4em] uppercase mb-5">
            Testimonials
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-balance">
            Τι λένε οι <em className="text-gradient-rose not-italic">πελάτες</em> μας
          </h2>

          <div className="mt-8 inline-flex items-center gap-4 bg-card px-6 py-3 rounded-full shadow-soft border border-border/50">
            <GoogleG />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--rose-gold)] text-[var(--rose-gold)]" />
              ))}
            </div>
            <span className="font-serif text-lg">
              <span className="text-[var(--rose-gold-deep)] font-medium">4.7</span>
              <span className="text-foreground/50 mx-1">/</span>
              <span className="text-foreground/70">5</span>
            </span>
            <span className="text-xs tracking-widest uppercase text-foreground/60">Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/40 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[var(--rose-gold)] text-[var(--rose-gold)]" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed font-light text-lg flex-1 italic">
                «{r.text}»
              </p>
              <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center text-white font-serif text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground">{r.name}</div>
                  <div className="text-xs tracking-widest uppercase text-foreground/50">
                    Επαληθευμένη πελάτισσα
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}