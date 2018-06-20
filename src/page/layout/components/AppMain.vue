<template>
    <article class="app-main">
        <div class="app-main__wrap">
            <bread-crumb></bread-crumb>
            <global-main></global-main>
            <global-footer></global-footer>
        </div>
    </article>
</template>

<script>
    import breadCrumb from '@/page/layout/components/breadCrumb'
    import globalMain from '@/page/layout/components/globalMain'
    import globalFooter from '@/page/layout/components/globalFooter'
    export default {
    	data(){
            return{

            }
        },
        components: {
            breadCrumb,
            globalMain,
            globalFooter
        }
    }

</script>

<style lang="scss" scoped>
    .app-main {
        position: relative;
        min-height: 100%;
        .app-main__wrap {
            height: calc(100% - 120px);
            padding-bottom: 120px;
        }
    }

</style>
