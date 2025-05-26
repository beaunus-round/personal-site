<script setup lang="ts">
import { ref, onMounted } from 'vue'

const testimonials = [
  {
    text: `Hand Beau the objective, and he quietly moves it forward. No follow-up needed, no excuses, just results.`,
    author: 'Alex Shegelman, Everleaf Capital'
  },
  {
    text: `There was never a moment Beau wasn’t fully invested. He cared deeply about the work and kept projects grounded in real purpose.`,
    author: 'Bill Hahn, The ReCover Initiative'
  },
  {
    text: `Beau built systems that handled the work so we could focus on growth.`,
    author: 'Mark Colwell, Commloan & Jones Appraisal'
  },
  {
    text: `He figured things out before we knew we needed them. From client operations to backend cleanups, Beau adapted and delivered in places outside his lane.`,
    author: 'Corey Brown, Tung & Assoc. APLC'
  },
  {
    text: `From the first meeting, Beau spoke with clarity and direction. He came in with a complete strategy and followed through on every piece of it.`,
    author: 'Julie Wood, Simpli.fi'
  },
  {
    text: `Some people get stuck in planning. Beau doesn't. He took a rough idea, outlined a real plan, and made the whole thing feel straightforward.`,
    author: 'Luna Rocha, Service Master'
  }
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
        <div class="bg-black border-4 border-neon-blue rounded-md p-6 shadow-inner terminal-box crt">
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
      <div class="mt-10 flex justify-center">
  <a href="#contact" class="terminal-button inline-block animate-pulse-glow">
    Run /book-a-call
  </a>
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

.terminal-box {
  min-height: 400px;
  height: 650px; /* Fixed height for mobile to prevent layout shift */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Desktop keeps flexible height */
@media (min-width: 768px) {
  .terminal-box {
    height: auto;
    min-height: 400px;
  }
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