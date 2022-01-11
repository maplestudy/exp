<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" clipped app>
            <v-list dense>
                <template v-for="(item, i) in items">
                    <v-row v-if="item.heading" :key="i" align="center">
                        <v-col cols="12">
                            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                        </v-col>
                    </v-row>
                    <v-divider v-else-if="item.divider" :key="i" dark class="my-1" />
                    <v-list-item v-else :key="i" :to="{path:item.path}">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>메이플스토리</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2022</span>
        </v-footer>
    </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import{ mapActions } from 'vuex'
export default {
    name: "App",
    // components: {
    //   HelloWorld,
    // },
    mounted(){
      this.init();
  },
    props: {
        source: String
    },
    data: () => ({
        drawer: null,
        items: [
          { icon: "calculate", text: "비약 경험치 계산기", path: "/" },
            { divider: true },
            // { icon: "info", text: "About", path: "about" },
            // { divider: true },
            // { heading: '추후에 추가 예정 기능' },
            // { icon: "event_available", text: "Event", path: "event" },
        ]
    }),
      methods:{
    ...mapActions({
        init: 'dbInit'
    })
  }
};
</script>
