<template>
    <div class="m">
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view :key="key"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        mounted() {

        },
        computed: {
            cachedViews() {},
            key() {
                return this.$route.fullPath
            }
        }
    }

</script>

<style lang="scss" scoped>
    .m {padding: 10px;}
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
    .loading-enter-active, .loading-leave-active {
        transition: opacity 1s
    }
    .loading-enter, .loading-leave-active {
        opacity: 0
    }
</style>
