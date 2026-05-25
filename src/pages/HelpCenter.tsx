import React, { useMemo, useState } from "react";
import {
  Search, MessageCircle, Wallet, BadgeCheck, BarChart3,
  DollarSign, Lock, LifeBuoy, ArrowRight, type LucideIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import SummitLogo from "@/components/SummitLogo";
import { openSupportChat } from "@/components/SupportChatWidget";

const SUMMIT_URL = "https://summit-securities.com";

type Article = { id: string; q: string; a: string[] | null };
type Topic = { id: string; title: string; icon: LucideIcon; blurb: string; articles: Article[] };

const TOPICS: Topic[] = [
  {
    id: "deposits-withdrawals",
    title: "Deposits & withdrawals",
    icon: Wallet,
    blurb: "Funding your account and getting your money out.",
    articles: [
      { id: "dep-methods", q: "What payment methods can I use to deposit?", a: ["Deposits are made using the major card networks — Visa, Mastercard, and American Express."] },
      { id: "dep-networks", q: "Are my deposits processed over established payment networks?", a: ["Yes. Card payments run over the major global card networks (Visa, Mastercard, American Express).", "To be clear: this is about how your payment is transmitted — it is separate from broker regulation. See “Is Summit a regulated broker?” under Trust & safety."] },
      { id: "dep-min", q: "Is there a minimum first deposit?", a: null },
      { id: "dep-3p", q: "Can someone else (a third party) fund my account?", a: null },
      { id: "wd-methods", q: "How do I withdraw my money, and what methods are available?", a: null },
      { id: "wd-time", q: "How long do withdrawals take to process?", a: null },
      { id: "wd-fees", q: "Are there any withdrawal fees?", a: null },
      { id: "wd-kyc", q: "Do I need to complete verification before I can withdraw?", a: ["Verification is completed once, when you create your account — not later. So an unfinished verification won't hold up a withdrawal down the line."] },
      { id: "wd-scam", q: "Will you ever ask me to pay a fee, tax, or deposit to release a withdrawal?", a: ["No. Summit will never ask you to pay a fee, tax, or “unlock” deposit to release a withdrawal.", "If anyone contacts you demanding a payment before you can withdraw, they are impersonating Summit. Stop, and report it through our official website."] },
      { id: "wd-delay", q: "What happens if my withdrawal is delayed — how will I be told why?", a: null },
    ],
  },
  {
    id: "account-verification",
    title: "Account & verification",
    icon: BadgeCheck,
    blurb: "Opening an account, ID checks, and practising on a demo.",
    articles: [
      { id: "kyc-docs", q: "What documents do I need to open and verify an account?", a: ["You can verify with any one of: a passport, national ID card, driver's license, or proof of residency."] },
      { id: "kyc-time", q: "How long does verification take?", a: ["Verification typically takes no longer than 5 minutes."] },
      { id: "kyc-why", q: "Why do you need this information, and when will you ask for it?", a: ["It's required to prevent fraud and money laundering. We ask for it once, at account creation — never as a surprise later on."] },
      { id: "acc-demo", q: "Do you offer a demo account before I trade with real money?", a: ["Yes. You can use a demo account to get comfortable with the platform and practice your trading before funding a live account."] },
      { id: "acc-demo-live", q: "What's the difference between demo and live trading?", a: ["A demo account uses paper money — a simulated balance, not real funds — but it gives you full access to our platform and software and exposes you to real market conditions."] },
    ],
  },
  {
    id: "trading-platform",
    title: "Trading & the platform",
    icon: BarChart3,
    blurb: "What you can trade, the platform, and market conditions.",
    articles: [
      { id: "acc-products", q: "What products can I trade, and what are the risks?", a: ["Summit offers CFDs on a broad range of underlyings: indices (e.g., NASDAQ), individual stocks, commodities, metals, and cryptocurrencies. (CFDs only — Summit does not offer futures.)", "Risk: CFDs are leveraged products. Leverage magnifies both gains and losses, and you can lose your entire deposit. CFDs are not suitable for everyone."] },
      { id: "plat-charting", q: "What platform and charting tools do you use?", a: ["Summit's platform uses TradingView's charting technology for charts and order entry."] },
      { id: "plat-volatility", q: "What happens during volatile markets — can the platform go down?", a: ["Summit's platform is a charting and order-entry interface; it isn't an exchange. When you trade a CFD you open a contract whose price tracks an underlying market (for example the NASDAQ index or a U.S. stock); the position is held with Summit as counterparty rather than routed onto that exchange.", "Your ability to open or close is tied to the underlying market's hours and conditions — so if the underlying exchange triggers a circuit-breaker halt, pricing for that instrument pauses for everyone until the exchange reopens it, exactly as it would for any market participant."] },
      { id: "plat-status", q: "Is there a status page I can check?", a: ["Yes. Live system status is published at summit-securities.com/status."] },
    ],
  },
  {
    id: "fees",
    title: "Fees & costs",
    icon: DollarSign,
    blurb: "Spreads, commissions, and any other charges.",
    articles: [
      { id: "fee-trade", q: "What does a trade actually cost me — spreads, commissions, overnight/swap charges?", a: null },
      { id: "fee-other", q: "Are there any inactivity, conversion, or transfer fees?", a: null },
      { id: "fee-preview", q: "Is there a way to see the full cost of a trade before I place it?", a: null },
    ],
  },
  {
    id: "trust-safety",
    title: "Trust & safety",
    icon: Lock,
    blurb: "Who we are, how to verify us, and staying safe from scams.",
    articles: [
      { id: "reg-status", q: "Is Summit a regulated broker — and how can I verify that independently?", a: ["Summit is the trading brand of Silver Tech Development LLC, a company registered in Lima, Peru (registration no. 99-1384721). Summit is not a U.S.-registered broker-dealer and is not available to clients in the United States.", "We want to be straight about what that means: Summit is not authorized or supervised by a financial-markets regulator, so there is no regulator's register to look us up in, and no government investor-compensation scheme protects the funds in a trading account. CFD trading is high-risk and you can lose your entire deposit.", "What you can verify independently: our legal entity and registration through Peru's public company registry (SUNARP), and that you're dealing with our official channels (see below)."] },
      { id: "reg-partners", q: "What technology and partners does Summit use?", a: ["Summit's charts and trading interface are powered by TradingView's charting technology."] },
      { id: "reg-imposter", q: "How do I know I'm using the official Summit site and not a clone or imposter?", a: ["Always reach Summit only through our official website, summit-securities.com.", "We will never contact you from a personal WhatsApp or Telegram number, ask you to deposit into a personal bank account, or demand a surprise “fee,” “tax,” or “unlock payment” to release a withdrawal. Anyone doing that is impersonating us. If anything looks off, stop and contact support through the website."] },
      { id: "reg-segregation", q: "Are my funds held separately from company funds?", a: null },
    ],
  },
  {
    id: "contact",
    title: "Contact & support",
    icon: LifeBuoy,
    blurb: "Reaching a person when you need one.",
    articles: [
      { id: "sup-human", q: "Can I reach a real person, not just a chatbot?", a: null },
      { id: "sup-hours", q: "What are your support hours and typical response times?", a: null },
      { id: "sup-escalate", q: "How do I escalate an urgent issue with my funds, withdrawal, or account access?", a: null },
    ],
  },
];

const ArticleBody: React.FC<{ a: string[] | null }> = ({ a }) =>
  a ? (
    <div className="space-y-3">
      {a.map((p, i) => <p key={i} className="text-balance">{p}</p>)}
    </div>
  ) : (
    <p className="italic opacity-70">We're finalising this answer. Need it now? Use the chat — our team can help.</p>
  );

const HelpCenter = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return TOPICS.flatMap((t) => t.articles)
      .filter((a) => a.q.toLowerCase().includes(q) || (a.a ?? []).some((p) => p.toLowerCase().includes(q)));
  }, [query]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 cosmic-grid opacity-50 pointer-events-none" />

      <div className="relative z-10">
        {/* Top bar */}
        <header className="border-b border-border bg-card/60 backdrop-blur sticky top-0 z-30">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SummitLogo />
              <span className="hidden sm:inline text-sm text-muted-foreground border-l border-border pl-3">
                Help Center
              </span>
            </div>
            <a href={SUMMIT_URL} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              summit-securities.com
            </a>
          </div>
        </header>

        {/* Hero + search + chat */}
        <section className="px-4 md:px-6 pt-14 pb-10 text-center">
          {/* Live status pill */}
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              24,531 Traders Online
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight gold-text font-serif-display">
            How can we help?
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Search our help articles, or start a conversation with our support assistant.
          </p>

          <div className="relative mt-7 max-w-xl mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for help…"
              className="pl-11 h-14 text-base bg-card/70 border-border rounded-xl"
            />
          </div>

          {/* Center "open chat" spot */}
          <div className="mt-7 max-w-xl mx-auto cosmic-card rounded-2xl p-6 md:p-7">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full gold-button grid place-items-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-foreground">Chat with Summit support</h2>
              <p className="text-sm text-muted-foreground max-w-sm">
                Have a question about your account, a deposit, or a withdrawal? Open a chat and
                we'll help you out.
              </p>
              <Button className="gold-button h-12 px-7 mt-1" onClick={openSupportChat}>
                Open chat <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 md:px-6 pb-24">
          {results ? (
            /* ---- Search results ---- */
            <div>
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                {results.length} result{results.length === 1 ? "" : "s"} for “{query}”
              </h2>
              {results.length === 0 ? (
                <div className="cosmic-card rounded-xl p-8 text-center">
                  <p className="text-muted-foreground">
                    Nothing matched. Try different words, or{" "}
                    <button onClick={openSupportChat} className="gold-text underline underline-offset-2">
                      chat with support
                    </button>.
                  </p>
                </div>
              ) : (
                <div className="cosmic-card rounded-xl px-4 md:px-5">
                  <Accordion type="single" collapsible>
                    {results.map((a) => (
                      <AccordionItem key={a.id} value={a.id} className="border-border">
                        <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                          {a.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          <ArticleBody a={a.a} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* ---- Topic cards ---- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
                {TOPICS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => scrollTo(t.id)}
                    className="cosmic-card rounded-xl p-5 text-left hover:border-white/30 transition-colors group"
                  >
                    <t.icon className="h-6 w-6 text-white/80 mb-3" />
                    <div className="font-semibold text-foreground group-hover:gold-text transition-colors">
                      {t.title}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{t.blurb}</p>
                  </button>
                ))}
              </div>

              {/* ---- Topic sections ---- */}
              <div className="space-y-12">
                {TOPICS.map((t) => (
                  <section key={t.id} id={t.id} className="scroll-mt-24">
                    <div className="flex items-center gap-2.5 mb-4">
                      <t.icon className="h-5 w-5 text-white/80" />
                      <h2 className="text-xl md:text-2xl font-semibold gold-text font-serif-display">
                        {t.title}
                      </h2>
                    </div>
                    <div className="cosmic-card rounded-xl px-4 md:px-5">
                      <Accordion type="single" collapsible>
                        {t.articles.map((a) => (
                          <AccordionItem key={a.id} value={a.id} className="border-border">
                            <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                              {a.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground">
                              <ArticleBody a={a.a} />
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </section>
                ))}
              </div>

              {/* ---- Footer chat CTA ---- */}
              <div className="mt-16 cosmic-card rounded-2xl p-8 text-center">
                <h3 className="text-xl md:text-2xl font-medium gold-text font-serif-display">
                  Still need help?
                </h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  Our support assistant is one message away.
                </p>
                <Button className="gold-button h-11 px-6 mt-5" onClick={openSupportChat}>
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat with support
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
