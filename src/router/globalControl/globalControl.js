/*global control component*/
export const globalMain = r => require.ensure([], () => r(require('@/page/layout/components/globalMain')), 'globalMain')
const dataOverView = r => require.ensure([], () => r(require('@/page/globalControl/index/index')), 'dataOverView')
const dataTable = r => require.ensure([], () => r(require('@/page/globalControl/table/table')), 'dataTable')
const addTabList = r => require.ensure([], () => r(require('@/page/globalControl/table/children/addTablist')), 'addTabList')

export const gbArrayList = [
    //数据仪表
    {
        path: 'dataOverView',
        name: 'dataOverView',
        meta: {
            title: '数据仪表-全局配置管控'
        },
        component: dataOverView
    },
    //数据表格
    {
        path: 'dataTable',
        name: 'dataTable',
        meta: {
            title: '数据表格-全局配置管控'
        },
        component: dataTable,
        children: [
            //添加数据表格
            {
                path: 'addTabList',
                name: 'addTabList',
                meta: {
                    title: '新增数据表格-全局配置管控'
                },
                component: addTabList
            }
        ]
    }
]
