import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		context: p__path__join(__dirname, '..', 'source'),
		entry: {
			'source': './scripts/source.js',
			//'styles': './styles/source.sass',
		},
		output: {
			chunkFilename: 'scripts/[id].js',
			filename: '[name].js',
			//publicPath: '',
		},
		devServer: {
			historyApiFallback: true,
			proxy: {
				'/api/': {
					changeOrigin: true,
					//pathRewrite: {
					//	'^/api/': '/',
					//},
					//target: 'https://roshal-server.herokuapp.com/',
					target: 'http://localhost:8080/api/',
				},
			},
		},
		resolveLoader: {
			moduleExtensions: [
				'-' + 'loader',
			],
		},
	}
}
