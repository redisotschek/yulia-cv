<template>
    <div style="padding: 0 25px">
        <v-row justify="center" style="margin: 30px 0">
            <v-avatar
                size="200"
            >
                <img
                    :src="require('../../assets/Yulia.jpg')"
                    alt="Yulia Kogay"
                >
            </v-avatar>    
        </v-row>
        <div v-if="$vuetify.breakpoint.smAndDown">
            <v-row class="text-center justify-center white--text mt-3" :class="fonts.title">
                Yulia Kogay
            </v-row>
            <v-divider color="white" style="padding: 1px; width: 80px; margin: auto; margin-top: 25px">
            </v-divider>
            <v-row class="text-center justify-center mt-5 white--text" :class="fonts.regular">
                <i>Analyst</i>
            </v-row>
        </div>
        <v-col class="white--text">
            <div class="section-bar">
                Contacts 
            </div>
            <div class="my-4">
                <v-row class="my-5 px-4" v-for="(item, i) in contacts" :key="item.caption + i">
                    <v-col>
                        <v-icon large color="white">{{item.icon}}</v-icon>
                    </v-col>
                    <v-col cols="9">
                        <div :class="fonts.regular">{{item.text}}</div>
                        <div class="overline">{{item.caption}}</div>
                    </v-col>
                </v-row>
            </div>
            <div class="section-bar">
                Education 
            </div>
            <v-col class="my-5 px-4">
                <div :class="fonts.regular">
                    {{$t('bonch')}}
                </div>
                <div class="overline">
                    Bachelor of Program Engineering
                </div>
                <div class="overline">
                    Faculty of Infocommunication Networks and Systems
                </div>
                <div class="overline text-right">
                    2014-2018
                </div>
            </v-col>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'About',
    data: () => ({
        contacts: [
            {
                icon: 'mdi-map-outline',
                text: 'St. Petersburg, RU',
                caption: 'Address'
            }, {
                icon: 'mdi-cellphone-basic',
                text: '+7 (911) 728 83 25',
                caption: 'Phone Number'
            }, {
                icon: 'mdi-email-outline',
                text: 'julrever@gmail.com',
                caption: 'E-mail'
            }
        ]
    })
}
</script>