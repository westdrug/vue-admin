<template>
    <div>
        <Alert type="error" show-icon>
            <Icon type="ios-lightbulb" slot="icon"></Icon>
            <template slot="desc">
                <b>游客您好，产品的试用期已结束，当前处于关闭状态，订购后即可恢复产品的正常使用！</b>
                <br>
                咨询电话： 010-4000620369
                <Button type="error" style="margin-left: 10px;">立即订购</Button>
            </template>
        </Alert>
        <section class="just-middle"></section>
        <section class="overview pl20">
            <Row>
                <Col span="4">
                    <div class="iv-data__wrap">
                        <section class="overview-item">
                            <div class="overview__item-title">
                                在销课程（门）
                            </div>
                            <div class="overview__item-value">
                                104
                            </div>
                        </section>
                    </div>
                </Col>
                <Col span="4">
                    <div class="iv-data__wrap">
                        <section class="overview-item">
                            <div class="overview__item-title">
                                可用试卷（套）
                            </div>
                            <div class="overview__item-value">
                                --
                            </div>
                        </section>
                    </div>
                </Col>
                <Col span="4">
                    <div class="iv-data__wrap">
                        <section class="overview-item">
                            <div class="overview__item-title">
                                今日订单（个）
                            </div>
                            <div class="overview__item-value">
                                1461
                            </div>
                        </section>
                    </div>
                </Col>
                <Col span="4">
                    <div class="iv-data__wrap">
                        <section class="overview-item">
                            <div class="overview__item-title">
                                注册学员（人）
                            </div>
                            <div class="overview__item-value">
                                639
                            </div>
                        </section>
                    </div>
                </Col>
                <Col span="4">
                    <div class="iv-data__wrap">
                        <section class="overview-item">
                            <div class="overview__item-title">
                                付费学员（人）
                            </div>
                            <div class="overview__item-value">
                                39
                            </div>
                        </section>
                    </div>
                </Col>
                <Col span="4">
                    <div class="iv-data__wrap">
                        <section class="overview-item">
                            <div class="overview__item-title">
                                <Tooltip placement="top" transfer>
                                    已用流量（M）
                                    <Icon type="help-circled" size="14px" class="c-error"></Icon>
                                    <p slot="content" style="white-space: normal">
                                        您的流量已超，为不影响平台使用，请尽快处理
                                    </p>
                                </Tooltip>
                            </div>
                            <div class="overview__item-value">
                                <span class="c-error">-236.6</span>
                            </div>
                        </section>
                    </div>
                </Col>
            </Row>
        </section>
        <section>
            <h4 class="module-title">待办事项</h4>
            <div class="overview">
                <Row>
                    <Col span="8">
                        <section class="pd20 iv-notice__wrap">
                            <Row>
                                <Col span="20"><h5><span>今日直播</span></h5></Col>
                                <Col span="4" class="tar">
                                    <a href="">more</a>
                                </Col>
                            </Row>
                            <div class="ivu-notice-notice ivu-notice-notice-closable ivu-notice-notice-with-desc mt10">
                                <div class="ivu-notice-notice-content">
                                    <div class="ivu-notice-custom-content ivu-notice-with-warning  ivu-notice-with-desc">
                                        <div class="ivu-notice-desc">今晚18:30催大师经济学直播</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ivu-notice-notice ivu-notice-notice-closable ivu-notice-notice-with-desc mt10">
                                <div class="ivu-notice-notice-content">
                                    <div class="ivu-notice-custom-content ivu-notice-with-warning  ivu-notice-with-desc">
                                        <div class="ivu-notice-desc">晚上20:50国学大师在线讲座</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ivu-notice-notice ivu-notice-notice-closable ivu-notice-notice-with-desc mt10">
                                <div class="ivu-notice-notice-content">
                                    <div class="ivu-notice-custom-content ivu-notice-with-warning  ivu-notice-with-desc">
                                        <div class="ivu-notice-desc">明天9:00网络小哥户外在线直播</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                    <Col span="8">
                    <section class="pd20 iv-notice__wrap">
                        <Row>
                            <Col span="20"><h5><span>试卷作业批阅</span></h5></Col>
                            <Col span="4" class="tar">
                            <a href="">more</a>
                            </Col>
                        </Row>
                        <div class="ivu-notice-notice ivu-notice-notice-closable ivu-notice-notice-with-desc mt10">
                            <div class="ivu-notice-notice-content">
                                <div class="ivu-notice-custom-content ivu-notice-with-warning  ivu-notice-with-desc">
                                    <div class="ivu-notice-desc">全局共有<span class="c-info">1256</span>个作业 等待批阅中</div>
                                </div>
                            </div>
                        </div>
                        <div class="ivu-notice-notice ivu-notice-notice-closable ivu-notice-notice-with-desc mt10">
                            <div class="ivu-notice-notice-content">
                                <div class="ivu-notice-custom-content ivu-notice-with-warning  ivu-notice-with-desc">
                                    <div class="ivu-notice-desc">在线考试 李白试卷 等待批阅中</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Col>
                    <Col span="8">
                    <section class="pd20 iv-notice__wrap">
                        <Row>
                            <Col span="20"><h5><span>问答</span></h5></Col>
                            <Col span="4" class="tar">
                            <a href="">more</a>
                            </Col>
                        </Row>
                        <div class="mt20 tac">
                            <span>暂无待办事项</span>
                            <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
                        </div>
                    </section>
                    </Col>
                </Row>
            </div>
        </section>
        <section>
            <h4 class="module-title">常用功能</h4>
            <div class="overview">
                <div class="iv-default-fun__wrap">
                    <Row :gutter="2" class-name="iv-default__fun-row">
                        <Col span="4">
                            <section class="iv-default__fun-item">
                                <div class="iv-default__fun-icon" :style="randomRgb()">
                                    <Icon type="person-stalker"></Icon>
                                </div>
                                <div class="iv-default__fun-txt ml10">
                                    学员管理
                                </div>
                            </section>
                        </Col>
                        <Col span="4">
                            <section class="iv-default__fun-item">
                                <div class="iv-default__fun-icon" :style="randomRgb()">
                                    <Icon type="ios-list"></Icon>
                                </div>
                                <div class="iv-default__fun-txt ml10">
                                    订单管理
                                </div>
                            </section>
                        </Col>
                        <Col span="4">
                            <section class="iv-default__fun-item">
                                <div class="iv-default__fun-icon" :style="randomRgb()">
                                    <Icon type="ios-copy"></Icon>
                                </div>
                                <div class="iv-default__fun-txt ml10">
                                    课程系统
                                </div>
                            </section>
                        </Col>
                        <Col span="4">
                        <section class="iv-default__fun-item">
                            <div class="iv-default__fun-icon" :style="randomRgb()">
                                <Icon type="playstation"></Icon>
                            </div>
                            <div class="iv-default__fun-txt ml10">
                                题库系统
                            </div>
                        </section>
                        </Col>
                        <Col span="4">
                        <section class="iv-default__fun-item">
                            <div class="iv-default__fun-icon" :style="randomRgb()">
                                <Icon type="stats-bars"></Icon>
                            </div>
                            <div class="iv-default__fun-txt ml10">
                                统计管理
                            </div>
                        </section>
                        </Col>
                        <Col span="4">
                        <section class="iv-default__fun-item">
                            <div class="iv-default__fun-icon" :style="randomRgb()">
                                <Icon type="android-cloud-done"></Icon>
                            </div>
                            <div class="iv-default__fun-txt ml10">
                                云服务
                            </div>
                        </section>
                        </Col>
                        <Col span="4">
                        <section class="iv-default__fun-item">
                            <div class="iv-default__fun-icon" :style="randomRgb()">
                                <Icon type="wrench"></Icon>
                            </div>
                            <div class="iv-default__fun-txt ml10">
                                系统配置
                            </div>
                        </section>
                        </Col>
                        <Col span="4">
                        <section class="iv-default__fun-item">
                            <div class="iv-default__fun-icon" :style="randomRgb()">
                                <Icon type="plus"></Icon>
                            </div>
                            <div class="iv-default__fun-txt ml10">
                                新增功能
                            </div>
                        </section>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
        <section>
            <h4 class="module-title">数据趋势</h4>
            <section style="min-height: 400px;position: relative">
                <Spin fix v-show="vChartLoading" style="top: 40px;">
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
                <Tabs value="tab-1" @on-click="orderDataTabs">
                    <TabPane label="今日订单" name="tab-1">
                        <div style="height: 400px;position: relative">
                            <ve-line
                                ref="chart-tab-1"
                                :data="chartData"
                                :toolbox="toolbox"
                                :colors="colors"
                                :tooltip="tooltip"
                                :settings="chartSettings1">
                            </ve-line>
                        </div>
                    </TabPane>
                    <TabPane label="近7天订单" name="tab-2">
                        <div style="height: 400px;position: relative">
                            <ve-line
                                ref="chart-tab-2"
                                :data="chartData"
                                :toolbox="toolbox"
                                :colors="colors"
                                :tooltip="tooltip"
                                :settings="chartSettings2">
                            </ve-line>
                        </div>
                    </TabPane>
                    <TabPane label="近30天订单" name="tab-3">标签三的内容</TabPane>
                </Tabs>
            </section>
        </section>
    </div>
