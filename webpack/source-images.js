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
							p__path__join(__dirname, '..', 'source', 'images'),
						],
					},
					use: [
						{
							loader: 'file',
							options: {
								name: '[name].[ext]',
							},
						},
					],
				},
			],
		},
	}
}
