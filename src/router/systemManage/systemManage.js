/*system manage component*/
export const systemMain = r => require.ensure([], () => r(require('@/page/layout/components/globalMain')), 'systemMain')
const courseManage = r => require.ensure([], () => r(require('@/page/systemManage/courseManage/courseManage')), 'courseManage')
const openLiveManage = r => require.ensure([], () => r(require('@/page/systemManage/openLiveManage/openLiveManage')), 'openLiveManage')

export const smArrayList= [
    //商品体系
    {
        path: 'courseManage',
        name: 'courseManage',
        meta: {
            title: '商品体系-系统功能管理'
        },
        component: courseManage
    },
    //讲座管理
    {
        path: 'openLiveManage',
        name: 'openLiveManage',
        meta: {
            title: '讲座管理-系统功能管理'
        },
        component: openLiveManage
    }
]

