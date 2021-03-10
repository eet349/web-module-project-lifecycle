import React from 'react';

const GitCard = ({ user }) => {
	return (
		<div className='git-card-container'>
			<img
				className='profile-img'
				src={user?.avatar_url}
				// width='50'
				alt={user.login}
			/>
			<p className='profile-name'>{user.login}</p>
			<div className='profile-link-container'>
				Profile:
				<a href={user.html_url} className='profile-link'>
					{user.html_url}
				</a>
			</div>
		</div>
	);
};

export default GitCard;
