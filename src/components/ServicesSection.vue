<script setup lang="ts">
import { ref, onMounted } from 'vue'

const services = [
  {
    label: '📦 ITEM: CRM Module v4.2',
    heading: 'CRM Logic & Infrastructure',
    color: 'border-neon-pink/70 text-neon-green',
    description:
      'Design CRM systems using HubSpot, Clay, and Smartlead. Build fast, scalable loops for lead tracking, pipeline sync, and logic-driven outreach.'
  },
  {
    label: '🎯 TARGET LOCKED: Outbound Engines',
    heading: 'Outbound Systems',
    color: 'border-cyan-500/70 text-cyan-300',
    description:
      'Map personas to prompts to payloads. Combine GPT logic with enriched flows, scraped data, and conversion hooks for a hyper-personalized outbound armory. From cold start to booked call-on autopilot.'
  },
  {
    label: '⚠️ SYSLOG: Audit Initiated',
    heading: 'Automation Audits',
    color: 'border-lime-500 text-lime-300',
    description:
      'Legacy logic dragging performance? I debug misfires, streamline sequence logic, monitor API decay, and patch your system back into shape. Less duct tape, more deployable power.'
  }
]

const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.25 }
  )
  observer.observe(document.querySelector('#services')!)
})
</script>

<template>
  <section id="services" class="py-20 relative text-white">
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="terminal-header text-left">Capabilities</h2>

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="retro-card crt h-96 border-4 flex flex-col justify-between"
          :class="service.color"
        >
          <div>
            <div class="px-4 pt-4 pb-2 font-mono text-base" :class="service.color">
              {{ service.label }}
            </div>
            <div class="px-4">
              <h3 class="font-bold text-lg mb-2" :class="service.color">{{ service.heading }}</h3>
              <p
                v-if="visible"
                class="text-sm text-white/90 font-mono leading-relaxed typed-text animated"
              >
                {{ service.description }}
              </p>
            </div>
          </div>
          <div class="px-4 pb-4 text-left">
            <div class="text-neon-green font-mono text-lg animate-blink">&gt;</div>
          </div>
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
  white-space: normal;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animated {
  opacity: 1;
  transform: translateY(0);
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

.retro-card {
  @apply bg-black rounded-lg overflow-hidden backdrop-blur-md transition-transform hover:scale-[1.02] cursor-crosshair;
  position: relative;
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
