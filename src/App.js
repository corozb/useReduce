import React, { useReducer } from 'react'
import './App.css'

const appReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return { users: [...state.users, action.payload] }
		default:
			throw new Error()
	}
}

function App() {
	const initialState = {
		users: [
			{ name: 'Alan', age: 30 },
			{ name: 'Cris', age: 36 },
		],
	}

	const [state, dispatch] = useReducer(appReducer, initialState)

	const addUser = (e) => {
		e.preventDefault()
		let data = {
			name: e.target.name.value,
			age: e.target.age.value,
		}

		const newUser = data
		dispatch({
			type: 'ADD_USER',
			payload: newUser,
		})
	}

	return (
		<div className='App'>
			<h1>UseReducer</h1>
			<div className='array'>
				{state.users.map((item, index) => (
					<p key={index}>
						{item.name} - {item.age}
					</p>
				))}
			</div>

			<form onSubmit={addUser}>
				<input type='text' placeholder='Nombre' name='name' />
				<input type='text' placeholder='Edad' name='age' />
				<input type='submit' value='Add an user' />
			</form>
		</div>
	)
}

export default App
