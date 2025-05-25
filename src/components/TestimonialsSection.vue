<script setup lang="ts">
import { ref, onMounted } from 'vue'

const testimonials = [
  { text: `Beau patched our outreach firmware and rewired the signal flow. Output: clean, fast, human.`, author: '— Alex R.' },
  { text: `While others automate noise, he compiles intent. My funnel finally acts sentient.`, author: '— Jamie W.' },
  { text: `He doesn't do slides. He deploys payloads that self-optimize. That's the difference.`, author: '— Taylor M.' },
  { text: `Turned my static scripts into a living lead engine. Feels like marketing with a mech suit.`, author: '— Sam P.' },
  { text: `Think terminal prompt meets trust builder. Beau coded loyalty into our conversion path.`, author: '— Morgan C.' },
  { text: `We stopped guessing and started executing—like our GTM had a neural interface.`, author: '— Riley S.' }
]

const renderedTestimonials = ref<{ text: string; author: string }[]>([])
let index = 0

function displayBatch() {
  const nextBatch = testimonials.slice(index, index + 3)
  renderedTestimonials.value = []

  let step = 0

  const typeNext = () => {
    if (step >= nextBatch.length) {
      setTimeout(() => {
        index = (index + 3) % testimonials.length
        displayBatch()
      }, 5000)
      return
    }

    const current = nextBatch[step]
    let text = '', author = ''
    let i = 0, j = 0

    const typeText = setInterval(() => {
      if (i < current.text.length) {
        text += current.text[i++]
        renderedTestimonials.value[step] = { text, author: '' }
      } else {
        clearInterval(typeText)
        const typeAuthor = setInterval(() => {
          if (j < current.author.length) {
            author += current.author[j++]
            renderedTestimonials.value[step] = { text, author }
          } else {
            clearInterval(typeAuthor)
            step++
            setTimeout(typeNext, 2000)
          }
        }, 20)
      }
    }, 15)

    renderedTestimonials.value.push({ text: '', author: '' })
  }

  typeNext()
}

onMounted(() => {
  displayBatch()
})
</script>

<template>
  <section class="py-20 relative">
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="terminal-header">Echoes from the Field</h2>
      <div class="relative mt-10">
        <div class="bg-black border-4 border-neon-blue rounded-md p-6 shadow-inner min-h-[400px] flex flex-col justify-between crt">
          <div class="space-y-6">
            <div
              v-for="(entry, idx) in renderedTestimonials"
              :key="idx"
              class="font-mono text-base"
            >
              <p class="text-white/90 typed-text">{{ entry.text }}</p>
              <p class="text-neon-green mt-2 typed-text">{{ entry.author }}</p>
            </div>
          </div>
          <div class="text-neon-green font-mono text-lg mt-6 animate-blink">&gt;</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typed-text {
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
}

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

.crt::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.03) 0px,
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px,
    transparent 2px
  );
  z-index: 10;
  pointer-events: none;
  animation: flicker 1.5s infinite;
  border-radius: 0.375rem;
}

@keyframes flicker {
  0%, 100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.6;
  }
}
</style>
