<template>
    <div>
        <head>
<meta charset="UTF-8">
<title>전화번호부</title>
</head>
<body>

	<h1>전화번호부</h1>

	<h2>등록폼</h2>

	<p>
		전화번호를 등록하려면<br> 아래 항목을 기입하고 "등록" 버튼을 클릭하세요
	</p>

	<form v-on:submit.prevent="writePhone" action="" method="">
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

		<button type="submit">등록</button>
	</form>

	<br>
	<br>
    <router-link v-bind:to="`/`">리스트 이동</router-link>

</body>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "WriteFormView",
    components: {},
    data() {
        return {
            phonebookList: [],
            phonebookVo: {
				personId: "",
				name: "",
				hp: "",
				company: ""
			}
        };
    },
    methods: {
        writePhone(){
            console.log("저장");
            
            axios({
                method: 'post', // put, post, delete                   
                url: `${this.$store.state.apiBaseUrl}/api/phonebooks`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.phonebookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.phonebookList.unshift(response.data);
                this.$router.push({path:'/'});
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){}
};
    
</script>

<style></style>