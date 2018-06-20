import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/index'
import { locale, LoadingBar, Message, Modal } from 'iview'
import 'iview/dist/styles/iview.css'
import VueI18n from 'vue-i18n'
import { getStore } from './config/wutils'

/*
 按需引入iview组件
*/
//Vue.prototype.$Loading = LoadingBar
Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal
Vue.prototype.$Locale = locale

/*
 国际化 挂载实例
*/
Vue.use(VueI18n)

Vue.config.productionTip = false

/*
 注册路由中间件
*/
Vue.use(VueRouter)
/*
 创建 router 实例，
 然后传 `routes` 配置
*/
const router = new VueRouter({
    routes,
    mode: 'history',           //build 时注释掉
    //base: '/w/'             //build 后线上根目录下子目录
})

/*
 创建一个 i18n 实例对象，
 方便全局调用
*/
const langZh = require('./config/lang/zh')
const langEn = require('./config/lang/en')
const language = getStore('language') || navigator.language || 'zh-CN'
const i18n = new VueI18n({
    locale: language,
    messages: {
        'zh-CN': langZh,
        'en-US': langEn
    }
})

//Vue.prototype.$I18n = i18n

/*
 iview 组件国际化
*/
/*let localeVal = i18n.locale === 'zh-CN' ? zh : en
locale(localeVal)*/

/*
 创建和挂载根实例
 从而让整个应用都有路由功能
 */
new Vue({
    router,
    store,
    i18n
}).$mount('#app')

/*
 loading bar config
*/
LoadingBar.config({
    color: '#ff9900',
    failedColor: '#ed3f14'
})
router.beforeEach((to, from, next) => {
    if(to.meta && to.meta.title){
        document.title = to.meta.title
    }
    LoadingBar.start()
    next()
})

router.afterEach(route => {
    LoadingBar.finish()
})
