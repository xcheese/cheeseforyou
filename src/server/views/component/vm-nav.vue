<template>
    <div class="vm-nav flex-box flex-justify-content-space-between flex-align-items-center pt10 pb10 pl40 pr40">
        <router-link to="/">
            < cheese.1024 />
        </router-link>
        <div class="flex-box">
            <router-link class="p10" :to="{name:'login'}">登录</router-link>
            <router-link class="p10" :to="{name:'signup'}">注册</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss">
    @import "../../public/scss/var.scss";
    .vm-nav{

    }
</style>
