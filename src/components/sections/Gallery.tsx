import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g2, alt: "Πολυτελής χώρος του salon", h: "h-72 md:h-96" },
  { src: g1, alt: "Premium nail products", h: "h-96 md:h-[28rem]" },
  { src: g3, alt: "Lash lift αποτέλεσμα", h: "h-80 md:h-[26rem]" },
  { src: g6, alt: "Spa pedicure με τριαντάφυλλα", h: "h-96 md:h-[30rem]" },
  { src: g4, alt: "Εργαλεία rose gold manicure", h: "h-72 md:h-80" },
  { src: g5, alt: "Χώρος ευεξίας με cryosauna", h: "h-80 md:h-[24rem]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-ornament text-xs tracking-[0.4em] uppercase mb-5">
            Gallery
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-balance">
            Ο <em className="text-gradient-rose not-italic">Χώρος</em> & Η Δουλειά μας
          </h2>
          <p className="mt-6 text-foreground/65 leading-relaxed">
            Μια ματιά στις λεπτομέρειες που κάνουν τη διαφορά.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <div
              key={i}
              className={`mb-5 break-inside-avoid image-zoom rounded-xl shadow-soft hover-lift ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}