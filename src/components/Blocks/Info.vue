<template>
    <div style="padding: 0 25px;">
        <div v-if="$vuetify.breakpoint.mdAndUp">
            <v-row class="text-center justify-center" :class="fonts.title">
                Yulia Kogay
            </v-row>
            <v-divider color="#23272a" style="padding: 1px; width: 80px; margin: auto; margin-top: 25px">
            </v-divider>
            <v-row class="text-center justify-center mt-5" :class="fonts.regular">
                <i>Analyst</i>
            </v-row>
        </div>
        <v-col>
            <div class="section-bar infopage">
                Experience
            </div>
            <v-col>
                <div :class="fonts.regular">
                    Quality Assurance Engineer
                </div>
                <div class="caption">
                    01.2019 - 07.2019
                </div>
                <div :class="fonts.subtitle">
                    Manual testing of cryptocurrency exchange platform as web, Android and iOS applications using Jira as a defect tracking tool<br>
                    Manual testing of REST API using Postman<br>
                    Automating E2E tests for exchange platform using Selenium, pytest and BDD framework Behave Automating integration tests for P2P exchange API
                </div>
            </v-col>
            <v-col>
                <div :class="fonts.regular">
                    Product Manager / Analyst
                </div>
                <div class="caption">
                    07.2019 - Current
                </div>
                <div :class="fonts.subtitle">
                    Managing large-scale B2B projects <br>
                    Gathering requirements directly from clients in 10 different countries (including African countries such as Egypt) and stakeholders in Netherlands<br>
                    Supporting project team, time and budget tracking, generating reports
                </div>
            </v-col>
            <div class="section-bar infopage">
                Skills
            </div>
            <v-col>
                <v-row justify="space-between" class="50%">
                    <div>
                        aaaa
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    style="width: 50%"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="80"
                    color="grey"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between" class="50%">
                    <div>
                        aaaa
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    style="width: 50%"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="60"
                    color="grey"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between" class="50%">
                    <div>
                        aaaa
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    style="width: 50%"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="75"
                    color="grey"
                ></v-progress-linear>
                </v-row>
                <v-row justify="space-between" class="50%">
                    <div>
                        aaaa
                    </div>
                    <v-progress-linear
                    class="mt-2"
                    style="width: 50%"
                    active
                    background-opacity="0.3"
                    buffer-value="100"
                    height="6"
                    value="93"
                    color="grey"
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

</style>