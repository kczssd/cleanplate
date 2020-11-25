const pxtoviewport = require('postcss-px-to-viewport')
module.exports = {
    outputDir: 'build',
    indexPath: 'index.html',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        unitToConvert: "px",
                        viewportWidth: 750,
                        unitPrecision: 5,
                        propList: [
                            "*"
                        ],
                        viewportUnit: "vw",
                        fontViewportUnit: "vw",
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: /(\/|\\)(node_modules)(\/|\\)/,
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/host': {
                target: 'http://47.110.77.252:8080/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/host': '/host'
                }
            }
        },
    }
}