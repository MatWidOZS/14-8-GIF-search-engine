var GIPHY_LOADING_URL = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

var styles = {
	minHeight: '310px',
	margin: '0.5em'
};

Gif = React.createClass({
	getURL: function() {
		return this.props.sourceURL || GIPHY_LOADING_URL;
	},

	render: function() {
		var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

		return (
			<div style={styles}>
				<a href={this.getURL()} title='view this on giphy' target='new'>
					<img id='gif' src={url} style={{ width: '100%', maxWidth: '350px'}}/>
				</a>
			</div>
		);
	}
});