import HeroSection from "@/components/HeroSection";
import OrganizedBySection from "@/components/OrganizedBySection";
import AboutSection from "@/components/AboutSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OrganizedBySection />
      <AboutSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
