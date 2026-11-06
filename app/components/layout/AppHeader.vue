<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)
// A página começa no hero, que é escuro
const overDark = ref(true)

/**
 * Descobre qual seção está atrás do header. Seções escuras são marcadas com
 * data-header-theme="dark"; qualquer outra é tratada como clara.
 */
let ticking = false
const update = () => {
  ticking = false
  scrolled.value = window.scrollY > 40
  const probe = 40
  const sections = document.querySelectorAll<HTMLElement>('[data-header-theme]')
  let dark = false
  sections.forEach((el) => {
    const { top, bottom } = el.getBoundingClientRect()
    if (top <= probe && bottom > probe) dark = el.dataset.headerTheme === 'dark'
  })
  overDark.value = dark
}
const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b shadow-lg backdrop-blur transition-[background-color,border-color,padding] duration-300"
    :class="[
      scrolled || menuOpen ? 'py-3' : 'py-4 sm:py-5',
      overDark ? 'border-gold-500/30 bg-ink-600/95' : 'border-transparent bg-ink-900/95'
    ]"
  >
    <div class="container-site flex items-center justify-between gap-6">
      <a href="#inicio" aria-label="Início" class="min-w-0">
        <UiSiteLogo />
      </a>

      <nav class="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Menu principal">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">
          {{ link.label }}
        </a>
      </nav>

      <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-outline hidden shrink-0 !px-6 !py-3 xl:inline-flex">
        Agendar Consulta
      </a>

      <button
        type="button"
        class="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white lg:hidden"
        :aria-expanded="menuOpen"
        aria-label="Abrir menu"
        @click="menuOpen = !menuOpen"
      >
        <UiAppIcon :name="menuOpen ? 'close' : 'menu'" class="h-5 w-5" />
      </button>
    </div>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav v-if="menuOpen" class="container-site lg:hidden" aria-label="Menu mobile">
        <div class="mt-3 flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto border-t border-white/10 pb-6 pt-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="border-b border-white/5 py-3.5 pr-5 text-right text-sm font-medium text-white/80 hover:text-gold-400"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-gold mr-5 mt-5 self-end">Agendar Consulta</a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
