// a reducer takes in an action and a copy of hte state

function comments(state=[], action) {
	console.log(state, action);
	switch(action.type) {
		case 'ADD_COMMENT':
		    const commentState = {...state};
		    commentState[action.postId].push({text: action.comment, user: action.author});

			return commentState;

		default:
			return state;
	}
}

export default comments;