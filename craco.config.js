const CracoAlias = require('craco-alias');
const FontPreloadPlugin = require('webpack-font-preload-plugin')

module.exports={
    plugins:[
        {
            plugin: CracoAlias,
            options:{
                source: 'tsconfig',
                tsConfigPath: 'tsconfig.path.json',
            },
        },
    ],

    webpack:{
        plugins:{
            add:[
                new FontPreloadPlugin()
            ]
        }
    }
}