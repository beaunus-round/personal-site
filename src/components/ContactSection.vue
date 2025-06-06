<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const timeframe = ref('now');

const nameError = ref('');
const emailError = ref('');
const messageError = ref('');
const formSuccess = ref(false);
const isSubmitting = ref(false);

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = () => {
  let valid = true;
  
  // Reset errors
  nameError.value = '';
  emailError.value = '';
  messageError.value = '';
  
  // Validate name
  if (!name.value.trim()) {
    nameError.value = 'Name is required';
    valid = false;
  }
  
  // Validate email
  if (!email.value.trim()) {
    emailError.value = 'Email is required';
    valid = false;
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email';
    valid = false;
  }
  
  // Validate message
  if (!message.value.trim()) {
    messageError.value = 'Message is required';
    valid = false;
  }
  
  return valid;
};

const submitForm = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;

  try {
    const response = await fetch('https://formspree.io/f/xnndkper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        timeframe: timeframe.value,
        _subject: `New contact from ${name.value}`,
      }),
    });

    if (response.ok) {
      formSuccess.value = true;
      
      // Reset form
      name.value = '';
      email.value = '';
      message.value = '';
      timeframe.value = 'now';
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        formSuccess.value = false;
      }, 5000);
    } else {
      alert('Form submission failed. Please try again.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('System fault. Retry?');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-20 relative bg-deep-black/50">
    <!-- Grid Background -->
    <div class="grid-bg"></div>
    <!-- Scanline Effect -->
    <div class="scanline"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="terminal-header">Run /connect</h2>
      
      <div class="max-w-2xl mx-auto">
        <p class="text-lg mb-8">
          If you've got chaos, I can systemize it.
        </p>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-white mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              class="w-full bg-deep-black/70 border border-neon-pink/50 text-white p-3 rounded-md focus:border-neon-pink focus:outline-none"
            >
            <p v-if="nameError" class="mt-1 text-red-500 text-sm">{{ nameError }}</p>
          </div>
          
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-white mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="w-full bg-deep-black/70 border border-neon-pink/50 text-white p-3 rounded-md focus:border-neon-pink focus:outline-none"
            >
            <p v-if="emailError" class="mt-1 text-red-500 text-sm">{{ emailError }}</p>
          </div>
          
          <!-- Message Field -->
          <div>
            <label for="message" class="block text-sm font-medium text-white mb-1">Message</label>
            <textarea 
              id="message" 
              v-model="message" 
              rows="4" 
              class="w-full bg-deep-black/70 border border-neon-pink/50 text-white p-3 rounded-md focus:border-neon-pink focus:outline-none"
            ></textarea>
            <p v-if="messageError" class="mt-1 text-red-500 text-sm">{{ messageError }}</p>
          </div>
          
          <!-- Timeframe Dropdown -->
          <div>
            <label for="timeframe" class="block text-sm font-medium text-white mb-1">When do you want to start?</label>
            <select 
              id="timeframe" 
              v-model="timeframe" 
              class="w-full bg-deep-black/70 border border-neon-pink/50 text-white p-3 rounded-md focus:border-neon-pink focus:outline-none"
            >
              <option value="now">Now</option>
              <option value="soon">Within 60 days</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>
          
          <!-- Submit Button -->
          <div>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="terminal-button w-full"
            >
              {{ isSubmitting ? 'Transmitting...' : 'Send Transmission' }}
            </button>
          </div>
          
          <!-- Success Message -->
          <div v-if="formSuccess" class="p-4 bg-neon-green/20 border border-neon-green rounded-md text-neon-green">
            Your message has been transmitted successfully. I'll respond within 48 hours.
          </div>
        </form>
        
    
      </div>
    </div>
  </section>
</template>