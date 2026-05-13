import type { Artwork } from "@/data/artworks"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog"
import { Badge } from "./ui/badge"

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0 bg-card border-white/10 rounded-2xl">
        <DialogTitle className="sr-only">{artwork.title}</DialogTitle>
        <DialogDescription className="sr-only">Detailed critique of {artwork.title}</DialogDescription>
        
        <div className="flex flex-col md:flex-row min-h-[60vh]">
          {/* Image Side */}
          <div className="w-full md:w-1/2 bg-black/50 flex items-center justify-center p-6 border-r border-white/5">
            <img 
              src={artwork.image} 
              alt={artwork.title} 
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Details Side */}
          <div className="w-full md:w-1/2 p-8 lg:p-12">
            <div className="mb-8">
              <p className="text-primary text-sm font-semibold tracking-widest mb-2">{artwork.id}</p>
              <h2 className="font-heading text-3xl font-bold mb-4">{artwork.title}</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{artwork.category === 'autodesk' ? 'Autodesk' : 'AI Generated'}</Badge>
                {artwork.tool && <Badge variant="outline">{artwork.tool}</Badge>}
              </div>
            </div>

            <div className="space-y-6 text-sm text-muted-foreground">
              {/* Autodesk specific fields */}
              {artwork.subject && (
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Subject</h4>
                  <p>{artwork.subject}</p>
                </div>
              )}
              {artwork.composition && (
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Composition</h4>
                  <p>{artwork.composition}</p>
                </div>
              )}
              {artwork.lighting && (
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Lighting</h4>
                  <p>{artwork.lighting}</p>
                </div>
              )}
              {artwork.color && (
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Color</h4>
                  <p>{artwork.color}</p>
                </div>
              )}
              {artwork.style && (
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Style</h4>
                  <p>{artwork.style}</p>
                </div>
              )}

              {/* AI Gen specific fields */}
              {artwork.prompt && (
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-foreground font-semibold mb-1 text-xs uppercase tracking-wider text-primary">Prompt</h4>
                  <p className="font-mono text-xs">{artwork.prompt}</p>
                </div>
              )}
              {artwork.whatISee && (
                <div>
                  <h4 className="text-foreground font-semibold mb-1">What I see</h4>
                  <p>{artwork.whatISee}</p>
                </div>
              )}
              {artwork.whatIdChange && (
                <div>
                  <h4 className="text-foreground font-semibold mb-1 text-primary">What I'd change</h4>
                  <p className="text-foreground/90">{artwork.whatIdChange}</p>
                </div>
              )}
              {artwork.projectContext && (
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-foreground font-semibold mb-1">Project Context</h4>
                  <p>{artwork.projectContext}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
