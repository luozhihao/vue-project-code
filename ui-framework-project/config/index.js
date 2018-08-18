
// 公共变量
const com = {
	IP: JSON.stringify('xxx')
};

module.exports = {

	// 开发环境变量
	dev: {
		env: {
			TYPE: JSON.stringify('dev'),
			...com
		}
	},

	// 生产环境变量
	build: {
		env: {
			TYPE: JSON.stringify('prod'),
			...com
		}
	}
}