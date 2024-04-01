<template>
    <div id="trainerList-All">
        <div id="trainers-logo">TRAINERS</div>

        <div id="trainer-logo2">마음에 드는 강사님을 선택해보세요!</div>


        <div id="trainerList" v-bind:key="i" v-for="(trainerVo, i) in trainerList">
            <li>
                <img id="trainerlist-img" v-bind:src="`http://localhost:9000/upload/${trainerVo.saveName}`">
                <br>
                <label id="trainername-introduction" class="trainer-introduction-information">{{ trainerVo.name }} 강사님</label>
                <br>
                <label class="trainer-introduction-information">경력:</label>
                <span class="trainer-introduction-information">{{ trainerVo.content }}</span>
                <br>
                <select id="choice-pt" name="pt" v-model="memberVo.pt"> <!--기본값을 지정한값으로 한다(v-model로 바뀐값을 보낼수도 있다)-->
                    <option class="choicelist" value="">PT횟수</option>
                    <option class="choicelist" value="10">10</option>
                    <option class="choicelist" value="20">20</option>
                    <option class="choicelist" value="30">30</option>
                </select>
                <input type="hidden" value="" v-model="trainerVo.no">
                <br>
                <button v-on:click="ptup" type="button">등록</button>
            </li>


        </div>
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/trainerintroduction.css"

export default {
    name: "TrainerIntroductionView",
    components: {},
    data() {
        return {
            trainerList: [],
            trainerVo: {
                no: this.$route.params.no,
                name: "",
                content: "",
                saveName: ""
            },
            memberVo: {
                ptno: "",
                pt: ""
            }

        };
    },
    methods: {
        getList() {
            console.log("데이터 가져오기")

            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9000/api/trainer/trainerintroduction',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.trainerList = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });

        },
        ptup() {
            console.log(this.pt)

            axios({
                method: 'put', // put, post, delete                   
                url: 'http://localhost:9000/api/users/modify',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                },//전송타입+토큰
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.memberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData);

                if (response.data.result == "success") {

                    this.$router.push({ path: '/gym/memberloginsussecc' });
                } else {
                    alert("횟수를 선택해주세요");
                }

                /*
                

                if(setAutName != "fail"){
                    
                }else{
                    alert("로그인하세요");
                    this.$store.commit("setAuthUser", null);
                    this.$store.commit("setToken", null);

                    //this.$router.push({path:'/user/loginform'});
                }
                */


            }).catch(error => {
                console.log(error);
            });

        }
    },
    created() {
        this.getList();
    }
};

</script>

<style></style>