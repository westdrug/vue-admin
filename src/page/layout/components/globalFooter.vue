<template>
    <div class="app-footer">
        <footer class="app-footer__wrap">
            <Row>
                <Col span="7">
                    <p>
                        <a href="">关于我们</a>
                        <a href="" class="ml5">联系我们</a>
                        <a href="" class="ml5">帮助中心</a>
                    </p>
                    <span>热线：400-0620-268</span>
                    <span class="ml5">邮箱：yizhilu@268xue.com</span>
                </Col>
                <Col span="16" offset="1" class="tar">
                    <p>
                        <span>©2010-{{year}} Powered By</span>
                        <a href="http://www.268xue.com" target="_blank">268教育软件</a>
                    </p>
                    <span>
                        京公网安备11010802011695号 京ICP备13029607号
                        北京易知路科技有限公司 版权所有
                    </span>
                </Col>
            </Row>
        </footer>
    </div>
</template>

<script>
    import {
        Row,
        Col
    } from 'iview'
    export default {
    	data(){
            return{
                year: '?'
            }
        },
        mounted() {
    	    this.getFullYear()
        },
        components: {
            Row,
            Col
        },
        methods: {
    		getFullYear() {
    			let d = new Date(),
                    y = d.getFullYear()
                this.year = y
            }
        }
    }

</script>

<style lang="scss" scoped>
    .app-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .app-footer__wrap {
        width: 100%;
        padding: 15px 24px;
        line-height: 24px;
    }
</style>
