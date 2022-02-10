import type { NextPage } from 'next'
import Head from 'next/head'
import Input from '@components/Input/Input'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Quiz Application</title>
				<meta
					name="Quiz Application"
					content="This Quiz Application"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="text-red-500">Content</div>
			<Input />
		</>
	)
}

export default Home
