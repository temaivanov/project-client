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
							p__path__join(__dirname, '..', 'source', 'templates'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file',
							options: {
								name: '[name].html',
							},
						},
						{
							loader: 'pug-html',
							options: {
								pretty: env.develop ? '\t' : false, // deprecated ?
							},
						},
					],
				},
			],
		},
	}
}
