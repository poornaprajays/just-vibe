import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Sparkles, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Top Badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in">
          <span className="glass px-6 py-2 rounded-full text-xs md:text-sm uppercase tracking-wider border border-neon-blue/30 text-neon-blue glow-blue">
            P.E.S College of Engineering, Mandya
          </span>
          <span className="glass px-6 py-2 rounded-full text-xs md:text-sm uppercase tracking-wider border border-neon-purple/30 text-neon-purple glow-purple">
            Department of Data Science
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in text-gradient">
          VIBEATHON
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto animate-fade-in">
          "Where speed meets creativity — Vibe Coding that sparks innovation!"
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
          <Button
            asChild
            size="lg"
            className="bg-neon-pink hover:bg-neon-pink/90 text-white px-8 py-6 text-lg rounded-full glow-pink hover:scale-105 transition-all duration-300"
          >
            <a href="#register">
              <Sparkles className="mr-2 h-5 w-5" />
              Register Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-8 py-6 text-lg rounded-full glow-blue hover:scale-105 transition-all duration-300"
          >
            <a href="http://digil.ink/l/5040DGRCHO" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Rule Book
            </a>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
          <div className="glass neon-border p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow-pink">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">5</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Hours</div>
          </div>
          <div className="glass neon-border p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow-blue">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">2</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Per Team</div>
          </div>
          <div className="glass neon-border p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow-purple">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">₹3K</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Prize Pool</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
