<template>
    <div class="breadcrumb__wrap">
        <div class="breadcrumb-box">
            <section class="bc-left-box">
                aaaaaa
            </section>
            <section class="bc-right-box">
                <DatePicker @on-change="datePickerFn" type="daterange" confirm :options="options" placement="bottom-end" :placeholder="$t('m.bread.timePlaceholder')" style="width: 200px"></DatePicker>
            </section>
        </div>
    </div>
</template>

<script>
    import { Icon, DatePicker } from 'iview'
    export default {
    	data(){
            return{
                options: {
                    shortcuts: [
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近半年',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一年',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                                return [start, end];
                            }
                        }
                    ],
                    disabledDate(date) {
                        return date && date.valueOf() > Date.now() - 86400000
                    }
                }
            }
        },
        components: {
            DatePicker
        },
        methods: {
            datePickerFn(val) {
            	console.log(val)
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../../styles/mixin.scss';
    .breadcrumb__wrap {
        height: 56px;
        position: fixed;
        top: 72px;
        left: 200px;
        right: 0;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
        z-index: 9;
        background-color: $white;
        min-width: 769px;
        .breadcrumb-box {
            clear: both;
            position: relative;
            padding: 13px 15px;
            .bc-left-box { float: left }
            .bc-right-box { float: right }
        }
    }
</style>
