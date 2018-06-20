<template>
    <div v-if="currentNav === 'globalControl'">
        <Menu
            ref="menuSider"
            :active-name="activeName"
            :open-names="openNames"
            width="200px"
            @on-select="menuLink"
            @on-open-change="openChange">
            <Submenu :name="pIdx+1" v-for="(pItem, pIdx) in menuDataArr[0].children" :key="pIdx">
                <template slot="title">
                    <Icon :type="pItem.icon"></Icon>
                    <span class="title-text">{{pItem.parentNode}}</span>
                </template>
                <MenuItem
                    :name="cnameFn(pIdx+1, index+1)"
                    v-if="pItem.childNode.length"
                    v-for="(cItem, index) in pItem.childNode"
                    :key="index">{{cItem.title}}</MenuItem>
            </Submenu>
        </Menu>
    </div>
    <div v-else-if="currentNav === 'systemManage'">
        <Menu
            ref="menuSider"
            :active-name="activeName"
            :open-names="openNames"
            width="200px"
            @on-select="menuLink"
            @on-open-change="openChange">
            <Submenu :name="pIdx+1" v-for="(pItem, pIdx) in menuDataArr[1].children" :key="pIdx">
                <template slot="title">
                    <Icon :type="pItem.icon"></Icon>
                    <span class="title-text">{{pItem.parentNode}}</span>
                </template>
                <MenuItem
                    :name="cnameFn(pIdx+1, index+1)"
                    v-if="pItem.childNode.length"
                    v-for="(cItem, index) in pItem.childNode"
                    :key="index">{{cItem.title}}</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Menu, Submenu, MenuGroup, MenuItem, Icon } from 'iview'
    import { menuData } from './menuData'
    import { setStore, getStore } from '@/config/wutils'
    export default {
    	data(){
            return{
            	currentNav: '',
            	menuDataArr: [],
                activeName: '',
                openNames: [1]
            }
        },
        created() {
    	    this.menuDataArr = menuData
            this.currentNav = this.currTopNav
        },
        mounted() {
            this.updateOpenName()
        },
        computed: {
            ...mapState([
            	'currTopNav', 'currLanguage'
            ])
        },
        components: {
            Menu, Submenu, MenuGroup, MenuItem, Icon
        },
        methods: {
            menuLink(names) {
                let currentRoute = this.filterLinkStrFn(names)
                this.activeName = names

                this.$nextTick(() => {
                    this.$refs.menuSider.updateOpened()
                    this.$refs.menuSider.updateActiveName()
                })

            	this.$router.push({name: currentRoute})
            },
            openChange(name) {

            },
            cnameFn(pIdx, cIdx) {
            	let cName = ''
                cName = pIdx + '-' + cIdx
                return cName
            },
            filterLinkStrFn(name) {
            	let childArr = [],
                    nameSplit = name.split('-'),
                    pIdx = Number(nameSplit[0]),
                    cIdx = Number(nameSplit[1])

                setStore('opAction', [pIdx, name])

                this.openNames = [pIdx]
            	switch (this.currentNav) {
                    case 'globalControl':
                        childArr = this.menuDataArr[0].children
                    	break;
                    case 'systemManage':
                        childArr = this.menuDataArr[1].children
                        break;
                    case 'operationAnalysis':
                        childArr = this.menuDataArr[2].children
                        break;
                }

                return childArr[pIdx-1].childNode[cIdx-1].routeName
            },
            updateOpenName() {
            	let opAction = getStore('opAction') !== '' ? JSON.parse(getStore('opAction')) : [1, 1-1]
                this.$nextTick(() => {
                    this.openNames = [opAction[0]]
                    this.activeName = opAction[1].toString()
                    this.$refs.menuSider.updateOpened()
                    this.$refs.menuSider.updateActiveName()
                })
            }
        },
        watch: {
            currTopNav: function (val) {
                this.currentNav = val
                this.updateOpenName()
            },
            currLanguage: function (val) {
                console.log('.....', val)
                this.menuDataArr = menuData
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/mixin.scss';
    .w-layout .ivu-menu-item,
    .w-layout .ivu-menu-submenu .title-text {
        font-size: 12px;
    }
    .w-layout .ivu-menu-submenu .title-text {font-weight: 700;}
    .w-layout .ivu-menu-item-active {
        .ivu-menu-submenu-title .ivu-icon,
        .ivu-menu-submenu-title .title-text,
        .ivu-menu-item-active.ivu-menu-item-selected {
            font-weight: 700;
            @include sc(12px, $info);
        }
    }
    .w-layout .ivu-menu .ivu-menu-item { color: #657180; }
</style>
