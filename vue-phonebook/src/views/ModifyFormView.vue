<template>
    <div>

        <head>
            <meta charset="UTF-8">
            <title>전화번호부</title>
        </head>

        <body>

            <h1>전화번호부</h1>

            <h2>수정폼</h2>

            <p>
                전화번호를 수정하려면<br>
                아래 항목을 기입하고 "수정" 버튼을 클릭하세요
            </p>

            <form v-on:submit.prevent="modify" action="" method="">
                <div>
                    <label>이름(name)</label>
                    <input type="text" name="name" v-model="phonebookVo.name">
                </div>

                <div>
                    <label>핸드폰(hp)</label>
                    <input type="text" name="hp" v-model="phonebookVo.hp">
                </div>

                <div>
                    <label>회사(company)</label>
                    <input type="text" name="company" v-model="phonebookVo.company">
                </div>

                <input type="text" name="personId" v-model="phonebookVo.personId"><br>
                <button type="submit">수정</button>

            </form>

            <br><br>
            <a href="">리스트 이동</a>

        </body>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ModifyFormView",
    components: {},
    data() {
        return {
			phonebookVo: {
				personId: this.$route.params.personId,
				name: "",
				hp: "",
				company: ""
			},
        };
    },
    methods: {
        modifyform(){
            axios({
				method: 'get', // put, post, delete                   
				url: `${this.$store.state.apiBaseUrl}/api/phonebooks/`+this.phonebookVo.personId,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: this.phonebookVo.personId, //get방식 파라미터로 값이 전달
				//data: this.phonebookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data); //수신데이타
				this.phonebookVo = response.data;
			}).catch(error => {
				console.log(error);
			});

        },
        modify(){
            axios({
				method: 'put', // put, post, delete                   
				url: `${this.$store.state.apiBaseUrl}/api/phonebooks/`+this.phonebookVo.personId,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params:this.phonebookVo , //get방식 파라미터로 값이 전달
				data: this.phonebookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data); //수신데이타
				this.phonebookVo = response.data;

                this.$router.path({path:'/'});

			}).catch(error => {
				console.log(error);
			});
        }
    },
    created() {
        this.modifyform();
     }
};

</script>

<style></style>