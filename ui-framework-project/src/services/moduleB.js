/* 模块B接口 */
import Http from './http'

// 生成二维码
export const getQrcodeApi = params => {
    return Http.get('/apis/qrcode/api', params)
}

// QQ号码测吉凶
export const getQQApi = params => {
    return Http.get('/japis/qqevaluate/qq', params)
}

// 查看历史上的今天
export const getHistory = params => {
    return Http.get('/juheapi/japi/toh', params)
}