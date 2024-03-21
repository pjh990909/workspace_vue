<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

    <div class="box" v-bind:class="{'box-red': isRed , 
                                    'box-blue': isBlue ,
                                    'f-bold': isBold,
                                    'f-big': isSize,
                                    'f-ita': isIta}">{{ boxText }}</div>
    <button v-on:click="redBox" type="button">빨간박스</button>
    <button v-on:click="blueBox" type="button">파란박스</button>
    <button v-on:click="boldOnOff" type="button">볼드on/off</button>
    <button v-on:click="fontSizeOnOff" type="button">폰트사이즈on/off</button>
    <button v-on:click="ItaOnOff" type="button">Ita on/off</button>


    <br>
    <br>
    <p style="color:#ff0000 ;">인라인스타일로 태그에 스타일 직접 추가</p>

    <p v-bind:style="type">인라인스타일로 태그에 스타일 직접 추가</p>
    <button v-on:click="changType" type="button">인라인스타일변경</button>

</template>

<script>

export default {
    name: "Ex04View",
    components: {},
    data() {
        return {
            title: "Vue공부",
            subtitle:"class 속성 제어",
            boxText:"vue공부 재미있습니다.",
            isRed: false,
            isBlue: false,
            isBold: false,
            isSize: false,
            isIta: false,
            type:""
        };
    },
    methods: {
        redBox(){
            console.log("레드박스");
            this.isRed = true;
            this.isBlue = false;
        },
        blueBox(){
            console.log("레드박스");
            this.isBlue = true;
            this.isRed = false;
        },
        boldOnOff(){
            console.log("볼드 클릭");
            if(this.isBold == true){
                this.isBold = false;
            }else {
                this.isBold = true;
            }
        },
        fontSizeOnOff(){
            console.log("폰트사이즈 클릭");
            
                this.isSize = !this.isSize;
            
                
            
        },
        ItaOnOff(){
            console.log("Ita 클릭");
            if(this.isIta == true){
                this.isIta = false;
            }else {
                this.isIta = true;
            }
        },
        changType(){
            console.log("인라인 클릭");
            this.type = "color:#ff0000"
        }

    }
};
</script>
<style>
.box{
    width: 140px;
    border: 1px solid #000000;
}
.box-red{
    background-color: #ff0000;
}
.box-blue{
    background-color: #0000ff;
}
.f-bold{
    font-weight: bold;
}
.f-big{
    font-size: 20px;
}
.f-ita{
    font-style: italic;
}
</style>