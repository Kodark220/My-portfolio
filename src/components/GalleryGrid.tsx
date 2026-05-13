import { useState } from "react"
import { artworks } from "@/data/artworks"
import type { Artwork } from "@/data/artworks"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"
import { ArtworkCard } from "./ArtworkCard"
import { ArtworkModal } from "./ArtworkModal"
import { motion } from "framer-motion"

export function GalleryGrid() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const autodeskWorks = artworks.filter(a => a.category === 'autodesk')
  const aiWorks = artworks.filter(a => a.category === 'ai-gen')

  return (
    <section id="gallery" className="pt-0 pb-24 px-6 max-w-7xl mx-auto relative z-10">
      <Tabs defaultValue="autodesk" className="w-full">
        <div className="flex flex-col items-center text-center mb-16 border-b border-white/10 pb-12">
          <div className="max-w-2xl mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6">
              PORTFOLIO
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">The Collection</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A comprehensive look at digital art fundamentals and AI generation critiques.
            </p>
          </div>

          <div className="w-full max-w-md p-1.5 bg-card/60 glass-strong border border-white/10 rounded-2xl shadow-xl">
            <TabsList className="grid w-full grid-cols-2 bg-black/40 border border-white/5 p-1 h-auto rounded-xl">
              <TabsTrigger value="autodesk" className="rounded-lg py-3 text-sm font-semibold tracking-wide">Autodesk Originals</TabsTrigger>
              <TabsTrigger value="ai-gen" className="rounded-lg py-3 text-sm font-semibold tracking-wide">AI Generated Art</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="autodesk" className="mt-16 outline-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {autodeskWorks.map(artwork => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="ai-gen" className="mt-16 outline-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {aiWorks.map(artwork => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      <ArtworkModal 
        artwork={selectedArtwork} 
        isOpen={!!selectedArtwork} 
        onClose={() => setSelectedArtwork(null)} 
      />
    </section>
  )
}
