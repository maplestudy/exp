<template>
    <v-container>

        <v-card>
            <v-toolbar flat color="blue-grey" dark>
                <v-avatar>
                    <v-icon>mdi-help-circle-outline</v-icon>
                </v-avatar>
                <v-toolbar-title>사용법</v-toolbar-title>
            </v-toolbar>
            <ul class="ml-9 py-2">
                <!-- <li>시리즈/이름으로 캐릭터를 검색</li>
                <li>캐릭터를 선택하고 정보 열람</li> -->
            </ul>
        </v-card>
        <v-card>
            <v-toolbar flat color="blue-grey" dark>
                <v-avatar>
                    <v-icon>mdi-comment-question-outline</v-icon>
                </v-avatar>
                <v-toolbar-title>비고</v-toolbar-title>
            </v-toolbar>
            <ul class="ml-9 py-2">
                <!-- <li>수동으로 작업을 하고 있기 때문에 업데이트까지 지연이 있을 수 있습니다.</li>
                <li>문제/의견이 있으시면 개발자(sjins0127@gmail.com)에게 연락주시기 바랍니다.</li> -->
            </ul>
        </v-card>
        <v-card>
            <v-toolbar flat color="blue-grey" dark>
                <v-avatar>
                    <v-icon>mdi-chat-alert-outline</v-icon>
                </v-avatar>
                <v-toolbar-title>업데이트 내역</v-toolbar-title>
            </v-toolbar>
            <ul class="ml-9 py-2">
                <!-- <li>2020-06-20 </li> -->
            </ul>
        </v-card>
    </v-container>
</template>
<script>
export default {
    data: () => ({})
};
</script>