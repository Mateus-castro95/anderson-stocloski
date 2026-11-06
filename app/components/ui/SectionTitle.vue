<script setup lang="ts">
withDefaults(
  defineProps<{
    kicker: string
    title: string
    center?: boolean
    light?: boolean
  }>(),
  { center: false, light: false }
)
</script>

<template>
  <div :class="center ? 'mx-auto max-w-2xl text-center' : ''">
    <span class="kicker" :class="center ? 'justify-center' : ''">
      <span class="h-px w-8 bg-gold-500" />
      {{ kicker }}
      <span v-if="center" class="h-px w-8 bg-gold-500" />
    </span>
    <h2 class="heading mt-4" :class="light ? '!text-white' : ''">{{ title }}</h2>
    <p v-if="$slots.default" class="mt-5 leading-relaxed" :class="light ? 'text-white/60' : 'text-ink-400'">
      <slot />
    </p>
  </div>
</template>
