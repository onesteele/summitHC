import React from "react";
import { Star, ShieldCheck, BadgeCheck, Smartphone, BarChart3 } from "lucide-react";

const badges = [
  {
    icon: Star,
    title: "Trustpilot",
    value: "11K+ · 5.0",
    label: "Verified Reviews",
  },
  {
    icon: BarChart3,
    title: "TradingView",
    value: "4.9 / 5",
    label: "Broker Score",
  },
  {
    icon: Smartphone,
    title: "App Store",
    value: "4.8 ★",
    label: "Verified App",
  },
  {
    icon: BadgeCheck,
    title: "Google Play",
    value: "Editor's Choice",
    label: "Verified Developer",
  },
  {
    icon: ShieldCheck,
    title: "Regulated",
    value: "Audited",
    label: "Independent Auditors",
  },
];

const TrustBadges: React.FC = () => (
  <div className="mt-10 max-w-5xl mx-auto">
    <div className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
      Independently Verified By
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {badges.map((b, i) => (
        <div
          key={i}
          className="cosmic-card rounded-xl px-4 py-3 flex items-center gap-3"
        >
          <div className="h-9 w-9 rounded-md grid place-items-center bg-primary/10 border border-primary/30 shrink-0">
            <b.icon className="h-4 w-4 text-primary" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground truncate">
              {b.title}
            </div>
            <div className="text-sm font-semibold gold-accent truncate">{b.value}</div>
            <div className="text-[10px] text-muted-foreground/70 truncate">{b.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBadges;
