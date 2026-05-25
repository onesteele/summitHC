import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface VideoSuggestion {
  title: string;
  section: string;
  href: string;
  description: string;
}

const AIVideoSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<VideoSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setSuggestions([]);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const videoDatabase = [
    {
      title: "How Summit Securities Actually Works",
      section: "How it works", href: "#how-it-works",
      description: "Account creation, the web trader, and how trades are placed and settled.",
      keywords: ["how", "works", "start", "begin", "account", "create", "getting started", "basics", "beginner", "platform", "web trader"],
    },
    {
      title: "Is Summit Securities Safe?",
      section: "Is Summit Safe?", href: "#is-summit-safe",
      description: "Custody, risk, and what makes Summit Securities a trustworthy broker.",
      keywords: ["safe", "safety", "trust", "trusted", "legit", "scam", "real", "secure", "custody", "protection"],
    },
    {
      title: "Regulation, Audits & Certifications",
      section: "Regulation & Audits", href: "#regulation",
      description: "Who regulates us and where your money lives.",
      keywords: ["regulation", "regulated", "audit", "audited", "license", "compliance", "certified", "certificate", "legal"],
    },
    {
      title: "Tour of the Summit Web Trader",
      section: "The Platform", href: "#platform",
      description: "Charts, order tickets, watchlists and risk tools.",
      keywords: ["platform", "tour", "ui", "charts", "tradingview", "interface", "demo", "web trader", "mobile"],
    },
    {
      title: "Deposits & Withdrawals",
      section: "Deposits & Withdrawals", href: "#deposits",
      description: "ACH, bank wire, crypto wallets — and the average withdrawal time.",
      keywords: ["deposit", "withdraw", "withdrawal", "fund", "funding", "ach", "bank", "crypto", "wire", "money", "payout", "transfer"],
    },
    {
      title: "The $100 New-Client Deposit Bonus",
      section: "The $100 Bonus", href: "#bonus",
      description: "How to qualify, claim it, and unlock it.",
      keywords: ["bonus", "100", "promo", "promotion", "new client", "signup", "offer", "deal", "deposit bonus"],
    },
    {
      title: "Spreads, Commissions & Overnight Financing",
      section: "Spreads & Fees", href: "#fees",
      description: "Every cost involved in trading with Summit, in plain English.",
      keywords: ["fee", "fees", "spread", "spreads", "commission", "cost", "price", "expensive", "cheap", "low spread", "swap", "overnight"],
    },
    {
      title: "What You Can Trade on Summit",
      section: "Instruments", href: "#instruments",
      description: "Forex, CFDs, Indices, Metals, Commodities and Bonds.",
      keywords: ["instruments", "trade", "forex", "fx", "cfd", "indices", "stocks", "metals", "gold", "commodities", "bonds", "crypto", "products"],
    },
    {
      title: "The Summit Mobile App",
      section: "Mobile App", href: "#mobile",
      description: "Trade and manage your account on iOS and Android.",
      keywords: ["mobile", "app", "ios", "android", "iphone", "phone", "download"],
    },
    {
      title: "Account Security & 2FA",
      section: "Account Security", href: "#security",
      description: "How to protect your account and what we do behind the scenes.",
      keywords: ["security", "2fa", "two factor", "password", "hack", "secure", "login", "kyc", "verification"],
    },
    {
      title: "Real Client Stories",
      section: "Real Client Stories", href: "#stories",
      description: "How to verify reviews yourself and what real clients say.",
      keywords: ["reviews", "testimonials", "real", "people", "stories", "trustpilot", "ratings", "clients", "customers", "proof"],
    },
    {
      title: "What's the Catch?",
      section: "What's the Catch?", href: "#catch",
      description: "Addressing the skeptics honestly.",
      keywords: ["catch", "downside", "problem", "concern", "too good", "suspicious", "scam", "doubt", "issue"],
    },
  ];

  const findRelevantVideos = (q: string): VideoSuggestion[] => {
    const ql = q.toLowerCase();
    const words = ql.split(' ').filter((w) => w.length > 2);
    const scored = videoDatabase.map((v) => {
      let score = 0;
      v.keywords.forEach((k) => {
        if (k.includes(ql) || ql.includes(k)) score += 10;
        words.forEach((w) => { if (k.includes(w) || w.includes(k)) score += 5; });
      });
      if (v.title.toLowerCase().includes(ql)) score += 8;
      words.forEach((w) => { if (v.title.toLowerCase().includes(w)) score += 4; });
      if (v.description.toLowerCase().includes(ql)) score += 6;
      words.forEach((w) => { if (v.description.toLowerCase().includes(w)) score += 2; });
      return { ...v, score };
    });
    return scored.filter((v) => v.score > 0).sort((a, b) => b.score - a.score).slice(0, 5)
      .map(({ title, section, href, description }) => ({ title, section, href, description }));
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setSuggestions(findRelevantVideos(query));
    setIsLoading(false);
  };

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setSuggestions([]); setQuery('');
  };

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto space-y-4 relative z-50">
      <div className="relative z-50">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" />
            <Input
              placeholder="Ask AI: How fast are withdrawals? What can I trade?"
              className="pl-10 h-14 bg-card border-border text-foreground placeholder:text-muted-foreground text-base"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} disabled={!query.trim() || isLoading} className="h-14 px-6 gold-button">
            {isLoading
              ? <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
              : <Search className="h-4 w-4" />}
          </Button>
        </div>

        {suggestions.length > 0 && (
          <div className="absolute top-full mt-2 w-full z-[9999]">
            <Card className="bg-card border-border shadow-2xl p-4 space-y-3 max-h-[500px] overflow-y-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Sparkles className="h-4 w-4 text-foreground" />
                <span>AI found these videos that might help:</span>
              </div>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => handleClick(s.href)}
                  className="w-full text-left p-3 rounded-lg hover:bg-accent/10 transition-colors group border border-transparent hover:border-white/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-white transition-colors">{s.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{s.description}</p>
                      <p className="text-xs text-foreground mt-2 font-medium">Section: {s.section}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors mt-1 ml-2" />
                  </div>
                </button>
              ))}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIVideoSearch;
