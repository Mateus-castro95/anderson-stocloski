<script setup lang="ts">
const timeline = [
  {
    period: '2006',
    icon: 'graduation',
    title: 'Formação em Direito',
    description: 'Graduação pela Universidade do Contestado, Campus Canoinhas/SC.'
  },
  {
    period: '2007',
    icon: 'scale',
    title: 'Início na advocacia',
    description: 'Inscrição na OAB/SC sob o nº 23.841 e início da atuação como advogado em setembro de 2007.'
  },
  {
    period: '2017 — atual',
    icon: 'landmark',
    title: 'Advogado público',
    description: 'Advogado público do Município de Três Barras/SC, com experiência em direito e administração pública.'
  },
  {
    period: '2019 — 2023 · 2025 — 2027',
    icon: 'heart',
    title: 'Presidente da Fundação Hospitalar',
    description: 'Presidência da Fundação Hospitalar de Três Barras, em atuação de caráter filantrópico.'
  }
]
</script>

<template>
  <section id="trajetoria" data-header-theme="dark" class="section-padding relative overflow-hidden bg-ink-800">
    <div class="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />

    <div class="container-site relative grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <UiSectionTitle kicker="Trajetória" title="Uma carreira construída com seriedade" light>
          Experiência na advocacia privada e pública, somada ao compromisso com a comunidade de Três Barras.
        </UiSectionTitle>

        <div class="relative ml-3 mt-10 aspect-[2/3] w-[calc(100%-0.75rem)] max-w-sm">
          <div class="absolute -left-3 -top-3 h-full w-full border border-gold-500/40" aria-hidden="true" />
          <div class="relative h-full w-full">
            <UiBaseImage
              src="/anderson-escritorio.webp"
              alt="Anderson Stocloski em seu escritório"
              variant="dark"
              img-class="h-full w-full object-cover object-[center_45%]"
            />
          </div>
        </div>
      </div>

      <!-- No desktop a lista termina alinhada com a base da foto -->
      <ol class="relative lg:col-span-7 lg:self-end lg:pl-8">
        <li
          v-for="(item, i) in timeline"
          :key="item.title"
          class="group relative flex gap-5 pb-10 last:pb-0 sm:gap-6 sm:pb-12"
        >
          <!-- Linha que liga este marco ao próximo (o último não tem) -->
          <span
            v-if="i < timeline.length - 1"
            class="absolute bottom-0 left-6 top-12 w-px bg-gold-500/25 sm:left-7 sm:top-14"
            aria-hidden="true"
          />
          <div
            class="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-gold-500/50 bg-ink-800 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-white sm:h-14 sm:w-14"
          >
            <UiAppIcon :name="item.icon" class="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div class="min-w-0 pt-0.5 sm:pt-1">
            <span class="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-400 sm:text-xs sm:tracking-[0.2em]">
              {{ item.period }}
            </span>
            <h3 class="mt-2 font-serif text-xl font-semibold text-white sm:text-2xl">{{ item.title }}</h3>
            <p class="mt-3 max-w-md text-sm leading-relaxed text-white/60">{{ item.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
