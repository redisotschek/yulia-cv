<template>
  <!-- <div style="position: absolute; width: 100%; height: 100%; top: 0; left: 0"> -->
    <v-container fluid fill-height class="py-0">
      <v-row class="height100">
        <v-col
          cols="12"
          md="4"
          class="about"
        >
          <About/>
        </v-col>
        <v-col
          cols="12"
          md="8"
          class="info-yulia"
        >
          <Info/>
        </v-col>
      </v-row>
    </v-container>
  <!-- </div> -->
</template>

<script>
import About from './Blocks/About'
import Info from './Blocks/Info'

export default {
    components: {About, Info},
    data: () => ({
    }),
};
</script>

<style lang="scss" scoped>


$blue: #a6c2ce;
$black: #23272a;

.about {
  background-color: $black;
}

.info-yulia {
  background-color: $blue;
  color: $black;
}
</style>
