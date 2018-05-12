App = React.createClass({
	setInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		}
	},

	render: function() {

		var = styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};

		return (
			<div style={styles}>
				<h1>GIF search engine!</h1>
				<p>Find GIF on <a href='http://giphy.com'> giphy</a> Press enter to donwload another GIF.</p>
				<Search />
				<Gif 
					loading={this.state.loading}
					url={this.state.gif.url}
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		);
	}
});