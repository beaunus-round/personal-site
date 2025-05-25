<script setup lang="ts">
import { onMounted, ref } from 'vue'

const ball = ref<HTMLDivElement | null>(null)
const paddle = ref<HTMLDivElement | null>(null)
const cards = ref<NodeListOf<HTMLDivElement>>()
const gameArea = ref<HTMLDivElement | null>(null)
const score = ref(0)
const lives = ref(3)

let dx = 100 // pixels per second
let dy = 100 // pixels per second
let ballX = 0
let ballY = 0
let paddleX = 140
const paddleWidth = 80
let lastTime = 0

onMounted(() => {
  const game = document.getElementById('game-area')
  cards.value = document.querySelectorAll('.neon-card')

  function resetBall() {
    ballX = 0
    ballY = 0
    dx = 100 // consistent speed in pixels per second
    dy = 100
  }

  function draw(currentTime: number) {
    if (!ball.value || !paddle.value || !game) return

    // Calculate delta time in seconds
    const deltaTime = lastTime ? (currentTime - lastTime) / 1000 : 0
    lastTime = currentTime

    // Move ball based on time, not frames
    ballX += dx * deltaTime
    ballY += dy * deltaTime

    if (ballX < 0 || ballX > game.clientWidth - 20) {
      dx = -dx
      game.classList.add('edge-blink')
      setTimeout(() => game.classList.remove('edge-blink'), 150)
    }
    if (ballY < 0) {
      dy = -dy
      game.classList.add('edge-blink')
      setTimeout(() => game.classList.remove('edge-blink'), 150)
    }
    if (ballY > game.clientHeight - 20) {
      lives.value--
      if (lives.value <= 0) {
        score.value = 0
        lives.value = 3
      }
      resetBall()
      lastTime = 0 // Reset timing
    }

    if (
      ballY > game.clientHeight - 40 &&
      ballX > paddleX &&
      ballX < paddleX + paddleWidth
    ) {
      dy = -dy
      score.value++
    }

    ball.value.style.left = `${ballX}px`
    ball.value.style.top = `${ballY}px`

    cards.value?.forEach(card => {
      const rect = card.getBoundingClientRect()
      const gameRect = game.getBoundingClientRect()
      const cardX = rect.left - gameRect.left
      const cardY = rect.top - gameRect.top
      
      if (
        ballX + 20 > cardX &&
        ballX < cardX + rect.width &&
        ballY + 20 > cardY &&
        ballY < cardY + rect.height
      ) {
        dy = -dy
        card.classList.add('blink')
        setTimeout(() => card.classList.remove('blink'), 150)
      }
    })

    requestAnimationFrame(draw)
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') paddleX -= 20
    if (e.key === 'ArrowRight') paddleX += 20
    if (paddle.value) paddle.value.style.left = `${paddleX}px`
  })

  requestAnimationFrame(draw)
})
</script>

<template>
  <section class="py-20 relative">
    <div class="container mx-auto px-6">
      <h2 class="terminal-header">Operating Principles</h2>

      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <!-- Card 1 -->
        <div class="neon-card">
          <div class="text-2xl mb-4 text-neon-pink">⚙️</div>
          <h3 class="text-xl font-bold mb-2">Build Quiet Machines</h3>
          <p class="text-white/80">Let the system speak for itself.</p>
        </div>

        <!-- Card 2 -->
        <div class="neon-card">
          <div class="text-2xl mb-4 text-neon-pink">🎯</div>
          <h3 class="text-xl font-bold mb-2">No Clicks Wasted</h3>
          <p class="text-white/80">If they land, they convert—or we optimize.</p>
        </div>

        <!-- Card 3 -->
        <div class="neon-card">
          <div class="text-2xl mb-4 text-neon-pink">🤖</div>
          <h3 class="text-xl font-bold mb-2">Automate + Earn Trust</h3>
          <p class="text-white/80">Cold outreach without cringe. Bots with soul.</p>
        </div>
      </div>

      <p class="text-center font-pixel font-bold text-xl mt-12 text-neon-green">
        MOST OF ALL: ENJOY THE RIDE
      </p>

      <div id="game-area" ref="gameArea" class="relative w-1/2 mx-auto h-[320px] mt-8 bg-black border border-white rounded overflow-hidden hidden md:block">
        <div ref="ball" class="ball"></div>
        <div ref="paddle" class="paddle" :style="{ left: paddleX + 'px' }"></div>
        <div class="absolute top-2 right-4 text-neon-green font-mono text-sm">
          Score: {{ score }} | Lives: {{ lives }}
        </div>
      </div>
      <p class="text-center text-neon-green mt-4 font-mono hidden md:block">[Use your arrow keys to control the platform.]</p>
    </div>
  </section>
</template>

<style scoped>
.ball {
  @apply w-5 h-5 bg-neon-pink rounded-full absolute;
}

.paddle {
  @apply h-3 w-20 bg-neon-green absolute bottom-2;
}

.blink {
  animation: flash 0.15s linear;
}

@keyframes flash {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.edge-blink {
  animation: borderFlash 0.2s ease;
}

@keyframes borderFlash {
  0%, 100% {
    border-color: white;
  }
  50% {
    border-color: #ff2b6d;
  }
}
</style>