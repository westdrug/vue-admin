<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>
            <router-link :to="{name: 'addTabList'}">
                <Button type="success">添加数据</Button>
            </router-link>
        </h2>
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { Button } from 'iview'
    export default {
    	data(){
            return{
                msg: 'this is page list'
            }
        },
        components: {
            Button
        }
    }

</script>

<style lang="scss" scoped>

</style>
