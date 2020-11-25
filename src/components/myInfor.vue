<template>
    <div class="myinfor">
        <div class="scroll">
            <header>
                <img :src="HeaderImg" class="background" />
                <img :src="HeadImg" class="head" />
                <span id="name">{{ userName }}</span>
            </header>
            <main>
                <div class="balence">
                    <span>我的余额</span>
                    <div>
                        <span class="account">{{ account }}</span>
                        <img :src="RiceImg" class="rice" />
                    </div>
                </div>
                <div class="rank">
                    <span>我的排名</span>
                    <div>
                        <span class="account">{{ rank }}</span>
                    </div>
                </div>
                <div class="last-time">
                    <span>上次收获</span>
                    <div>
                        <span class="account">{{ lastRice }}</span>
                        <img :src="RiceImg" class="rice" />
                    </div>
                </div>
                <span class="prompt" @click="handlePrompt"> 遇到问题？ </span>
                <div class="prompt-message" v-if="showPrompt">
                    <li>排行榜展示前20位</li>
                    <li>一个时间段只能上传一次光盘图片，时间段是:10:00-14:00和16:00-20:00</li>
                    <li>图片一般于当天晚上统一审核，如遇到问题(如上传失败)请联系杨海峰QQ:29103302</li>
                    <li>如发现上传无关图片或者有任何作弊情况，会进行封号处理</li>
                </div>
            </main>
            <footer>
                <a-upload action="/host/upload" accept="image/*" capture="camera" list-type="picture" class="upload-list-inline" @change="handleChange" :disabled="limit == 0">
                    <a-button :style="ButtonStyle"> <a-icon type="upload" /> {{ uploadState }} </a-button>
                </a-upload>
            </footer>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'myinfor',
        data() {
            return {
                HeaderImg: require('@/assets/img/infor-header.png'),
                HeadImg: require('@/assets/img/head.png'),
                RiceImg: require('@/assets/img/rise.png'),
                CameraImg: require('@/assets/img/camera.png'),
                userName: '',
                account: 0,
                lastRice: 0,
                rank: 999,
                limit: 0,
                showPrompt: false,
                uploadState: '上传图片',
                ButtonStyle: `
                                    width:53.3vw;
                                    height: 6.75vh;
                                    background-color: #e2b26e;
                                    outline: none;
                                    border-radius: 45px;
                                    border: 0;
                                    padding: 0;
                                    font-size: 3.73vw;
                                    `,
            };
        },
        methods: {
            async handleUpload(event) {
                let file = event.target.files[0];
                console.log(file);
                let formData = new FormData();
                formData.append('fileUpload', file);
                formData.append('num', file.type);
                formData.append('rfilename', file.name);
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                };
                axios.post('/host/upload', formData, config).then((res) => {
                    console.log(res);
                });
            },
            handleChange(infor) {
                console.log(infor.file.response);
                if (infor.file.status == 'uploading') {
                    this.uploadState = '上传中';
                } else if (infor.file.status == 'done' && infor.file.response?.status == 10000) {
                    this.uploadState = '上传完成';
                } else {
                    this.uploadState = '上传失败';
                }
            },
            handlePrompt() {
                if (!this.showPrompt) {
                    this.showPrompt = true;
                    setTimeout(function () {
                        console.log(this.showPrompt);
                        this.showPrompt = false;
                    }.bind(this), 3500);
                }
            },
        },
        mounted: function () {
            axios.get('/host/myinfor').then((res) => {
                if (res.data.status == 10000) {
                    this.userName = res.data.property.name;
                    this.account = res.data.property.rice;
                    this.rank = res.data.property.myRank;
                    this.lastRice = res.data.property.lastRice;
                    this.limit = res.data.property.onceLimit;
                    if (this.limit == 0) {
                        this.uploadState = '次数受限或未到时段';
                    }
                }
            });
        },
        updated: function () {
            let input = document.querySelector('input');
            input.setAttribute('capture', 'camera');
            console.log(input);
        },
    };
</script>

<style lang="scss" scoped>
$screen-width: 750px;
.myinfor {
    min-height: 100vh;
    background-color: #f6f6f6;
    .scroll {
        max-height: 88vh;
        overflow-y: auto;
    }
}
header {
    height: 450px;
    position: relative;
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
    margin-top: 26px;
    .rank {
        margin-top: 26px;
        .account {
            margin-right: 187px !important;
        }
    }
    .last-time {
        margin-top: 26px;
    }
    .balence,
    .rank,
    .last-time {
        width: $screen-width;
        height: 128px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 2px 12px #e8e8e8;
        background-color: #fff;
        & > span {
            font-size: 28px;
        }
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
            vertical-align: unset;
        }
        & > span:nth-child(1) {
            margin-left: 56px;
        }
    }
    .prompt {
        margin-top: 10px;
        margin-right: 10px;
        font-size: 30px;
        color: lightgray;
        float: right;
    }
    .prompt-message {
        background-color: #e6e6e6;
        opacity: 0.9;
        border-radius: 30px;
        width: 70vw;
        height: 50vh;
        position: fixed;
        top: 20vh;
        left: 15vw;
        & li {
            font-size: 34px;
            line-height: 68px;
            text-decoration: none;
            list-style: none;
            margin-left: 30px;
        }
    }
}
footer {
    width: 400px;
    margin: 158px auto 0;
    position: relative;
    .upload-list-inline > .ant-upload-list {
        position: absolute;
        width: 400px;
        top: -158px;
    }
    .upload-list-inline >>> .ant-upload-list-item {
        float: left;
        width: 200px;
        margin-right: 8px;
    }
    .upload-list-inline >>> .ant-upload-animate-enter {
        animation-name: uploadAnimateInlineIn;
    }
    .upload-list-inline >>> .ant-upload-animate-leave {
        animation-name: uploadAnimateInlineOut;
    }
}
</style>
