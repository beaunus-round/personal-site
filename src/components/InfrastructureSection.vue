<script setup lang="ts">
</script>

<template>
  <section class="py-20 relative bg-deep-black/50">
    <!-- Grid Background -->
    <div class="grid-bg"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="terminal-header">How I Build</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <!-- Card 1 -->
        <div class="neon-card">
          <div class="text-2xl mb-4 text-neon-pink">📝</div>
          <h3 class="text-xl font-bold mb-2">Readable Over Clever</h3>
          <p class="text-white/80">Your ops stack should outlive you. I build with transferability in mind.</p>
        </div>
        
        <!-- Card 2 -->
        <div class="neon-card">
          <div class="text-2xl mb-4 text-neon-pink">🔄</div>
          <h3 class="text-xl font-bold mb-2">Low-Fragility Automation</h3>
          <p class="text-white/80">No duct tape. Every webhook, every cronjob, every zap is tested and logged.</p>
        </div>
        
        <!-- Card 3 -->
        <div class="neon-card">
          <div class="text-2xl mb-4 text-neon-pink">🧩</div>
          <h3 class="text-xl font-bold mb-2">No Monoliths</h3>
          <p class="text-white/80">Each tool should be replaceable. I favor modular, API-first infrastructure.</p>
        </div>
      </div>
    </div>
  </section>
</template>