import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@layout/Layout'
import { createContext, IContextProps, useState } from 'react'
import Menu from '@components/menu/menu'
import Quiz from '@components/quiz/quiz'
import Score from '@components/score/score'

export const DataContext = createContext(null);
function MyApp({ Component, pageProps }: AppProps) {
	const [appState, setAppState] = useState('menu')
	const [score, setScore] = useState(0)
	return (
		<DataContext.Provider value={{ appState, setAppState, score, setScore }}>
			<div className="app">
				<h1>Web Development Quiz</h1>
				{appState === 'menu' && <Menu />}
				{appState === 'quiz' && <Quiz />}
				{appState === 'score' && <Score />}
			</div>
		</DataContext.Provider>
	)

}

export default MyApp
