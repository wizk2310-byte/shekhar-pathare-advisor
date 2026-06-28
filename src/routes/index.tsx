import { createFileRoute } from "@tanstack/react-router";
import {
  Store, Building2, Shirt, Landmark, Stethoscope, Trees, Trophy, Briefcase,
  TrendingUp, Home as HomeIcon, LineChart, Phone, MessageCircle, Mail, MapPin, ArrowRight, ArrowUpRight,
} from "lucide-react";
import heroTower from "@/assets/hero-tower.jpg";
import leaseInterior from "@/assets/lease-interior.jpg";
import saleAerial from "@/assets/sale-aerial.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import listing4 from "@/assets/listing-4.jpg";
import listing5 from "@/assets/listing-5.jpg";
import listing6 from "@/assets/listing-6.jpg";

const portfolio = [
  { img: listing1, type: "Retail Showroom", area: "Koregaon Park", status: "Leased", year: "2024", size: "4,200 sq ft" },
  { img: listing2, type: "Grade-A Office", area: "Baner", status: "Leased", year: "2024", size: "18,000 sq ft" },
  { img: listing3, type: "Premium Residence", area: "Boat Club Road", status: "Sold", year: "2024", size: "5 BHK · 6,800 sq ft" },
  { img: listing4, type: "Bank Branch", area: "Camp", status: "Leased", year: "2023", size: "3,500 sq ft" },
  { img: listing5, type: "Land Parcel", area: "Wagholi", status: "Sold", year: "2023", size: "2.4 acres" },
  { img: listing6, type: "Hospital Facility", area: "Kalyani Nagar", status: "Leased", year: "2023", size: "32,000 sq ft" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shekhar Pathare — Pune Real Estate Advisor | Leasing & Sales" },
      { name: "description", content: "Trusted Pune real estate advisor for commercial leasing and premium property sales. Shops, offices, pre-leased investments, flats and ROI properties." },
      { property: "og:title", content: "Shekhar Pathare — Pune Real Estate Advisor" },
      { property: "og:description", content: "Boutique advisory for commercial leasing and premium property sales across Pune." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/919876543210?text=Hi%20Shekhar%2C%20I%27d%20like%20to%20enquire%20about%20a%20property.";
const PHONE = "+91 98765 43210";
const PHONE_HREF = "tel:+919876543210";

const leaseItems = [
  { icon: Store, name: "Shops", desc: "High-footfall retail frontages." },
  { icon: Briefcase, name: "Offices", desc: "Grade-A commercial spaces." },
  { icon: Building2, name: "Showrooms", desc: "Brand-ready display formats." },
  { icon: Landmark, name: "Banks", desc: "Compliance-ready BFSI units." },
  { icon: Shirt, name: "Clothing Stores", desc: "Apparel-focused retail." },
  { icon: Stethoscope, name: "Hospitals", desc: "Clinical & diagnostic spaces." },
  { icon: Trees, name: "Plots", desc: "Open land for builds & lease." },
  { icon: Trophy, name: "Sports Facilities", desc: "Turfs, courts & arenas." },
];

const saleItems = [
  { icon: TrendingUp, name: "Pre-Leased Properties", tag: "Passive Income", desc: "Acquire income-yielding assets with day-one rental cash flow from established tenants." },
  { icon: HomeIcon, name: "Flats & Apartments", tag: "Home Buyers", desc: "Hand-picked residences across Pune's most considered neighbourhoods." },
  { icon: LineChart, name: "ROI Properties", tag: "Investors", desc: "Curated investment opportunities engineered for long-term capital appreciation." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <TwoPaths />
      <LeaseSection />
      <SaleSection />
      <Portfolio />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Selected Work"
          title="Recent Transactions"
          sub="A glimpse of the leases closed and properties sold across Pune. Names withheld out of respect for client discretion."
        />
        <a href="#contact" className="hidden items-center gap-2 border-b border-[var(--gold)] pb-1 text-sm font-medium text-foreground transition-colors hover:text-[var(--gold)] md:inline-flex">
          Request full track record <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p, i) => (
          <article key={i} className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={`${p.type} in ${p.area}`}
                loading="lazy"
                width={1280}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-90" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-background/30 bg-background/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-background backdrop-blur-md">
                <span className={`h-1.5 w-1.5 rounded-full ${p.status === "Sold" ? "bg-[var(--gold)]" : "bg-background"}`} />
                {p.status} · {p.year}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-background/80">{p.area}</div>
                <h3 className="mt-1 font-serif text-2xl text-background">{p.type}</h3>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-foreground/10 px-5 py-4">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.size}</span>
              <ArrowUpRight className="h-4 w-4 text-[var(--gold)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        ✦ Placeholder imagery — to be replaced with actual closed transactions
      </p>
    </section>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold)]/60 font-serif text-sm italic text-[var(--gold)]">
            SP
          </span>
          <span className="hidden font-serif text-[15px] tracking-tight sm:inline">
            Shekhar Pathare
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-[13px] text-muted-foreground md:flex">
          <a href="#lease" className="transition-colors hover:text-foreground">Leasing</a>
          <a href="#sale" className="transition-colors hover:text-foreground">Sales</a>
          <a href="#about" className="transition-colors hover:text-foreground">Practice</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a href={PHONE_HREF} className="group inline-flex items-center gap-2 rounded-full border border-foreground/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-primary-foreground">
          <span className="hidden sm:inline">Private Line</span>
          <Phone className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background image — right-anchored, faded into cream */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroTower}
          alt=""
          width={1600}
          height={1920}
          className="absolute right-0 top-0 h-full w-full object-cover object-right opacity-[0.85] md:w-[62%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/85 to-transparent md:via-[var(--background)]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pt-16 pb-28 md:px-10 md:pt-28 md:pb-40">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="eyebrow">Est. Practice · Pune</span>
          </div>

          <h1 className="mt-8 font-serif text-[clamp(3rem,8.5vw,7rem)] leading-[0.95] tracking-[-0.02em]">
            Shekhar<br />
            <span className="italic text-[var(--gold)]">Pathare</span>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
            A discreet Pune practice for{" "}
            <span className="text-foreground">commercial leasing</span> and{" "}
            <span className="text-foreground">premium property acquisitions</span>
            — built on two decades of relationships, and the patience that real estate of consequence demands.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:bg-[var(--gold)]"
            >
              <MessageCircle className="h-4 w-4" />
              Begin on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-[13px] font-medium transition-colors hover:border-foreground hover:bg-foreground/5"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span>Serving Pune</span>
            <span className="h-px w-6 bg-[var(--gold)]/60" />
            <span>By Appointment</span>
            <span className="h-px w-6 bg-[var(--gold)]/60" />
            <span>Discreet Counsel</span>
          </div>
        </div>

        {/* right-side floating credential card */}
        <div className="col-span-12 mt-auto self-end md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
          <div className="ml-auto max-w-sm rounded-2xl border border-foreground/10 bg-background/70 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">Featured Listing</span>
            </div>
            <p className="mt-5 font-serif text-xl leading-snug">
              Pre-leased commercial tower
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Koregaon Park · Placeholder
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Yield · 7.2%</span>
              <a href="#contact" className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-[var(--gold)]">
                Enquire <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Koregaon Park", "Kalyani Nagar", "Baner", "Viman Nagar", "Kothrud", "Aundh", "Hinjawadi", "Camp", "Hadapsar", "Wakad", "Boat Club Road", "Prabhat Road"];
  return (
    <div className="border-y border-foreground/10 bg-[oklch(0.94_0.012_82)] py-5 overflow-hidden">
      <div className="flex animate-[marquee_45s_linear_infinite] gap-12 whitespace-nowrap font-serif text-sm italic text-muted-foreground">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it}
            <span className="text-[var(--gold)]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

function TwoPaths() {
  const paths = [
    {
      href: "#lease",
      eyebrow: "Line One",
      title: "Spaces for Lease",
      desc: "Commercial, retail & specialised spaces tenanted across Pune.",
      note: "8 categories",
      image: leaseInterior,
    },
    {
      href: "#sale",
      eyebrow: "Line Two",
      title: "Properties for Sale",
      desc: "Pre-leased assets, homes and curated investment opportunities.",
      note: "3 verticals",
      image: saleAerial,
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-px bg-foreground/10 md:grid-cols-2">
        {paths.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className="group relative isolate block overflow-hidden bg-card px-8 py-16 transition-all md:px-14 md:py-24"
          >
            <img
              src={p.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/40" />
            <span className="eyebrow">{p.eyebrow}</span>
            <h3 className="mt-5 font-serif text-3xl md:text-5xl">{p.title}</h3>
            <p className="mt-4 max-w-md text-base text-muted-foreground">{p.desc}</p>
            <div className="mt-14 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.note}</span>
              <ArrowUpRight className="h-6 w-6 text-[var(--gold)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[var(--gold)]" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-6 font-serif text-4xl tracking-tight md:text-6xl">{title}</h2>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{sub}</p>
    </div>
  );
}

function LeaseSection() {
  return (
    <section id="lease" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeader
        eyebrow="Leasing · Line One"
        title="Spaces for Lease"
        sub="A considered portfolio of commercial and specialised spaces — sourced, vetted, and matched to the right occupier."
      />
      <div className="mt-16 grid grid-cols-2 gap-px bg-foreground/10 sm:grid-cols-3 lg:grid-cols-4">
        {leaseItems.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="group relative bg-card p-7 transition-colors hover:bg-[oklch(0.98_0.012_82)] md:p-9">
            <Icon className="h-7 w-7 text-[var(--gold)]" strokeWidth={1.3} />
            <div className="mt-8 flex items-center gap-2">
              <h3 className="font-serif text-xl">{name}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <span className="absolute right-5 top-5 rounded-full border border-[var(--gold)]/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--gold)]">
              Available
            </span>
          </div>
        ))}
      </div>
      <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        ✦ Placeholder descriptions — replace with live inventory
      </p>
    </section>
  );
}

function SaleSection() {
  return (
    <section id="sale" className="relative overflow-hidden border-y border-foreground/10">
      <img src={saleAerial} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-[oklch(0.94_0.012_82)]/95 to-background" />
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeader
          eyebrow="Sales · Line Two"
          title="Properties for Sale"
          sub="Three distinct verticals — each built around a different reason to own."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {saleItems.map(({ icon: Icon, name, tag, desc }, i) => (
            <article
              key={name}
              className="group relative flex flex-col rounded-2xl border border-foreground/10 bg-card/90 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[var(--gold)]/60 hover:shadow-[0_30px_60px_-30px_oklch(0.2_0.01_40_/_0.3)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm italic text-[var(--gold)]">0{i + 1}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{tag}</span>
              </div>
              <Icon className="mt-10 h-9 w-9 text-[var(--gold)]" strokeWidth={1.2} />
              <h3 className="mt-6 font-serif text-2xl leading-snug md:text-3xl">{name}</h3>
              <span className="gold-divider mt-5" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-[var(--gold)]"
              >
                Enquire <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const stats = [
    { n: "10+", l: "Years of Practice" },
    { n: "200+", l: "Properties Handled" },
    { n: "Pune-wide", l: "Area Coverage" },
    { n: "100%", l: "Referral-led" },
  ];
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img src={aboutDetail} alt="Brass architectural detail" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-background/90">A practice in detail</span>
              <p className="mt-2 font-serif text-xl text-background">Pune, India</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="eyebrow">The Practice</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl tracking-tight md:text-6xl">
            Quiet expertise. <br /> <span className="italic text-[var(--gold)]">Built on relationships.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="italic">[Placeholder copy]</span> For over a decade, Shekhar has advised business owners, occupiers and investors across Pune — pairing on-the-ground market knowledge with a long-term, relationship-first approach. From negotiating commercial leases in Pune's most active corridors to sourcing pre-leased assets for passive-income portfolios, the practice is built one introduction at a time.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 border-b border-[var(--gold)] pb-1 text-sm font-medium text-foreground transition-colors hover:text-[var(--gold)]"
          >
            Request an introduction <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-14 grid grid-cols-2 gap-px bg-foreground/10">
            {stats.map((s) => (
              <div key={s.l} className="bg-card p-7 md:p-9">
                <div className="font-serif text-3xl text-foreground md:text-5xl">{s.n}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const categories = [
    "Shops (Lease)", "Offices (Lease)", "Showrooms (Lease)", "Banks (Lease)",
    "Clothing Stores (Lease)", "Hospitals (Lease)", "Plots (Lease)", "Sports Facilities (Lease)",
    "Pre-Leased Property (Sale)", "Flats / Apartments (Sale)", "ROI Properties (Sale)",
  ];
  return (
    <section id="contact" className="relative overflow-hidden border-t border-foreground/10 bg-[oklch(0.94_0.012_82)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="eyebrow">Contact</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl tracking-tight md:text-6xl">
            Begin a <span className="italic text-[var(--gold)]">conversation</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Share a brief — Shekhar personally responds to every enquiry, usually within the same business day.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <div className="space-y-7">
              <ContactRow icon={MessageCircle} label="WhatsApp" value={PHONE} href={WHATSAPP} />
              <ContactRow icon={Phone} label="Direct" value={PHONE} href={PHONE_HREF} />
              <ContactRow icon={Mail} label="Email" value="hello@shekharpathare.in" href="mailto:hello@shekharpathare.in" />
              <ContactRow icon={MapPin} label="Based in" value="Pune, Maharashtra" />
            </div>
            <div className="relative mt-10 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-dashed border-foreground/20 bg-card text-center">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "radial-gradient(circle at 30% 40%, var(--gold) 0.5px, transparent 0.5px), radial-gradient(circle at 70% 60%, var(--gold) 0.5px, transparent 0.5px)",
                backgroundSize: "24px 24px"
              }} />
              <div className="relative px-6">
                <MapPin className="mx-auto h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Pune Map · Placeholder
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank"); }}
            className="rounded-2xl border border-foreground/10 bg-card p-7 md:col-span-3 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" id="name"><input id="name" required className="field-input" placeholder="Your full name" /></Field>
              <Field label="Phone" id="phone"><input id="phone" required type="tel" className="field-input" placeholder="+91" /></Field>
            </div>
            <div className="mt-5">
              <Field label="Interested In" id="interest">
                <select id="interest" className="field-input">
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message" id="msg">
                <textarea id="msg" rows={4} className="field-input resize-none" placeholder="Tell us a little about what you're looking for." />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-colors hover:bg-[var(--gold)]"
            >
              Send Enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              ✦ Placeholder form · opens WhatsApp
            </p>
          </form>
        </div>
      </div>
      <style>{`
        .field-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 0.6rem 0;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s;
        }
        .field-input:focus { border-color: var(--gold); }
        .field-input::placeholder { color: oklch(0.6 0.01 40); }
      `}</style>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40">
        <Icon className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.6} />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-serif text-lg text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition-opacity hover:opacity-70">
      {inner}
    </a>
  ) : inner;
}

function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold)]/60 font-serif text-sm italic text-[var(--gold)]">SP</span>
            <div className="font-serif text-xl">Shekhar <span className="italic text-[var(--gold)]">Pathare</span></div>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Boutique real estate advisory · Leasing & Sales · Pune, India
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
          <a href="#" className="transition-colors hover:text-foreground">LinkedIn</a>
          <a href="#" className="transition-colors hover:text-foreground">Facebook</a>
          <span className="hidden h-3 w-px bg-foreground/20 md:block" />
          <span>© {new Date().getFullYear()} Shekhar Pathare</span>
        </div>
      </div>
    </footer>
  );
}
