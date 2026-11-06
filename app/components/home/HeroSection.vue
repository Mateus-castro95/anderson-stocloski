<template>
  <section id="inicio" data-header-theme="dark" class="relative overflow-hidden bg-ink-800">
    <div
      class="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800/95 to-ink-800/70 lg:bg-gradient-to-r lg:from-ink-900 lg:via-ink-800/90 lg:to-ink-800/40"
      aria-hidden="true"
    />
    <div
      class="absolute -right-40 top-20 h-[360px] w-[360px] rounded-full bg-gold-500/10 blur-3xl sm:h-[520px] sm:w-[520px]"
      aria-hidden="true"
    />

    <div class="container-site relative grid items-end gap-10 pt-28 sm:pt-36 lg:grid-cols-12 lg:gap-12">
      <!-- Texto -->
      <div class="mx-auto max-w-2xl text-center lg:col-span-6 lg:mx-0 lg:max-w-none lg:self-center lg:pb-40 lg:text-left">
        <span class="kicker justify-center lg:justify-start">
          <span class="h-px w-8 bg-gold-500" />
          Advocacia em Três Barras/SC
        </span>

        <h1
          class="mt-5 font-serif text-[2.1rem] font-bold leading-[1.15] text-white sm:mt-6 sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem]"
        >
          Experiência e compromisso na defesa dos seus direitos
        </h1>

        <p class="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/65 sm:mt-6 lg:mx-0">
          Há mais de {{ yearsOfPractice() }} anos oferecendo atendimento jurídico ético, próximo e dedicado nas áreas
          trabalhista, criminal, previdenciária, de família e cível.
        </p>

        <div class="mt-10 hidden sm:block">
          <HomeHeroActions />
        </div>
      </div>

      <!-- Foto do advogado: public/anderson-hero.webp -->
      <div class="flex justify-center lg:col-span-6 lg:justify-end">
        <div class="relative h-[430px] w-[290px] sm:h-[530px] sm:w-[360px] lg:h-[640px] lg:w-[440px]">
          <div class="absolute -left-4 -top-4 h-full w-full border border-gold-500/60" aria-hidden="true" />
          <div class="relative h-full w-full bg-ink-900">
            <UiBaseImage
              src="/anderson-hero.webp"
              alt="Anderson Stocloski, advogado"
              variant="dark"
              img-class="h-full w-full object-cover object-[center_20%]"
              eager
            />
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink-800/70 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
