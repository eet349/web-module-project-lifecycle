import './App.css';
import React from 'react';
import axios from 'axios';
import CardList from './CardList';
import GitCard from './GitCard';

class App extends React.Component {
	state = {
		myUserData: {},
		fetchedUserData: [],
	};

	componentDidMount() {
		axios
			.get('https://api.github.com/users/eet349')
			.then((res) => {
				this.setState({ ...this.state, myUserData: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.get('https://api.github.com/users/wesbos/followers')
			.then((res) => {
				console.log('res: ', res.data);
				this.setState({ ...this.state, fetchedUserData: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className='app'>
				<GitCard user={this.state.myUserData} />
				<CardList users={this.state.fetchedUserData} />
			</div>
		);
	}
}

export default App;
