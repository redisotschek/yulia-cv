<template>
    <div style="padding: 0 25px;">
        <div v-if="$vuetify.breakpoint.mdAndUp">
            <v-row class="text-center justify-center name-title font-weight-bold mt-5" :class="fonts.title">
                {{$t('name')}}
            </v-row>
            <v-divider color="#23272a" style="padding: 1px; width: 100px; margin: auto; margin-top: 15px">
            </v-divider>
            <v-row class="text-center justify-center mt-5 body-2">
                <i>{{$t('position')}}</i>
            </v-row>
        </div>
        <v-col>
            <div class="section-bar infopage">
                {{$t('experience')}}
            </div>
            <v-col>
                <div :class="fonts.regular">
                    {{$t('qatitle')}}
                </div>
                <div class="caption mb-3">
                    01.2019 - 07.2019
                </div>
                <div :class="fonts.subtitle" v-html="$t('qa-text')">
                </div>
            </v-col>
            <v-col>
                <div :class="fonts.regular">
                    {{$t('pm')}}
                </div>
                <div class="caption mb-3">
                    07.2019 - Current
                </div>
                <div :class="fonts.subtitle" v-html="$t('pm-text')">
                </div>
            </v-col>
            <div class="section-bar infopage">
                {{$t('skills')}}
            </div>
            <v-col>
              <v-row justify="space-between" v-for="(item, i) in skills" :key="item.text + i">
                <div :class="fonts.skills">
                    {{$t(item.text)}}
                </div>
                <v-progress-linear
                class="mt-2"
                active
                background-opacity="0.3"
                buffer-value="100"
                height="6"
                :value="item.amount"
                color="#23272a"
                :class="fonts.skills"
                ></v-progress-linear>
              </v-row>
            </v-col>
            <div v-if="$vuetify.breakpoint.smAndDown" class="pa-5">
            </div>

        </v-col>
    </div>
</template>

<script>
export default {
    name: 'Info',
    data: () => ({
      skills: [
        {
          text: 'communication',
          amount: 75
        },
        {
          text: 'lifecycles',
          amount: 65
        },
        {
          text: 'Agile',
          amount: 75
        },
        {
          text: 'UX / UI',
          amount: 70
        },
        {
          text: 'analysis',
          amount: 65
        },
        {
          text: 'manual',
          amount: 85
        },
        {
          text: 'automation',
          amount: 76
        },
        {
          text: 'english',
          amount: 80
        }
      ]
    })
}
</script>

<style lang="scss" scoped>
.name-title {
  text-transform: uppercase;
  letter-spacing: .4em;
}
.skills-half{
  width: 50%;
  max-width: 50%;
}
.skills-full{
  width: 100%;
  margin: 5px 0;
}
.pdf{
  margin-top: 30px;
  text-align: center;
  opacity: 0.6;
& a{
  color: black;
  text-decoration: none;
}
}
</style>
