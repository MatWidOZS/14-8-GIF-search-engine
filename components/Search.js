Search = React.createClass({
	getInitialState() {
		return {
			searchingText: ''
		};
	},

	render: function() {
		var styles = {
			fontSize: '1.5em',
			width: '90%',
			maxWidth: '350px'
		};

		return <input
					type:"text"
					onChange={this.handleChange}
					placeholder="Enter the search phrase"
					style={styles}
					value={this.state.searchTerm}
				/>
	}

	handleCHange: function(event) {
		var searchingText = event.target.value;
		this.setState({
			searchingText: searchingText;
		});
	}
});