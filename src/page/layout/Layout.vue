<template>
    <div class="layout w-layout">
        <Header><Head-sider></Head-sider></Header>
        <Layout>
            <Sider><Menu-sider></Menu-sider></Sider>
            <Content>
                <App-main></App-main>
            </Content>
        </Layout>
    </div>
</template>

<script>
    import { Layout, Header, Content, Sider } from 'iview'
    import HeadSider from './components/HeadSider'
    import MenuSider from './components/menuSider'
    import AppMain from './components/AppMain.vue'
    import { mapMutations } from 'vuex'
    import { setStore, getStore } from '@/config/wutils'
    export default {
    	data(){
            return{

            }
        },
        mounted() {
    		if(this.$route.redirectedFrom === '/') {
                setStore('currTopNav', 'globalControl')
                setStore('opAction', [1, "1-1"])
                this.RESET_CURRTOPNAV('globalControl')
            }
        },
        components: {
            Layout, Header, Content, HeadSider, Sider, MenuSider, AppMain
        },
        methods: {
            ...mapMutations([
            	'RESET_CURRTOPNAV'
            ])
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../styles/mixin.scss';
    .w-layout.layout {height: 100%}
    .w-layout .ivu-layout-header {
        @include wh(100%, 72px);
        line-height: inherit;
        padding: 0 22px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: $info;
        background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2945cb', endColorstr='#3a9dff',GradientType=1 ); /* IE6-9 */
    }
    .w-layout .ivu-layout.ivu-layout-has-sider {
        min-height: 100%;
        min-width: 768px;
        padding: 128px 0 0 200px;
        position: relative;
        background-color: $white;
        .ivu-layout-sider {
            @include wh(200px, 100%);
            bottom: 0;
            top: 72px;
            left: 0;
            position: fixed;
            z-index: 20;
            overflow-y: hidden;
            background-color: $white;
            border-right: 1px solid $ce;
            &:hover {
                 overflow-y: auto;
            }
        }
    }
    .w-layout .ivu-layout-content {overflow: hidden}
</style>
