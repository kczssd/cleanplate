<template>
    <div class="loginpage">
        <header>
            <img :src="HeaderSrc" id="title" />
        </header>
        <main>
            <div class="main-nav">
                <div class="txt-login" @click="islogin = true">登录</div>
                <div class="txt-register" @click="islogin = false">注册</div>
                <div class="slider" :class="!islogin ? 'active' : null"></div>
            </div>
            <div class="login" v-show="islogin">
                <label>
                    <img :src="AccountSrc" class="accimg" />
                    <input type="number" id="accountLog" placeholder="账号" />
                </label>
                <label>
                    <img :src="PasswordSrc" class="pasimg" />
                    <input type="password" id="passwordLog" placeholder="请输入密码" />
                </label>
                <div class="confirm">确定</div>
            </div>
            <div class="register" v-show="!islogin">
                <label>
                    <img :src="AccountSrc" class="accimg" />
                    <input type="number" id="accountReg" placeholder="账号" />
                </label>
                <label>
                    <img :src="PasswordSrc" class="pasimg" />
                    <input type="password" id="passwordReg" placeholder="请输入密码" />
                </label>
                <label>
                    <img :src="PasswordSrc" class="pasimg" />
                    <input type="password" id="passwordConfirm" placeholder="确认密码" />
                </label>
                <div class="confirm">确定</div>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                islogin: true,
                HeaderSrc: require('@/assets/img/header.png'),
                AccountSrc: require('@/assets/img/account.png'),
                PasswordSrc: require('@/assets/img/password.png'),
            };
        },
        mounted: function () {
            axios.get('/user').then((res) => console.log(res));
        },
    };
</script>

<style lang="scss" scoped>
$screen-width: 750px;
#title {
    width: $screen-width;
}
main {
    width: 750px;
    .main-nav {
        width: $screen-width;
        height: 83px;
        .txt-register,
        .txt-login {
            display: inline-block;
            width: $screen-width/2;
            height: inherit;
            line-height: 83px;
            text-align: center;
            font-size: 38px;
            font-weight: 600;
            color: #edb163;
        }
        .slider {
            width: $screen-width/2;
            height: 10px;
            background: #e2b26e;
            transform: translate(0, -5px);
            transition: all 0.5s ease-in-out;
        }
        .active {
            transform: translate(375px, -5px);
        }
        border-bottom: 5px solid #edb163;
    }
    .login {
        width: 610px;
        min-height: 350px;
        margin: 30px auto;
        label {
            display: block;
            border-bottom: 2px solid #e2b26e;
        }
        .accimg {
            width: 37px;
            height: 37px;
            position: absolute;
            margin-top: 25px;
        }
        #accountLog,
        #passwordLog {
            width: 510px;
            height: 92px;
            outline: none;
            padding: 0 50px 0 50px;
            border: none;
        }
        .pasimg {
            position: absolute;
            width: 37px;
            height: 37px;
            margin-top: 25px;
        }
        .confirm {
            width: 402px;
            height: 86px;
            color: #fff;
            line-height: 86px;
            text-align: center;
            background-color: #e2b26e;
            border-radius: 43px;
            margin: 82px auto;
        }
    }
    .register {
        width: 610px;
        min-height: 350px;
        margin: 30px auto;
        label {
            display: block;
            border-bottom: 2px solid #e2b26e;
        }
        .accimg {
            width: 37px;
            height: 37px;
            position: absolute;
            margin-top: 25px;
        }
        #accountReg,
        #passwordReg,
        #passwordConfirm {
            width: 510px;
            height: 92px;
            outline: none;
            padding: 0 50px 0 50px;
            border: none;
        }
        .pasimg {
            position: absolute;
            width: 37px;
            height: 37px;
            margin-top: 25px;
        }
        .confirm {
            width: 402px;
            height: 86px;
            color: #fff;
            line-height: 86px;
            text-align: center;
            background-color: #e2b26e;
            border-radius: 43px;
            margin: 82px auto;
        }
    }
}
</style>