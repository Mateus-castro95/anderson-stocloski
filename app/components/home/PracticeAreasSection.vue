<script setup lang="ts">
// Para usar ícones próprios, adicione `iconSrc: '/icons/arquivo.svg'` em cada item.
const areas: { icon: string; iconSrc?: string; title: string; description: string }[] = [
  {
    icon: 'briefcase',
    title: 'Direito Trabalhista',
    description:
      'Reclamatórias trabalhistas, verbas rescisórias, horas extras, acidentes de trabalho e demais direitos decorrentes da relação de emprego.'
  },
  {
    icon: 'gavel',
    title: 'Direito Criminal',
    description:
      'Defesa técnica em inquéritos policiais e processos criminais, acompanhamento em audiências e atuação em todas as fases do processo.'
  },
  {
    icon: 'umbrella',
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, auxílio por incapacidade, BPC/LOAS, pensão por morte e revisões de benefícios junto ao INSS.'
  },
  {
    icon: 'users',
    title: 'Direito de Família',
    description:
      'Divórcio, guarda, pensão alimentícia, reconhecimento de união estável, inventário e partilha de bens, com sensibilidade e discrição.'
  },
  {
    icon: 'document',
    title: 'Direito Civil',
    description:
      'Contratos, indenizações, cobranças, responsabilidade civil e questões imobiliárias, com orientação preventiva e atuação judicial.'
  }
]
</script>

<template>
  <section id="areas" class="section-padding bg-cream-dark">
    <div class="container-site">
      <UiSectionTitle kicker="Como posso ajudar" title="Áreas de Atuação" center>
        Atendimento jurídico completo, com análise cuidadosa de cada caso e acompanhamento próximo em todas as etapas.
      </UiSectionTitle>

      <div class="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <article
          v-for="area in areas"
          :key="area.title"
          class="group relative overflow-hidden bg-white p-7 shadow-soft sm:p-8 xl:p-9 transition-all duration-500 hover:-translate-y-1 hover:bg-ink-800"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100"
          />
          <div
            class="flex h-14 w-14 items-center justify-center bg-gold-500/10 text-gold-600 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-white sm:h-16 sm:w-16"
          >
            <UiAppIcon :name="area.icon" :src="area.iconSrc" class="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          <h3 class="mt-6 font-serif text-xl font-semibold sm:mt-7 sm:text-2xl text-ink-800 transition-colors duration-500 group-hover:text-white">
            {{ area.title }}
          </h3>
          <p class="mt-4 text-sm leading-relaxed text-ink-400 transition-colors duration-500 group-hover:text-white/60">
            {{ area.description }}
          </p>
          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener"
            class="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 transition-colors group-hover:text-gold-400"
          >
            Saiba mais
            <UiAppIcon name="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </article>

        <!-- Card de chamada -->
        <article class="relative flex flex-col justify-center overflow-hidden bg-gold-500 p-7 text-white sm:p-8 xl:p-9">
          <UiAppIcon
            name="scale"
            class="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 text-white/10"
          />
          <h3 class="relative font-serif text-xl font-semibold sm:text-2xl">Precisa de orientação jurídica?</h3>
          <p class="relative mt-4 text-sm leading-relaxed text-white/85">
            Entre em contato e agende um atendimento para analisarmos o seu caso.
          </p>
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-light relative mt-8 self-start">
            Falar agora
            <UiAppIcon name="arrow-right" class="h-4 w-4" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
