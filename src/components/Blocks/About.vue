<template>
    <div style="padding: 0 25px">
        <v-row justify="center" style="margin: 30px 0 15px 0">
            <v-avatar
                size="180"
            >
                <img
                    :src="require('../../assets/avatar.jpg')"
                    alt="Yulia Kogay"
                >
            </v-avatar>
        </v-row>
        <div v-if="$vuetify.breakpoint.smAndDown">
            <v-row class="text-center name-title justify-center white--text mt-3 font-weight-bold" :class="fonts.title">
                {{$t('name')}}
            </v-row>
            <v-divider color="white" style="padding: 1px; width: 80px; margin: auto; margin-top: 25px">
            </v-divider>
            <v-row class="text-center justify-center mt-5 white--text overline">
                <i>{{$t('position')}}</i>
            </v-row>
        </div>
        <v-col class="white--text">
            <div class="section-bar">
                {{$t('contact')}}
            </div>
            <div class="my-4">
                <v-row class="my-5 px-4" v-for="(item, i) in contacts" :key="item.caption + i">
                    <v-col>
                        <v-icon large color="white">{{item.icon}}</v-icon>
                    </v-col>
                    <v-col cols="9">
                        <div :class="fonts.regular" v-html="item.text"></div>
                        <div class="overline">{{item.caption}}</div>
                    </v-col>
                </v-row>
            </div>
            <div class="section-bar">
                {{$t('education')}}
            </div>
            <v-col class="my-5 px-4">
                <div :class="fonts.regular" class="mb-2" style="line-height:1.7rem;">
                    {{$t('bonch')}}
                </div>
                <div class="overline">
                    {{$t('degree')}}
                </div>
                <div class="overline">
                    {{$t('faculty')}}
                </div>
                <div class="overline text-right">
                    2014-2018
                </div>
            </v-col>
            <div v-if="$vuetify.breakpoint.mdAndUp">

            <div class="section-bar mb-5">
                {{$t('hobby')}}
            </div>

            <v-row justify="space-around">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn class="ma-2" outlined fab color="white" href="https://500px.com/julrever" v-on="on">
                      <v-icon>mdi-camera-outline</v-icon>
                  </v-btn>
                </template>
                <span>{{$t('photography')}}</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn class="ma-2" outlined fab color="white" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                  </v-btn>
                </template>
                <span>{{$t('development')}}</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn class="ma-2" outlined fab color="white" v-on="on">
                      <v-icon>mdi-palette-outline</v-icon>
                  </v-btn>
                </template>
                <span>{{$t('crafts')}}</span>
              </v-tooltip>
            </v-row>
          </div>
        </v-col>
        <div class="print-pdf">
          <v-btn class="ma-2" small outlined fab color="white" title="PDF file">
              <a href="/YuliaKogay.pdf"><v-icon>mdi-printer</v-icon></a>
          </v-btn>
        </div>
    </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from "html2canvas"

export default {
    name: 'About',
    data: () => ({
        contacts: [
            {
                icon: 'mdi-map-outline',
                text: 'St. Petersburg, RU',
                caption: 'Address'
            }, {
                icon: 'mdi-cellphone-iphone',
                text: '<a class="about-link" href="tel:+79117288325">+7 (911) 728 83 25</a>',
                caption: 'Phone Number'
            }, {
                icon: 'mdi-email-open-outline',
                text: '<a class="about-link" href="mailto:julrever@gmail.com">julrever@gmail.com</a>',
                caption: 'E-mail'
            }
        ]
    }),
    methods: {
      download() {
        const doc = new jsPDF();
        var canvasElement = document.createElement('canvas');
        html2canvas(this.$refs.content, { canvas: canvasElement
      }).then(function (canvas) {
          const img = canvas.toDataURL("image/jpeg", 0.8);
          doc.addImage(img,'JPEG',20,20);
          doc.save("sample.pdf");
   });
      }
    }
}
</script>


<style lang="scss" scoped>
.print-pdf {
  position: absolute;
  top: 50px;
  left: 0;
  margin: 8px;
  opacity: 0.7;
  & a {
    color: white;
    text-decoration: none;
  }
  &:hover{
    opacity: 1;
  }
}
</style>
