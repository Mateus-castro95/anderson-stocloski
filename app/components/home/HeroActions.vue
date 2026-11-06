<script setup lang="ts">
// Botões principais da página. `light` = versão para fundo claro.
withDefaults(defineProps<{ light?: boolean }>(), { light: false })
</script>

<template>
  <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
    <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-gold w-full sm:w-auto">
      Agende uma consulta
      <UiAppIcon name="arrow-right" class="h-4 w-4" />
    </a>
    <a
      href="#areas"
      class="btn w-full border sm:w-auto"
      :class="
        light
          ? 'border-ink-800/30 text-ink-800 hover:border-gold-600 hover:text-gold-700'
          : 'border-white/25 text-white hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-300'
      "
    >
      Áreas de atuação
    </a>
  </div>
</template>
