<script setup lang="ts">
/**
 * Imagem com espaço reservado: enquanto o arquivo não existir em /public,
 * mostra um placeholder indicando o caminho esperado.
 */
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    label?: string
    variant?: 'light' | 'dark'
    imgClass?: string
    eager?: boolean
  }>(),
  { variant: 'light', imgClass: 'h-full w-full object-cover', eager: false }
)

const failed = ref(false)
const img = ref<HTMLImageElement | null>(null)

// Captura erros que aconteceram antes da hidratação (SSR)
onMounted(() => {
  if (img.value?.complete && img.value.naturalWidth === 0) failed.value = true
})

watch(
  () => props.src,
  () => (failed.value = false)
)
</script>

<template>
  <div class="relative h-full w-full overflow-hidden">
    <img
      v-if="!failed"
      ref="img"
      :src="src"
      :alt="alt"
      :class="imgClass"
      :loading="eager ? 'eager' : 'lazy'"
      @error="failed = true"
    />
    <slot v-else name="fallback">
      <div
        class="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed p-6 text-center"
        :class="
          variant === 'dark'
            ? 'border-white/15 bg-white/[0.03] text-white/40'
            : 'border-ink-900/15 bg-ink-900/[0.03] text-ink-900/40'
        "
      >
        <UiAppIcon name="image" class="h-9 w-9" />
        <span class="text-xs font-medium uppercase tracking-widest">{{ label || alt }}</span>
        <code class="text-[11px] opacity-80">public{{ src }}</code>
      </div>
    </slot>
  </div>
</template>
