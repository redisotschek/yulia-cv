<template>
  <v-app ref="content">
    <LocaleChanger/>
    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main';
import LocaleChanger from './components/LocaleChanger'
export default {
  name: 'App',
  components: {
    Main,
    LocaleChanger
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
*{
  font-family: Roboto, Helvetica, sans-serif;
}

.height100 {
  height: 100%;
}

.about-link {
  text-decoration: none!important;
  color: #fff!important;
}
.section-bar {
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  text-align: center;
  line-height: 40px;
  font-size: 25px;
  font-weight: 500;
  color: black;
  background-color: white;
  letter-spacing: 4px;
  margin-top: 20px;

  &.infopage {
    background-color: #23272a;
    color: white;
  }
}
</style>
