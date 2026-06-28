import { createFileRoute } from "@tanstack/react-router";
import {
  Store, Building2, Shirt, Landmark, Stethoscope, Trees, Trophy, Briefcase,
  TrendingUp, Home as HomeIcon, LineChart, Phone, MessageCircle, Mail, MapPin, ArrowRight,
} from "lucide-react";

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
      <TwoPaths />
      <LeaseSection />
      <SaleSection />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Shekhar <span className="text-[var(--gold)]">Pathare</span>
        </a>
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          <a href="#lease" className="transition-colors hover:text-foreground">Leasing</a>
          <a href="#sale" className="transition-colors hover:text-foreground">Sales</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a href={PHONE_HREF} className="hidden rounded-full border border-foreground/80 px-4 py-2 text-xs font-medium tracking-wide transition-colors hover:bg-foreground hover:text-primary-foreground sm:inline-block">
          {PHONE}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <span className="eyebrow">Pune · Real Estate Advisory</span>
          <span className="gold-divider mx-auto mt-6" />
          <h1 className="mt-8 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Shekhar Pathare
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
            A trusted Pune advisor guiding discerning clients through{" "}
            <span className="text-foreground">commercial leasing</span> and{" "}
            <span className="text-foreground">premium property acquisitions</span> — with the discretion of private wealth and the rigour of a specialist.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-[var(--gold)]"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground/5"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Serving Pune · By appointment
          </p>
        </div>
      </div>
    </section>
  );
}

function TwoPaths() {
  const paths = [
    { href: "#lease", eyebrow: "Line One", title: "Spaces for Lease", desc: "Commercial, retail & specialised spaces tenanted across Pune.", note: "8 categories" },
    { href: "#sale", eyebrow: "Line Two", title: "Properties for Sale", desc: "Pre-leased assets, homes and curated investment opportunities.", note: "3 verticals" },
  ];
  return (
    <section className="border-y border-border/60 bg-[oklch(0.94_0.012_82)]">
      <div className="mx-auto grid max-w-7xl gap-px bg-border/60 md:grid-cols-2">
        {paths.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className="group relative block bg-[oklch(0.965_0.012_85)] px-8 py-14 transition-colors hover:bg-card md:px-14 md:py-20"
          >
            <span className="eyebrow">{p.eyebrow}</span>
            <h3 className="mt-5 font-serif text-3xl md:text-4xl">{p.title}</h3>
            <p className="mt-4 max-w-md text-base text-muted-foreground">{p.desc}</p>
            <div className="mt-10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.note}</span>
              <ArrowRight className="h-5 w-5 text-[var(--gold)] transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <span className="gold-divider mx-auto mt-5" />
      <h2 className="mt-6 font-serif text-4xl tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{sub}</p>
    </div>
  );
}

function LeaseSection() {
  return (
    <section id="lease" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="Leasing"
        title="Spaces for Lease"
        sub="A considered portfolio of commercial and specialised spaces — sourced, vetted, and matched to the right occupier."
      />
      <div className="mt-16 grid grid-cols-2 gap-px bg-border/60 sm:grid-cols-3 lg:grid-cols-4">
        {leaseItems.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="group bg-card p-7 transition-colors hover:bg-[oklch(0.98_0.012_82)] md:p-9">
            <Icon className="h-7 w-7 text-[var(--gold)]" strokeWidth={1.4} />
            <div className="mt-6 flex items-center gap-2">
              <h3 className="font-serif text-xl">{name}</h3>
              <span className="rounded-full border border-[var(--gold)]/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--gold)]">
                Available
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Placeholder descriptions — replace with live inventory
      </p>
    </section>
  );
}

function SaleSection() {
  return (
    <section id="sale" className="border-t border-border/60 bg-[oklch(0.94_0.012_82)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Sales"
          title="Properties for Sale"
          sub="Three distinct verticals — each built around a different reason to own."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {saleItems.map(({ icon: Icon, name, tag, desc }) => (
            <article
              key={name}
              className="group relative flex flex-col rounded-2xl border border-border/70 bg-card p-8 transition-all hover:border-[var(--gold)]/60 hover:shadow-[0_30px_60px_-30px_oklch(0.2_0.01_40_/_0.25)]"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-[var(--gold)]" strokeWidth={1.4} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{tag}</span>
              </div>
              <h3 className="mt-10 font-serif text-2xl leading-snug md:text-3xl">{name}</h3>
              <span className="gold-divider mt-5" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-[var(--gold)]"
              >
                Enquire <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <span className="eyebrow">About</span>
          <span className="gold-divider mt-5" />
          <h2 className="mt-6 font-serif text-4xl tracking-tight md:text-5xl">
            Quiet expertise. <br /> Built on relationships.
          </h2>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="italic text-muted-foreground/80">[Placeholder copy]</span>{" "}
            For over a decade, Shekhar has advised business owners, occupiers and investors across Pune — pairing on-the-ground market knowledge with a long-term, relationship-first approach. From negotiating commercial leases in Pune's most active corridors to sourcing pre-leased assets for passive-income portfolios, the practice is built one introduction at a time.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 border-b border-[var(--gold)] pb-1 text-sm font-medium text-foreground transition-colors hover:text-[var(--gold)]"
          >
            Request an introduction <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-px self-start bg-border/60">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-8 md:p-10">
              <div className="font-serif text-4xl text-foreground md:text-5xl">{s.n}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
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
    <section id="contact" className="border-t border-border/60 bg-[oklch(0.94_0.012_82)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Contact</span>
          <span className="gold-divider mx-auto mt-5" />
          <h2 className="mt-6 font-serif text-4xl tracking-tight md:text-5xl">Begin a conversation</h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Share a brief — Shekhar personally responds to every enquiry, usually within the same business day.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <div className="space-y-7">
              <ContactRow icon={MessageCircle} label="WhatsApp" value={PHONE} href={WHATSAPP} cta />
              <ContactRow icon={Phone} label="Direct" value={PHONE} href={PHONE_HREF} />
              <ContactRow icon={Mail} label="Email" value="hello@shekharpathare.in" href="mailto:hello@shekharpathare.in" />
              <ContactRow icon={MapPin} label="Based in" value="Pune, Maharashtra" />
            </div>
            <div className="mt-10 flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-border bg-card text-center">
              <div className="px-6">
                <MapPin className="mx-auto h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Pune Map · Placeholder
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank"); }}
            className="rounded-2xl border border-border/70 bg-card p-7 md:col-span-3 md:p-10"
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
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--gold)]"
            >
              Send Enquiry <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Placeholder form · opens WhatsApp
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
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href, cta }: { icon: any; label: string; value: string; href?: string; cta?: boolean }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40">
        <Icon className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.6} />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className={`mt-1 font-serif text-lg ${cta ? "text-foreground" : "text-foreground"}`}>{value}</div>
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
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-serif text-xl">Shekhar <span className="text-[var(--gold)]">Pathare</span></div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Boutique real estate advisory · Leasing & Sales · Pune, India
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="#" className="hover:text-foreground">Facebook</a>
          <span className="hidden h-3 w-px bg-border md:block" />
          <span>© {new Date().getFullYear()} Shekhar Pathare</span>
        </div>
      </div>
    </footer>
  );
}
