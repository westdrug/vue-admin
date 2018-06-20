<template>
    <div class="main">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import './styles/common.scss';
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    body {
        min-width: 769px;
    }
    .main,#app,body,html {height: 100%}
    .gb-abs-main__wrap {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .gb-abs-main__bx {
        background-color: #fff;
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
