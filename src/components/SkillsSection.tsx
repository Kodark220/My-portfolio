import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Palette, Cpu, Eye, Layout, Sun, Droplet, Users, Sparkles, Repeat, Crosshair, Wrench } from "lucide-react"

export function SkillsSection() {
  const visualSkills = [
    { text: "Composition, framing, visual hierarchy", icon: <Layout className="w-4 h-4" /> },
    { text: "Lighting, mood, shadow work", icon: <Sun className="w-4 h-4" /> },
    { text: "Color theory, palette selection, contrast", icon: <Droplet className="w-4 h-4" /> },
    { text: "Character design, narrative scenes, abstract concepts", icon: <Users className="w-4 h-4" /> }
  ]

  const aiSkills = [
    { text: "Prompt engineering for specific visual outcomes", icon: <Sparkles className="w-4 h-4" /> },
    { text: "Iteration and refinement workflow", icon: <Repeat className="w-4 h-4" /> },
    { text: "Critical analysis of what works and what doesn't", icon: <Crosshair className="w-4 h-4" /> },
    { text: "Cross tool fluency (Grok Imagine, ChatGPT, Sora)", icon: <Wrench className="w-4 h-4" /> }
  ]

  return (
    <section id="about" className="py-32 relative z-10 overflow-hidden bg-black/60 border-y border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Why this matters */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6 w-fit">
              <Eye className="w-4 h-4" />
              <span>THE VISION</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why this matters
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                To train an AI's visual understanding, you need someone who can <strong className="text-foreground font-medium">see what works and what doesn't</strong> in any image.
              </p>
              <p>
                Someone who can articulate why in terms of composition, lighting, color, and style, generate examples that demonstrate specific visual concepts, and critique with precision so training data captures real visual nuance.
              </p>
              <div className="p-5 mt-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="text-foreground/90 font-medium italic">
                  "Each piece in this portfolio includes a written analysis demonstrating exactly that critical eye."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Skills Bento Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6 mt-12 lg:mt-0"
          >
            {/* Visual Fundamentals Card */}
            <Card className="bg-card/40 border-white/10 glass-strong overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-6 text-foreground tracking-wide">Visual Fundamentals</h3>
                <ul className="space-y-5">
                  {visualSkills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 text-primary/70">{skill.icon}</div>
                      <span className="text-sm text-muted-foreground leading-snug">{skill.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* AI Image Generation Card */}
            <Card className="bg-card/40 border-white/10 glass-strong overflow-hidden relative group mt-0 sm:mt-12">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-6 text-foreground tracking-wide">AI Generation</h3>
                <ul className="space-y-5">
                  {aiSkills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 text-purple-400/70">{skill.icon}</div>
                      <span className="text-sm text-muted-foreground leading-snug">{skill.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
