module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        cgold: '#D57F06',
        cwhite: '#F8F0DB',
        cblue: '#0270CA',
        cred: '#9E1C14',
        cpurple: '#A538C6',
        clightblue: '#0296C9',
        cbrown: '#7D442E',
        cblack: '#000000'
      },
      fontFamily: {
        custom: ['RokFOnt', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
