import { Zap, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Zap, label: "Speed" },
    { icon: Lightbulb, label: "Creativity" },
    { icon: Rocket, label: "Innovation" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About the Event
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neon-blue">
                What is Vibeathon?
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Vibeathon is a vibe-filled Vibe-Coding event where speed meets creativity 
                and ideas come alive! Inspired by the electrifying spirit of 'Vibe Coding', 
                this event brings together brilliant minds to build powerful, real-world 
                solutions using cutting-edge technology. ⚡💡
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass neon-border px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5 text-neon-pink" />
                    <span className="font-semibold">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Event Details Card */}
          <div className="glass neon-border p-8 rounded-2xl hover:scale-105 transition-all duration-300 glow-purple">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
              Event Details
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-border/50 pb-4">
                <span className="text-muted-foreground">Duration</span>
                <span className="text-xl font-bold text-neon-pink">5 Hours</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-4">
                <span className="text-muted-foreground">Team Size</span>
                <span className="text-xl font-bold text-neon-blue">2 Members per Team</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Prizes</span>
                <span className="text-xl font-bold text-neon-purple">Prize Pool ₹3000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
