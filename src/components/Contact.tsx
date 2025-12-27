import { Instagram, Send, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@rohith_xd_0",
      url: "https://instagram.com/rohith_xd_0",
      icon: Instagram,
      gradient: "from-pink-500 via-purple-500 to-orange-500",
      description: "Follow my work"
    },
    {
      name: "Telegram",
      handle: "@maddidit1",
      url: "https://t.me/maddidit1",
      icon: Send,
      gradient: "from-blue-400 to-blue-600",
      description: "Quick messages"
    },
    {
      name: "Phone",
      handle: "9493744192",
      url: "tel:9493744192",
      icon: Phone,
      gradient: "from-green-400 to-emerald-600",
      description: "Direct call"
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20 mb-6">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ready to bring your content to life? Reach out through any platform below!
          </p>
        </div>

        {/* Social links grid */}
        <div className="grid gap-4 md:gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Phone" ? "_blank" : undefined}
              rel={link.name !== "Phone" ? "noopener noreferrer" : undefined}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:glow overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${link.gradient}`}>
                    <link.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-muted-foreground">{link.handle}</p>
                    <p className="text-sm text-muted-foreground/70">{link.description}</p>
                  </div>
                </div>
                
                <div className="p-3 bg-muted rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 <span className="text-gradient font-semibold">maddidit</span>. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;