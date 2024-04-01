<template>
    <div>
        <h1>로그인성공!(트레이너)</h1>


        <img v-if="trainerVo.saveName!=null" id="trainer-img" v-bind:src="`http://localhost:9000/upload/${trainerVo.saveName}`">
        <img id="trainer-img" src="@/assets/image/image.png">
        <!--이름-->
        <div>
            <label class="">이름:</label>
            <span class="">{{ trainerVo.name }}</span>
        </div>
        <!--나이-->
        <div>
            <label class="">나이:</label>
            <span class="">{{ trainerVo.age }}</span>
        </div>
        <!--핸드폰번호-->
        <div>
            <label class="">핸드폰번호:</label>
            <span class="">{{ trainerVo.hp }}</span>
        </div>

        <!--리스트링크-->
        <div>
            <ul>
                <li><router-link class="btn_s" to="">나의 회원리스트</router-link></li>
                <li><router-link class="btn_s" to="">gym회원리스트</router-link></li>
            </ul>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "TrainerLoginSuccess",
    components: {},
    data() {
        return {
            trainerVo: {
                name: "",
                age: "",
                hp: "",
                saveName:""
            }
        };
    },
    methods: {
        getAuthUser() {
            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9000/api/trainer/trainermain',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                },//전송타입+토큰

                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                
                this.trainerVo = response.data.apiData;
                


            }).catch(error => {
                console.log(error);
            });

        },
    },
    created() { 
        this.getAuthUser();
    }
};

</script>

<style>
#trainer-img {
    float: left;
    width: 300px;
}

ul {
    list-style-type: none;
}
</style>