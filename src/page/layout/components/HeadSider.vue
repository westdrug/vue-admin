<template>
    <div class="head-sider">
        <aside class="header-aside">
            <section class="header-aside__wrap">
                <a class="header-aside-phone" :title="$t('m.head.mobile')"><Icon type="android-phone-portrait"></Icon></a>
                <a class="header-aside-message" :title="$t('m.head.message')">
                    <Badge dot>
                        <Icon type="ios-bell"></Icon>
                    </Badge>
                </a>
                <Poptip
                    trigger="hover"
                    title="title"
                    content="content"
                    placement="bottom-end">
                    <a class="header-aside-user">
                        <Icon type="android-person"></Icon>
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <div slot="title">
                        <Avatar style="background-color: #87d068" icon="person" size="small" />
                        普阿达锕ak
                    </div>
                    <div class="" slot="content">
                        <a href="">{{$t('m.head.uCenter')}}</a>
                        <a href="">{{$t('m.head.signOut')}}</a>
                    </div>
                </Poptip>
                <a class="header-aside-lang" @click="changeLang">{{lang}}</a>
            </section>
        </aside>
        <nav class="header-nav-top">
            <a :class="['h-nav-top-item', {on: currTopNav === 'globalControl'}]" @click="jumpTopNav('globalControl')">
                <Icon type="ios-settings-strong"></Icon>
                <span>{{$t('m.head.globalControl')}}</span>
            </a>
            <a :class="['h-nav-top-item', {on: currTopNav === 'systemManage'}]" @click="jumpTopNav('systemManage')">
                <Icon type="settings"></Icon>
                <span>{{$t('m.head.sysFunManage')}}</span>
            </a>
            <a :class="['h-nav-top-item', {on: currTopNav === 'operationAnalysis'}]" @click="jumpTopNav('operationAnalysis')">
                <Icon type="ios-pulse-strong"></Icon>
                <span>{{$t('m.head.operationAnalysis')}}</span>
            </a>
        </nav>
        <router-link to="/" class="head-logo">
            <svg x="0px"
                 y="0px" height="38px" viewBox="0 0 239 133.417" style="enable-background:new 0 0 239 133.417;"
                 xml:space="preserve">
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="150.2217" y1="66.1626" x2="238.6338" y2="66.1626">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="1" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <path style="fill:url(#SVGID_1_);" d="M219.006,51.479c4.139-5.404,6.603-12.158,6.603-19.492c0-17.726-14.371-32.095-32.094-32.095
                c-17.726,0-32.097,14.369-32.097,32.095c0,7.711,2.722,14.785,7.254,20.32c-3.217,2.312-6.113,5.041-8.604,8.115
                c-0.008,0.01-0.017,0.018-0.024,0.027c-6.139,7.592-9.822,17.252-9.822,27.775c0,8.857,2.615,17.1,7.101,24.016
                c0.079,0.121,0.168,0.236,0.248,0.357c7.913,11.945,21.457,19.834,36.858,19.834c24.413,0,44.205-19.793,44.205-44.207
                C238.634,72.907,230.841,59.411,219.006,51.479z M193.513,20.258c6.479,0,11.73,5.252,11.73,11.729c0,6.479-5.251,11.73-11.73,11.73
                c-6.478,0-11.729-5.252-11.729-11.73C181.784,25.51,187.035,20.258,193.513,20.258z M193.495,111.552
                c-8.28,0-15.537-4.377-19.589-10.941c-2.166-3.51-3.419-7.643-3.419-12.068c0-5.699,2.076-10.91,5.508-14.93
                c4.221-4.941,10.492-8.08,17.5-8.08c12.711,0,23.01,10.303,23.01,23.01C216.505,101.251,206.206,111.552,193.495,111.552z"/>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="1.2676" y1="103.9766" x2="117.4282" y2="103.9766">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="1" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <path style="fill:url(#SVGID_2_);" d="M53.775,76.636c0,0-19.251,9.789-32.695,23.18c-8.565,8.529-16.625,20.094-19.812,31.5
                c0.695,0.002,80.594,0,80.594,0C66.37,126.276,52.413,107.065,53.775,76.636z"/>
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="0.9375" y1="28.4858" x2="89.1432" y2="28.4858">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="1" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <path style="fill:url(#SVGID_3_);" d="M45.023,5.514c-23.844,0-43.26,18.916-44.086,42.558l23.359,3.387
                c-0.053-0.6-0.086-1.207-0.086-1.82c0-11.494,9.317-20.811,20.812-20.811c10.204,0,18.677,7.35,20.453,17.039
                c4.354-8.08,9.333-14.637,13.245-19.431c0.754-0.924,1.453-1.766,2.116-2.559C72.825,12.758,59.774,5.514,45.023,5.514z"/>
            <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="63.291" y1="67.3838" x2="152.1396" y2="67.3838">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="1" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <path style="fill:url(#SVGID_4_);" d="M152.14,61.35c-8.296-14.086-23.597-23.553-41.126-23.553c-1.71,0-3.397,0.094-5.062,0.27
                c0.054-0.468,10.822-27.174,24.646-36.541c-15.199-0.018-40.449,21.992-47.902,31.836c-4.699,6.206-9.976,14.329-13.851,24.074
                c-2.646,6.65-4.629,14.055-5.3,22.129c-0.161,1.947-0.255,3.93-0.255,5.955c0,24.953,19.153,45.418,43.558,47.529
                c1.374,0.119,2.761,0.193,4.165,0.193c15.889,0,29.954-7.773,38.628-19.717c-0.08-0.121-0.169-0.236-0.248-0.357
                c-4.485-6.916-7.101-15.158-7.101-24.016c0-10.523,3.684-20.184,9.822-27.775C152.123,61.367,152.132,61.359,152.14,61.35z
                 M110.897,108.166c-1.383,0-2.734-0.131-4.049-0.369c-10.569-1.91-18.589-11.15-18.589-22.27c0-2.064,0.281-4.062,0.799-5.963
                c2.617-9.609,11.4-16.676,21.839-16.676c12.505,0,22.64,10.135,22.64,22.639C133.537,98.029,123.402,108.166,110.897,108.166z"/>
            </svg>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNCA2NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxLjIgKDM1Mzk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+bGluZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+DQogICAgICAgIDxnIGlkPSLlupTnlKjmpoLop4giIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAwMDAwLCAtNDAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIsMCBMMiwyMCIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDQ0IEwyLDY0IiBpZD0iTGluZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=" class="header-logo-line">
            <span class="head-logo-title">
                平台管理系统
                <small>IPMS</small>
            </span>
        </router-link>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import { Button, Badge, Icon, Poptip, Avatar, Tabs, TabPane } from 'iview'
    import { setStore } from '@/config/wutils'
    import en from 'iview/dist/locale/en-US'
    import zh from 'iview/dist/locale/zh-CN'
    export default {
    	data(){
            return{
                lang: '--'
            }
        },
        mounted() {
            if(this.$i18n.locale === 'zh-CN') this.lang = 'EN'
            if(this.$i18n.locale === 'en-US') this.lang = 'CN'
            let localeVal = this.$i18n.locale === 'zh-CN' ? zh : en
            this.$Locale(localeVal)
        },
        components: {
            Button, Badge, Icon, Poptip, Avatar, Tabs, TabPane
        },
        computed: {
            ...mapState([
            	'currTopNav'
            ])
        },
        methods: {
            ...mapMutations([
            	'RESET_CURRTOPNAV', 'CURRENT_LANGUAGE'
            ]),
            jumpTopNav(val) {
                setStore('currTopNav', val)           //保存当前头部导航
                setStore('opAction', [1, '1-1'])     //初始左侧菜单打开与选中
                this.RESET_CURRTOPNAV(val)
            	switch (val) {
                    case 'globalControl':
                    	this.$router.replace({
                            path: '/Layout/globalMain/dataOverView'
                        })
                        break;
                    case 'systemManage':
                        this.$router.replace({
                            path: '/Layout/systemMain/courseManage'
                        })
                        break;
                    case 'operationAnalysis':
                    	break;
                }
            },
            changeLang() {
            	let title = this.lang === 'EN' ? '切换语言' : 'switch language',
                    cont = this.lang === 'EN' ? '确定要切换为语言吗？' : 'Are you sure you want to switch to a language?'
                this.$Modal.confirm({
                    title: title,
                    content: cont,
                    okText: this.lang === 'EN' ? '是的' : 'Yes',
                    cancelText: this.lang === 'EN' ? '不，谢谢' : 'No, thank you',
                    loading: true,
                    onOk: () => {
                    	let ilocal = null
                    	if(this.lang === 'EN') {
                            this.lang = 'CN'
                            this.$i18n.locale = 'en-US'
                            setStore('language', 'en-US')
                            this.CURRENT_LANGUAGE('en-US')
                            ilocal = en
                        } else {
                            this.lang = 'EN'
                            this.$i18n.locale = 'zh-CN'
                            setStore('language', 'zh-CN')
                            this.CURRENT_LANGUAGE('zh-CN')
                            ilocal = zh
                        }
                        this.$Locale(ilocal)
                        setTimeout(() => {
                            this.$Modal.remove()
                            this.$Message.info(this.lang === 'EN' ? '切换成功！' : 'Handover success！')
                        }, 2000)
                    }
                });
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../../styles/mixin.scss';
    .head-sider {
        height: 100%;
        clear: both;
        position: relative;
        .head-logo {
            display: table-cell;
            vertical-align: middle;
            height: 72px;
            svg {
                display: inline;
                vertical-align: middle;
            }
            .header-logo-line {
                @include wh(20px, 32px);
                vertical-align: middle;
            }
            .head-logo-title {
                @include sc(14px, $white);
                font-weight: 700;
                position: relative;
                top: -5px;
                vertical-align: middle;
                small {
                    position: absolute;
                    font-size: 12px;
                    font-weight: normal;
                    left: 0;
                    top: 15px;
                }
            }
        }
        .header-nav-top {
            position: absolute;
            left: 220px;
            top: 0;
            .h-nav-top-item {
                display: inline-block;
                margin-right: 40px;
                position: relative;
                height: 72px;
                line-height: 72px;
                font-size: 14px;
                color: #fff;
                opacity: .69;
                cursor: pointer;
                transition: all .2s ease-in-out;
                span {
                    vertical-align: middle;
                }
                .ivu-icon {
                    display: inline-block;
                    font-size: 18px;
                    margin-right: 4px;
                    vertical-align: middle;
                }
            }
            .h-nav-top-item.on,
            .h-nav-top-item:hover {
                color: #fff;
                opacity: 1;
            }
            .h-nav-top-item.on:after {
                content: "";
                display: block;
                width: 100%;
                height: 4px;
                background-color: #4fe3c1;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
        .header-aside {
            float: right;
            position: relative;
            a:hover {
                opacity: .8;
            }
            .header-aside__wrap {
                display: table-cell;
                vertical-align: middle;
                height: 72px;
                .header-aside-lang {
                    display: inline-block;
                    @include wh(23px, 23px);
                    margin-left: 16px;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    padding: 2px;
                    @include sc(12px, $white);
                }
                .header-aside-user,
                .header-aside-phone,
                .header-aside-message {
                    display: inline-block;
                    vertical-align: middle;
                    position: relative;
                    margin: 0 15px;
                    @include sc(18px, $white)
                }
                .header-aside-user > .ivu-icon {
                    vertical-align: middle;
                }
                .header-aside-user > .ivu-icon:last-child {font-size: 12px;}
            }
        }
    }
</style>
