import { Button } from "@/components/ui/button";
import { Users, Clock, Trophy } from "lucide-react";

const RegisterSection = () => {
  const features = [
    {
      icon: Users,
      title: "Teams of 2",
      description: "Partner up with a fellow coder",
    },
    {
      icon: Clock,
      title: "Limited Slots",
      description: "First come, first served",
    },
    {
      icon: Trophy,
      title: "Prizes Await",
      description: "₹3000 prize pool to win",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Register Now
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Secure your spot in the ultimate vibe coding challenge!
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass neon-border p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue flex items-center justify-center group-hover:animate-glow">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Register Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue hover:opacity-90 text-white px-12 py-8 text-xl rounded-full glow-pink hover:scale-110 transition-all duration-300 animate-glow"
            onClick={() => window.open("#", "_blank")}
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
