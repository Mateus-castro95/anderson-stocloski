<script setup lang="ts">
const areas = ['Direito Trabalhista', 'Direito Criminal', 'Direito Previdenciário', 'Direito de Família', 'Direito Civil']
const year = new Date().getFullYear()
</script>

<template>
  <footer data-header-theme="dark" class="bg-ink-900 text-white/60">
    <div class="container-site grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-12 lg:gap-x-12 lg:py-20">
      <div class="col-span-2 lg:col-span-4">
        <UiSiteLogo />
        <p class="mt-5 max-w-sm text-sm leading-relaxed">
          Advocacia com ética, dedicação e atendimento próximo. Atuação em Três Barras/SC e região desde
          {{ siteInfo.practiceStart.year }}.
        </p>
        <p class="mt-6 text-xs uppercase tracking-kicker text-gold-400">{{ siteInfo.oab }}</p>
      </div>

      <div class="lg:col-span-2">
        <h3 class="font-serif text-lg text-white">Navegação</h3>
        <ul class="mt-6 space-y-3 text-sm">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="transition-colors hover:text-gold-400">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h3 class="font-serif text-lg text-white">Áreas de Atuação</h3>
        <ul class="mt-6 space-y-3 text-sm">
          <li v-for="area in areas" :key="area">
            <a href="#areas" class="transition-colors hover:text-gold-400">{{ area }}</a>
          </li>
        </ul>
      </div>

      <div class="col-span-2 sm:col-span-1 lg:col-span-3">
        <h3 class="font-serif text-lg text-white">Contato</h3>
        <ul class="mt-6 space-y-4 text-sm">
          <li v-for="phone in siteInfo.phones" :key="phone.raw" class="flex items-center gap-3">
            <UiAppIcon name="phone" class="h-4 w-4 shrink-0 text-gold-500" />
            <a :href="phoneLink(phone.raw)" class="transition-colors hover:text-gold-400">{{ phone.label }}</a>
          </li>
          <li class="flex gap-3">
            <UiAppIcon name="map-pin" class="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            <span>{{ siteInfo.address.street }}<br />{{ siteInfo.address.city }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-site flex flex-col items-center justify-between gap-2 py-6 text-center text-xs sm:flex-row sm:text-left">
        <p>© {{ year }} {{ siteInfo.name }} — Advocacia. Todos os direitos reservados.</p>
        <p>{{ siteInfo.oab }}</p>
      </div>
    </div>
  </footer>
</template>
