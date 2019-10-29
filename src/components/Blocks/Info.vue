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
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        {{$t('communication')}}
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="80"
                    color="#23272a"
                    :class="fonts.skills"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        {{$t('lifecycles')}}
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="70"
                    color="#23272a"
                    :class="fonts.skills"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        Agile
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="80"
                    color="#23272a"
                    :class="fonts.skills"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        UX / UI
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    :class="fonts.skills"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="75"
                    color="#23272a"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        {{$t('analysis')}}
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    :class="fonts.skills"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="65"
                    color="#23272a"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        {{$t('manual')}}
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    :class="fonts.skills"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="93"
                    color="#23272a"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        {{$t('automation')}}
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    :class="fonts.skills"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="85"
                    color="#23272a"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between">
                    <div :class="fonts.skills">
                        {{$t('english')}}
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    :class="fonts.skills"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="90"
                    color="#23272a"
                ></v-progress-linear>
                </v-row>
            </v-col>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'Info'
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
</style>
