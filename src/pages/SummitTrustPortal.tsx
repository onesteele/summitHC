import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Search, Home, ShieldCheck, FileText, Video, Users, Calendar,
  MessageCircle, Trophy, TrendingUp, DollarSign, BarChart3, ArrowRight,
  Menu, X, Wallet, Lock, Smartphone, BadgeCheck,
} from "lucide-react";
import AIVideoSearch from "@/components/AIVideoSearch";
import SummitLogo from "@/components/SummitLogo";

const WISTIA_IDS = [
  "bpvosbb6f6","ckb4hd66cw","apug4or5x6","xja8n6b6te","omrwkjqloj","xfez5pwrdb",
  "y4m9xyjb82","kyqmpf1uua","n9kkpr214p","ipr8i17kie","3x028x03fa","h8rj2nwlls","qjfwbq6mhr",
];

const SUMMIT_URL = "https://summit-securities.com";
const DISCORD_URL = "https://discord.gg/5Ndg7TNGgh";

const SummitTrustPortal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 250);

    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    const embedScripts = WISTIA_IDS.map((id) => {
      const s = document.createElement("script");
      s.src = `https://fast.wistia.com/embed/${id}.js`;
      s.async = true;
      s.type = "module";
      document.head.appendChild(s);
      return s;
    });

    const style = document.createElement("style");
    style.textContent = WISTIA_IDS.map(
      (id) => `wistia-player[media-id='${id}']:not(:defined){background:center/contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch');display:block;filter:blur(5px);padding-top:56.25%;}`
    ).join("\n");
    document.head.appendChild(style);

    return () => {
      clearTimeout(t);
      [playerScript, ...embedScripts, style].forEach((el) => {
        try { document.head.removeChild(el); } catch { /* noop */ }
      });
    };
  }, []);

  const navigationItems = [
    { icon: Home, label: "How it works", href: "#how-it-works" },
    { icon: ShieldCheck, label: "Is Summit Safe?", href: "#is-summit-safe" },
    { icon: FileText, label: "Regulation & Audits", href: "#regulation" },
    { icon: Video, label: "The Platform", href: "#platform" },
    { icon: Wallet, label: "Deposits & Withdrawals", href: "#deposits" },
    { icon: BadgeCheck, label: "The $100 Bonus", href: "#bonus" },
    { icon: BarChart3, label: "Spreads & Fees", href: "#fees" },
    { icon: TrendingUp, label: "Instruments", href: "#instruments" },
    { icon: Smartphone, label: "Mobile App", href: "#mobile" },
    { icon: Lock, label: "Account Security", href: "#security" },
    { icon: MessageCircle, label: "Real Client Stories", href: "#stories" },
    { icon: Search, label: "What's the Catch?", href: "#catch" },
  ];

  const supportItems = [
    { icon: Users, label: "Contact Support", onClick: () => window.open(SUMMIT_URL, "_blank") },
    { icon: MessageCircle, label: "Discord Community", onClick: () => window.open(DISCORD_URL, "_blank") },
    { icon: Calendar, label: "Book a Walkthrough", onClick: () => window.open(SUMMIT_URL, "_blank") },
  ];

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const featured = [
    {
      title: "How Summit Securities Actually Works",
      description: "Account creation, the web trader, and how positions are placed and settled.",
      mediaId: "bpvosbb6f6",
    },
    {
      title: "The Business Model — How a Broker Makes Money",
      description: "Spreads, financing, and why our incentives align with active traders.",
      mediaId: "ckb4hd66cw",
    },
  ];

  const trust = [
    {
      title: "Who Summit Securities Is Built For",
      description: "From first-time traders to professionals — and the math behind our spreads.",
      mediaId: "apug4or5x6",
    },
    {
      title: "What Most Brokers Won't Tell You",
      description: "Full transparency about execution, slippage and how orders are routed.",
      mediaId: "xja8n6b6te",
    },
  ];

  const skeptical = [
    {
      title: "Skeptical about online brokers? You should be.",
      description: "After years of bad actors in this space, we get it. Here's how to vet us.",
      mediaId: "xfez5pwrdb",
    },
    {
      title: "Behind the curtain at Summit Securities",
      description: "How we operate, who custodies your funds, and what happens day-to-day.",
      mediaId: "omrwkjqloj",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden bg-card/80 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <SummitLogo />
        <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen((o) => !o)} className="p-2">
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-80 bg-card border-r border-border shadow-2xl">
            <div className="p-4">
              <div className="mb-5"><SummitLogo /></div>
              <nav className="space-y-0.5">
              {navigationItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); setIsMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground transition-colors"
                  >
                    <item.icon className="h-4 w-4 text-white/80" />
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border space-y-0.5">
                {supportItems.map((item, i) => (
                  <button key={i} onClick={item.onClick}
                    className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground transition-colors">
                    <item.icon className="h-4 w-4 text-white/80" />
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <Button className="w-full gold-button" onClick={() => window.open(SUMMIT_URL, "_blank")}>
                  Start Trading
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-card/60 backdrop-blur border-r border-border flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
          <div className="p-4 py-9">
            <div className="mb-5"><SummitLogo /></div>
            <nav className="space-y-0.5">
              {navigationItems.map((item, i) => (
                <a key={i} href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground transition-colors">
                  <item.icon className="h-4 w-4 text-white/80" />
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border space-y-0.5">
              {supportItems.map((item, i) => (
                <button key={i} onClick={item.onClick}
                  className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground transition-colors">
                  <item.icon className="h-4 w-4 text-white/80" />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <Button className="w-full gold-button" onClick={() => window.open(SUMMIT_URL, "_blank")}>
                Start Trading
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-0 cosmic-grid opacity-50 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none">
            <div className="w-full h-full opacity-20 bg-white blur-[140px]" />
          </div>

          <div className="relative z-10 px-4 py-10 md:px-8 md:py-16 lg:px-12 lg:py-20">
            {/* Hero */}
            <div className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-card/60 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Trust & Transparency Portal
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance text-foreground">
                <span className="gold-text">Trade with a trusted</span>
                <br />
                <span className="gold-text">global broker.</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Everything you want to know about Summit Securities — withdrawals,
                fees, regulation and execution — answered honestly, in plain English.
                Watch a short video or ask our AI.
              </p>

              <div className="flex flex-col gap-5 justify-center items-center pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gold-button h-12 px-7" onClick={() => window.open(SUMMIT_URL, "_blank")}>
                    Start Trading <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="h-12 px-7 border-white/20 hover:bg-white/10 hover:text-foreground"
                    onClick={() => window.open(DISCORD_URL, "_blank")}>
                    Join the Community
                  </Button>
                </div>
                <AIVideoSearch />
              </div>

              {/* Verification stats — mirrors summit-securities.com */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-8 max-w-4xl mx-auto">
                {[
                  { k: "<2 min", v: "Avg. Withdrawal Time" },
                  { k: "$50", v: "Min. to Start Trading" },
                  { k: "11K+", v: "5-Star Reviews" },
                  { k: "100K+", v: "Active Traders" },
                  { k: "4", v: "Audited Certifications" },
                ].map((s, i) => (
                  <div key={i} className="cosmic-card rounded-xl px-4 py-3 text-center">
                    <div className="text-xl md:text-2xl font-semibold gold-text tracking-tight">{s.k}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <Section id="how-it-works" title="How Summit Securities Works">
              <VideoGrid items={featured} cols={2} />
            </Section>

            <Section id="is-summit-safe" title="Is Summit Securities Safe? The Honest Answer">
              <VideoGrid items={trust} cols={2} />
            </Section>

            <Section id="regulation" title="Regulation, Audits & Where Your Money Lives">
              <VideoGrid items={skeptical} cols={2} />
            </Section>

            <SingleVideo
              id="platform"
              heading="A Tour of the Summit Web Trader"
              title="The platform, explained in under 5 minutes"
              description="Charts, order tickets, watchlists and risk management — what's where and why."
              mediaId="y4m9xyjb82"
            />

            <div className="flex items-center justify-center my-14">
              <div className="h-px bg-border flex-1" />
              <div className="px-6"><div className="w-2 h-2 bg-white rounded-full" /></div>
              <div className="h-px bg-border flex-1" />
            </div>

            <SingleVideo
              id="deposits"
              heading="Deposits, Withdrawals & the Average Payout Time"
              title="How money moves in and out of Summit Securities"
              description="ACH, bank wire, crypto wallets — what to expect and how long it really takes."
              mediaId="kyqmpf1uua"
            />

            <SingleVideo
              id="bonus"
              heading="The New-Client $100 Deposit Bonus"
              title="What it is, how to claim it, and the fine print"
              description="Eligibility, timing, and what counts toward unlocking your bonus."
              mediaId="n9kkpr214p"
            />

            <SingleVideo
              id="fees"
              heading="Spreads, Commissions & Overnight Financing"
              title="Exactly what you pay to trade with Summit"
              description="A plain-English walkthrough of every cost — no asterisks."
              mediaId="ipr8i17kie"
            />

            <SingleVideo
              id="instruments"
              heading="What You Can Trade"
              title="Forex, CFDs, Indices, Metals, Commodities & Bonds"
              description="A quick look at the instruments available inside the platform."
              mediaId="3x028x03fa"
            />

            <SingleVideo
              id="stories"
              heading="Real Client Stories"
              title="Don't take our word for it"
              description="How to verify reviews yourself, and what active clients say in their own words."
              mediaId="h8rj2nwlls"
            />

            <SingleVideo
              id="catch"
              heading="So… What's the Catch?"
              title="If it sounds too good to be true, here's the honest answer"
              description="What we're optimizing for, and what trade-offs that means for you."
              mediaId="qjfwbq6mhr"
            />

            {/* Footer CTA */}
            <div className="max-w-3xl mx-auto mt-20 text-center cosmic-card rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-medium font-serif-display gold-text">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Use the AI assistant in the bottom-right to chat with our support team,
                or jump in with thousands of other traders on Discord.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Button className="gold-button h-11 px-6" onClick={() => window.open(SUMMIT_URL, "_blank")}>
                  Open an Account
                </Button>
              <Button variant="outline" className="h-11 px-6 border-white/20 hover:bg-white/10 hover:text-foreground"
                  onClick={() => window.open(DISCORD_URL, "_blank")}>
                  Join Discord
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Helpers ---------- */

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <div className="max-w-6xl mx-auto mt-16 md:mt-24">
    <h2 id={id} className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 font-serif-display gold-text">
      {title}
    </h2>
    {children}
  </div>
);

const VideoGrid: React.FC<{
  items: { title: string; description: string; mediaId: string }[];
  cols?: 1 | 2;
}> = ({ items, cols = 2 }) => (
  <div className={`grid grid-cols-1 ${cols === 2 ? "lg:grid-cols-2" : ""} gap-5 md:gap-6`}>
    {items.map((c, i) => (
      <div key={i} className="cosmic-card rounded-xl p-4 md:p-6">
        <div className="aspect-video rounded-lg overflow-hidden mb-4 md:mb-5 relative">
          <div className="absolute inset-0"
            dangerouslySetInnerHTML={{
              __html: `<wistia-player media-id="${c.mediaId}" aspect="1.7777777777777777" style="width:100%;height:100%;border-radius:0.5rem;"></wistia-player>`,
            }} />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{c.title}</h3>
        <p className="text-sm md:text-base text-muted-foreground text-balance">{c.description}</p>
      </div>
    ))}
  </div>
);

const SingleVideo: React.FC<{
  id: string; heading: string; title: string; description: string; mediaId: string;
}> = ({ id, heading, title, description, mediaId }) => (
  <div className="max-w-4xl mx-auto mt-14 md:mt-20">
    <h3 id={id} className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center font-serif-display gold-text">
      {heading}
    </h3>
    <div className="cosmic-card rounded-xl p-4 md:p-6">
      <div className="aspect-video rounded-lg overflow-hidden mb-4 md:mb-5 relative">
        <div className="absolute inset-0"
          dangerouslySetInnerHTML={{
            __html: `<wistia-player media-id="${mediaId}" aspect="1.7777777777777777" style="width:100%;height:100%;border-radius:0.5rem;"></wistia-player>`,
          }} />
      </div>
      <h4 className="text-lg md:text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm md:text-base text-muted-foreground text-balance">{description}</p>
    </div>
  </div>
);

export default SummitTrustPortal;
