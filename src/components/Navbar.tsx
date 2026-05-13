import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-2xl tracking-widest text-gradient">
          VINTAGE <span className="text-white">✝</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#gallery" className="hover:text-primary transition-colors">GALLERY</a>
          <a href="#skills" className="hover:text-primary transition-colors">SKILLS</a>
          <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
        </div>
      </div>
    </motion.nav>
  )
}