</template>

<script>
    const Data_FROM_TODAY = {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 896 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
    }
    const DATA_FROM_BACKEND = {
        columns: ['date', '下单笔数', '付款订单'],
        rows: [
            { 'date': '2018-05-22', '下单笔数': 32371, '付款订单': 19810 },
            { 'date': '2018-05-23', '下单笔数': 12328, '付款订单': 4398 },
            { 'date': '2018-05-24', '下单笔数': 92381, '付款订单': 52910 }
        ]
    }

    import {
        Alert,
        Icon,
        Button,
        Row,
        Col,
        Tooltip,
        Tabs,
        TabPane,
        Spin,
        TimePicker
    } from 'iview'
    import VeLine from 'v-charts/lib/line'
    import 'echarts/lib/component/toolbox'
    export default {
        data () {
            this.chartSettings1 = {
                stack: { '用户': ['访问用户', '下单用户'] },
                area: true
            }
            this.chartSettings2 = {
                yAxisType: ['0,0a']
            }
            this.toolbox = {
                feature: {
                    //magicType: {type: ['line', 'bar']},
                    saveAsImage: {}
                }
            }
            this.tooltip = {
                trigger: 'axis',
                showDelay: 0,
                hideDelay: 50,
                transitionDuration:0,
                backgroundColor : 'rgba(255,255,255,0.9)',
                borderColor : '#4e4e4e',
                borderRadius : 6,
                borderWidth: 2,
                textStyle : {
                    color: '#1C2438',
                    fontSize: 12
                }
            }
            return {
                chartData: {
                    columns: [],
                    rows: []
                },
                vChartLoading: false
            }
        },
        components: {
            Alert,
            Icon,
            Button,
            Row,
            Col,
            Tooltip,
            Tabs,
            TabPane,
            VeLine,
            Spin,
            TimePicker
        },
        created() {
            this.getChartData('tab-1')
            this.colors = [
            	'#1495EB', '#00CC66', '#FF9900', '#7ab7f7', '#81cca6', '#f9bb5f', '#ff6d6d'
            ]
            this.$nextTick(() => {
                this.$refs['chart-tab-1'].echarts.resize()
            })
        },
        computed: {
        },
        methods: {
            randomRgb: function () {
                let bgArr = ['#7ab7f7', '#81cca6', '#f9bb5f', '#ff6d6d'],
                    random = parseInt(Math.random()*4)

                return { background: bgArr[random] }
            },
            orderDataTabs(name) {
                this.getChartData(name)
                this.$nextTick(() => {
                    this.$refs[`chart-${name}`].echarts.resize()
                })
            },
            getChartData (tab) {
            	let _chartData = null
                this.vChartLoading = true
                switch (tab) {
                    case 'tab-1':
                        _chartData = Data_FROM_TODAY
                        break;
                    case 'tab-2':
                        _chartData = DATA_FROM_BACKEND
                        break;
                }
                // ajax get data ....
                setTimeout(() => {
                    this.chartData = _chartData
                    this.vChartLoading = false
                }, 3000)
            }
        },
        watch: {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../styles/mixin.scss";
    .iv-data__wrap {
        height: 100px;
        display: table-cell;
        vertical-align: middle;
    }
    .iv-default-fun__wrap {
        background-color: $white;
        .iv-default__fun-item {
            background-color: $c8;
            @include padding(15px, 10px, 15px, 10px);
            text-align: center;
            transition: .6s;
            &:hover {
                 background-color: $ce;
                 cursor: pointer;
             };
        }
    }
    .iv-default__fun-icon {
        @include borderRadius(4px);
        display: inline-block;
        @include wh(28px, 28px);
        text-align: center;
        line-height: 28px;
        background-color: $info;
        .ivu-icon {
            @include sc(16px, $white);
        }
    }
    .iv-default__fun-txt {
        display: inline-block;
        @include sc(14px, $c2);
    }
    .iv-default__fun-row .ivu-col {
        @include mb(2px)
    }
</style>
