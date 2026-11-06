import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Dourado — cor de destaque da marca
        gold: {
          50: '#faf6ee',
          100: '#f2e9d6',
          200: '#e5d3ae',
          300: '#d4b783',
          400: '#c4a06a',
          500: '#b08d57',
          600: '#987545',
          700: '#7a5d38',
          800: '#5f4830',
          900: '#4a3a28',
          DEFAULT: '#b08d57'
        },
        // Tons escuros — fundos do header, hero e rodapé
        ink: {
          400: '#4a4a4a',
          500: '#3a3a3a',
          600: '#2c2c2c',
          700: '#232323',
          800: '#1c1c1c',
          900: '#141414',
          DEFAULT: '#1c1c1c'
        },
        // Fundos claros
        cream: {
          DEFAULT: '#fbf8f3',
          dark: '#f3eee6'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 25px 60px -25px rgba(20, 20, 20, 0.28)',
        soft: '0 10px 30px -12px rgba(20, 20, 20, 0.15)'
      },
      letterSpacing: {
        kicker: '0.3em'
      }
    }
  }
}
