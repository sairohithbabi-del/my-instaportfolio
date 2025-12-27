import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  placeholder: string;
}

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Placeholder gallery items - user can replace with actual images
  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Cinematic Edit", category: "Video Edit", placeholder: "🎬" },
    { id: 2, title: "Reel Transition", category: "Reels", placeholder: "✨" },
    { id: 3, title: "Color Grade", category: "Video Edit", placeholder: "🎨" },
    { id: 4, title: "Motion Graphics", category: "Effects", placeholder: "💫" },
    { id: 5, title: "Instagram Post", category: "Social", placeholder: "📱" },
    { id: 6, title: "Thumbnail Design", category: "Design", placeholder: "🖼️" },
  ];

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20 mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="text-gradient">Creative Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best edits and creative projects for Instagram creators
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square bg-card rounded-2xl border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder content - replace with actual images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-background">
                <span className="text-6xl">{item.placeholder}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add more work CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/rohith_xd_0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 glow"
          >
            See More on Instagram
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-card rounded-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-muted to-background">
              <span className="text-9xl">{selectedItem.placeholder}</span>
            </div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-2">
                {selectedItem.category}
              </span>
              <h3 className="text-2xl font-semibold">{selectedItem.title}</h3>
              <p className="text-muted-foreground mt-2">
                Upload your actual work images to showcase your creative edits here.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;