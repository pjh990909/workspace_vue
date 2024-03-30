<template>
    <div>
        <table border="1">
            <tr>
                <td><img id="trainerlist-img" src="@/assets/image/image.png"></td>
                <td>
                    <label class="">이름:</label><span class="">동석이형</span><br>
                    <label class="">나이:</label><span class="">30</span><br>
                    <label class="">핸드폰번호:</label><span class="">010-2222-2222</span><br><br>
                    <label class="">소개글:</label><br><span class="">pt경력은 n년차이고 친절하고 잘 알려드리겠습니다!</span>
                </td>
                <td><button v-on:click="removePhone(phonebookVo.personId)" type="button">PT쌤 등록하기!</button></td>
            </tr>
            <br>
            <br>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "TrainerIntroductionView",
    components: {},
    data() {
        return {
            trainerList:[],
            trainerVo:{
                name:"",
                age:"",
                hp:"",
                content:"",
                saveName:""
            }
        };
    },
    methods: {
        getList() {
            console.log("데이터 가져오기")

            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9000/api/guests',
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
    },
    created() { }
};

</script>

<style>
    #trainerlist-img{
        width: 250px;
        height: 200px;
    }
</style>