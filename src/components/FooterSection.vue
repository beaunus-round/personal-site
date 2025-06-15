<script setup lang="ts">
</script>

<template>
  <footer class="py-10 relative bg-deep-black border-t border-neon-pink/30">
    <!-- Grid Background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-t from-neon-violet/10 to-transparent -z-10"></div>
    <div class="grid-bg"></div>
    <!-- Scanline Effect -->
    <div class="scanline"></div>
    
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Copyright -->
        <div class="mb-4 md:mb-0">
          <p class="font-mono text-white/70">
            <span class="text-neon-pink">//</span> © 2025 Beau Horton
          </p>
        </div>
        
        <!-- Social Links -->
        <div class="flex space-x-6">
          <a href="https://github.com/beaunus-round" class="text-white hover:text-neon-pink transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/beau-horton-967988366/" class="text-white hover:text-neon-pink transition-colors">LinkedIn</a>
          <a href="mailto:wizard@beauhorton.com" class="text-white hover:text-neon-pink transition-colors">Email</a>
        </div>
      </div>
    </div>
  </footer>
</template>
