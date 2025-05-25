<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import CredoSection from './components/CredoSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import TechStackSection from './components/TechStackSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import InfrastructureSection from './components/InfrastructureSection.vue';
import AboutMe from './components/AboutMe.vue';
import CommandLogSection from './components/CommandLogSection.vue';
import SignalBoostSection from './components/SignalBoostSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <div class="bg-deep-black text-white min-h-screen relative">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <CredoSection />
      <ProjectsSection />
      <ServicesSection />
      <TechStackSection />
      <TestimonialsSection />
      <InfrastructureSection />
      <AboutMe />
      <CommandLogSection />
      <SignalBoostSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>