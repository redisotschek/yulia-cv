<template>
  <div class="locale-changer">
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select> -->
     <v-speed-dial
      v-model="fab"
      absolute
      top
      left
      direction="right"
      open-on-hover
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="white"
          dark
          fab
          small
          outlined
          class="main-button"
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="#cea6a6"
        @click="setLocale('en')"
      >
        en
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="#a6c2ce"
        @click="setLocale('ru')"
      >
        ru
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['ru', 'en'], fab: false }
  },
  methods: {
      setLocale (locale) {
          this.$i18n.locale = locale
      }
  }
}
</script>
<style lang="scss" scoped>
.main-button {
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}
</style>
