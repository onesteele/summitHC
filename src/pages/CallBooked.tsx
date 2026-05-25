import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
const CallBooked = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Load Wistia scripts for all videos (educational + client interviews)
    const wistiaIds = ['ckb4hd66cw', 'apug4or5x6', 'y4m9xyjb82', 'xja8n6b6te', 'xfez5pwrdb', 'omrwkjqloj', 'swv5mbznn0', '79q7ttf05e', 'lf0hjmvejz', 'nf7iuait2a'];
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // Load embed scripts for each video
    const embedScripts = wistiaIds.map(id => {
      const script = document.createElement('script');
      script.src = `https://fast.wistia.com/embed/${id}.js`;
      script.async = true;
      script.type = 'module';
      document.head.appendChild(script);
      return script;
    });

    // Add Wistia styles
    const style = document.createElement('style');
    style.textContent = wistiaIds.map(id => `wistia-player[media-id='${id}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`).join('\n');
    document.head.appendChild(style);

    // Fire Facebook Pixel Schedule event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Schedule');
    }
    return () => {
      clearTimeout(timer);
      // Cleanup scripts
      if (document.head.contains(playerScript)) document.head.removeChild(playerScript);
      embedScripts.forEach(script => {
        if (document.head.contains(script)) document.head.removeChild(script);
      });
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);
  return <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <section className="relative w-full min-h-screen pt-8 md:pt-12 pb-12 md:pb-20 px-6 md:px-12 bg-background">
          {/* Cosmic particle effect (background dots) */}
          <div className="absolute inset-0 cosmic-grid opacity-30"></div>
          
          {/* Gradient glow effect */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
            <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
          </div>
          
          <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-muted text-primary">
                  <CheckCircle className="h-4 w-4" />
                  Call Successfully Booked
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-balance text-foreground mb-6">
                Thanks for Booking, Your Call Has Been <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold drop-shadow-sm">Scheduled</span>
              </h1>
              
              <p className="text-lg md:text-xl font-medium text-foreground/80 mb-8">🚨URGENT - You'll receive a confirmation text message shortly, if you do not confirm, we will cancel your call</p>

              {/* Call Expectations Section */}
              <div className="max-w-4xl mx-auto">
                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg p-6 md:p-8 mb-12 text-center">
                  <div className="max-w-2xl mx-auto">
                    {/* What to Expect */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                        What to Expect on Your Call
                      </h3>
                      <ul className="space-y-4 text-foreground/80">
                        <li className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                          <span><strong>We'll Review:</strong> Your betting experience and goals</span>
                        </li>
                        <li className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                          <span><strong>You'll Learn:</strong> Exact funding amounts and profit splits</span>
                        </li>
                        <li className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                          <span><strong>Come Prepared:</strong> Questions about your specific situation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-balance text-foreground mb-4">
                  Watch These <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold drop-shadow-sm">Essential Videos</span>
                </h2>
                <p className="text-lg md:text-xl font-medium text-foreground/80">
                  Learn everything you need to know about SportVest before your call
                </p>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Video 1 */}
              <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    How SportVest Profits Off Your Picks
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    The exact business model and why they do this.
                  </p>
                  <div className="relative aspect-video">
                    <div dangerouslySetInnerHTML={{
                    __html: '<wistia-player media-id="ckb4hd66cw" aspect="1.7777777777777777"></wistia-player>'
                  }} />
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    SportVest Is Not For Everyone
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    But here's who it is for and why it might be perfect for you.
                  </p>
                  <div className="relative aspect-video">
                    <div dangerouslySetInnerHTML={{
                    __html: '<wistia-player media-id="apug4or5x6" aspect="1.7777777777777777"></wistia-player>'
                  }} />
                  </div>
                </div>
              </div>

              {/* Video 3 */}
              <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    What's The Worst Case Scenario?
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    How bad could you get burned? The honest truth.
                  </p>
                  <div className="relative aspect-video">
                    <div dangerouslySetInnerHTML={{
                    __html: '<wistia-player media-id="y4m9xyjb82" aspect="1.7777777777777777"></wistia-player>'
                  }} />
                  </div>
                </div>
              </div>

              {/* Video 4 */}
              <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    The Exact Math Behind SportVest
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    How much you can actually make with funded clients.
                  </p>
                  <div className="relative aspect-video">
                    <div dangerouslySetInnerHTML={{
                    __html: '<wistia-player media-id="xja8n6b6te" aspect="1.7777777777777777"></wistia-player>'
                  }} />
                  </div>
                </div>
              </div>

              {/* Video 5 */}
              <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    You're Skeptical... Good, You Should Be
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    But watch this video before making any decisions.
                  </p>
                  <div className="relative aspect-video">
                    <div dangerouslySetInnerHTML={{
                    __html: '<wistia-player media-id="xfez5pwrdb" aspect="1.7777777777777777"></wistia-player>'
                  }} />
                  </div>
                </div>
              </div>

              {/* Video 6 */}
              <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    What SportVest Is Hiding From You
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    The Good, Bad, and Ugly - Is this worth your time?
                  </p>
                  <div className="relative aspect-video">
                    <div dangerouslySetInnerHTML={{
                    __html: '<wistia-player media-id="omrwkjqloj" aspect="1.7777777777777777"></wistia-player>'
                  }} />
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-balance text-foreground mb-4">
                  Frequently Asked <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold drop-shadow-sm">Questions</span>
                </h2>
                <p className="text-lg md:text-xl font-medium text-foreground/80">
                  Get answers to the most common questions about SportVest
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">What is funded sports picking and how does it work?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">Funded sports picking means we give you access to a large bankroll account (up to $200,000) to make your picks with. You don't need to put up your own money. Instead, we give you the chance to show what you can do using our capital. If your picks win and the account grows, we share the profit with you. You keep a large percentage of the winnings, and we take a small percentage as our cut for providing the capital. This is how we both make money… You earn for picking well, and we earn by partnering with you. The better you do, the more we both make.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">Why would we do this in the first place?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">Most people who are good at picking games don't have enough money to really take advantage of their skills. That's where we come in. We want to work with smart pickers and share the profits so we are able to follow hundreds of strategies every single day. We give you the tools and the bankroll, and when you do well, we earn a piece of the winnings. We're building a business that allows us to take a small percentage of the wins from thousands of sports pickers. We're not trying to beat you. We want to back you.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">How do I make money from this?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">You make money by picking well and growing the account we give you. Once you sign up, you get access to a funded account right away to begin using to generate results. If your picks make a profit, we split the winnings with you. You can request a payout, and we'll send your share to you. The more consistent you are, the more you can earn over time. You're not risking your own money, so there's nothing to lose but your payouts are based on the performance of your picks.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">What's the catch?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">There's no hidden trick but like anything, you have to perform. If your picks don't do well, your account might get paused or reset, and you'll need to try again. You're not risking your own money, but that doesn't mean it's a free ride. You have to be responsible and smart with your picks. If you do well, you'll get paid. If you don't, you can reset and try again. We reward good performance, and we pause accounts that lose too much.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">This sounds too good to be true — why would anyone offer this?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">Most people have never seen anything like this before. But it works because it's based on performance, not luck. We're not promising you easy money. We're giving you an opportunity to use your skills and get paid if you can perform. We offer this because it's a smart business model. Instead of hoping people lose, we grow by helping people win. That's why it works for us and why it can work for you.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">How do I get paid?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">At the end of each month, if you're in profit and meet the rules, you can request a payout. We send payments fast — no delays, no withdrawal fees.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">What is the challenge?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">The challenge is a simple test where you prove you can make smart picks. Just place 50 picks, follow the rules, and hit the profit target. If you do, you get funded.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">How do I pass the challenge?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">To pass, you need to: Place 50 picks, Hit a 33% profit, Stay under the daily and total loss limits (15% daily, 20% overall)</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">How long do I have to complete the challenge?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">There's no time limit! Take as long as you need to finish your 50 picks and meet the requirements.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">Can I place parlays or just straight picks?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">You can place either, but each parlay counts as one pick.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">Do I have to risk my own money?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">Nope. Once you're funded, you're playing with our money. You're not risking your own bankroll — that's the whole point.</p>
                    </div>
                  </details>
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-foreground">What if I still have questions?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70">Just hop into our Discord community or reach out through support — we'll walk you through everything 1-on-1.</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            {/* Client Interviews Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-balance text-foreground mb-4">
                  Hear From Our <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold drop-shadow-sm">Funded Clients</span>
                </h2>
                <p className="text-lg md:text-xl font-medium text-foreground/80">
                  Real stories from real people who've transformed their betting with SportVest
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Client Interview 1 */}
                <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Joe's Story</h3>
                    <p className="text-foreground/70 mb-4">
                      Learn how this client transformed their betting approach with SportVest funding.
                    </p>
                    <div className="relative aspect-video">
                      <div dangerouslySetInnerHTML={{
                      __html: '<wistia-player media-id="swv5mbznn0" aspect="1.7777777777777777"></wistia-player>'
                    }} />
                    </div>
                  </div>
                </div>

                {/* Client Interview 2 */}
                <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Phil's Story</h3>
                    <p className="text-foreground/70 mb-4">
                      Discover how SportVest funding changed this client's betting journey.
                    </p>
                    <div className="relative aspect-video">
                      <div dangerouslySetInnerHTML={{
                      __html: '<wistia-player media-id="79q7ttf05e" aspect="1.7777777777777777"></wistia-player>'
                    }} />
                    </div>
                  </div>
                </div>

                {/* Client Interview 3 */}
                <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Celine's Story</h3>
                    <p className="text-foreground/70 mb-4">
                      See the real results achieved through our funding program.
                    </p>
                    <div className="relative aspect-video">
                      <div dangerouslySetInnerHTML={{
                      __html: '<wistia-player media-id="lf0hjmvejz" aspect="1.7777777777777777"></wistia-player>'
                    }} />
                    </div>
                  </div>
                </div>

                {/* Client Interview 4 */}
                <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Ethan's Story</h3>
                    <p className="text-foreground/70 mb-4">
                      Another inspiring story of success with SportVest funding.
                    </p>
                    <div className="relative aspect-video">
                      <div dangerouslySetInnerHTML={{
                      __html: '<wistia-player media-id="nf7iuait2a" aspect="1.7777777777777777"></wistia-player>'
                    }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-balance text-foreground mb-4">
                  Trusted by <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold drop-shadow-sm">Thousands</span>
                </h2>
                <p className="text-lg md:text-xl font-medium text-foreground/80">
                  Join the community of successful funded bettors
                </p>
              </div>

              {/* Discord Community Button */}
              <div className="text-center mb-12">
                <a href="https://discord.gg/sportVest" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white hover:from-purple-700 hover:via-purple-600 hover:to-purple-500 transition-all duration-300 cosmic-glow shadow-lg hover:shadow-xl hover:scale-105 border border-purple-400/20">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join Our Discord Community
                </a>
                <p className="text-sm text-foreground/60 mt-3">
                  Chat with our full client base and see how everything works
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Real Client Testimonials */}
                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg overflow-hidden">
                  <img src="/lovable-uploads/3e7d53ce-59c3-4876-b016-f82db17c659b.png" alt="Client testimonial showing $134,135.36 balance and appreciation for SportVest support" className="w-full h-auto object-cover" />
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg overflow-hidden">
                  <img src="/lovable-uploads/5680046a-7c71-4dc7-b7f9-9f1018528e34.png" alt="Client testimonial showing $68,849.45 balance and successful funding story" className="w-full h-auto object-cover" />
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg overflow-hidden">
                  <img src="/lovable-uploads/b2d7b269-690f-49c5-a197-1e038a41a53d.png" alt="Professional bettor testimonial with $2,574 payout receipt" className="w-full h-auto object-cover" />
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg overflow-hidden">
                  <img src="/lovable-uploads/a1c82ed7-eec2-4a25-b210-f7cbf8bc85d4.png" alt="Client success story with $7,085 payout receipt and VIP status" className="w-full h-auto object-cover" />
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg overflow-hidden">
                  <img src="/lovable-uploads/5205e82f-b249-4e5f-9cfd-cb63a5002b7d.png" alt="First payout success story showing $8,378 withdrawal" className="w-full h-auto object-cover" />
                </div>

                <div className="cosmic-glow relative rounded-xl border border-border backdrop-blur-sm bg-card shadow-lg overflow-hidden">
                  <img src="/lovable-uploads/96f948aa-f940-49de-bac9-dda4bad89644.png" alt="Client passing evaluation in 2 weeks with $6,761.40 balance" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default CallBooked;