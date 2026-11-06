<script setup lang="ts">
/**
 * variant="header": ícone SA + nome em texto (legível em tamanho pequeno)
 * variant="full":   logo completo (monograma, nome e "Advogado"), para o rodapé
 *
 * Arquivos (versões com fundo transparente, geradas a partir dos originais):
 *   public/icone-transparente.png
 *   public/logo-anderson-transparente.png
 */
withDefaults(defineProps<{ variant?: 'header' | 'full' }>(), { variant: 'header' })
</script>

<template>
  <div v-if="variant === 'header'" class="flex items-center gap-3">
    <UiBaseImage
      src="/icone-transparente.png"
      alt=""
      variant="dark"
      class="!h-10 !w-11 shrink-0 sm:!h-12 sm:!w-14"
      img-class="h-full w-full object-contain"
      eager
    >
      <template #fallback>
        <span
          class="flex h-full w-full items-center justify-center border border-gold-500 font-serif text-lg font-semibold text-gold-400"
        >
          SA
        </span>
      </template>
    </UiBaseImage>
    <span class="whitespace-nowrap leading-none">
      <span class="block font-serif text-lg font-semibold text-white sm:text-xl">Anderson Stocloski</span>
      <span class="mt-1 block text-xs text-gold-400">Advogado</span>
    </span>
  </div>

  <div v-else class="h-28 w-52">
    <UiBaseImage
      src="/logo-anderson-transparente.png"
      alt="Anderson Stocloski, advogado"
      variant="dark"
      img-class="h-full w-full object-contain object-left"
    >
      <template #fallback>
        <span class="font-serif text-xl font-semibold text-white">Anderson Stocloski</span>
      </template>
    </UiBaseImage>
  </div>
</template>
