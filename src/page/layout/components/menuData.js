/*menu data*/
import { getStore } from '../../../config/wutils'
import { zhMenu } from '../../../config/lang/zh'
import { enMenu } from '../../../config/lang/en'
let flag = getStore('language') === 'zh-CN' ? true : false
let parentNode
flag ? parentNode = zhMenu.g.workBench : parentNode = enMenu.g.workBench
export const menuData =
    [
        //全局配置管控
        {
            topNav: 'globalControl',
            children: [
                {
                    parentNode: `${parentNode}`,
                    icon: 'ios-analytics',
                    childNode: [
                        {
                            title: '工作台',
                            routeName: 'dataOverView'
                        },
                        {
                            title: '待办事项',
                            routeName: 'dataTable'
                        }
                    ]
                },
                {
                    parentNode: '全局配置',
                    icon: 'wrench',
                    childNode: [
                        {
                            title: '专业/科目管理',
                            routeName: 'itemSortManage'
                        },
                        {
                            title: '知识体系',
                            routeName: 'knowledgeSystem'
                        },
                        {
                            title: '帮助文档配置',
                            routeName: 'helpDoConfig'
                        },
                        {
                            title: '重要功能配置',
                            routeName: 'imFunctionConfig'
                        }
                    ]
                }
            ]
        },
        // 系统功能管理
        {
            topNav: 'systemManage',
            children: [
                {
                    parentNode: '商品体系',
                    icon: 'merge',
                    childNode: [
                        {
                            title: '课程管理',
                            routeName: 'courseManage'
                        },
                        {
                            title: '讲座管理',
                            routeName: 'openLiveManage'
                        },
                        {
                            title: '套餐管理',
                            routeName: 'setMealManage'
                        },
                        {
                            title: '素材管理',
                            routeName: 'fodderManage'
                        },
                        {
                            title: '图书管理',
                            routeName: 'booksManage'
                        }
                    ]
                },
                {
                    parentNode: '题库系统',
                    icon: 'ios-paper',
                    childNode: [
                        {
                            title: '试卷管理',
                            routeName: 'testPaperManage',
                        },
                        {
                            title: '试题管理',
                            routeName: 'testQuestionsManage',
                        },
                        {
                            title: '试卷批阅管理',
                            routeName: 'reviewPaperManage',
                        },
                        {
                            title: '纠错管理',
                            routeName: '',
                        },
                        {
                            title: '题型管理',
                            routeName: '',
                        },
                        {
                            title: '试卷类型',
                            routeName: '',
                        },
                        {
                            title: '作业管理',
                            routeName: '',
                        },
                        {
                            title: '作业类型',
                            routeName: '',
                        }
                    ]
                },
                {
                    parentNode: '学员管理',
                    icon: 'person-stalker',
                    childNode: [

                    ]
                },
                {
                    parentNode: '问答系统',
                    icon: 'android-textsms',
                    childNode: [

                    ]
                },
                {
                    parentNode: '班级系统',
                    icon: 'pound',
                    childNode: [

                    ]
                },
                {
                    parentNode: '资讯系统',
                    icon: 'android-list',
                    childNode: [

                    ]
                },
                {
                    parentNode: '分销系统',
                    icon: 'android-share',
                    childNode: [

                    ]
                },
                {
                    parentNode: '云服务',
                    icon: 'ios-cloud',
                    childNode: [

                    ]
                }
            ]
        }
    ]
