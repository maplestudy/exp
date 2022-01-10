<template>

    <v-container>
        <v-row>
            <v-col cols="2">
                <v-text-field
                    v-model="character.level"
                    label="레벨"
                    required="required"
                    :rules="rules.level"
                    outline="outline"></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field
                    v-model="character.percentage"
                    label="퍼센트"
                    required="required"
                    outline="outline"
                    :rules="rules.percen"
                    suffix="%"></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2" v-if="exp.length!=0">
                <v-btn
                    color="primary"
                    class="mb-3"
                    block="block"
                    large="large"
                    @click="calculate()">계산</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <v-text-field
                    v-model="c_level"
                    label="레벨"
                    readonly
                    outline="outline"></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field
                    v-model="c_per"
                    label="퍼센트"
                    readonly
                    outline="outline"
                    suffix="%"></v-text-field>
            </v-col>
        </v-row>

        <v-divider class="mb-6"></v-divider>
        <v-row>
            <template v-for="(item, i) in items">
                <v-card-text :key="i" align="center">
                    <v-slider
                        v-model="item.value"
                        :label="item.label"
                        step="1"
                        ticks="always"
                        tick-size="4"
                        thumb-label="always"
                        :min="0"
                        :max="10"></v-slider>
                </v-card-text>
            </template>
        </v-row>


        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title center>
                <v-icon x-large>error</v-icon>
                입력 값 재확인 필요
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                color="primary"
                @click="dialog = false"
              >
                닫기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
    import {mapState} from "vuex";
    // import {mapState, mapActions} from "vuex";
    export default {
        data: () => ({
            // rules:  [v => v >= 200&&v<300 || '200부터 사용가능'],
            rules:{
                level:[v => v >= 200&&v<300 || '200부터 사용가능'],
                percen:[v => v >= 0 && v<=100 && v!=null || '0~100만 입력']
            } ,
            items: [
                {
                    id: 1,
                    label: "비약1 ~209",
                    value: 0
                }, {
                    id: 2,
                    label: "비약2 ~219",
                    value: 0
                }, {
                    id: 3,
                    label: "비약3 ~229",
                    value: 0
                }, {
                    id: 4,
                    label: "태성비 ~239",
                    value: 0
                }, {
                    id: 5,
                    label: "극성비 ~249",
                    value: 0
                }
            ],
            character: {
                level: null,
                percentage: null,
                cal_level: null,
                cal_percentage: null
            },
            dialog:false
        }),
        mounted() {
            // this.data();
            // this.calculate();
        },
        computed: {
            // ...mapState({characters: "characters", series: "series"})
            ...mapState({exp: "exp"}),
            c_per(){
                if(this.character.cal_percentage===null){
                    return null;
                }else{
                    return (this.character.cal_percentage*100).toFixed(2);
                }
            },
            c_level(){
                if(this.character.cal_level){
                    return this.character.cal_level;
                }else{
                    return null;
                }
            }
        },
        watch: {
            // menu_select(val) {     this.menu_select = val;     this.select = ""; }
        },
        methods: {
            calculate() {

                // 레벨과 퍼센트를 가져와서 현재 경험치 수치를 계산 아래부터 계산함 비약1,2,3,태성비,극성비 렙250이상일때 먹는거 상관 ㄴㄴ 극성비
                // 249렙 이하일땐 무조건 +1업 const tmp =0;
                if(this.character.level===null || this.character.percentage===null){
                    this.dialog = !this.dialog;
                    return;
                }
                var c_level = parseInt(this.character.level);
                var c_per = parseFloat(this.character.percentage)/100;
                if(c_level<200 || c_per >1){
                    this.dialog = !this.dialog;
                    return;
                }
                var cur_exp = 0;
                var tmp = 0;
                for(let j=0;j<this.items.length;j++){
                    var tmp_level = 200+ 10*(j+1);
                    for (let i = 0; i < this.items[j].value; i++) {
                        cur_exp = this.exp[c_level].exp * c_per; //현재 경험치
                        if(c_level<tmp_level){ //무조건 1업
                            c_level =c_level+1; //레벨업함
                            c_per = cur_exp/ this.exp[c_level].exp; //그걸로 퍼센트 계산
                        }else{ //경험치 209 고정
                                tmp = cur_exp+this.exp[tmp_level-1].exp;// 현재경험치 + 레벨경험치
                            // 그게 현재 레벨 경험치보다 초과면 레벨+1
                                if(tmp>this.exp[c_level].exp){
                                    cur_exp = tmp- this.exp[c_level].exp;
                                    c_level =c_level+1; //레벨업함
                                    c_per = cur_exp / this.exp[c_level].exp; //그걸로 퍼센트 계산
                                }else{// 아니면 레벨 유지, 퍼센트만 늘리기
                                    cur_exp = tmp;
                                    c_per = cur_exp / this.exp[c_level].exp;
                                }
                        }
                    }
                }
                this.character.cal_level=c_level;
                this.character.cal_percentage=c_per;


            }
        }
    };
</script>
<style></style>