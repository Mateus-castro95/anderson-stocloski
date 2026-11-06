<script setup lang="ts">
const highlights = [
  'Atendimento personalizado',
  'Ética e transparência',
  'Experiência no setor público',
  'Atuação em Três Barras e região'
]
</script>

<template>
  <section id="sobre" class="section-padding relative overflow-hidden bg-cream max-sm:pt-12">
    <!-- Elemento decorativo -->
    <UiAppIcon
      name="scale"
      class="pointer-events-none absolute -bottom-10 -right-16 hidden h-[420px] w-[420px] text-gold-500/[0.07] lg:block"
    />

    <div class="container-site relative grid items-center gap-20 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <!-- Foto com moldura dourada -->
      <div class="relative mx-auto w-full max-w-[19rem] pl-5 pt-5 sm:max-w-[23rem] sm:pl-10 sm:pt-10 lg:max-w-[25rem]">
        <div
          class="absolute left-0 top-0 h-[88%] w-[88%] border-8 border-gold-500 sm:border-[12px]"
          aria-hidden="true"
        />
        <div class="relative aspect-[9/16] bg-ink-800 shadow-card">
          <UiBaseImage
            src="/anderson-sobre.webp"
            alt="Anderson Stocloski, advogado"
            img-class="h-full w-full object-cover object-top"
          />
        </div>

        <div
          class="absolute -bottom-6 right-3 bg-ink-800 px-5 py-4 text-center shadow-card sm:-bottom-8 sm:-right-6 sm:px-7 sm:py-6"
        >
          <p class="text-3xl font-semibold text-gold-400 sm:text-4xl">{{ yearsOfPractice() }}+</p>
          <p class="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-[11px]">
            Anos de<br />experiência
          </p>
        </div>
      </div>

      <!-- Texto -->
      <div>
        <UiSectionTitle kicker="Sobre o advogado" title="Dedicação e experiência ao lado de quem precisa" />

        <div class="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-400">
          <p>
            <strong class="font-semibold text-ink-700">Anderson Stocloski</strong> é advogado inscrito na OAB/SC sob o
            nº 23.841, formado pela Universidade do Contestado, Campus Canoinhas/SC, em 2006, e atua na advocacia desde
            setembro de 2007.
          </p>
          <p>
            Desde 2017 é advogado público do Município de Três Barras/SC, acumulando sólida experiência na área jurídica
            e na administração pública. Também presidiu a Fundação Hospitalar de Três Barras, em atuação de caráter
            filantrópico.
          </p>
        </div>

        <ul class="mt-8 grid gap-4 sm:grid-cols-2">
          <li v-for="item in highlights" :key="item" class="flex items-center gap-3 text-sm font-semibold text-ink-700">
            <UiAppIcon name="check" class="h-5 w-5 shrink-0 text-gold-500" />
            {{ item }}
          </li>
        </ul>

        <div
          class="mt-10 flex flex-col items-start gap-6 border-t border-ink-900/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:justify-start lg:gap-10"
        >
          <div>
            <p class="whitespace-nowrap font-serif text-2xl italic text-ink-700">Anderson Stocloski</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-gold-600">Advogado · {{ siteInfo.oab }}</p>
          </div>

          <a href="#contato" class="btn-gold w-full sm:w-auto">
            Fale comigo
            <UiAppIcon name="arrow-right" class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
