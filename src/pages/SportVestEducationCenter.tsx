import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Home, BookOpen, FileText, Video, Users, Calendar, MessageCircle, Trophy, TrendingUp, DollarSign, BarChart3, ArrowRight, Menu, X } from 'lucide-react';
import AIVideoSearch from '@/components/AIVideoSearch';
const SportVestEducationCenter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Load Wistia scripts
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/bpvosbb6f6.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);
    const script3 = document.createElement('script');
    script3.src = 'https://fast.wistia.com/embed/ckb4hd66cw.js';
    script3.async = true;
    script3.type = 'module';
    document.head.appendChild(script3);
    const script4 = document.createElement('script');
    script4.src = 'https://fast.wistia.com/embed/apug4or5x6.js';
    script4.async = true;
    script4.type = 'module';
    document.head.appendChild(script4);
    const script5 = document.createElement('script');
    script5.src = 'https://fast.wistia.com/embed/xja8n6b6te.js';
    script5.async = true;
    script5.type = 'module';
    document.head.appendChild(script5);
    const script6 = document.createElement('script');
    script6.src = 'https://fast.wistia.com/embed/omrwkjqloj.js';
    script6.async = true;
    script6.type = 'module';
    document.head.appendChild(script6);
    const script7 = document.createElement('script');
    script7.src = 'https://fast.wistia.com/embed/xfez5pwrdb.js';
    script7.async = true;
    script7.type = 'module';
    document.head.appendChild(script7);
    const script8 = document.createElement('script');
    script8.src = 'https://fast.wistia.com/embed/y4m9xyjb82.js';
    script8.async = true;
    script8.type = 'module';
    document.head.appendChild(script8);
    const script9 = document.createElement('script');
    script9.src = 'https://fast.wistia.com/embed/kyqmpf1uua.js';
    script9.async = true;
    script9.type = 'module';
    document.head.appendChild(script9);
    const script10 = document.createElement('script');
    script10.src = 'https://fast.wistia.com/embed/n9kkpr214p.js';
    script10.async = true;
    script10.type = 'module';
    document.head.appendChild(script10);
    const script11 = document.createElement('script');
    script11.src = 'https://fast.wistia.com/embed/ipr8i17kie.js';
    script11.async = true;
    script11.type = 'module';
    document.head.appendChild(script11);
    const script12 = document.createElement('script');
    script12.src = 'https://fast.wistia.com/embed/3x028x03fa.js';
    script12.async = true;
    script12.type = 'module';
    document.head.appendChild(script12);
    const script13 = document.createElement('script');
    script13.src = 'https://fast.wistia.com/embed/h8rj2nwlls.js';
    script13.async = true;
    script13.type = 'module';
    document.head.appendChild(script13);
    const script14 = document.createElement('script');
    script14.src = 'https://fast.wistia.com/embed/qjfwbq6mhr.js';
    script14.async = true;
    script14.type = 'module';
    document.head.appendChild(script14);

    // Add Wistia styles
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='bpvosbb6f6']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/bpvosbb6f6/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='ckb4hd66cw']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ckb4hd66cw/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='apug4or5x6']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/apug4or5x6/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='xja8n6b6te']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/xja8n6b6te/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='omrwkjqloj']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/omrwkjqloj/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='xfez5pwrdb']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/xfez5pwrdb/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='y4m9xyjb82']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/y4m9xyjb82/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='kyqmpf1uua']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/kyqmpf1uua/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='n9kkpr214p']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/n9kkpr214p/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='ipr8i17kie']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ipr8i17kie/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='3x028x03fa']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/3x028x03fa/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='h8rj2nwlls']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/h8rj2nwlls/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='qjfwbq6mhr']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/qjfwbq6mhr/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `;
    document.head.appendChild(style);
    return () => {
      clearTimeout(timer);
      // Cleanup scripts and styles on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.head.removeChild(script4);
      document.head.removeChild(script5);
      document.head.removeChild(script6);
      document.head.removeChild(script7);
      document.head.removeChild(script8);
      document.head.removeChild(script9);
      document.head.removeChild(script10);
      document.head.removeChild(script11);
      document.head.removeChild(script12);
      document.head.removeChild(script13);
      document.head.removeChild(script14);
      document.head.removeChild(style);
    };
  }, []);
  const navigationItems = [{
    icon: Home,
    label: 'How it works',
    href: '#how-it-works'
  }, {
    icon: BookOpen,
    label: 'Who is SportVest For',
    href: '#who-is-sportvest-for'
  }, {
    icon: FileText,
    label: 'What We\'re Hiding',
    href: '#what-were-hiding'
  }, {
    icon: Video,
    label: 'Worst Case Scenario',
    href: '#worst-case-scenario'
  }, {
    icon: Users,
    label: 'More FAQs',
    href: '#more-faqs'
  }, {
    icon: Trophy,
    label: 'SportVest Rules',
    href: '#sportvest-rules'
  }, {
    icon: DollarSign,
    label: 'Why We Charge',
    href: '#why-we-charge'
  }, {
    icon: BarChart3,
    label: 'Evaluation Process',
    href: '#evaluation-process'
  }, {
    icon: TrendingUp,
    label: 'Once Funded',
    href: '#once-funded'
  }, {
    icon: MessageCircle,
    label: 'Do People Get Funded',
    href: '#do-people-get-funded'
  }, {
    icon: Search,
    label: 'What\'s the Catch',
    href: '#whats-the-catch'
  }];
  const supportItems = [{
    icon: Users,
    label: 'Support'
  }, {
    icon: MessageCircle,
    label: 'Community'
  }, {
    icon: Calendar,
    label: 'Events'
  }];
  const featuredCourses = [{
    title: 'Exactly How the SportVest Challenge Works',
    description: 'Breaking down the rules, phases, and exactly how you can get funded',
    level: 'Beginner - Intermediate',
    duration: '37m',
    gradient: 'from-blue-500/20 via-blue-400/10 to-transparent',
    icon: TrendingUp
  }, {
    title: "The Business Model Behind SportVest - How They Profit Off Your Picks",
    description: 'How does SportVest actually make money?',
    level: 'Beginner - Intermediate',
    duration: '19m',
    gradient: 'from-green-500/20 via-green-400/10 to-transparent',
    icon: DollarSign
  }];
  const skepticalCourses = [{
    title: 'Your Skeptical About SportVest - You Should Be',
    description: "After years of getting burned, we completely understand, however don't take our word for it.",
    level: 'Beginner - Intermediate',
    duration: '19m',
    gradient: 'from-green-500/20 via-green-400/10 to-transparent',
    icon: DollarSign
  }, {
    title: "Here's What SportVest is Hiding",
    description: "When your getting funded with us, here's the TRUTH behind how we operate",
    level: 'Beginner - Intermediate',
    duration: '19m',
    gradient: 'from-green-500/20 via-green-400/10 to-transparent',
    icon: DollarSign
  }];
  return <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden bg-card border-b border-border px-4 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/84ad008b-af18-4fe0-b992-13bcd338356b.png" alt="SportVest Logo" className="h-8 w-8 md:h-10 md:w-10 shrink-0 object-contain" />
        </div>
        <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-80 bg-card border-r border-border shadow-lg">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <img src="/lovable-uploads/2ec611d5-ac0a-409c-9ba9-505c5a078582.png" alt="SportVest Logo" className="h-10 w-10 shrink-0 object-contain" />
              </div>

              <nav className="space-y-0.5">
                {navigationItems.map((item, index) => <a key={index} href={item.href} className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-colors text-muted-foreground hover:bg-accent/50 hover:text-foreground" onClick={e => {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth'
                });
              }
              setIsMobileMenuOpen(false);
            }}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>)}
              </nav>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="space-y-0.5">
                 {supportItems.map((item, index) => <button key={index} className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors" onClick={() => window.open('https://discord.com/invite/ndb9wbxuF3', '_blank')}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>)}
                </div>
              </div>

              <div className="mt-4 pt-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80" onClick={() => window.open('https://sport-vest.com', '_blank')}>
                  Try SportVest
                </Button>
              </div>
            </div>
          </div>
        </div>}

      <div className="flex">
        {/* Desktop Sidebar Navigation */}
        <div className="hidden lg:block w-64 bg-card border-r border-border flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
          <div className="p-4 py-[36px]">
            <div className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/84ad008b-af18-4fe0-b992-13bcd338356b.png" alt="SportVest Logo" className="h-8 w-8 xl:h-10 xl:w-10 shrink-0 object-contain" />
            </div>

            <nav className="space-y-0.5">
              {navigationItems.map((item, index) => <a key={index} href={item.href} className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-colors text-muted-foreground hover:bg-accent/50 hover:text-foreground" onClick={e => {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>)}
            </nav>

            <div className="mt-4 pt-4 border-t border-border">
              <div className="space-y-0.5">
                {supportItems.map((item, index) => <button key={index} className="w-full flex items-center gap-3 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors" onClick={() => window.open('https://discord.com/invite/ndb9wbxuF3', '_blank')}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>)}
              </div>
            </div>

            <div className="mt-4 pt-2">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80" onClick={() => window.open('https://sport-vest.com', '_blank')}>
                Try SportVest
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {/* Cosmic particle effect (background dots) */}
          <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none"></div>
          
          {/* Gradient glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none">
            <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
          </div>

          <div className="relative z-10 px-4 py-8 md:px-8 md:py-16 lg:px-12 lg:py-20">
            <div className={`max-w-4xl mx-auto text-center space-y-6 md:space-y-8 transition-all duration-700 transform relative z-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance text-foreground">
                Learn More About SportVest
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">How to get funded, Why we do this, and more...</p>

              <div className="flex flex-col gap-4 md:gap-6 justify-center pt-4 md:pt-6 items-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/80 text-sm md:text-base h-10 md:h-12 px-6 md:px-8 transition-all duration-200 min-h-[40px] md:min-h-[48px]" onClick={() => window.open('https://sport-vest.com', '_blank')}>
                  Try SportVest
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <AIVideoSearch />
              </div>
            </div>

            {/* Featured Courses Section */}
            <div className={`max-w-6xl mx-auto mt-12 md:mt-20 transition-all duration-1000 delay-300 relative z-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8" id="how-it-works">How it works:</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {featuredCourses.map((course, index) => <div key={index} className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                        <div dangerouslySetInnerHTML={{
                      __html: `<wistia-player media-id="${index === 1 ? 'ckb4hd66cw' : 'bpvosbb6f6'}" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>`
                    }} className="w-full h-full" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{course.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">{course.description}</p>
                  </div>)}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8" id="who-is-sportvest-for">Who is SportVest For & The Math Behind the Operation</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {featuredCourses.map((course, index) => <div key={`duplicate-${index}`} className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                        <div dangerouslySetInnerHTML={{
                      __html: `<wistia-player media-id="${index === 0 ? 'apug4or5x6' : 'xja8n6b6te'}" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>`
                    }} className="w-full h-full" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{course.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">{course.description}</p>
                  </div>)}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8" id="what-were-hiding">Skeptical About SportVest? Here's What We're Hiding</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {skepticalCourses.map((course, index) => <div key={`analytics-${index}`} className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                        <div dangerouslySetInnerHTML={{
                      __html: `<wistia-player media-id="${index === 0 ? 'xfez5pwrdb' : 'omrwkjqloj'}" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>`
                    }} className="w-full h-full" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{course.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">{course.description}</p>
                  </div>)}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8" id="worst-case-scenario">Your Worst Case Scenario on SportVest</h2>

              <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center">
                {featuredCourses.slice(0, 1).map((course, index) => <div key={`community-${index}`} className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 w-full max-w-2xl">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                        <div dangerouslySetInnerHTML={{
                      __html: '<wistia-player media-id="y4m9xyjb82" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>'
                    }} className="w-full h-full" />
                      </div>
                    </div>
                    
                     <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{course.title}</h3>
                     <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">If everything goes south, here's what happens.</p>
                   </div>)}
               </div>

               {/* Divider */}
               <div className="flex items-center justify-center my-12 md:my-16">
                 <div className="h-px bg-border flex-1"></div>
                 <div className="px-6">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                 </div>
                 <div className="h-px bg-border flex-1"></div>
               </div>

               {/* Shorter Form Content Section - Ready for Questions */}
               <div className="max-w-4xl mx-auto">
                 <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8 text-center" id="more-faqs">More FAQs</h2>
                 
               {/* Questions content will go here based on your screenshot */}
               <div className="space-y-6">
                 {/* Placeholder for question content */}
               </div>
             </div>

              {/* Additional Video Content Section */}
              <div className="max-w-6xl mx-auto mt-12 md:mt-20 space-y-8 md:space-y-12">
                
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 text-center" id="sportvest-rules">What Are Specific SportVest Rules I Have To Follow?</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center">
                  <div className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 w-full max-w-2xl">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                         <div dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="kyqmpf1uua" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>'
                      }} className="w-full h-full" />
                      </div>
                    </div>
                    
                     <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">The SportVest Rules Explained</h4>
                     <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">Loss limits, profit targets, and exactly how to get funded</p>
                   </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 text-center" id="why-we-charge">Why Does SportVest Charge A Fee?</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center">
                  <div className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 w-full max-w-2xl">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                         <div dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="n9kkpr214p" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>'
                      }} className="w-full h-full" />
                      </div>
                    </div>
                    
                     <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">Why Does SportVest Charge To Take An Evaluation?</h4>
                     <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">Understanding how our model works and why we have to charge a fee.</p>
                   </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 text-center" id="evaluation-process">How Does The SportVest Evaluation Work?</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center">
                  <div className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 w-full max-w-2xl">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                         <div dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="ipr8i17kie" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>'
                      }} className="w-full h-full" />
                      </div>
                    </div>
                    
                     <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">How To Pass The SportVest Evaluation</h4>
                     <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">Exactly what you need to know about the evaluation.</p>
                   </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 text-center" id="once-funded">What Happens Once Your Funded On SportVest?</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center">
                  <div className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 w-full max-w-2xl">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                         <div dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="3x028x03fa" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>'
                      }} className="w-full h-full" />
                      </div>
                    </div>
                    
                     <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">You Passed The Evaluation... Now Your Funded - Here's what happens next</h4>
                     <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">You passed the evaluation, now its game time. Here's what to do...</p>
                   </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 text-center" id="do-people-get-funded">Do People Actually Get Funded on SportVest?</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center">
                  <div className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 w-full max-w-2xl">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                         <div dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="h8rj2nwlls" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>'
                      }} className="w-full h-full" />
                      </div>
                    </div>
                    
                     <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">Are Real People Getting Funded On SportVest?</h4>
                     <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">Don't take it from us, watch this video to learn exactly how you can vet everything for yourself</p>
                   </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 text-center" id="whats-the-catch">What's the Catch?</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center">
                  <div className="cosmic-card rounded-xl p-4 md:p-6 group hover:border-primary/30 transition-all duration-300 w-full max-w-2xl">
                    <div className="aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
                      <div className="absolute inset-0">
                         <div dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="qjfwbq6mhr" aspect="1.7777777777777777" style="width: 100%; height: 100%; border-radius: 0.375rem;"></wistia-player>'
                      }} className="w-full h-full" />
                      </div>
                    </div>
                    
                     <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">Think SportVest Sounds To Good To Be True... We Understand - Watch This</h4>
                     <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-balance">What is the true catch... Well to find out that info, watch this video</p>
                   </div>
                </div>

              </div>

              {/* Enterprise Section */}
              
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SportVestEducationCenter;