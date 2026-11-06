<script setup lang="ts">
const stats = [
  { icon: 'calendar', value: `${yearsOfPractice()}+`, label: 'Anos de advocacia' },
  { icon: 'scale', value: '5', label: 'Áreas de atuação' },
  { icon: 'landmark', value: '2017', label: 'Advogado público desde' },
  { icon: 'award', value: '23.841', label: 'Inscrição OAB/SC' }
]
</script>

<template>
  <section class="relative z-10 -mt-16 sm:-mt-20" aria-label="Destaques">
    <div class="container-site">
      <div class="grid grid-cols-2 bg-white shadow-card lg:grid-cols-4">
        <div
          v-for="(item, i) in stats"
          :key="item.label"
          class="group flex flex-col items-center gap-3 px-3 py-6 text-center sm:flex-row sm:gap-4 sm:p-7 sm:text-left xl:p-8"
          :class="[
            i % 2 === 0 ? 'border-r border-ink-900/5' : '',
            i < 2 ? 'border-b border-ink-900/5 lg:border-b-0' : '',
            i === 1 ? 'lg:border-r' : ''
          ]"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center bg-gold-500/10 text-gold-600 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-white sm:h-14 sm:w-14"
          >
            <UiAppIcon :name="item.icon" class="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div>
            <p class="text-2xl font-semibold leading-none text-gold-500 sm:text-3xl">{{ item.value }}</p>
            <p class="mt-1.5 text-xs font-medium leading-snug text-ink-600 sm:text-sm">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
