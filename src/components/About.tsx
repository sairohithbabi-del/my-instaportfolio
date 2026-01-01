import { Sparkles, Video, Edit3, Bot, Users } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [visibleRoles, setVisibleRoles] = useState<number[]>([]);
  
  const roles = [
    { icon: Edit3, label: "Professional Editor" },
    { icon: Users, label: "Influencer" },
    { icon: Bot, label: "AI Web Developer" },
  ];

  const skills = [
    { icon: Video, label: "Video Editing", description: "Cinematic edits that tell stories" },
    { icon: Edit3, label: "Content Creation", description: "Eye-catching reels & posts" },
    { icon: Sparkles, label: "Visual Effects", description: "Creative transitions & effects" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          roles.forEach((_, index) => {
            setTimeout(() => {
              setVisibleRoles((prev) => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              About Me
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Rohit</span>
            </h2>

            {/* Animated Roles */}
            <div className="flex flex-wrap gap-3">
              {roles.map((role, index) => (
                <div
                  key={role.label}
                  className={`flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border transition-all duration-500 ${
                    visibleRoles.includes(index)
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-75 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <role.icon className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">{role.label}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a professional editor and creator with a passion for transforming raw content into 
              captivating visual experiences. I specialize in creating stunning edits for Instagram 
              creators, helping them stand out in the crowded digital landscape.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With an eye for detail and a creative mindset, I bring ideas to life through dynamic 
              editing, smooth transitions, and eye-catching effects that keep audiences engaged.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">20+</div>
                <div className="text-sm text-muted-foreground">Creators</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">1M+</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
            </div>
          </div>

          {/* Right side - Skills cards */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <skill.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {skill.label}
                    </h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;