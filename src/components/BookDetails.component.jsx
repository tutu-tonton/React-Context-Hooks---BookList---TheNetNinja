//========================================
//  リストの個別部分
//  クリックするとaction発行 -> 削除
//========================================
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
	// 必要なのは dispatchのみ
	const { dispatch } = useContext(BookContext);
	return (
		<li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
			<div className="title">{book.title}</div>
			<div className="author">{book.author}</div>
		</li>
	);
};

export default BookDetails;

//========================================
//  useReducerなし
//========================================
// import React, { useContext } from 'react';
// import { BookContext } from '../contexts/BookContext';

// const BookDetails = ({ book }) => {
// 	const { removeBook } = useContext(BookContext);
// 	return (
// 		<li onClick={() => removeBook(book.id)}>
// 			<div className="title">{book.title}</div>
// 			<div className="author">{book.author}</div>
// 		</li>
// 	);
// };

// export default BookDetails;
