import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Κριτικές" },
  { href: "#contact", label: "Επικοινωνία" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        <button
          onClick={() => scrollTo("#top")}
          className="flex items-center leading-none md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:z-10"
          aria-label="KENKO Beautycare"
        >
          <img
            src={logo}
            alt="KENKO Beautycare"
            className="h-12 md:h-14 w-auto"
          />
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm tracking-[0.15em] uppercase text-foreground/75 hover:text-[var(--rose-gold-deep)] transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="luxe"
            size="pill"
            className="hidden sm:inline-flex"
            onClick={() => scrollTo("#contact")}
          >
            Κλείσε Ραντεβού
          </Button>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border/60 animate-fade-up">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm tracking-[0.15em] uppercase text-foreground/80"
              >
                {l.label}
              </button>
            ))}
            <Button variant="luxe" size="pill" onClick={() => scrollTo("#contact")}>
              Κλείσε Ραντεβού
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}