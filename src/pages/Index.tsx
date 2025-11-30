import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Clock, Users, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import heroImage from "@/assets/deenway-hero.png";

const Index = () => {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">

            {/* Logo + Brand */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <img src="/images/logo.png" alt="Deenway Logo" className="h-10 w-10 object-contain" />
              <Logo size="lg" />
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {["hero", "FAQ", "legal", "contact", "delete-account"].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </div>

            {/* EMAIL IN HEADER */}
            <div className="hidden md:flex">
              <a
                href="mailto:admin@deenway.info"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                admin@deenway.info
              </a>
            </div>

          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="pt-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-transparent" />

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-8">
              <Logo size="lg" />

              <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-xl">
                Short, Insightful Islamic Book Summaries
              </h1>

              <p className="text-xl md:text-2xl font-medium text-primary">
                Discover Islamic wisdom, one summary at a time.
              </p>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Access beautifully crafted summaries of essential Islamic books designed
                to enrich your spiritual journey and deepen your understanding of the Deen.
              </p>

              {/* STORE BADGES */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start">
                <div className="relative badge-wrapper opacity-90 hover:opacity-100 transition">
                  <img src="/images/app-store-badge.svg" className="store-badge" alt="App Store badge" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>

                <div className="relative badge-wrapper opacity-90 hover:opacity-100 transition">
                  <img src="/images/google-play-badge.svg" className="store-badge" alt="Google Play badge" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Deenway app preview"
                className="rounded-2xl shadow-xl max-h-[800px] w-auto relative z-10"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Deenway?</h2>
            <p className="text-lg text-muted-foreground">
              Bringing Islamic knowledge closer to you through thoughtful summaries and elegant design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Curated Summaries", desc: "Carefully crafted summaries of essential Islamic texts." },
              { icon: Clock, title: "Save Time", desc: "Learn key insights in minutes without compromising depth." },
              { icon: Heart, title: "Spiritual Growth", desc: "Strengthen your faith with authentic, practical wisdom." },
              { icon: Users, title: "Community Focused", desc: "Join a growing community committed to learning and reflection." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="shadow-lg hover:shadow-xl bg-card transition hover-scale border-none">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section id="FAQ" className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about Deenway</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "What is Deenway?", a: "Deenway is a mobile app offering short, high-quality summaries of Islamic books, created to make beneficial knowledge more accessible in a busy world." },
              { q: "How are the summaries created?", a: "Summaries are produced using a blend of AI assistance and careful human review, ensuring clarity while honouring the intent of the original texts." },
              { q: "Do you summarise tafsir, hadith, or seerah?", a: "No. These works require scholarly depth, so we avoid summarising them. Instead, we focus on Islamic lifestyle, spirituality, personal development, and contemporary beneficial works." },
              { q: "How long are the summaries?", a: "Most summaries take around 3–10 minutes, depending on the book and its themes." },
              { q: "Is Deenway free?", a: "The app is currently free. Later, optional monthly and yearly subscriptions will unlock the full library and upcoming premium features." },
              { q: "Can I recommend a book?", a: "Absolutely. You can email your suggestions to admin@deenway.info anytime." }
            ].map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl shadow-sm px-6">
                <AccordionTrigger className="text-lg font-semibold py-6">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </section>

      {/* LEGAL SECTION */}
      <section id="legal" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Legal Information</h2>
            <p className="text-lg text-muted-foreground">Your privacy and trust are important to us</p>
          </div>

          {/* EXISTING PRIVACY + TOS CONTENT OMITTED FOR BREVITY */}
          {/* You already have the long accordion sections here — keep them unchanged */}

        </div>
      </section>

      {/* DELETE ACCOUNT SECTION */}
      <section id="delete-account" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">

          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Delete Your Account</h2>
            <p className="text-lg text-muted-foreground">
              You can request permanent deletion of your Deenway account and all associated data at any time.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow space-y-6">
            <h3 className="text-2xl font-semibold">How to Request Account Deletion</h3>
            <p>
              Send us an email from the address linked to your Deenway account with the subject line:
            </p>

            <p className="font-semibold text-primary">
              “Account Deletion Request – Deenway”
            </p>

            <div className="flex items-center gap-3 pt-4">
              <Mail className="w-6 h-6 text-primary" />
              <a
                href="mailto:admin@deenway.info"
                className="text-lg font-medium text-primary hover:underline"
              >
                admin@deenway.info
              </a>
            </div>

            <p className="text-muted-foreground text-sm pt-4">
              We will verify your request and delete your account within 7 days.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow space-y-6">
            <h3 className="text-2xl font-semibold">What Data Will Be Deleted?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address</li>
              <li>Display name</li>
              <li>Login credentials</li>
              <li>Reading progress</li>
              <li>User ID and all data tied to your account</li>
            </ul>

            <h3 className="text-xl font-semibold pt-6">What Data Is Temporarily Retained?</h3>
            <p>
              For security and legal compliance, basic server logs (e.g., IP addresses and timestamps)
              may be retained for up to <strong>30 days</strong> before automatic deletion.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-8">

          <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a question or suggestion? We'd love to hear from you.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <Mail className="w-10 h-10 text-primary" />

            <a
              href="mailto:admin@deenway.info"
              className="text-xl font-semibold text-primary hover:underline"
            >
              admin@deenway.info
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t bg-card">
        <div className="container mx-auto px-4 text-center space-y-6">

          <Logo size="md" className="mx-auto" />

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["hero", "FAQ", "legal", "contact", "delete-account"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="hover:text-primary transition-colors"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Deenway. All rights reserved.</p>

        </div>
      </footer>

    </div>
  );
};

export default Index;
