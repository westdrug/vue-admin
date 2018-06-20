/**
 * @name 配置公共方法
 * @params{*}:params
 *
 */

const localStore = window.localStorage

/**
 * 存储 localStorage
 * name:    string key
 * content  string data
 */
export const setStore = (name, content) => {
    if(isEmpty(name)) return
    if(content instanceof Object) {
        content = JSON.stringify(content)
    }
    localStore.setItem(name, content)
}

/**
 * 获取 localStorage
 * name:    string key
 */
export const getStore = name => {
    if(isEmpty(name)) return
    return localStore.getItem(name)
}

/**
 * 删除 localStorage
 * name:    string key
 */
export const removeStore = name => {
    if(isEmpty(name)) return
    localStore.removeItem(name)
}

/**
 * 是否为空
 * str:    string
 */
export const isEmpty = function (str) {
    if (str === null || typeof str === 'undefined' || str === '') {
        return true
    }
    return false
}

export const isNotEmpty = function (str) {
    return !isEmpty(str)
}
