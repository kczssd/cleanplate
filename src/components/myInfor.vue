<template>
    <div class="myinfor">
        <header>
            <img :src="HeaderImg" class="background" />
            <img :src="HeadImg" class="head" />
            <span id="name">郑志宇</span>
        </header>
        <main>
            <div class="balence">
                <span>我的余额</span>
                <div>
                    <span class="account">999</span>
                    <img :src="RiceImg" class="rice" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'myinfor',
        data() {
            return {
                HeaderImg: require('@/assets/img/infor-header.png'),
                HeadImg: require('@/assets/img/head.png'),
                RiceImg: require('@/assets/img/rise.png'),
            };
        },
    };
</script>

<style scoped lang="scss">
$screen-width: 750px;
.myinfor {
    height: 100vh;
    background-color: #f6f6f6;
}
header {
    height: 450px;
    .background {
        width: $screen-width;
        height: 450px;
    }
    .head {
        width: 175px;
        height: 175px;
        position: absolute;
        top: 100px;
        left: 288px;
    }
    #name {
        display: block;
        margin-top: -80px;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: #6a6a6a;
    }
}
main {
    width: $screen-width;
    height: 128px;
    background-color: #fff;
    margin-top: 26px;
    .balence {
        width: $screen-width;
        height: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 2px 12px #e8e8e8;
        .account {
            font-family: 'playlist script';
            font-size: 62px;
            vertical-align: 12px;
            margin-right: 20px;
        }
        .rice {
            width: 57px;
            height: 52px;
            margin-right: 110px;
        }
        & > span:nth-child(1) {
            margin-left: 56px;
        }
    }
}
</style>
