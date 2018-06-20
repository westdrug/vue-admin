import App from '../App'

/* Layout */
import Layout from '@/page/layout/Layout'
/* globalControl */
import { globalMain, gbArrayList } from './globalControl/globalControl'
/* systemManage */
import { systemMain, smArrayList } from './systemManage/systemManage'

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [     //二级路由。对应App.vue
        //地址为空时跳转首页
        {
            path: '',
            meta: {
                title: 'IPMS-平台管理系统'
            },
            redirect: '/Layout'
        },
        //主页
        {
            path: '/Layout',
            name: 'Layout',
            meta: {
                title: 'IPMS-平台管理系统'
            },
            redirect: '/Layout/globalMain/dataOverView',
            component: Layout,
            children: [
                //全局配置管控
                {
                    path: 'globalMain',
                    name: 'globalMain',
                    meta: {
                        title: '全局配置管控'
                    },
                    component: globalMain,
                    children: gbArrayList
                },
                //系统功能管理
                {
                    path: 'systemMain',
                    name: 'systemMain',
                    meta: {
                        title: '系统功能管理'
                    },
                    component: systemMain,
                    children: smArrayList
                }
            ]
        }
    ]
}]
