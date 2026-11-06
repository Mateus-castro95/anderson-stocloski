<script setup lang="ts">
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteInfo.mapsQuery)}&output=embed`
</script>

<template>
  <section id="contato" class="section-padding bg-white">
    <div class="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <UiSectionTitle kicker="Contato" title="Agende seu atendimento">
          Entre em contato para tirar dúvidas ou agendar uma consulta. Será um prazer atender você.
        </UiSectionTitle>

        <div class="mt-10 space-y-5">
          <div class="flex gap-4 border border-ink-900/10 p-5 transition-colors hover:border-gold-500 sm:gap-5 sm:p-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center bg-gold-500 text-white">
              <UiAppIcon name="phone" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-serif text-lg font-semibold text-ink-800">Telefone / WhatsApp</h3>
              <ul class="mt-2 space-y-1 text-sm">
                <li v-for="phone in siteInfo.phones" :key="phone.raw">
                  <a :href="whatsappLink(phone.raw)" target="_blank" rel="noopener" class="hover:text-gold-600">
                    {{ phone.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex gap-4 border border-ink-900/10 p-5 transition-colors hover:border-gold-500 sm:gap-5 sm:p-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center bg-gold-500 text-white">
              <UiAppIcon name="map-pin" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-serif text-lg font-semibold text-ink-800">Endereço</h3>
              <p class="mt-2 text-sm">{{ siteInfo.address.street }}<br />{{ siteInfo.address.city }}</p>
            </div>
          </div>

          <div class="flex gap-4 border border-ink-900/10 p-5 transition-colors hover:border-gold-500 sm:gap-5 sm:p-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center bg-gold-500 text-white">
              <UiAppIcon name="shield" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-serif text-lg font-semibold text-ink-800">Inscrição</h3>
              <p class="mt-2 text-sm">{{ siteInfo.oab }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative min-h-[320px] sm:min-h-[420px] lg:col-span-7">
        <div class="absolute -right-3 -top-3 hidden h-full w-full border-[10px] border-gold-500 lg:block" aria-hidden="true" />
        <iframe
          :src="mapSrc"
          title="Localização do escritório"
          class="relative h-full min-h-[320px] w-full sm:min-h-[420px] grayscale-[60%] shadow-card"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>
