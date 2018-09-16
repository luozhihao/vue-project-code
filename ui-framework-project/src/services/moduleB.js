/* 模块B接口 */
import Http from './http'

// 生成二维码
export function getQrcodeApi(params) {
    return Http.get('/apis/qrcode/api', params)
}

// QQ号码测吉凶
export function getQQApi(params) {
    return Http.get('/japis/qqevaluate/qq', params)
}

// 查看历史上的今天
export function getHistory(params) {
    return Http.get('/juheapi/japi/toh', params)
}