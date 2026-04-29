import { useState } from "react";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import { CalendarIcon, MessageCircle, Phone, MessageSquare, Instagram, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { serviceCategories } from "./Services";

const MOBILE = "306988254842";
const MOBILE_DISPLAY = "6988 254842";
const LANDLINE = "302521020400";
const LANDLINE_DISPLAY = "2521 020400";

const times: string[] = [];
for (let h = 10; h <= 20; h++) {
  times.push(`${String(h).padStart(2, "0")}:00`);
  if (h < 20) times.push(`${String(h).padStart(2, "0")}:30`);
}

export function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");

  const isWeekend = (d: Date) => {
    const day = d.getDay();
    return day === 0 || day === 6;
  };

  const toggleService = (key: string) => {
    setServices((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = date ? format(date, "EEEE d MMMM yyyy", { locale: el }) : "";
    const servicesStr = services.length
      ? services.map((s) => `• ${s}`).join("%0A")
      : "—";
    const msg =
      `Γεια σας! Θα ήθελα να κλείσω ραντεβού στο KENKO Beautycare.%0A%0A` +
      `👤 Ονοματεπώνυμο: ${name}%0A` +
      `📞 Τηλέφωνο: ${phone}%0A` +
      `💅 Υπηρεσίες:%0A${servicesStr}%0A` +
      `📅 Ημέρα: ${dateStr}%0A` +
      `⏰ Ώρα: ${time}%0A%0A` +
      `Ευχαριστώ!`;
    window.open(`https://wa.me/${MOBILE}?text=${msg}`, "_blank");
  };

  const buildSmsBody = () => {
    const dateStr = date ? format(date, "EEEE d MMMM yyyy", { locale: el }) : "";
    const servicesStr = services.length
      ? services.map((s) => `- ${s}`).join("\n")
      : "—";
    return encodeURIComponent(
      `Γεια σας! Θα ήθελα να κλείσω ραντεβού στο KENKO Beautycare.\n\n` +
      `Ονοματεπώνυμο: ${name}\n` +
      `Τηλέφωνο: ${phone}\n` +
      `Υπηρεσίες:\n${servicesStr}\n` +
      `Ημέρα: ${dateStr}\n` +
      `Ώρα: ${time}\n\nΕυχαριστώ!`,
    );
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-rose opacity-10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--blush)] opacity-40 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="divider-ornament text-xs tracking-[0.4em] uppercase mb-5 justify-start [&::before]:hidden">
              Ραντεβού
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight animate-fade-up">
              Κλείστε το <em className="text-gradient-rose not-italic">Ραντεβού</em> σας
            </h2>
            <p className="mt-5 text-foreground/65 leading-relaxed">
              Συμπληρώστε τη φόρμα και θα σας απαντήσουμε άμεσα μέσω WhatsApp ή
              τηλεφωνικά για επιβεβαίωση.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:+${LANDLINE}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-[var(--rose-gold)]/50 transition-all duration-300 hover-lift"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--blush)] flex items-center justify-center text-[var(--rose-gold-deep)]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-foreground/50">
                    Καλέστε μας
                  </div>
                  <div className="font-serif text-xl text-foreground">{LANDLINE_DISPLAY}</div>
                  <div className="text-xs text-foreground/50 mt-0.5">Κιν. {MOBILE_DISPLAY}</div>
                </div>
              </a>
              <a
                href={`https://wa.me/${MOBILE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-[var(--whatsapp)]/50 transition-all duration-300 hover-lift"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--whatsapp)]/10 flex items-center justify-center text-[var(--whatsapp)]">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-foreground/50">
                    WhatsApp
                  </div>
                  <div className="font-serif text-xl text-foreground">Άμεση επικοινωνία</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-rose rounded-3xl p-6 sm:p-8 md:p-12 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs tracking-widest uppercase text-foreground/70">
                  Ονοματεπώνυμο
                </Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="π.χ. Μαρία Παπαδοπούλου"
                  className="h-12 rounded-lg bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs tracking-widest uppercase text-foreground/70">
                  Τηλέφωνο
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="69XXXXXXXX"
                  className="h-12 rounded-lg bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs tracking-widest uppercase text-foreground/70">
                Επιλογή Υπηρεσιών (μία ή περισσότερες)
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 w-full justify-between text-left font-normal rounded-lg bg-background"
                  >
                    <span className="truncate text-foreground/80">
                      {services.length === 0
                        ? "Επιλέξτε μία ή περισσότερες υπηρεσίες..."
                        : `${services.length} επιλεγμένες`}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-60 shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 max-h-80 overflow-y-auto" align="start">
                  <div className="p-2">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="mb-2">
                        <div className="px-2 py-1.5 text-[10px] tracking-[0.25em] uppercase text-[var(--rose-gold-deep)]">
                          {cat.title}
                        </div>
                        {cat.items.map((it) => {
                          const key = `${cat.title} — ${it.name}`;
                          const checked = services.includes(key);
                          return (
                            <button
                              type="button"
                              key={key}
                              onClick={() => toggleService(key)}
                              className={cn(
                                "w-full flex items-center gap-3 px-2 py-2 rounded-md text-sm text-left transition-colors",
                                checked ? "bg-[var(--blush)]" : "hover:bg-muted",
                              )}
                            >
                              <span className={cn(
                                "w-4 h-4 rounded border flex items-center justify-center shrink-0",
                                checked ? "bg-[var(--rose-gold-deep)] border-[var(--rose-gold-deep)] text-white" : "border-border bg-background",
                              )}>
                                {checked && <Check size={12} strokeWidth={3} />}
                              </span>
                              <span className="flex-1">{it.name}</span>
                              <span className="text-xs text-[var(--rose-gold-deep)] tabular-nums">{it.price}</span>
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              {services.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {services.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-1 rounded-full bg-[var(--blush)] text-foreground/80">
                      {s.split(" — ")[1] ?? s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="text-xs tracking-widest uppercase text-foreground/70">
                  Επιθυμητή Ημέρα
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "h-12 w-full justify-start text-left font-normal rounded-lg bg-background",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-[var(--rose-gold-deep)]" />
                      {date ? format(date, "PPP", { locale: el }) : "Επιλέξτε ημερομηνία"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0)) || isWeekend(d)}
                      locale={el}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="text-xs tracking-widest uppercase text-foreground/70">
                  Επιθυμητή Ώρα
                </Label>
                <Select value={time} onValueChange={setTime} required>
                  <SelectTrigger className="h-12 rounded-lg bg-background">
                    <SelectValue placeholder="10:00 — 20:00" />
                  </SelectTrigger>
                  <SelectContent>
                    {times.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <p className="text-xs text-foreground/55 italic">
              * Ωράριο λειτουργίας: Δευτέρα — Παρασκευή, 10:00 – 20:00
            </p>

            <div className="space-y-3">
              <Button
                type="button"
                variant="luxeOutline"
                size="xl"
                className="w-full"
                asChild
              >
                <a href={`sms:+${MOBILE}?body=${buildSmsBody()}`}>
                  <MessageSquare size={20} />
                  Αποστολή με SMS
                </a>
              </Button>
              <Button type="submit" variant="whatsapp" size="xl" className="w-full">
                <MessageCircle size={20} />
                Αποστολή με WhatsApp
              </Button>
              <Button
                type="button"
                variant="luxe"
                size="xl"
                className="w-full"
                asChild
              >
                <a
                  href="https://www.instagram.com/kenko__beauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                  Find Us On Instagram
                </a>
              </Button>
            </div>
            <p className="text-center text-xs text-foreground/55">
              Συνδέεται απευθείας με το κινητό{" "}
              <span className="text-foreground/80 font-medium">{MOBILE_DISPLAY}</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}