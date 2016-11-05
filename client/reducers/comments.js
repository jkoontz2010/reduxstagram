// a reducer takes in an action and a copy of hte state

function comments(state=[], action) {
	console.log(state, action);

	return state;
}

export default comments;