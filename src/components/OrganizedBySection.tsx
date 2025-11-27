import pesceCollegeLogo from "@/assets/pesce-college-logo.jpeg";
import dataScienceLogo from "@/assets/data-science-logo-clean.png";
import dotClubLogo from "@/assets/dot-club-logo-clean.png";

const OrganizedBySection = () => {
  const organizations = [
    {
      logo: pesceCollegeLogo,
      title: "P.E.S College of Engineering",
      subtitle: "Mandya",
    },
    {
      logo: dataScienceLogo,
      title: "Department of Data Science",
      subtitle: "Established 2023",
    },
    {
      logo: dotClubLogo,
      title: "DOT Club",
      subtitle: "Developers Of Tomorrow",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Organized By
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="glass neon-border p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/80 group-hover:border-neon-pink transition-all duration-300 glow-pink bg-white">
                  <img
                    src={org.logo}
                    alt={org.title}
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                    {org.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{org.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizedBySection;
