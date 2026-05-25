import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader, Play, Pause } from 'lucide-react';
const VSLHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Load Wistia scripts
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);
    const embedScript = document.createElement('script');
    embedScript.src = 'https://fast.wistia.com/embed/k1z0ekt6ob.js';
    embedScript.async = true;
    embedScript.type = 'module';
    document.head.appendChild(embedScript);

    // Load Typeform script
    const typeformScript = document.createElement('script');
    typeformScript.src = '//embed.typeform.com/next/embed.js';
    typeformScript.async = true;
    document.head.appendChild(typeformScript);

    // Add Wistia styles
    const style = document.createElement('style');
    style.textContent = `wistia-player[media-id='k1z0ekt6ob']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/k1z0ekt6ob/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`;
    document.head.appendChild(style);
    return () => {
      clearTimeout(timer);
      // Cleanup scripts and styles
      if (document.head.contains(playerScript)) document.head.removeChild(playerScript);
      if (document.head.contains(embedScript)) document.head.removeChild(embedScript);
      if (document.head.contains(typeformScript)) document.head.removeChild(typeformScript);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);
  const toggleVideo = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return <section className="relative w-full min-h-screen pt-4 md:pt-8 pb-12 md:pb-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-6xl w-full text-center space-y-4 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            What Sportsbooks Don't Want You To Know
          </span>
        </div>
        
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          How We Fund Sports Picks <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold drop-shadow-sm">With No Risk</span>
        </h1>
        
        

        {/* Video Section */}
        <div className="pt-8">
          <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg max-w-4xl mx-auto">
            <div className="relative">
              {/* Wistia Video */}
              <div className="relative aspect-video">
                <div dangerouslySetInnerHTML={{
                __html: '<wistia-player media-id="k1z0ekt6ob" aspect="1.7777777777777777"></wistia-player>'
              }} />
              </div>
              
              {/* Video Info */}
              
            </div>
          </div>
        </div>
        
        {/* Call to action text */}
        <div className="pt-4">
          <p className="text-lg md:text-xl font-medium text-foreground/80">
            Fill out the application below and book a call
          </p>
        </div>

        {/* Typeform Embed */}
        <div className="pt-6">
          <div data-tf-live="01K2MV276SBPB9MNNHNYF50TJS"></div>
        </div>
        
        
      </div>
    </section>;
};
export default VSLHero;