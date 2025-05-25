<template>
    <section class="py-20 relative">
      <div class="container mx-auto px-6">
        <h2 class="terminal-header">About Me</h2>
        
        <!-- Main content with image -->
        <div class="grid lg:grid-cols-2 gap-12 mb-8 items-start">
          <!-- Text content -->
          <div class="space-y-8">
            <!-- Main intro -->
            <div class="neon-terminal-box">
              <div class="terminal-prefix">$ whoami</div>
              <p class="text-white/90 text-lg leading-relaxed mb-4">
                I build systems that work.
              </p>
              <p class="text-white/80 leading-relaxed">
                That usually means automation, clean CRM logic, better leadflow, fewer moving parts. I like building things that scale without becoming unmanageable. If something's manual and shouldn't be, I'll probably fix it. If the output's messy, I'll usually clean it up.
              </p>
            </div>
  
            <!-- Work focus -->
            <div class="neon-terminal-box">
              <div class="terminal-prefix">$ cat work_focus.txt</div>
              <p class="text-white/80 leading-relaxed">
                Most of my work lives at the edge of marketing and operations. I've led projects across real estate, lending, B2B, and a lot of in-between—streamlining outreach, syncing backend tools, wiring up the logic behind campaigns that actually convert. It's not just about getting more done. It's about knowing why it's working and how to keep it that way.
              </p>
            </div>
          </div>
  
          <!-- Image -->
          <div class="lg:sticky lg:top-8">
            <div class="retro-card crt">
              <img 
                src="/dj.jpg" 
                alt="Beau DJing" 
                class="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
  
        <!-- Personal interests -->
        <div class="neon-terminal-box mb-8">
          <div class="terminal-prefix">$ ls ~/interests/</div>
          <div class="grid md:grid-cols-3 gap-6 mt-4">
            <div class="cyber-card">
              <div class="cyber-icon bg-neon-pink/20 text-neon-pink">
                🎧
              </div>
              <h3 class="text-lg font-bold mb-2 text-white">Music Production</h3>
              <p class="text-white/70 text-sm">DJ sets and original tracks. Sound design that hits different.</p>
            </div>
            
            <div class="cyber-card">
              <div class="cyber-icon bg-neon-violet/20 text-neon-violet">
                🎮
              </div>
              <h3 class="text-lg font-bold mb-2 text-white">Gaming</h3>
              <p class="text-white/70 text-sm">Still get a kick out of loading up a good game and disappearing into it for a while.</p>
            </div>
            
            <div class="cyber-card">
              <div class="cyber-icon bg-neon-green/20 text-neon-green">
                ⚡
              </div>
              <h3 class="text-lg font-bold mb-2 text-white">Clean Systems</h3>
              <p class="text-white/70 text-sm">I care about clarity. I don't like wasted motion.</p>
            </div>
          </div>
        </div>
  
        <!-- Philosophy -->
        <div class="neon-terminal-box mb-8">
          <div class="terminal-prefix">$ echo $PHILOSOPHY</div>
          <p class="text-white/80 leading-relaxed">
            I think there's value in making things feel a little better than they need to. This site pulls together a few things I've built. If you want to work together, reach out.
          </p>
        </div>
  
        <!-- Quote -->
        <div class="text-center mt-12">
          <p class="font-mono text-neon-pink italic text-lg">
            "Life's too short not to create something with every breath we draw."
          </p>
          <p class="font-mono text-neon-green text-sm mt-2">-MJK</p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Additional styles if needed - most styles are already in your global CSS */
  .cyber-card:hover .cyber-icon {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  </style>