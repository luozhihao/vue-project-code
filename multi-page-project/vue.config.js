const configs = require('./config');
const utils = require('./build/utils');

// 用于做相应的merge处理
const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');

const cfg = process.env.NODE_ENV === 'production' ? configs.build.env : configs.dev.env;

let baseUrl = '/vue/';

module.exports = {
	baseUrl: baseUrl,
	outputDir: 'dist',
	productionSourceMap: true,
	chainWebpack: config => {
	    config.module
	      	.rule('images')
            .use('url-loader')
            .tap(options =>
                merge(options, {
                  limit: 5120,
                })
            )

        config.plugin('define')
            .tap(args => {
                let name = 'process.env';

                args[0][name] = merge(args[0][name], cfg);

                return args
            })
	},

	configureWebpack: config => {
        // config.plugins = []; // 这样会直接将 plugins 置空
        
        config.entry = utils.getEntries();

        // 使用 return 一个对象会通过 webpack-merge 进行合并
        return {
            plugins: [...utils.htmlPlugin()]
        }
    },

    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: new RegExp(baseUrl + 'page1'), to: baseUrl + 'page1.html' },
                { from: new RegExp(baseUrl + 'page2'), to: baseUrl + 'page2.html' },
            ]
        },
        open: true, // 是否自动打开浏览器页面
        host: '127.0.0.1', // 指定使用一个 host。默认是 localhost
        port: 8080, // 端口地址
        https: false, // 使用https提供服务

        // string | Object 代理设置
        proxy: {
            '/repos': {
                target: 'https://api.github.com',
                changeOrigin: true
                // pathRewrite: {'^/api': ''}
            }
        },
        progress: true,
        
        // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
        before: app => {
          // `app` 是一个 express 实例
        }
    }
}