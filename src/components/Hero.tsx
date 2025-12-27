import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-muted rounded-full border border-border">
            ✨ Professional Editor & Creator
          </span>
        </div>

        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s", fontFamily: "Bebas Neue, Impact, sans-serif" }}
        >
          <span className="text-gradient">MADDIDIT</span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Transforming ideas into <span className="text-primary font-semibold">stunning visuals</span> that captivate and inspire
        </p>

        <div 
          className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="https://instagram.com/rohith_xd_0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-muted border border-border font-semibold rounded-full hover:bg-muted/80 hover:border-primary/50 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in cursor-pointer hover:scale-110 transition-transform"
        style={{ animationDelay: "1.2s" }}
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-float" />
        </div>
      </button>
    </section>
  );
};

export default Hero;