<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <p>{{ counter }}</p>
    <button v-on:click="minus" type="button">빼기(-)</button>
    <button v-on:click="plus" type="button">더하기(+)</button>

    <br>
    <br>

    <p>{{ message }}</p>
    <button v-on:click="setMessage" type="button">메세지출력</button>

</template>

<script>

export default {
    name: "Ex03View",
    components: {},
    data() {
        return {
            title:"Vue공부",
            subTitle:"클릭이벤트+메소드",
            counter: 0,
            message: ""
        };
    },
    methods: {

        plus(){
            console.log("플러스 클릭");
            this.counter = this.counter + 1;
        },
        minus(){
            console.log("마이너스 클릭");
            this.counter = this.counter - 1;
        },
        setMessage(){
            console.log("메세지출력 클릭");
            this.message = "집가고 싶다 쉬고 싶다!!"
        }

    },
};
</script>

<style></style>