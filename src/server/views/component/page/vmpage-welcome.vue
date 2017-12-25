<template>
    <div class="vmpage-index">
        <vm-nav></vm-nav>
        <template v-if="route_name == 'index'">
            <section class="index-box">
                <div class="flex-box flex-center flex-direction-column mt40">
                    <h1 class="fs48 text-center">It's Kinda Like Netflix for Your Career!</h1>
                    <h2 class="fs18 text-center mt20">Learn practical, modern web development, through expert screencasts. Most video tutorials are boring. These aren't. Ready to binge?</h2>
                </div>
                <div class="flex-box flex-center mt40">
                    <img class="welcome-img" src="/img/welcome-index.jpeg" alt="">
                </div>
            </section>
        </template>
        <template v-if="route_name == 'login' || route_name == 'signup'">
            <section class="sign-box pb40">
                <div class="icon-box">
                    <img :src="'/img/' + route_name + '-icon.png'">
                </div>
                <h1 class="mt40" v-if="route_name == 'login'">Welcome</h1>
                <h1 class="mt40" v-if="route_name == 'signup'">Come on</h1>
                <form>
                    <div class="mt40">
                        <input type="text" class="gl-input" placeholder="邮箱" v-model="email">
                    </div>
                    <div class="mt20">
                        <input type="password" class="gl-input" placeholder="密码" v-model="password">
                    </div>
                </form>
                <div class="mt20">
                    <vm-btn-publish class="white fwb" :alias="route_name" @click.native="submit"></vm-btn-publish>
                </div>
            </section>
        </template>
    </div>
</template>

<script>

import vmNav from '../vm-nav.vue'
import vmBtnPublish from '../vm-btn-publish.vue'
import { api_reg } from '../config/api'
export default {
    data () {
        return {
            route_name: this.$route.name, //index || signup || login
            email:'',
            password:'',
        }
    },
    watch: {
        '$route' (to, from) {
            this.route_name = to.name
        }
    },
    components:{
        vmNav,
        vmBtnPublish,
    },
    mounted(){
    },
    methods:{
        submit(){
            if(this.route_name == 'signup'){
                this.cs_axios(api_reg,{
                    email:this.email,
                    password:this.password,
                }).then(data => {
                    console.log(data)
                })
            }
        }
    }
}
</script>

<style lang="scss">
    @import "../../../public/scss/var.scss";
    .vmpage-index{
        .index-box{
            h1{
                color:$color-text;
                width: 85%;
            }
            h2{
                color:$color-text-2;
                width: 85%;
                max-width: 700px;
            }
            .welcome-img{
                width: 85%;
                max-width: 960px;
            }
        }
        .sign-box{
            box-shadow: 0 10px 35px rgba(50,50,93,.08), 0 5px 15px rgba(0,0,0,.02);
            box-sizing: border-box;
            width: 400px;
            text-align: center;
            padding: 25px;
            position: fixed;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            h1{
                color:$color-text-3;
            }
        }
        .icon-box{
            width: 100px;
            height: 100px;
            margin: 0 auto;
            border-radius: 1000px;
            box-sizing: border-box;
            border:1px solid $color-border;
        }
        .vm-btn-publish{
            padding: 14px 20px;
            background-color: $color-main;
        }
    }
</style>
