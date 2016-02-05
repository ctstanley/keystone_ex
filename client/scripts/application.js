var React = require('react');
var ReactDOM = require('react-dom');
var SinglePage = require('./components/singlepage');

var App = React.createClass({
	render: function() {
		return (
			<div><SinglePage></SinglePage></div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
