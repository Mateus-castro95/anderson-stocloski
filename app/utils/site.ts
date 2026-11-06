// Dados centrais do site — altere aqui e reflete em todas as seções.

export const siteInfo = {
  name: 'Anderson Stocloski',
  role: 'Advogado',
  oab: 'OAB/SC 23.841',
  practiceStart: { year: 2007, month: 9 }, // setembro de 2007
  phones: [
    { label: '(47) 98876-2584', raw: '5547988762584' },
    { label: '(47) 98810-4308', raw: '5547988104308' }
  ],
  address: {
    street: 'Rua Miguel Horski, 1980 - Km 2',
    city: 'Três Barras - SC'
  },
  mapsQuery: 'Rua Miguel Horski, 1980, Três Barras, SC',
  whatsappMessage: 'Olá, Dr. Anderson! Gostaria de agendar um atendimento.'
}

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Contato', href: '#contato' }
]

export function whatsappLink(raw: string = siteInfo.phones[0]!.raw) {
  return `https://wa.me/${raw}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`
}

export function phoneLink(raw: string) {
  return `tel:+${raw}`
}

export function yearsOfPractice() {
  const now = new Date()
  const { year, month } = siteInfo.practiceStart
  let years = now.getFullYear() - year
  if (now.getMonth() + 1 < month) years--
  return years
}
