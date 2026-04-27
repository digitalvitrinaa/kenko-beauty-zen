import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "KENKO Beautycare — Premium Salon Ομορφιάς στη Δράμα" },
      {
        name: "description",
        content:
          "Premium υπηρεσίες αισθητικής, μανικιούρ, lash lift, EMS, laser αποτρίχωση και ευεξίας στη Δράμα. Κλείστε ραντεβού στο 2521 020400.",
      },
      { property: "og:title", content: "KENKO Beautycare — Premium Salon στη Δράμα" },
      {
        property: "og:description",
        content: "Η απόλυτη εμπειρία ομορφιάς στη Δράμα. Premium αισθητική, manicure, lashes, EMS & laser.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
