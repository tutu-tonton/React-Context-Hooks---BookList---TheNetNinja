//========================================
//  入力欄 - タイトル・著者名
//	入力値をonChange
//	submitでaction発行, 入力欄クリア
//
//========================================
import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
	// 必要なのは dispatchだけ
	const { dispatch } = useContext(BookContext);
	// いったん格納する用のstateが必要
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_BOOK',
			book: {
				title: title,
				author: author,
			},
		});
		// 入力欄クリア
		setTitle('');
		setAuthor('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="book title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="author"
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				required
			/>
			<input type="submit" value="add book" />
		</form>
	);
};

export default NewBookForm;

//========================================
//  useReducerなし
//========================================
// import React, { useContext, useState } from 'react';
// import { BookContext } from '../contexts/BookContext';

// const NewBookForm = () => {
// 	const { addBook } = useContext(BookContext);
// 	const [title, setTitle] = useState('');
// 	const [author, setAuthor] = useState('');

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		addBook(title, author);
// 		setTitle('');
// 		setAuthor('');
// 	};
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input
// 				type="text"
// 				placeholder="book title"
// 				value={title}
// 				onChange={(e) => setTitle(e.target.value)}
// 				required
// 			/>
// 			<input
// 				type="text"
// 				placeholder="author"
// 				value={author}
// 				onChange={(e) => setAuthor(e.target.value)}
// 				required
// 			/>
// 			<input type="submit" value="add book" />
// 		</form>
// 	);
// };

// export default NewBookForm;
