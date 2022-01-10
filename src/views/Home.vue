<template>
    <div class="home">
        <!-- <Main msg="Welcome to Your Vue.js App"/> -->
        <Main></Main>
        <!-- <CharacterInfo v-if='character.length!=0'></CharacterInfo> -->
    </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
// import { mapState } from "vuex";
export default {
    name: "Home",
    components: {
        Main
    },
    computed: {
    },
};
</script>
