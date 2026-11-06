<template>
  <section class="relative overflow-hidden bg-gold-500 py-16 lg:py-20">
    <UiAppIcon
      name="gavel"
      class="pointer-events-none absolute -left-10 top-1/2 h-72 w-72 -translate-y-1/2 text-white/10"
    />

    <div class="container-site relative flex flex-col items-center justify-between gap-8 text-center xl:flex-row xl:gap-10 xl:text-left">
      <div>
        <h2 class="font-serif text-[1.75rem] font-bold leading-tight text-white sm:text-4xl">
          Precisa de um advogado? Fale agora mesmo.
        </h2>
        <p class="mt-3 text-white/85">Atendimento pelo WhatsApp ou telefone, com agendamento facilitado.</p>
      </div>

      <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <a
          v-for="phone in siteInfo.phones"
          :key="phone.raw"
          :href="whatsappLink(phone.raw)"
          target="_blank"
          rel="noopener"
          class="btn-light shrink-0 !tracking-[0.1em]"
        >
          <UiAppIcon name="phone" class="h-4 w-4" />
          {{ phone.label }}
        </a>
      </div>
    </div>
  </section>
</template>
