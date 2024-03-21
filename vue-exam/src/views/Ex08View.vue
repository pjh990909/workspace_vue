<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <table border="1">
        <thead>
            <tr>
                <th>순번</th>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="personVo.no" v-for="(personVo , i) in pList">
                <td>{{ i+1 }}</td>
                <td>{{ personVo.no }}</td>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.company }}</td>
            </tr>
        </tbody>
    </table>

    <br>
    <button v-on:click="getList" type="button">데이터불러오기</button>
    
    
    <br>
    <br>
    
    <div v-bind:key="i" v-for="(ages,i) in radioAges">
        <label>{{ ages.text }}</label><input type="radio" name="age" v-bind:value="ages.code" v-model="aPicked">
    </div>
</template>

<script>

export default {
    name: "Ex08View",
    components: {},
    data() {
        return {
            title:"Vue공부",
            subTitle:"반복문",
            pList: [],
            aPicked: "30",
            radioAges: [ {text:"10대" , code: "10"},
                         {text:"20대" , code: "20"},
                         {text:"30대" , code: "30"},
                         {text:"60대" , code: "60"},
                         {text:"기타" , code: "etc"}
            ]
        };
    },
    methods: {
        getList(){
            console.log("데이터 수신중......");

            let personList = [
                {no:1, name:"정우성", hp:"010-11111", company:"02-222222"},
                {no:4, name:"리효리", hp:"010-22222", company:"02-333333"},
                {no:17, name:"유재석", hp:"010-33333", company:"02-444444"}
            ]
            this.pList  = personList;
        }
    },
};
</script>

<style></style>