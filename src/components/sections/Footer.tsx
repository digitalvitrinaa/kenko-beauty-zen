import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start leading-none mb-5">
              <span className="font-serif text-3xl tracking-[0.18em]">KENKO</span>
              <span className="text-xs tracking-[0.45em] uppercase text-[var(--rose-gold)] mt-1">
                Beautycare
              </span>
            </div>
            <p className="text-background/60 leading-relaxed text-sm">
              Premium υπηρεσίες αισθητικής, περιποίησης άκρων και ευεξίας στη
              Δράμα.
            </p>
            <a
              href="https://instagram.com/kenko__beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm hover:text-[var(--rose-gold)] transition-colors"
            >
              <Instagram size={16} />
              @kenko__beauty
            </a>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-5 text-[var(--rose-gold)]">Επικοινωνία</h4>
            <ul className="space-y-4 text-sm text-background/75">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--rose-gold)]" />
                <span>Ηφαιστίωνος 2,<br />Δράμα 661 00</span>
              </li>
              <li>
                <a href="tel:+302521020400" className="flex items-start gap-3 hover:text-background transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0 text-[var(--rose-gold)]" />
                  <span>
                    2521 020400 <span className="text-background/50">(Σταθερό)</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+306988254842" className="flex items-start gap-3 hover:text-background transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0 text-[var(--rose-gold)]" />
                  <span>
                    6988 254842 <span className="text-background/50">(Κινητό)</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-5 text-[var(--rose-gold)]">Ωράριο</h4>
            <ul className="space-y-3 text-sm text-background/75">
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-[var(--rose-gold)]" />
                <div>
                  <div>Δευτέρα — Παρασκευή</div>
                  <div className="text-background/55">10:00 – 20:00</div>
                </div>
              </li>
              <li className="pl-7 text-background/55">
                Σάββατο & Κυριακή — Κλειστά
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-5 text-[var(--rose-gold)]">Βρείτε μας</h4>
            <div className="rounded-xl overflow-hidden border border-background/15 aspect-square">
              <iframe
                title="Χάρτης KENKO Beautycare"
                src="https://www.google.com/maps?q=Ifaistionos+2,+Drama+66100,+Greece&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} KENKO Beautycare. Με επιφύλαξη παντός δικαιώματος.</p>
          <p className="text-[10px] tracking-wider text-background/40">Designed by Digital Vitrina</p>
        </div>
      </div>
    </footer>
  );
}