import React from 'react';

import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar.component';
import BookList from './components/BookList.component';
import NewBookForm from './components/BookForm.component';

function App() {
	return (
		<div className="App">
			<BookContextProvider>
				<Navbar />
				<BookList />
				<NewBookForm />
			</BookContextProvider>
		</div>
	);
}

export default App;
