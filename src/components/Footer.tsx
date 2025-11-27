import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 relative border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg flex items-center justify-center gap-2 text-muted-foreground">
            Created with{" "}
            <Heart className="h-5 w-5 text-neon-pink animate-pulse inline-block" />{" "}
            by{" "}
            <span className="text-gradient font-bold">POORNA PRAJAY S</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
