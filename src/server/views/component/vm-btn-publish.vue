<template>
    <a class="vm-btn vm-btn-publish flex-box flex-center" v-html="alias">
    </a>
</template>
<script>
    export default {
        props:{
            alias:{
                default(){
                    return '发布'
                }
            },
            status:{
                default(){
                    return ''
                }
            }
        },
        data(){
            return {
//                status:'',
//                is_locked:false,
//                is_hover:false,
            }
        },
        mounted(){
        },
        computed:{
//            text:function(){
//                let $btn = $(this.$el);
//                $btn.removeClass('success disable')
//                if(this.status == 'submitting'){
//                    $btn.addClass('disable');
//                    return '<img src="/img/cl_loading.png">'
//                }
//                if(this.status == 'success'){
//                    $btn.addClass('success');
//                    return '<i class="fa fa-check"></i>'
//                }
//                if(this.alias){
//                    return this.alias;
//                }
//                return '发布'
//            },
        },
        methods:{
        }
    }
</script>
<style lang="scss">
    @import "../../public/scss/var.scss";
    .vm-btn-publish{
        width: 100%;
        height: auto;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 14px;
        border-radius: 1px;
        box-sizing: border-box;
        padding: 10px;
    }
</style>
