import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Heart, Clock, Users } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";
import heroImage from "@/assets/deenway-hero.png";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
              {["hero", "FAQ", "legal"].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </div>

          </nav>
        </div>
      </header>

      {/* HERO */}
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

                {/* App Store */}
                <div className="relative badge-wrapper opacity-90 hover:opacity-100 transition">
                  <img src="/images/app-store-badge.svg" className="store-badge" alt="App Store badge" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>

                {/* Play Store */}
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
              { q: "How long are the summaries?", a: "Most summaries take around 3–10 minutes to read, depending on the book and its themes." },
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

          <Accordion type="single" collapsible className="space-y-4">

            {/* PRIVACY POLICY */}
            <AccordionItem value="privacy" className="bg-card border rounded-xl px-8 shadow-sm">
              <AccordionTrigger className="text-2xl font-bold py-8">Privacy Policy</AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-relaxed pb-8 space-y-6">

                <p><strong>Effective Date:</strong> 07/11/2025</p>
                <p><strong>Publisher:</strong> Deenway Ltd</p>
                <p><strong>Contact:</strong> admin@deenway.info</p>

                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
                  <p>
                   This Privacy Policy explains how we handle your information when you use the Deenway mobile app. Deenway Ltd is based in the United Kingdom, although the app is available for users worldwide. By using the app, you consent to the practices described in this policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Information We Collect</h3>
                  <p>We may collect the following information when you create an account or use the app:</p>

                  <div className="space-y-2 pl-1 mt-3">
                    <p>Email address</p>
                    <p>Display name</p>
                    <p>General analytics and engagement data</p>
                    <p>Subscription status and entitlement details</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
                  <p>Your information is used to operate and improve the app. This includes:</p>

                  <div className="space-y-2 pl-1 mt-3">
                    <p>Creating and maintaining your account</p>
                    <p>Delivering personalised summaries and app features</p>
                    <p>Monitoring performance and improving user experience</p>
                    <p>Sending important updates about your account or subscription</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Data Storage & Security</h3>
                  <p>
                    Your information is securely stored through Supabase and Cloudflare, which acts as our backend provider. We rely on industry-standard safeguards to protect your data and implement additional practices internally to prevent unauthorised access. You may delete your account at any time through the app settings, and your data will be removed within a reasonable timeframe.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">5. Data Sharing</h3>
                  <p>
                    Deenway does not sell personal data. We may share limited, non-identifiable analytics with trusted third-party services solely for improving our app’s performance and stability. These third parties do not receive your email address or personal profile information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">6. Affiliate Links</h3>
                  <p>
                    Some books listed in the app include affiliate links. If you choose to make a purchase through these links, you may be redirected to external websites that follow their own privacy policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7. Account Deletion</h3>
                  <p>You may delete your account at any time using the in-app settings. Once deleted, your data will be permanently removed from our systems.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">8. International Users</h3>
                  <p>
                   While Deenway Ltd is UK-based, users from any country may access the app. Data may be processed in the United Kingdom or in locations where our service providers operate, in compliance with applicable data protection requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">9. Your Rights</h3>
                  <p>You have the right to:</p>

                  <div className="space-y-2 pl-1 mt-3">
                    <p>Request access to your data</p>
                    <p>Request correction or deletion</p>
                    <p>Withdraw consent to processing</p>
                    <p>Contact us with any privacy concerns</p>
                  </div>

                  <p className="mt-3">
                    You can contact <strong>admin@deenway.info</strong> for assistance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">10. Updates</h3>
                  <p>
                    We may update this Privacy Policy occasionally. Users will be notified within the app or via email when appropriate.
                  </p>
                </div>

              </AccordionContent>
            </AccordionItem>

            {/* TERMS OF SERVICE */}
            <AccordionItem value="terms" className="bg-card border rounded-xl px-8 shadow-sm">
              <AccordionTrigger className="text-2xl font-bold py-8">Terms of Service</AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-relaxed pb-8 space-y-6">

                <p><strong>Effective Date:</strong> 07/11/2025</p>
                <p><strong>Publisher:</strong> Deenway Ltd</p>
                <p><strong>Contact:</strong> admin@deenway.info</p>

                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
                  <p>
                    These Terms of Service outline how you may use the Deenway mobile app. The service is operated by Deenway Ltd, a company based in the United Kingdom and currently in the process of formal registration. The app may be used by individuals worldwide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. About the App</h3>
                  <p>
                   Deenway offers short, thoughtfully prepared summaries of Islamic books. These summaries are intended to help users learn and reflect, especially when time is limited. The app is currently free to use, but we plan to introduce optional monthly and yearly subscriptions for full library access and premium features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Intellectual Property</h3>
                  <p>
                    All content within the app—including summaries, descriptions, and related materials—is owned by Deenway Ltd. You may not copy, reproduce, or distribute this content without our written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Educational Disclaimer</h3>
                  <p>
                    Deenway does not summarise tafsir, hadith collections, or seerah texts, as these works require scholarly precision and care. The summaries in the app are intended for general understanding and personal reflection, not for issuing religious rulings or fatwas. For religious guidance, users should consult qualified scholars.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">5. User Accounts</h3>
                  <p>
                   You are responsible for keeping your login details secure. If you choose to delete your account, you may do so at any time within the app, and your data will be permanently removed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">6. Affiliate Links</h3>
                  <p>
                    Some books in the app contain affiliate links. If you make a purchase through these links, we may earn a small commission at no additional cost to you. This helps support the ongoing development of the app.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7. Subscriptions</h3>
                  <p>
                    When paid subscriptions are introduced, they will renew automatically unless cancelled through your App Store or Google Play settings. Your access will remain active until the end of the billing cycle.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">8. Acceptable Use</h3>
                  <p>
                    You agree not to misuse the app, attempt to reverse-engineer it, disrupt its functionality, or engage in behaviour that could harm the service or other users.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">9. Limitation of Liability</h3>
                  <p>
                    The app is provided “as is.” While we aim to maintain a reliable experience, Deenway Ltd cannot guarantee uninterrupted access and is not liable for damages arising from the use of the app.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">10. Governing Law</h3>
                  <p>
                    These Terms are governed by the laws of the United Kingdom. If you have any concerns or questions, you may contact us at admin@deenway.info.
                  </p>
                </div>

              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t bg-card">
        <div className="container mx-auto px-4 text-center space-y-6">

          <Logo size="md" className="mx-auto" />

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["hero", "FAQ", "legal"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="hover:text-primary transition-colors"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">© 2025 Deenway. All rights reserved.</p>

        </div>
      </footer>

    </div>
  );
};

export default Index;
