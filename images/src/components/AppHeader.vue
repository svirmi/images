<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
                app
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-row
                            v-if="item.heading"
                            :key="item.heading"
                            align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col
                                cols="6"
                                class="text-center"
                        >
                            <a
                                    href="#!"
                                    class="body-2 black--text"
                            >EDIT</a>
                        </v-col>
                    </v-row>
                    <v-list-group
                            v-else-if="item.children"
                            :key="item.text"
                            v-model="item.model"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon=""
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="(child, i) in item.children"
                                :key="i"
                                link
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                            v-else
                            :key="item.text"
                            link
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                app
                color="blue darken-3"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <span class="hidden-sm-and-down">Imgur App</span>
            </v-toolbar-title>

            <v-spacer />

            <div v-if="isLoggedIn">
                <router-link to="/">
                    <v-btn icon>
                        <v-icon>mdi-image</v-icon>
                    </v-btn>
                </router-link>
                <v-btn icon @click="logout">
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </div>

            <v-btn v-else icon @click="login">
                <v-icon>mdi-login</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <router-view></router-view>
                </v-row>
            </v-container>
        </v-content>
        <div v-if="isLoggedIn">
            <router-link to="/upload">
                <v-btn bottom color="pink" dark fab fixed right>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </router-link>
        </div>
    </v-app>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "AppHeader",
        methods: {
            ...mapActions(['login', 'logout']),
        },
        computed: {
            ...mapGetters(['isLoggedIn']),
        },
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            items: [
                { icon: 'mdi-contacts', text: 'Contacts' },
                { icon: 'mdi-history', text: 'Frequently contacted' },
                { icon: 'mdi-content-copy', text: 'Duplicates' },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: true,
                    children: [
                        { icon: 'mdi-plus', text: 'Create label' },
                    ],
                },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'More',
                    model: false,
                    children: [
                        { text: 'Import' },
                        { text: 'Export' },
                        { text: 'Print' },
                        { text: 'Undo changes' },
                        { text: 'Other contacts' },
                    ],
                },
                { icon: 'mdi-settings', text: 'Settings' },
                { icon: 'mdi-message', text: 'Send feedback' },
                { icon: 'mdi-help-circle', text: 'Help' },
                { icon: 'mdi-cellphone-link', text: 'App downloads' },
                { icon: 'mdi-keyboard', text: 'Go to the old version' },
            ],
        }),
    }
</script>

<style scoped>

</style>