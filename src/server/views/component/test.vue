<template>
    <div class="vm-test">
        <h1>{{ msg }}{{time}}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App123',
                time:0,
            }
        },
        mounted(){
//            var sleep = function (time) {
//                return new Promise(function (resolve, reject) {
//                    setTimeout(function () {
//                        resolve();
//                    }, time);
//                })
//            };
//            var _this = this;
//            var start = async function () {
//                // 在这里使用起来就像同步代码那样直观
//                console.log('start');
//                _this.time = '1'
//                await sleep(3000);
//                console.log('end');
//                _this.time = '2'
//            };
//            start()

        }
    }
</script>

<style lang="scss">

    @import "../../public/scss/var.scss";
    .vm-test{
        h1{
            color: $color-white;
            font-size: 20px;
        }
    }
</style>
