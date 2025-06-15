<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-deep-black/80 backdrop-blur-md border-b border-neon-pink/30 py-4 px-6 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="font-pixel text-white text-xl">
        <span class="text-neon-pink">&gt;_</span> Beau Horton
      </a>
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6">
        <a href="#about" class="text-white hover:text-neon-pink transition-colors">About</a>
        <a href="#projects" class="text-white hover:text-neon-pink transition-colors">Projects</a>
        <a href="#services" class="text-white hover:text-neon-pink transition-colors">Services</a>
        <a href="#stack" class="text-white hover:text-neon-pink transition-colors">Stack</a>
        <a href="#contact" class="text-white hover:text-neon-pink transition-colors">Contact</a>
      </div>
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <span v-if="!isMenuOpen" class="text-2xl">☰</span>
        <span v-else class="text-2xl">✕</span>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" 
      class="md:hidden fixed top-full left-0 right-0 bg-deep-black/90 backdrop-blur-md border-b border-neon-pink/30 py-4 z-[60]">
      <div class="container mx-auto flex flex-col space-y-4 px-6">
        <a @click="toggleMenu" href="#about" class="text-white hover:text-neon-pink transition-colors">About</a>
        <a @click="toggleMenu" href="#projects" class="text-white hover:text-neon-pink transition-colors">Projects</a>
        <a @click="toggleMenu" href="#services" class="text-white hover:text-neon-pink transition-colors">Services</a>
        <a @click="toggleMenu" href="#stack" class="text-white hover:text-neon-pink transition-colors">Stack</a>
        <a @click="toggleMenu" href="#contact" class="text-white hover:text-neon-pink transition-colors">Contact</a>
      </div>
    </div>
  </nav>
</template>
