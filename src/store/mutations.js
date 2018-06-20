import {
    RESET_CURRTOPNAV,
    CURRENT_LANGUAGE
} from './mutation-type'

export default {
    //记录当前顶部导航
    [RESET_CURRTOPNAV](state, val) {
        state.currTopNav = val
    },
    //记录当前系统语言
    [CURRENT_LANGUAGE](state, val) {
        state.currLanguage = val
    }
}
