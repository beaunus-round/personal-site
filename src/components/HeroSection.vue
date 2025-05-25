<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log("Hero section mounted");
});
</script>

<template>
  <section class="min-h-screen flex items-center relative overflow-hidden py-20">
    <!-- Background Grid -->
    <div class="grid-bg animate-pulse-glow"></div>

    <!-- Scanline Effect -->
    <div class="scanline"></div>

    <div class="container mx-auto px-6 z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Profile Image -->
        <div class="relative block mx-auto mb-8 w-fit">
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-deep-black border-2 border-neon-violet mx-auto overflow-hidden">
            <img
              src="/IMG_3056.jpeg"
              alt="Beau Horton"
              class="w-full h-full object-cover object-top"
            />
          </div>
          <div class="absolute inset-0 rounded-full border-2 border-neon-pink animate-pulse-glow"></div>
        </div>

        <!-- Headline with typing effect -->
        <div class="w-full overflow-x-auto text-center">
          <h1 class="font-pixel text-xl md:text-3xl typing-animation">
            "Initializing… Beau Horton"
          </h1>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-neon-pink">
          I build lead engines and automated infrastructure that convert cold clicks into closed deals.
        </h2>

        <p class="text-lg mb-8 text-white/80">
          From real estate ops to SaaS scaling, I write, automate, and deploy full-stack marketing systems that feel like magic and behave like code.
        </p>

        <!-- CTA Button -->
        <a href="#contact" class="terminal-button inline-block animate-pulse-glow">
          Run /book-a-call
        </a>
      </div>
    </div>
  </section>
</template>
