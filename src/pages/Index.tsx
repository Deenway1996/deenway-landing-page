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
              {["hero", "FAQ", "legal", "contact"].map((sec) => (
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

          <Accordion type="single" collapsible className="space-y-4">

            {/* PRIVACY POLICY */}
<AccordionItem value="privacy" className="bg-card border rounded-xl px-8 shadow-sm">
  <AccordionTrigger className="text-2xl font-bold py-8">Privacy Policy</AccordionTrigger>
  <AccordionContent className="text-muted-foreground leading-relaxed pb-8 space-y-6">

    <p><strong>Effective Date:</strong> 07/11/2025</p>
    <p><strong>Operator:</strong> Deenway (unregistered), a sole-trader brand based in the United Kingdom</p>
    <p><strong>Contact:</strong> admin@deenway.info</p>

    <div>
      <h3 className="text-xl font-semibold mb-2">1. Who We Are</h3>
      <p>
        This App is operated by Deenway (unregistered), a sole-trader brand based in the United Kingdom (“we”, “us”, “our”).
        For data protection purposes, we act as the Data Controller for all data collected through the App.
      </p>
      <p>Contact: 📧 admin@deenway.info</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">2. Information We Collect</h3>

      <p><strong>A. Account Information</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Email address</li>
        <li>Display name</li>
        <li>Password (stored securely using industry-standard hashing)</li>
      </ul>

      <p><strong>B. App Usage & Reading Progress</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Completed books</li>
        <li>Reading progress</li>
        <li>Interaction with summaries</li>
        <li>Feature usage</li>
      </ul>
      <p>This data is used for personalisation and does not infer religious beliefs.</p>

      <p><strong>C. Device & Technical Information</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Device model & OS</li>
        <li>App version</li>
        <li>IP address (via Cloudflare)</li>
        <li>Crash logs & diagnostics</li>
      </ul>

      <p><strong>D. Analytics Data</strong></p>
      <p>We use Firebase Analytics to collect aggregated information such as:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>User interactions</li>
        <li>Session duration</li>
        <li>Feature usage</li>
        <li>Engagement metrics</li>
      </ul>

      <p><strong>E. Affiliate Link Interactions</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Click events</li>
        <li>Redirect information</li>
        <li>Destination link clicked</li>
      </ul>
      <p>We never collect payment information — purchases occur on third-party websites.</p>

      <p><strong>F. Cookies & Tracking Technologies</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Firebase SDK identifiers</li>
        <li>Device identifiers (IDFA/GAID)</li>
        <li>Randomised identifiers</li>
      </ul>
      <p>No advertising is used. Tracking may be disabled through device settings.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide and operate the App</li>
        <li>Manage user accounts</li>
        <li>Track reading progress</li>
        <li>Personalise user experience</li>
        <li>Improve features & performance</li>
        <li>Ensure security</li>
        <li>Respond to enquiries</li>
        <li>Comply with legal requirements</li>
      </ul>
      <p>Marketing emails (if introduced) require explicit opt-in.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">4. Legal Bases for Processing (UK & EU GDPR)</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Contract</strong> – providing access to the App</li>
        <li><strong>Legitimate Interests</strong> – analytics & improvement</li>
        <li><strong>Consent</strong> – optional features or marketing</li>
        <li><strong>Legal Obligation</strong> – compliance</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">5. How We Share Your Information</h3>
      <p>We do not sell personal data.</p>

      <p><strong>A. Firebase (Google LLC)</strong> – analytics, authentication, crash reports</p>
      <p><strong>B. Supabase</strong> – database + authentication</p>
      <p><strong>C. Cloudflare</strong> – CDN, DDoS protection, security</p>
      <p><strong>D. Affiliate Partners</strong> – limited click-tracking for commission processing</p>

      <p><strong>Legal Requests:</strong> Information may be disclosed to comply with laws or protect users.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">6. International Data Transfers</h3>
      <p>
        Data may be transferred outside the UK. When this occurs, we rely on:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Standard Contractual Clauses (SCCs)</li>
        <li>UK GDPR-approved safeguards</li>
        <li>Adequacy decisions (where applicable)</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">7. Data Retention</h3>
      <p>
        Data is retained only as necessary. If you delete your account:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Your personal data is permanently erased</li>
        <li>Anonymised analytics may remain for reporting</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">8. Your Rights (UK & EU GDPR)</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Access your data</li>
        <li>Correct inaccuracies</li>
        <li>Request deletion</li>
        <li>Object to processing</li>
        <li>Withdraw consent</li>
        <li>Data portability</li>
      </ul>
      <p>Contact: 📧 admin@deenway.info</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">9. Children’s Privacy</h3>
      <p>
        The App is intended for users aged 16+. We do not knowingly collect data from children.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">10. Security</h3>
      <p>
        We use industry-standard security measures including:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>HTTPS encryption</li>
        <li>Secure authentication</li>
        <li>Hashed passwords</li>
        <li>Cloudflare network protection</li>
        <li>Role-based access controls</li>
      </ul>
      <p>No method is 100% secure, but we take reasonable steps to protect your information.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">11. External Links</h3>
      <p>
        Affiliate and external links may lead to third-party websites.  
        We are not responsible for their content, privacy practices, or security.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">12. Changes to This Privacy Notice</h3>
      <p>
        We may update this Notice as needed. Significant changes will be communicated in-app or via email.
        Continued use of the App means acceptance of updates.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">13. Contact</h3>
      <p>For privacy enquiries: <strong>admin@deenway.info</strong></p>
    </div>

  </AccordionContent>
</AccordionItem>


            {/* TERMS OF SERVICE */}
<AccordionItem value="terms" className="bg-card border rounded-xl px-8 shadow-sm">
  <AccordionTrigger className="text-2xl font-bold py-8">Terms of Service</AccordionTrigger>
  <AccordionContent className="text-muted-foreground leading-relaxed pb-8 space-y-6">

    <p><strong>Effective Date:</strong> 07/11/2025</p>
    <p><strong>Operator:</strong> Deenway (unregistered), a sole-trader brand based in the United Kingdom</p>
    <p><strong>Contact:</strong> admin@deenway.info</p>

    <div>
      <h3 className="text-xl font-semibold mb-2">1. Definitions</h3>
      <p><strong>“App”</strong> – the Deenway mobile application.</p>
      <p><strong>“Service”</strong> – all features, content, and functionality within the App.</p>
      <p><strong>“Content”</strong> – summaries, text, lessons, and materials produced by Deenway.</p>
      <p><strong>“User” / “you”</strong> – any person who downloads or uses the App.</p>
      <p><strong>“We” / “us” / “our”</strong> – Deenway (unregistered).</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">2. Acceptance of Terms</h3>
      <p>
        By downloading or using the App, you agree to these Terms and our Privacy Notice.
        If you do not agree, discontinue use immediately.
      </p>
      <p>The App is accessible globally, though availability may vary by region.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">3. License to Use the App</h3>
      <p>You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial use.</p>
      <p>You may NOT:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Copy, modify, or create derivative works</li>
        <li>Reverse-engineer or extract source code</li>
        <li>Rent, lease, or sublicense the App</li>
        <li>Use the App or its content for commercial purposes without permission</li>
      </ul>
      <p>All rights not granted are reserved by Deenway.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">4. About the App</h3>
      <p>
        Deenway provides short, educational summaries of Islamic books.
        AI tools may assist the process, but every summary goes through human review.
      </p>
      <p>The App is currently free. Subscriptions may be introduced in the future.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">5. Educational & Religious Disclaimer</h3>
      <p>The App provides general educational interpretations only. Deenway does NOT:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide fatwas or Islamic rulings</li>
        <li>Replace scholarly consultation</li>
        <li>Summarise tafsir, hadith collections, or seerah works</li>
        <li>Guarantee accuracy of religious interpretations</li>
      </ul>
      <p>Users should seek qualified scholars for religious matters.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">6. Interpretation Disclaimer</h3>
      <p>All summaries and insights are independent, original interpretations produced by Deenway. They:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Are not direct quotations</li>
        <li>May simplify or paraphrase ideas</li>
        <li>Do not represent the author’s literal voice or intent</li>
        <li>May contain unintentional inaccuracies</li>
        <li>Do not replace the original works</li>
      </ul>
      <p>We encourage reading the full books for proper context.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">7. No Affiliation or Endorsement</h3>
      <p>
        Deenway is not affiliated with, endorsed by, or sponsored by any author or publisher.
        Book titles and author names are used solely for identification.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">8. Copyright & Takedown Procedure</h3>
      <p>
        All summaries are transformative educational works.
        Rights-holders may request corrections or removals.
      </p>
      <p>Please email:</p>
      <p><strong>admin@deenway.info</strong></p>
      <p>Include:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Your name & contact</li>
        <li>The book and content in question</li>
        <li>Description of the issue</li>
        <li>Proof of rights-ownership</li>
        <li>The requested action</li>
      </ul>
      <p>We will review and respond promptly.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">9. Affiliate Links & Disclosure</h3>
      <p>
        Some summaries contain affiliate links. Purchases through these links may earn a small commission at no extra cost to you.
      </p>
      <p>Affiliate partnerships do NOT influence:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Which books are selected</li>
        <li>Summary content</li>
        <li>The educational mission of the App</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">10. User Accounts</h3>
      <p>You agree to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide accurate information</li>
        <li>Keep login credentials secure</li>
        <li>Accept responsibility for activity under your account</li>
      </ul>
      <p>You may delete your account at any time. All data will be permanently removed.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">11. Reading Progress & Personalisation</h3>
      <p>
        The App may track your reading progress to improve experience and personalisation.
        This data is not used to infer religious beliefs.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">12. Subscription Terms</h3>
      <p>If subscriptions are introduced:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Payments handled by Apple App Store or Google Play</li>
        <li>Auto-renew unless cancelled 24 hours before renewal</li>
        <li>Cancellations must be done via App Store settings</li>
        <li>Refunds handled by Apple/Google</li>
        <li>Deleting the App does NOT cancel the subscription</li>
      </ul>
      <p>Pricing may vary by region.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">13. User Representations</h3>
      <p>By using the App, you confirm:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>You are at least 16 years old</li>
        <li>You will comply with applicable laws</li>
        <li>You will not misuse Islamic content</li>
        <li>You will not misrepresent summaries as religious rulings</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">14. Prohibited Conduct</h3>
      <p>You MUST NOT:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Reverse-engineer or tamper with the App</li>
        <li>Scrape or harvest content</li>
        <li>Circumvent authentication or security</li>
        <li>Use bots or automated tools</li>
        <li>Upload malware or harmful code</li>
        <li>Train third-party AI models on Deenway content</li>
        <li>Distort Islamic teachings</li>
        <li>Use the App commercially without permission</li>
      </ul>
      <p>Violations may result in account termination or legal action.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">15. External Links Disclaimer</h3>
      <p>
        The App may contain third-party links. We are not responsible for their content,
        availability, or privacy practices. Use at your own risk.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">16. AI Disclaimer</h3>
      <p>
        Some content may be generated or assisted by AI.  
        AI outputs may contain imperfections or inaccuracies. Use with discretion.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">17. Service Availability</h3>
      <p>We do not guarantee:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Uninterrupted access</li>
        <li>Error-free performance</li>
        <li>Permanent availability of features</li>
      </ul>
      <p>We may modify or discontinue any feature at any time.</p>
    </div>

<div>
  <h3 className="text-xl font-semibold mb-2">18. Limitation of Liability</h3>
  <p>To the fullest extent permitted by law, Deenway is not liable for:</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>Loss of data</li>
    <li>Indirect, incidental, or consequential damages</li>
    <li>Errors, outages, or interruptions</li>
    <li>Actions taken based on summaries or interpretations</li>
    <li>Reliance on educational content</li>
  </ul>
  <p>
    You use the App at your own responsibility. If you disagree with these limitations,
    discontinue use immediately.
  </p>
</div>

<div>
  <h3 className="text-xl font-semibold mb-2">19. Indemnification</h3>
  <p>
    You agree to indemnify and hold harmless Deenway from any claims, damages,
    liabilities, or expenses arising from:
  </p>
  <ul className="list-disc pl-6 space-y-2">
    <li>Your use of the App</li>
    <li>Your violation of these Terms</li>
    <li>Your misuse of Islamic content</li>
    <li>Your infringement of copyrights or intellectual property</li>
  </ul>
</div>



<div>
  <h3 className="text-xl font-semibold mb-2">20. Service Modification & Termination</h3>
  <p>We may modify, suspend, or discontinue any feature at any time, including:</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>Content updates</li>
    <li>Summaries</li>
    <li>App features</li>
    <li>User accounts (for violations)</li>
  </ul>
  <p>No compensation is provided for discontinued features.</p>
</div>

<div>
  <h3 className="text-xl font-semibold mb-2">21. International Users</h3>
  <p>
    The App is accessible globally. However, we make no guarantee that content
    is appropriate or legal in every region.
  </p>
  <p>
    You are responsible for compliance with local laws in your country or region.
  </p>
</div>

<div>
  <h3 className="text-xl font-semibold mb-2">22. Governing Law</h3>
  <p>
    These Terms are governed by the laws of the United Kingdom. Any disputes must
    be handled under UK jurisdiction.
  </p>
</div>

<div>
  <h3 className="text-xl font-semibold mb-2">23. Changes to These Terms</h3>
  <p>
    We may update these Terms periodically. Significant updates will be announced
    through the App or email.
  </p>
  <p>
    Continued use of the App after changes means you accept the updated Terms.
  </p>
</div>

<div>
  <h3 className="text-xl font-semibold mb-2">24. Severability</h3>
  <p>
    If any part of these Terms is found invalid or unenforceable, the remaining
    sections remain fully in effect.
  </p>
</div>

<div>
  <h3 className="text-xl font-semibold mb-2">25. Contact</h3>
  <p>For questions or concerns regarding these Terms, contact:</p>
  <p><strong>admin@deenway.info</strong></p>
</div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
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
            {["hero", "FAQ", "legal", "contact"].map((sec) => (
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
