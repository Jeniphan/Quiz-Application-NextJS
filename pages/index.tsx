import type { NextPage } from 'next'
import Head from 'next/head'
import Input from '@components/Input/Input'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="text-red-500">Content</div>
			<Input />
		</>
	)
}

export default Home