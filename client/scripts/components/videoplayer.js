var React = require('react');
var ReactDOM = require('react-dom');

var VideoPlayer = React.createClass({
	render: function() {
		return (
				<div class="video-container">
					<video width="fullscreen" height="fullscreen">
						<source src="/bkgrd_video.mp4" type="video/mp4"/>
					</video>
				</div>
			);
	}
});

module.exports = VideoPlayer;