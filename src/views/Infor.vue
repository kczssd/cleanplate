<template>
    <div class="infor">
        <TopList v-if="indexImg" />
        <MyInfor v-else />
        <footer>
            <div class="toplist" @click="indexImg = 1">
                <img :src="ToplistSrcs[indexImg]" />
                <span :style="!indexImg ? 'color:#909090' : 'color:#e2b26e'">排行榜</span>
            </div>
            <div class="myinfor" @click="indexImg = 0">
                <img :src="MySrcs[indexImg]" />
                <span :style="indexImg ? 'color:#909090' : 'color:#e2b26e'">我的</span>
            </div>
        </footer>
    </div>
</template>

<script>
    import MyInfor from '@/components/myInfor.vue';
    import TopList from '@/components/topList.vue';
    export default {
        name: 'infor',
        components: {
            MyInfor,
            TopList,
        },
        data() {
            return {
                indexImg: 0,
                ToplistSrcs: [require('@/assets/img/toplist.png'), require('@/assets/img/toplist-active.png')],
                MySrcs: [require('@/assets/img/my-active.png'), require('@/assets/img/my.png')],
            };
        },
    };
</script>

<style lang="scss" scoped>
$screen-width: 750px;
footer {
    width: $screen-width;
    height: 154px;
    background-color: #fff;
    box-shadow: 0 -2px 12px #f6f6f6;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
    .toplist,
    .myinfor {
        width: 262px;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 40px;
        height: 44px;
    }
    span {
        font-size: 26px;
        margin-top: 14px;
    }
}
</style>
