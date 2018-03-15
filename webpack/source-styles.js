import {
	join as p__path__join,
} from 'path'
//
export default (env) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.sass$/,
						],
					},
					use: [
						{
							loader: 'style',
							options: {
								convertToAbsoluteUrls: env.develop,
								sourceMap: env.develop,
							},
						},
						{
							loader: 'css',
							options: {
								minimize: env.produce ? {
									discardComments: {
										removeAll: true,
									},
								} : false,
								sourceMap: env.develop,
							},
						},
						{
							loader: 'sass',
							options: {
								sourceMap: env.develop,
							},
						},
					],
				},
			],
		},
	}
}
