<template>
    <div class="vmpage-video-detail">
        <vm-nav></vm-nav>

    </div>
</template>

<script>

import vmNav from '../vm-nav.vue'
import vmBtnPublish from '../vm-btn-publish.vue'
export default {
    data () {
        return {
        }
    },
    watch: {

    },
    components:{
        vmNav,
        vmBtnPublish,
    },
    mounted(){
    }
}
</script>

<style lang="scss">
    @import "../../../public/scss/var.scss";
    .vmpage-video-detail{

    }
</style>
