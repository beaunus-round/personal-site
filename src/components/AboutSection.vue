<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log("About section loaded");
});
</script>

<template>
  <section id="about" class="py-20 relative">
    <div class="container mx-auto px-6">
      <h2 class="terminal-header">About</h2>
      
      <div class="max-w-3xl">
        <p class="text-lg mb-8">
          I'm a <span class="text-neon-green font-semibold">full-stack marketer</span> with technical leanings and low tolerance for BS. I've scaled growth engines, built <span class="text-neon-green font-semibold">GPT+CRM infrastructure</span>, led marketing at public companies, and rebuilt backend systems with scripts instead of slide decks.
        </p>
        
        <!-- 8-bit icon row -->
        <div class="flex justify-start space-x-8 text-3xl">
          <span class="animate-pulse-glow">👾</span>
          <span class="animate-pulse-glow">🤖</span>
          <span class="animate-pulse-glow">🎧</span>
          <span class="animate-pulse-glow">🧪</span>
          <span class="animate-pulse-glow">🎮</span>
        </div>
      </div>
    </div>
  </section>
</template>