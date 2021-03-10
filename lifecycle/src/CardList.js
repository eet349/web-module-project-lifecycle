import React from 'react';
import GitCard from './GitCard';

const CardList = (props) => {
	const renderGitUsers = () => {
		return props.users.map((user) => <GitCard user={user} key={user.id} />);
	};

	return (
		<>
			<h3 className='follower-header'>Wes Bos' followers:</h3>
			<div className='follower-card-container'>{renderGitUsers()}</div>
		</>
	);
};

export default CardList;
