<template>
  <a
    :href="whatsappLink()"
    target="_blank"
    rel="noopener"
    aria-label="Conversar pelo WhatsApp"
    class="group fixed bottom-4 right-4 z-40 flex h-12 w-12 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-card transition-all duration-300 hover:scale-105 hover:bg-gold-600"
  >
    <span class="absolute inset-0 animate-ping rounded-full bg-gold-500/40" />
    <UiAppIcon name="message" class="relative h-6 w-6" />
  </a>
</template>
