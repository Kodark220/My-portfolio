import type { Artwork } from "@/data/artworks"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10 }}
      className="cursor-pointer group h-full"
      onClick={onClick}
    >
      <Card className="overflow-hidden bg-card/50 border-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:glow-amber h-full flex flex-col">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
          <motion.img 
            src={artwork.image} 
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className="bg-black/60 backdrop-blur-md border-white/10">
              {artwork.category === 'autodesk' ? 'Autodesk' : 'AI Generated'}
            </Badge>
            {artwork.tool && (
              <Badge variant="outline" className="bg-black/60 backdrop-blur-md border-white/10">
                {artwork.tool.split(' ')[0]}
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-5 flex-grow flex flex-col justify-end">
          <p className="text-xs text-primary mb-1 font-medium tracking-wider">{artwork.id}</p>
          <h3 className="font-heading font-semibold text-lg line-clamp-1">{artwork.title}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}
