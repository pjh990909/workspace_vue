<template>
    <div>
        <h1>로그인성공!(트레이너)</h1>

        <img id="trainer-img" src="@/assets/image/image.png">

        <!--이름-->
        <div>
            <label class="">이름:</label>
            <span class="">마동석</span>
        </div>
        <!--나이-->
        <div>
            <label class="">나이:</label>
            <span class="">20</span>
        </div>
        <!--핸드폰번호-->
        <div>
            <label class="">핸드폰번호:</label>
            <span class="">010-1111-1111</span>
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

export default {
    name: "TrainerLoginSuccess",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created() { }
};

</script>

<style>
    #trainer-img {float: left; width:300px; }
    ul	{list-style-type: none; }
</style>