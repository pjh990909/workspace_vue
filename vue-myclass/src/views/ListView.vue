<template>
    <div>
        <table>
            <colgroup>
                <col style="width: 40px;">
                <col style="width: 70px;">
                <col style="width: 150px;">
                <col style="width: 160px;">
                <col style="width: 40px;">
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>핸드폰</th>
                    <th>회사</th>
                    <th>성별</th>
                </tr>
            </thead>

            <tbody v-bind:key="i" v-for="(phonebookVo, i) in phonebookList">
                <tr>
                    <td>{{ phonebookVo.no }}</td>
                    <td>{{ phonebookVo.name }}</td>
                    <td>{{ phonebookVo.hp }}</td>
                    <td>{{ phonebookVo.company }}</td>
                    <td>{{ phonebookVo.gender }}</td>
                </tr>
            </tbody>

        </table>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ListView",
    components: {},
    data() {
        return {
            phonebookList:[],
            phonebookVo:{
                no:"",
                name:"",
                hp:"",
                company:"",
                gender:""
            }
        };
    },
    methods: {
        List() {
			console.log("데이터 가져오기")

			axios({
				method: 'get', // put, post, delete                   
				url: 'https://raw.githubusercontent.com/clz2024-red/api/main/person.json',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: , //get방식 파라미터로 값이 전달
				//data: , //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data); //수신데이타
				this.phonebookList = response.data;
			}).catch(error => {
				console.log(error);
			});

		},
    },
    created() {
        this.List();
     }
};

</script>

<style>
    table{
        border: 1px solid #000000;
        border-collapse: collapse;
    }
    thead {
        background-color: #d6d6d6;
    }
    tr>th,td{
        border: 1px solid #000000;
    }
    td{
        text-align: center;
    }

</style>