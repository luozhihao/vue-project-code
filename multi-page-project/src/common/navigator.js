export default class Navigator {

    // 单页间跳转方法
    static openRouter({ query = {}, name = '', type = '' } = {}) {
        let params = ''

        let formatQuery = query => {
        	let params = ''

        	if (query) {
        	    for (let item in query) {
        	        let vals = query[item]

        	        if (vals !== undefined) {
        	            params += item + '=' + vals + '&'
        	        }
        	    }
        	}

        	params = params ? '?' + params : params

        	return params
        }

        if (query) {
            params = formatQuery(query)
        }

        let homepath = `/${location.pathname.split('/')[1]}/` // 获取单页前缀

        let url = `${homepath}${name}${params}` // 拼接url

        if (type === 'replace') {
            location.replace(url) // replace 跳转
        } else {
            location.href = url // href 跳转
        }
    }
}