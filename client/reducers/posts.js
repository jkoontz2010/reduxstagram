 // a reducer takes in an action and a copy of hte state

function posts(state=[], action) {
	console.log(state, action);
	switch(action.type) {
		case 'INCREMENT_LIKES':
			console.log('incrementing likes!');
			const i = action.index;
			return [
				...state.slice(0, i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1)

			]

		default:
			return state;
	}

}

export default posts;