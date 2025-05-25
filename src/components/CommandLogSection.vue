<script setup lang="ts">

const patchNotes = [
  { version: 'v3.1.0', text: 'Added new Smartlead enrichment module with GPT-4 fallback' },
  { version: 'v3.0.4', text: 'Swapped Google Apps Script for Supabase triggers — 80% faster' },
  { version: 'v2.9.1', text: 'Removed legacy CRM schema; replaced with dynamic field mapping' },
  { version: 'v2.8.0', text: 'Full UI rewrite using Tailwind, glitch-safe animation updates' },
  { version: '?>???%@?%', text: '[YOUR PROJECT]' }
]
</script>

<template>
  <section id="patch-notes" class="py-20 relative text-white">
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="terminal-header text-left">// MISSION LOG</h2>
      <div class="bg-black border-4 border-neon-pink/60 rounded-lg p-6 mt-10 shadow-inner backdrop-blur-md">
        <div class="grid gap-6">
          <div
            v-for="(note, index) in patchNotes"
            :key="index"
            class="bg-black/90 border border-white/10 p-4 rounded-md shadow-sm font-mono text-sm flex justify-between items-start"
          >
            <div>
              <div class="text-neon-green mb-2">▶ {{ note.version }}</div>
              <div class="text-white/90 leading-relaxed">{{ note.text }}</div>
            </div>
            <div
              :class="index < patchNotes.length - 1 
                ? 'text-neon-pink text-xs mt-1 whitespace-nowrap' 
                : 'text-neon-green font-pixel text-xl animate-blink'"
            >
              <span v-if="index < patchNotes.length - 1">MISSION: COMPLETE</span>
              <a
                v-else
                href="https://dtmlmj-5174.csb.app/#contact"
                class="text-neon-green font-pixel text-xl animate-blink"
              >&gt;SELECT MISSION&lt;</a>
            </div>
          </div>
        </div>
        <div class="mt-6 text-center">
          <a
            href="https://dtmlmj-5174.csb.app/#contact"
            class="inline-block font-pixel text-xl text-neon-green border border-neon-green px-6 py-3 rounded hover:bg-neon-green hover:text-black transition"
          >
            [SELECT YOUR MISSION]
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

.terminal-header {
  @apply font-pixel text-2xl md:text-3xl text-white mb-4 inline-block;
}

.terminal-header::before {
  @apply text-neon-pink font-mono pr-2 content-['//'];
}
</style>
