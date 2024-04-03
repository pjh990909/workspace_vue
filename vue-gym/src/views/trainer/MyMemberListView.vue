<template>
    <div id="MemberListAll">
        <h1 id="MemberListTitle1">MEMBER</h1>
        <h1 id="MemberListTitle2">LIST</h1>

        <div id="postInfoAll">
            <table id="postTable">
                <colgroup>
                    <col style="width: 27%;">
                    <col style="width: 46%;">
                    <col style="width: 27%;">
                </colgroup>
                <thead id="postTableHead">
                    <tr>
                        <th class="postTableHeadData">성함</th>
                        <th class="postTableHeadData">PT 잔여횟수</th>
                        <th class="postTableHeadData">강사</th>
                    </tr>
                </thead>
                <tbody id="postTableBody" v-bind:key="i" v-for="(myMemberVo, i) in ptList">
                    <tr>
                        <td class="postTableBodyData">{{ myMemberVo.membername }}</td>
                        <td class="postTableBodyData">{{ myMemberVo.pt_count }}</td>
                        <td class="postTableBodyData">{{ myMemberVo.trainername }}</td>
                    </tr>
                </tbody>
            </table>
            <input type="text" id="postSearch" placeholder="검색">
            <ol id="memberList">
                <li class="li">이전</li>
                <li id="memberlistpage" v-bind:key="i" v-for="(i) in endNo">
                    <a v-on:click.prevent="list(i + 1)" href="">{{ i + 1 }}</a>
                </li>
                <li>다음</li>
            </ol>

        </div>

        <span class="listfooter1">CodeCrafters</span>
        <span class="listfooter2">copyrights(c) all rights Reserved</span>
    </div>
</template>


<script>
import "@/assets/css/MemberList.css"
import axios from 'axios';

export default {
    name: "MyMemberListView",
    components: {},
    data() {
        return {
            ptList: [],
            myMemberVo: {
                
                crtPage: 1 ,
                keyword:""
            },
            endNo:""
        };
    },
    methods: {
        getMymemberList(crtPage) {
            console.log("데이터 가져오기")
            this.myMemberVo.crtPage = crtPage;
            axios({
                method: 'post', // put, post, delete                   
                url: 'http://localhost:9000/api/pt/mymemberlist',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.myMemberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.ptList = response.data.apiData.ptList;
            }).catch(error => {
                console.log(error);
            });

        },
    },
    created() {
        this.getMymemberList(1);
    }
};
</script>


<style></style>