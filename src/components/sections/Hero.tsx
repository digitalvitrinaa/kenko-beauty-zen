import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Πολυτελής χώρος αισθητικής KENKO Beautycare"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="flex justify-center md:justify-start mb-10 animate-fade-up">
          <img
            src={logo}
            alt="KENKO Beautycare logo"
            width={400}
            height={267}
            className="w-36 sm:w-44 md:w-52 h-auto drop-shadow-sm"
          />
        </div>
        <div className="max-w-2xl animate-fade-up [animation-delay:120ms]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/70 backdrop-blur-md border border-[var(--rose-gold)]/30 mb-8">
            <Sparkles size={14} className="text-[var(--rose-gold-deep)]" />
            <span className="text-xs tracking-[0.3em] uppercase text-foreground/80">
              Premium Beauty • Δράμα
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground text-balance animate-fade-up [animation-delay:200ms]">
            Η Απόλυτη <em className="text-gradient-rose not-italic">Εμπειρία</em><br />
            Ομορφιάς στη Δράμα.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed font-light">
            Αφεθείτε στα χέρια των ειδικών. Premium υπηρεσίες αισθητικής,
            περιποίησης άκρων και ευεξίας στον πιο σύγχρονο χώρο.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="luxe" size="xl" onClick={() => scrollTo("#contact")}>
              Κλείστε Ραντεβού Τώρα
            </Button>
            <Button variant="luxeOutline" size="xl" onClick={() => scrollTo("#services")}>
              Δείτε τις Υπηρεσίες μας
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-8 text-sm text-foreground/60">
            <div>
              <div className="font-serif text-3xl text-[var(--rose-gold-deep)]">4.7★</div>
              <div className="text-xs tracking-widest uppercase mt-1">Google Reviews</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl text-[var(--rose-gold-deep)]">10+</div>
              <div className="text-xs tracking-widest uppercase mt-1">Έτη Εμπειρίας</div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-serif text-3xl text-[var(--rose-gold-deep)]">15+</div>
              <div className="text-xs tracking-widest uppercase mt-1">Υπηρεσίες</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}