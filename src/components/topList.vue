<template>
    <div class="toplist">
        <div class="backheader">
            <span id="title">排行榜</span>
        </div>
        <main>
            <ul>
                <li v-for="(item, index) in toplist" :key="index">
                    <div>
                        <img :src="handleImg(index)" class="winner" />
                        <span class="rank">{{ index + 1 }}</span>
                        <span class="name">{{ item.name }}</span>
                    </div>
                    <div class="balence-count">
                        <img :src="GrainImg" />
                        <span class="count">{{ item.rice }}</span>
                    </div>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'toplist',
        data() {
            return {
                GrainImg: require('@/assets/img/grain.png'),
                WinImgs: [require('@/assets/img/first.png'), require('@/assets/img/second.png'), require('@/assets/img/third.png')],
                toplist: null,
            };
        },
        methods: {
            handleImg(index) {
                switch (true) {
                    case index < 5:
                        return this.WinImgs[0];
                    case index < 10:
                        return this.WinImgs[1];
                    default:
                        return this.WinImgs[2];
                }
            },
        },
        mounted: function () {
            axios.get('/host/toplist').then((res) => {
                if (res.data.status == 10000) {
                    this.toplist = res.data.properties;
                }
            });
        },
    };
</script>

<style scoped lang="scss">
$screen-width: 750px;
.toplist {
    height: 100vh;
    background-color: #f6f6f6;
}
.backheader {
    width: $screen-width;
    height: 346px;
    background-color: #e2b26e;
    #title {
        color: #fff;
        font-size: 46px;
        position: absolute;
        top: 60px;
        left: 310px;
    }
}
main {
    width: 710px;
    min-height: 40px;
    max-height: 1050px;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    left: 20px;
    top: 130px;
    box-shadow: 0 2px 12px #fff;
    z-index: 999;
    overflow-y: auto;
    ul {
        list-style: none;
        padding: 0;
        li {
            width: 670px;
            height: 144px;
            margin: 0 auto;
            border-bottom: 4px solid #f0f0f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .winner {
                width: 40px;
                height: 32px;
                display: block;
                margin-left: 38px;
            }
            .rank {
                font-size: 48px;
                font-weight: bold;
                margin-left: 38px;
                font-style: italic;
            }
            .name {
                margin-left: 52px;
                font-size: 42px;
                font-weight: bold;
                font-style: italic;
            }
            .balence-count {
                align-self: flex-end;
                margin-bottom: 35px;
                margin-right: 38px;
                img {
                    width: 22px;
                    height: 28px;
                    margin-right: 6px;
                }
                .count {
                    font-weight: bold;
                    font-style: italic;
                }
            }
        }
    }
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>