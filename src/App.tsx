import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/components/Home';
import Statistics from './pages/Statistics/components/Statistics';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';

function App() {
	return (
		<div className='container'>
			{/* <Popup /> */}
			<Header />
			<Routes>
				<Route path='/' /* exact */ element={<Home />} />
				<Route path='/statistics' /* exact */ element={<Statistics />} />
			</Routes>
		</div>
	);
}

export default App;
