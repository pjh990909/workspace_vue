<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <!--form 전송 이벤트-->
    <form v-on:submit.prevent="getPersonVo" action="" method="get">
        <label for="uName">이름</label>
        <input id="uName" type="text" name="name" v-model="PersonVo.name">
        <br>
        <label>전화번호</label>
        <input type="text" name="hp" v-model="PersonVo.hp">
        <br>
        <textarea name="content" v-model="PersonVo.content"></textarea>
        <br><br>
        <button v-on:click="setPersonVo" type="button">값쓰기</button>
        <button type="submit">값 수정</button>
    </form>
</template>

<script>

export default {
    name: "Ex05View",
    components: {},
    data() {
        return {
            title:"Vue공부",
            subTitle:"폼-text,textarea,password: (양방향바인딩)--> 폼에는 v-model 그냥 쓰자",
            PersonVo:{
                name:"",
                hp:"",
                content:""
            }
        };
    },
    methods: {
        setPersonVo(){
            console.log("값쓰기 클릭");

            let pVo = {
                name:"정우성",
                hp: "010-8294-7273",
                content:"집 보내줘"

            }
            this.PersonVo = pVo;
            /*
            this.name ="정우성";
            this.hp = "010-8294-7273";
            this.content = "집 보내줘";
            */
        },
        getPersonVo(){
            console.log("데이터수집 클릭");
            console.log("서버로 전송........");

            console.log(this.PersonVo);

            /*
            console.log(this.name);
            console.log(this.hp);
            console.log(this.content);
            */
        }
    },
};
</script>

<style></style>