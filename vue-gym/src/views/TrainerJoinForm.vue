<template>
    <div>
        <h1>회원가입(트레이너)</h1>

        <div>
            <form action="" method="">
                <!--아이디-->
                <div>
                    <label class="" for="trainer-id">ID:</label>
                    <input type="text" id="trainer-id" name="id" value="" placeholder="아이디를 입력하세요">
                </div>
                <br>
                <!--비번-->
                <div>
                    <label class="" for="trainer-pass">PassWord:</label>
                    <input type="text" id="trainer-pass" name="password" value="" placeholder="비밀번호를 입력하세요">
                </div>
                <br>
                <!--이름-->
                <div>
                    <label class="" for="trainer-name">Name:</label>
                    <input type="text" id="trainer-name" name="name" value="" placeholder="이름을 입력하세요">
                </div>
                <br>
                <!--나이-->
                <div>
                    <label class="" for="trainer-age">Age:</label>
                    <input type="text" id="trainer-age" name="age" value="" placeholder="나이를 입력하세요">
                </div>
                <br>
                <!--주소-->
                <div>
                    <label class="" for="trainer-add">Address:</label>
                    <input type="text" id="trainer-add" name="address" value="" placeholder="주소를 입력하세요">
                </div>
                <br>
                <!--핸드폰번호-->
                <div>
                    <label class="" for="trainer-hp">hp:</label>
                    <input type="text" id="trainer-hp" name="hp" value="" placeholder="핸드폰번호를 입력하세요">
                </div>
                <br>
                <!-- //나이 -->
                <div>
                    <span class="">성별</span><br>

                    <label for="trainer-male">남</label>
                    <input type="radio" id="trainer-male" name="gender" value="male">

                    <label for="trainer-female">여</label>
                    <input type="radio" id="trainer-female" name="gender" value="female">
                </div>
                <br>
                <!-- 약관동의 -->
                <div>
                    <span class="">약관동의</span><br>

                    <input type="checkbox" id="chk-agree" name="">
                    <label for="chk-agree">서비스 약관에 동의합니다.</label>
                </div>

                <!-- 버튼영역 -->
                <div class="button-area">
                    <button type="submit" id="btn-submit">회원가입</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "TrainerJoinForm",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created() { }
};

</script>

<style></style>